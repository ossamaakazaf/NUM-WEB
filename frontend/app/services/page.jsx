import { Container, Kicker, Glass, PrimaryBtnLink, BtnLink } from "../../components/Ui";
import { SERVICES } from "../../lib/services";

export default function ServicesPage() {
  return (
    <main>
      <Container>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <Kicker>Services IA</Kicker>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 1000,
              margin: "0 0 12px",
              lineHeight: 1.12,
              color: "#f8fafc",
            }}
          >
            Explorez les pôles <span className="nw-accent">NUMÉWEB</span>
          </h1>
          <p
            style={{
              maxWidth: 940,
              margin: "0 auto",
              opacity: 0.9,
              lineHeight: 1.7,
            }}
          >
            Chaque service NUMÉWEB s’appuie sur des collaborateurs IA spécialisés,
            organisés pour vous faire gagner du temps, améliorer votre pilotage
            et fluidifier votre activité.
          </p>
        </div>

        <div className="nw-services-grid">
          {SERVICES.map((service) => (
            <Glass
              key={service.slug}
              style={{
                padding: 20,
                borderRadius: 24,
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.72), rgba(2,6,23,0.62))",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at top left, ${service.accent.soft}, transparent 38%)`,
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "inline-flex",
                    padding: "7px 12px",
                    borderRadius: 999,
                    border: "1px solid rgba(148,163,184,0.18)",
                    background: "rgba(255,255,255,0.04)",
                    fontSize: 12,
                    fontWeight: 1000,
                    marginBottom: 12,
                  }}
                >
                  {service.name}
                </div>

                <h2
                  style={{
                    margin: "0 0 8px",
                    fontSize: "clamp(24px, 4vw, 28px)",
                    fontWeight: 1000,
                  }}
                >
                  {service.name}
                </h2>

                <p style={{ margin: "0 0 14px", opacity: 0.9, lineHeight: 1.65 }}>
                  {service.short}
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                  {service.people.map((person) => (
                    <span
                      key={person.prenom}
                      style={{
                        padding: "7px 10px",
                        borderRadius: 999,
                        border: "1px solid rgba(148,163,184,0.16)",
                        background: "rgba(2,6,23,0.28)",
                        fontSize: 12,
                      }}
                    >
                      {person.prenom}
                    </span>
                  ))}
                </div>

                <div className="nw-btn-row">
                  <PrimaryBtnLink href={`/services/${service.slug}`}>
                    Découvrir le service →
                  </PrimaryBtnLink>
                  <BtnLink href="/abonnements">Voir les abonnements →</BtnLink>
                </div>
              </div>
            </Glass>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 50, opacity: 0.7, fontSize: 13 }}>
          NUMÉWEB structure vos services avec des collaborateurs IA visibles, spécialisés et utiles.
        </div>
      </Container>
    </main>
  );
}