// backend/index.js

// --- Charger le .env (à la racine du projet) ---
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const express = require('express');
const { Pool } = require('pg');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { celebrate, Joi, errors: celebrateErrors } = require('celebrate');

const app = express();

// ===== Sécurité & middlewares
app.use(helmet());
app.use(morgan('dev'));

// CORS (ajoute ton domaine prod dans allowed si besoin)
const allowed = ['http://localhost:3000'];
app.use(
  cors({
    origin: (origin, cb) => cb(null, !origin || allowed.includes(origin)),
    credentials: true,
  })
);

// Parsing + protections
app.use(express.json({ limit: '1mb' }));
app.use(
  rateLimit({
    windowMs: 60_000,
    max: 120,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// ===== Routes simples
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/', (_req, res) => {
  res.send('Backend NUMÉWEB opérationnel');
});

// ===== Route POST avec validation (Move 2)
app.post(
  '/api/v1/subscribe',
  celebrate({
    body: Joi.object({
      email: Joi.string().email().required(),
    }),
  }),
  (req, res) => {
    res.status(201).json({ ok: true, email: req.body.email });
  }
);

// ===== Connexion PostgreSQL (Supabase) + route de test
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // SSL requis par Supabase (ne pas retirer)
  ssl: process.env.DATABASE_URL?.includes('sslmode=require')
    ? { rejectUnauthorized: false }
    : undefined,
});

app.get('/api/v1/db-ping', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as now');
    res.json({ ok: true, now: result.rows[0].now });
  } catch (err) {
    console.error('[db-ping]', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ===== Gestion des erreurs (Celebrate AVANT le 404)
app.use(celebrateErrors());

// ===== 404 final
app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

// ===== Démarrage
const PORT = process.env.PORT || 5555;
const server = app.listen(PORT, () => {
  console.log(`Serveur NUMÉWEB lancé sur http://localhost:${PORT}`);
});

// (Optionnel) arrêt propre
const shutdown = (signal) => {
  console.log(`\n${signal} reçu — arrêt en cours…`);
  server.close(() => {
    pool.end().then(() => {
      console.log('Serveur arrêté, pool Postgres fermé.');
      process.exit(0);
    });
  });
};
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));



