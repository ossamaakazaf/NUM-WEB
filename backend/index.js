// backend/index.js

// --- ENV (.env à la racine) ---
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

// --- Imports ---
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { celebrate, Joi, errors: celebrateErrors } = require('celebrate');
const dnsCb = require('dns');            // pour pg.defaults.lookup (fallback IPv4)
const dns = require('dns').promises;     // pour résoudre l’IPv4 au démarrage
const { Pool } = require('pg');
const compression = require('compression');

// --- App ---
const app = express();

app.set('trust proxy', 1); // Render est derrière un proxy

// ===== Sécurité & middlewares
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(compression());

const allowed = ['http://localhost:3000', 'https://numeweb.com']; // ajoute ton domaine prod ici (ex. 'https://numeweb.com')
app.use(
  cors({
    origin: (origin, cb) => cb(null, !origin || allowed.includes(origin)),
    credentials: true,
  })
);

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
  res.json({
    ok: true,
    time: new Date().toISOString(),
    version: process.env.APP_VERSION || 'dev',
    sha: process.env.GIT_SHA || null
  });
});

app.get('/', (_req, res) => {
  res.send('Backend NUMÉWEB opérationnel');
});

// ===== DB (déclarée ici, initialisée après IPv4 resolve)
let pool;

// ===== (Move 5) Insert réel en DB + déduplication
app.post(
  '/api/v1/subscribe',
  celebrate({
    body: Joi.object({
      email: Joi.string().email().required(),
    }),
  }),
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const insert = await pool.query(
        'insert into subscribers(email) values($1) returning id, email, created_at',
        [email]
      );
      res.status(201).json({ ok: true, subscriber: insert.rows[0] });
    } catch (err) {
      // 23505 = unique violation (email déjà présent)
      if (err.code === '23505') {
        return res.status(200).json({ ok: true, message: 'Email déjà inscrit' });
      }
      next(err);
    }
  }
);

// ===== Listing paginé
app.get(
  '/api/v1/subscribers',
  celebrate({
    query: Joi.object({
      limit: Joi.number().integer().min(1).max(100).default(20),
      offset: Joi.number().integer().min(0).default(0),
    }),
  }),
  async (req, res, next) => {
    try {
      const { limit, offset } = req.query;
      const r = await pool.query(
        'select id, email, created_at from subscribers order by created_at desc limit $1 offset $2',
        [limit, offset]
      );
      res.json({ ok: true, items: r.rows, limit, offset });
    } catch (err) {
      next(err);
    }
  }
);

// ===== Compte total
app.get('/api/v1/subscribers/count', async (_req, res, next) => {
  try {
    const r = await pool.query('select count(*)::int as count from subscribers');
  res.json({ ok: true, count: r.rows[0].count });
  } catch (err) { next(err); }
});

// ===== Ping DB
app.get('/api/v1/db-ping', async (_req, res) => {
  try {
    const r = await pool.query('SELECT NOW() as now');
    res.json({ ok: true, now: r.rows[0].now });
  } catch (err) {
    console.error('[db-ping]', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ===== Celebrate errors AVANT 404
app.use(celebrateErrors());

// ===== 404 final
app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

// ===== Error handler global
app.use((err, _req, res, _next) => {
  console.error('[error]', err);
  res.status(err.status || 500).json({ ok: false, error: err.message || 'Internal Server Error' });
});

// ===== Connexion PostgreSQL (Supabase) — FORCER IPv4
async function makePoolWithIPv4(dbUrl) {
  const url = new URL(dbUrl);
  const { address: ipv4 } = await dns.lookup(url.hostname, { family: 4 });

  const user = decodeURIComponent(url.username);
  const password = decodeURIComponent(url.password);
  const database = url.pathname.replace(/^\//, '') || 'postgres';
  const port = Number(url.port || 5432);

  // Forcer pg à utiliser IPv4 si jamais il refait un lookup
  const originalLookup = dnsCb.lookup;
  require('pg').defaults.lookup = (hostname, options, callback) => {
    return originalLookup(hostname, { family: 4, all: false }, callback);
  };

  return new Pool({
    host: ipv4, // IPv4 résolue
    port,
    user,
    password,
    database,
    ssl: dbUrl.includes('sslmode=require') ? { rejectUnauthorized: false } : undefined,
    statement_timeout: 10_000,
    query_timeout: 10_000,
    idle_in_transaction_session_timeout: 5_000
  });
}

// ===== Démarrage après init DB (évite ENETUNREACH IPv6)
let server;
(async () => {
  try {
    if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL manquante');
    pool = await makePoolWithIPv4(process.env.DATABASE_URL);

    const PORT = process.env.PORT || 5555;
    server = app.listen(PORT, () => {
      console.log(`Serveur NUMÉWEB lancé sur http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error('Startup error (DB IPv4):', e);
    process.exit(1);
  }
})();

// ===== Arrêt propre
const shutdown = (signal) => {
  console.log(`\n${signal} reçu — arrêt en cours…`);
  if (server) {
    server.close(() => {
      Promise.resolve()
        .then(() => (pool ? pool.end() : undefined))
        .then(() => {
          console.log('Serveur arrêté, pool Postgres fermé.');
          process.exit(0);
        });
    });
  } else {
    process.exit(0);
  }
};
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

