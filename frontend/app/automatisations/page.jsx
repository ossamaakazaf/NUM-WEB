"use client";

import { Container, Kicker, Glass, PrimaryBtnLink, BtnLink } from "../../components/Ui";

const OUTILS = {
  gmail: { name: "Gmail", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg", color: "#EA4335" },
  outlook: { name: "Outlook", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftoutlook.svg", color: "#0078D4" },
  microsoft365: { name: "Microsoft 365", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft365.svg", color: "#D83B01" },
  teams: { name: "Microsoft Teams", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftteams.svg", color: "#6264A7" },
  drive: { name: "Google Drive", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googledrive.svg", color: "#34A853" },
  sheets: { name: "Google Sheets", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlesheets.svg", color: "#0F9D58" },
  stripe: { name: "Stripe", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg", color: "#635BFF" },
  linkedin: { name: "LinkedIn", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg", color: "#0A66C2" },
  instagram: { name: "Instagram", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg", color: "#E4405F" },
  facebook: { name: "Facebook", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg", color: "#1877F2" },
  tiktok: { name: "TikTok", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg", color: "#ffffff" },
  whatsapp: { name: "WhatsApp", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg", color: "#25D366" },
  hubspot: { name: "HubSpot", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg", color: "#FF7A59" },
  notion: { name: "Notion", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/notion.svg", color: "#ffffff" },
  slack: { name: "Slack", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg", color: "#4A154B" },
  numeweb: { name: "IA NUMÉWEB", logo: "/logo-numeweb.png", color: "#38bdf8" },
};

const AUTOMATISATIONS = [
  {
    titre: "Relances intelligentes",
    desc: "NUMÉWEB détecte les devis sans réponse, les prospects chauds et les conversations en attente, puis prépare des relances adaptées pour accélérer votre développement.",
    outils: ["gmail", "outlook", "hubspot"],
    gain: "Moins d’oublis, plus de conversions.",
  },
  {
    titre: "Suivi des paiements et retards",
    desc: "Les paiements reçus, factures impayées et abonnements en retard sont suivis automatiquement avec alertes et actions proposées.",
    outils: ["stripe", "gmail", "outlook"],
    gain: "Une trésorerie mieux pilotée.",
  },
  {
    titre: "Communication avec les collaborateurs IA",
    desc: "Vous pouvez échanger avec vos collaborateurs IA NUMÉWEB depuis WhatsApp pour demander un suivi, lancer une relance ou consulter vos indicateurs.",
    outils: ["whatsapp", "numeweb"],
    gain: "Une interface naturelle, rapide et fluide.",
  },
  {
    titre: "Publications LinkedIn et réseaux sociaux",
    desc: "NUMÉWEB aide à préparer, planifier et suivre les contenus LinkedIn, Instagram, Facebook et TikTok selon votre stratégie.",
    outils: ["linkedin", "instagram", "facebook", "tiktok"],
    gain: "Une présence régulière sans charge mentale.",
  },
  {
    titre: "Synchronisation Microsoft 365",
    desc: "Connexion aux emails Outlook, fichiers Microsoft 365, réunions Teams et documents de travail pour centraliser et piloter votre activité.",
    outils: ["microsoft365", "outlook", "teams"],
    gain: "Vos outils Microsoft deviennent pilotables.",
  },
  {
    titre: "Classement automatique des documents",
    desc: "Contrats, devis, factures et documents sont organisés automatiquement dans les bons dossiers.",
    outils: ["drive", "notion", "microsoft365"],
    gain: "Un espace de travail propre et fiable.",
  },
  {
    titre: "Tableaux KPI automatiques",
    desc: "Les données importantes sont remontées dans des tableaux de bord lisibles : chiffre d’affaires, prospects, relances, satisfaction, publications.",
    outils: ["sheets", "stripe", "hubspot"],
    gain: "Des décisions plus rapides.",
  },
  {
    titre: "Alertes internes et coordination équipe",
    desc: "Les événements importants peuvent être envoyés dans Slack, Teams ou WhatsApp selon vos habitudes de travail.",
    outils: ["slack", "teams", "whatsapp"],
    gain: "Tout le monde agit au bon moment.",
  },
];

function LogoBadge({ id }) {
  const outil = OUTILS[id];

  return (
    <div
      title={outil.name}
      style={{
        width: 42,
        height: 42,
        borderRadius: 14,
        display: "grid",
        placeItems: "center",
        background: "rgba(255,255,255,0.06)",
        border: `1px solid ${outil.color}55`,
        boxShadow: `0 0 20px ${outil.color}22`,
      }}
    >
      <img
        src={outil.logo}
        alt={outil.name}
        style={{
          width: id === "numeweb" ? 30 : 24,
          height: id === "numeweb" ? 30 : 24,
          objectFit: "contain",
          filter: id === "numeweb" ? "none" : "brightness(0) invert(1)",
        }}
      />
    </div>
  );
}

export default function AutomatisationsPage() {
  return (
    <main>
      <Container>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <Kicker>Automatisations IA</Kicker>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 58px)",
              fontWeight: 1000,
              margin: "0 0 14px",
              lineHeight: 1.05,
            }}
          >
            Connectez vos outils. <br />
            <span className="nw-accent">NUMÉWEB orchestre le reste.</span>
          </h1>

          <p
            style={{
              maxWidth: 980,
              margin: "0 auto",
              opacity: 0.92,
              lineHeight: 1.75,
              fontSize: 16,
            }}
          >
            Emails, paiements, documents, réseaux sociaux, CRM, Microsoft 365, WhatsApp :
            NUMÉWEB relie vos outils à ses collaborateurs IA pour automatiser
            les tâches répétitives et piloter votre activité.
          </p>

          <div className="nw-btn-row" style={{ justifyContent: "center", marginTop: 18 }}>
            <PrimaryBtnLink href="/interface">Ouvrir l’interface →</PrimaryBtnLink>
            <BtnLink href="/services/informatique-automatisations">Voir le service IA →</BtnLink>
          </div>
        </div>

        <Glass
          style={{
            padding: 22,
            borderRadius: 28,
            marginBottom: 22,
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(120% 120% at 50% 15%, rgba(56,189,248,0.18), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(15,23,42,0.78), rgba(2,6,23,0.72))",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 18 }}>
            <div style={{ fontWeight: 1000, fontSize: 24 }}>
              Un cockpit d’automatisation pour toute l’entreprise
            </div>
            <p style={{ opacity: 0.88, lineHeight: 1.7, maxWidth: 820, margin: "10px auto 0" }}>
              Vos outils restent les mêmes. NUMÉWEB devient la couche intelligente qui analyse,
              déclenche, relance, classe et coordonne.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            {Object.keys(OUTILS).map((id) => (
              <LogoBadge key={id} id={id} />
            ))}
          </div>
        </Glass>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {AUTOMATISATIONS.map((item) => (
            <Glass key={item.titre} style={{ padding: 20, borderRadius: 24, minHeight: 250 }}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
                {item.outils.map((id) => (
                  <LogoBadge key={id} id={id} />
                ))}
              </div>

              <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 1000 }}>
                {item.titre}
              </h3>

              <p style={{ margin: 0, opacity: 0.88, lineHeight: 1.7, fontSize: 14 }}>
                {item.desc}
              </p>

              <div
                style={{
                  marginTop: 16,
                  padding: "10px 12px",
                  borderRadius: 16,
                  background: "rgba(56,189,248,0.08)",
                  border: "1px solid rgba(56,189,248,0.16)",
                  color: "#38bdf8",
                  fontWeight: 900,
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                {item.gain}
              </div>
            </Glass>
          ))}
        </div>

        <Glass style={{ padding: 22, borderRadius: 28, marginTop: 22 }}>
          <div style={{ textAlign: "center" }}>
            <Kicker>Communication IA</Kicker>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 1000, margin: "0 0 10px" }}>
              WhatsApp devient une porte d’entrée vers vos collaborateurs IA
            </h2>
            <p style={{ maxWidth: 880, margin: "0 auto", opacity: 0.9, lineHeight: 1.75 }}>
              Vous pouvez écrire à NUMÉWEB comme à une équipe : “relance les prospects en attente”,
              “montre-moi les paiements en retard”, “prépare un post LinkedIn”, ou “résume les demandes”.
            </p>
          </div>
        </Glass>
      </Container>
    </main>
  );
}