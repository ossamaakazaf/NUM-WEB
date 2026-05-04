"use client";

import { useRef, useState } from "react";
import { Container, Kicker, Glass, PrimaryBtnLink, BtnLink } from "../components/Ui";
import { SERVICES } from "../lib/services";

export default function HomePage() {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0]?.slug || "marketing");
  const active = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];
  const panelRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Merci ! Votre demande d'accès anticipé est bien prise en compte ✅");
  }

  function selectService(slug) {
    setActiveSlug(slug);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    });
  }

  const gains = [
    { icon: "⏱️", title: "Temps gagné", text: "Moins d’administratif, plus d’action." },
    { icon: "📊", title: "Pilotage clair", text: "Les indicateurs utiles, au bon endroit." },
    { icon: "⚡", title: "Automatisation", text: "Le répétitif disparaît, vos équipes respirent." },
    { icon: "🧠", title: "Décisions assistées", text: "L’IA propose, vous arbitrez, NUMÉWEB exécute." },
  ];

  const connecteurs = [
    { name: "Gmail", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg", id: "gmail" },
    { name: "Google Drive", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googledrive.svg", id: "drive" },
    { name: "Google Agenda", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecalendar.svg", id: "calendar" },
    { name: "Google Sheets", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlesheets.svg", id: "sheets" },
    { name: "Microsoft 365", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft365.svg", id: "microsoft365" },
    { name: "Outlook", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftoutlook.svg", id: "outlook" },
    { name: "Teams", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftteams.svg", id: "teams" },
    { name: "Stripe", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg", id: "stripe" },
    { name: "LinkedIn", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg", id: "linkedin" },
    { name: "WhatsApp", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg", id: "whatsapp" },
  ];

  return (
    <main>
      {/* =========================
          HERO
      ========================== */}
      <Container>
        <div style={{ position: "relative", textAlign: "center" }}>
          <div className="nw-hero-halo" aria-hidden="true">
            <div className="nw-halo-1" />
            <div className="nw-halo-2" />
          </div>

          <img
            src="/logo-numeweb.png"
            alt="NUMÉWEB"
            style={{
              width: 140,
              margin: "0 auto 18px",
              filter: "drop-shadow(0 0 25px rgba(0,150,255,0.5))",
              position: "relative",
              zIndex: 1,
            }}
          />

          <h1
            style={{
              fontSize: 52,
              fontWeight: 1000,
              margin: "0 0 12px",
              lineHeight: 1.12,
              color: "#f8fafc",
              position: "relative",
              zIndex: 1,
            }}
          >
            Une interface pour <span className="nw-accent nw-glow">piloter</span> et{" "}
            <span className="nw-accent nw-glow">automatiser</span>.
          </h1>

          <p
            style={{
              fontSize: 16,
              maxWidth: 940,
              margin: "0 auto 18px",
              opacity: 0.9,
              lineHeight: 1.75,
              color: "#f8fafc",
              position: "relative",
              zIndex: 1,
            }}
          >
            NUMÉWEB centralise vos données, suit vos indicateurs et active des automatisations concrètes,
            avec des collaborateurs IA <span className="nw-accent">spécialisés</span> par service.
          </p>

          <Glass style={{ maxWidth: 860, margin: "0 auto", padding: 18, position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 10 }}>
              Accès anticipé à la bêta NUMÉWEB
            </div>

            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10 }}>
              <input
                type="email"
                required
                placeholder="email@example.com"
                style={{
                  padding: "11px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(148,163,184,0.55)",
                  background: "rgba(2,6,23,0.35)",
                  color: "#fff",
                  fontSize: 14,
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "11px 16px",
                  borderRadius: 12,
                  background: "linear-gradient(90deg, #0ea5e9, #22d3ee)",
                  color: "#ffffff",
                  fontWeight: 1000,
                  cursor: "pointer",
                  border: "none",
                  boxShadow: "0 0 26px rgba(14,165,233,0.42)",
                }}
              >
                Accès bêta
              </button>
            </form>

            <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
              <PrimaryBtnLink href="/services">Services IA →</PrimaryBtnLink>
              <BtnLink href="/interface">Utiliser l’interface →</BtnLink>
              <BtnLink href="/automatisations">Automatisations →</BtnLink>
              <BtnLink href="/abonnements">Abonnements →</BtnLink>
            </div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75, lineHeight: 1.6 }}>
              Recevez les accès + des exemples d’automatisations + des modèles de tableaux d’indicateurs.
            </div>
          </Glass>
        </div>
      </Container>

      {/* =========================
          1) INTERFACE / GAINS
      ========================== */}
      <Container>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <Kicker>Interface</Kicker>
          <h2 style={{ fontSize: 34, fontWeight: 1000, margin: "0 0 10px" }}>
            Ce que vous gagnez avec <span className="nw-accent">NUMÉWEB</span>
          </h2>
          <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
            Une vue claire. Des automatismes. Des décisions plus rapides.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 16,
            alignItems: "stretch",
          }}
        >
          <Glass
            style={{
              padding: 0,
              minHeight: 290,
              position: "relative",
              overflow: "hidden",
              borderRadius: 22,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage: "radial-gradient(circle at 40% 35%, rgba(0,0,0,1), rgba(0,0,0,0) 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 14,
                top: 14,
                padding: "8px 10px",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.20)",
                background: "rgba(15,23,42,0.7)",
                fontSize: 12,
                fontWeight: 1000,
              }}
            >
              Tableau de pilotage
            </div>

            <div style={{ position: "absolute", left: 14, right: 14, bottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["📊 Indicateurs", "⚡ Automatisations", "🧠 Recommandations", "🗂️ Documents"].map((p) => (
                <div
                  key={p}
                  style={{
                    padding: "8px 10px",
                    borderRadius: 999,
                    border: "1px solid rgba(148,163,184,0.18)",
                    background: "rgba(15,23,42,0.6)",
                    fontSize: 12,
                    opacity: 0.95,
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
          </Glass>

          <Glass style={{ padding: 16, borderRadius: 22 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 12 }}>
              {gains.map((g) => (
                <div
                  key={g.title}
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(148,163,184,0.16)",
                    background: "rgba(2,6,23,0.35)",
                    padding: 14,
                  }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 999,
                        display: "grid",
                        placeItems: "center",
                        background: "radial-gradient(circle at 30% 30%, #38bdf8, #0f172a)",
                      }}
                    >
                      {g.icon}
                    </div>
                    <div style={{ fontWeight: 1000 }}>{g.title}</div>
                  </div>
                  <p style={{ margin: 0, opacity: 0.88, lineHeight: 1.55, fontSize: 13 }}>{g.text}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 14, fontSize: 13, opacity: 0.88, lineHeight: 1.6 }}>
              Exemple : un indicateur baisse, <span className="nw-accent">NUMÉWEB</span> propose une action, puis lance une automatisation (relance, tâche, suivi).
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <PrimaryBtnLink href="/interface">Voir le guide interface →</PrimaryBtnLink>
              <BtnLink href="/abonnements">Voir les abonnements →</BtnLink>
            </div>
          </Glass>
        </div>
      </Container>

      {/* =========================
          2) SERVICES (preview)
      ========================== */}
      <Container>
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <Kicker>Services IA</Kicker>
          <h2 style={{ fontSize: 34, fontWeight: 1000, margin: "0 0 10px" }}>Une équipe IA par service</h2>
          <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
            Cliquez sur un service, puis ouvrez le détail et les automatisations associées.
          </p>
        </div>

        <div
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: 10,
            overflowX: "auto",
            padding: "6px 2px 14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          role="tablist"
          aria-label="Services NUMÉWEB"
        >
          {SERVICES.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => selectService(s.slug)}
              style={{
                padding: "10px 12px",
                borderRadius: 14,
                border: s.slug === activeSlug ? "1px solid rgba(56,189,248,0.75)" : "1px solid rgba(148,163,184,0.18)",
                background: s.slug === activeSlug ? "rgba(56,189,248,0.12)" : "rgba(15,23,42,0.55)",
                fontWeight: 1000,
                fontSize: 13,
                color: "#f8fafc",
                cursor: "pointer",
                boxShadow: s.slug === activeSlug ? "0 0 22px rgba(56,189,248,0.12)" : "none",
                whiteSpace: "nowrap",
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div ref={panelRef} />

        <Glass style={{ padding: 18, borderRadius: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 18, alignItems: "center" }}>
            {/* Visuel composite des 3 personnes */}
<div
  style={{
    position: "relative",
    minHeight: 560,
    borderRadius: 28,
    overflow: "hidden",
    background:
      "radial-gradient(95% 78% at 50% 18%, rgba(56,189,248,0.24), rgba(0,0,0,0) 72%)",
  }}
  aria-label={`Équipe ${active?.name || ""}`}
>
  {/* fond techno léger */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(rgba(148,163,184,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.045) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
      opacity: 0.55,
      pointerEvents: "none",
    }}
  />

  {/* halo principal */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 50% 24%, rgba(34,211,238,0.20), transparent 42%)",
      pointerEvents: "none",
    }}
  />

  {/* halo bas */}
  <div
    style={{
      position: "absolute",
      left: "18%",
      right: "18%",
      bottom: 40,
      height: 80,
      borderRadius: 999,
      background: "rgba(56,189,248,0.10)",
      filter: "blur(26px)",
      pointerEvents: "none",
    }}
  />

  {/* ligne lumineuse */}
  <div
    style={{
      position: "absolute",
      left: "10%",
      right: "10%",
      bottom: 92,
      height: 1,
      background:
        "linear-gradient(90deg, transparent, rgba(56,189,248,0.42), transparent)",
      pointerEvents: "none",
    }}
  />

  {/* collaborateur gauche */}
  {active?.people?.[1] && (
    <>
      <div
        style={{
          position: "absolute",
          left: "2%",
          bottom: -6,
          width: "34%",
          height: 470,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <img
          src={active.people[1].file}
          alt={active.people[1].prenom}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            width: "auto",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 18px 34px rgba(0,0,0,0.34))",
            transform: "scale(1.16)",
            transformOrigin: "bottom center",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 20,
          bottom: 20,
          zIndex: 7,
          padding: "8px 12px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 1000,
          background: "rgba(2,6,23,0.62)",
          border: "1px solid rgba(148,163,184,0.18)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 24px rgba(56,189,248,0.12)",
        }}
      >
        {active.people[1].prenom}
      </div>
    </>
  )}

  {/* manager centre */}
  {active?.people?.[0] && (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: -10,
          width: "42%",
          height: 520,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 5,
        }}
      >
        <img
          src={active.people[0].file}
          alt={active.people[0].prenom}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            width: "auto",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 28px 48px rgba(0,0,0,0.44))",
            transform: "scale(1.2)",
            transformOrigin: "bottom center",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 20,
          zIndex: 7,
          padding: "8px 12px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 1000,
          background: "rgba(2,6,23,0.68)",
          border: "1px solid rgba(56,189,248,0.30)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 28px rgba(56,189,248,0.18)",
        }}
      >
        {active.people[0].prenom}
      </div>
    </>
  )}

  {/* collaborateur droite */}
  {active?.people?.[2] && (
    <>
      <div
        style={{
          position: "absolute",
          right: "2%",
          bottom: -6,
          width: "34%",
          height: 470,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <img
          src={active.people[2].file}
          alt={active.people[2].prenom}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            width: "auto",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 18px 34px rgba(0,0,0,0.34))",
            transform: "scale(1.16)",
            transformOrigin: "bottom center",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          zIndex: 7,
          padding: "8px 12px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 1000,
          background: "rgba(2,6,23,0.62)",
          border: "1px solid rgba(148,163,184,0.18)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 24px rgba(56,189,248,0.12)",
        }}
      >
        {active.people[2].prenom}
      </div>
    </>
  )}
</div>

            {/* Texte */}
            <div>
              <h3 style={{ margin: 0, fontWeight: 1000, fontSize: 24 }}>{active?.name}</h3>
              <p style={{ margin: "8px 0 0", opacity: 0.9, lineHeight: 1.65 }}>{active?.long || active?.short}</p>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                {(active?.kpis || []).slice(0, 6).map((k) => (
                  <span
                    key={k}
                    style={{
                      padding: "7px 10px",
                      borderRadius: 999,
                      border: "1px solid rgba(148,163,184,0.18)",
                      background: "rgba(2,6,23,0.30)",
                      fontSize: 12,
                      opacity: 0.92,
                    }}
                  >
                    {k}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <PrimaryBtnLink href={`/services/${active?.slug}`}>Voir le service →</PrimaryBtnLink>
                <BtnLink href={`/automatisations?service=${active?.slug}`}>Automatisations liées →</BtnLink>
                <BtnLink href="/services">Tous les services →</BtnLink>
              </div>

              <div style={{ marginTop: 12, opacity: 0.86, fontSize: 13, lineHeight: 1.65 }}>
                <strong style={{ color: "#38bdf8" }}>Collaborateurs :</strong>{" "}
                {active?.people?.map((p) => p.prenom).join(" · ")}
              </div>
            </div>
          </div>
        </Glass>
      </Container>

      {/* =========================
          3) CONNEXIONS
      ========================== */}
      <Container>
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <Kicker>Connexions</Kicker>
          <h2 style={{ fontSize: 34, fontWeight: 1000, margin: "0 0 10px" }}>
            Connectez vos outils à <span className="nw-accent">NUMÉWEB</span>
          </h2>
          <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
            Centralisez et déclenchez des actions automatiques (relances, suivi, rapports, classement…).
          </p>
        </div>

        <Glass style={{ padding: 18, borderRadius: 24 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            {connecteurs.map((c) => (
              <div
                key={c.id}
                style={{
                  borderRadius: 18,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background: "rgba(2,6,23,0.35)",
                  padding: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 10,
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid rgba(148,163,184,0.18)",
                      background: "rgba(15,23,42,0.55)",
                    }}
                    aria-hidden="true"
                  >
                    <img
                      src={c.logo}
                      alt={c.name}
                      style={{
                        width: 22,
                        height: 22,
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                  </div>
                  <strong style={{ fontWeight: 1000, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {c.name}
                  </strong>
                </div>

                <a href="/automatisations" style={{ fontWeight: 1000, color: "#38bdf8" }}>
                  Voir →
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, fontSize: 13, opacity: 0.88, lineHeight: 1.6 }}>
            Ensuite : scénarios multi-outils, alertes, relances, synchronisation, tableaux d’indicateurs.
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <PrimaryBtnLink href="/automatisations">Voir les automatisations →</PrimaryBtnLink>
            <BtnLink href="/services/informatique-automatisations">Service Informatique →</BtnLink>
          </div>
        </Glass>

        <div style={{ textAlign: "center", marginTop: 60, opacity: 0.65, fontSize: 13 }}>
          © {new Date().getFullYear()} NUMÉWEB — Tous droits réservés
        </div>
      </Container>
    </main>
  );
}