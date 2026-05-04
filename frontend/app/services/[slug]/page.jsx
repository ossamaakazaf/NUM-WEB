"use client";

import React, { useMemo, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Container, Kicker, Glass, PrimaryBtnLink, BtnLink } from "../../../components/Ui";
import { SERVICES } from "../../../lib/services";

export default function ServiceDetailPage({ params }) {
  const { slug } = React.use(params);
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [slug]);

  const activePerson = service.people[activeIndex];
  const pronoun = activePerson.gender === "f" ? "elle" : "il";

  const landingLikeBg = useMemo(() => {
    return {
      background: `
        radial-gradient(120% 120% at 50% 25%, rgba(56,189,248,0.16), rgba(0,0,0,0) 55%),
        linear-gradient(180deg, rgba(15,23,42,0.78), rgba(2,6,23,0.72))
      `,
    };
  }, []);

  return (
    <main>
      <Container>
        {/* Sélecteur de tous les services */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <Kicker>Navigation des services</Kicker>

          <div
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: 10,
              overflowX: "auto",
              padding: "6px 2px 8px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {SERVICES.map((item) => {
              const isActive = item.slug === service.slug;

              return (
                <a
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "11px 15px",
                    borderRadius: 14,
                    border: isActive
                      ? "1px solid rgba(56,189,248,0.58)"
                      : "1px solid rgba(148,163,184,0.18)",
                    background: isActive
                      ? "linear-gradient(90deg, rgba(14,165,233,0.18), rgba(34,211,238,0.14))"
                      : "rgba(15,23,42,0.55)",
                    color: "#f8fafc",
                    fontWeight: 1000,
                    fontSize: 13,
                    boxShadow: isActive
                      ? "0 0 24px rgba(14,165,233,0.16)"
                      : "none",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <Kicker>Service IA</Kicker>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 44px)",
              fontWeight: 1000,
              margin: "0 0 10px",
              lineHeight: 1.1,
              color: "#f8fafc",
            }}
          >
            Découvrez le pôle <span className="nw-accent">{service.name}</span>
          </h1>
          <p
            style={{
              maxWidth: 900,
              margin: "0 auto",
              opacity: 0.92,
              lineHeight: 1.7,
            }}
          >
            Sélectionnez un collaborateur IA pour voir sa présentation, son utilité,
            les gains qu’il apporte aux clients et un exemple concret d’usage.
          </p>
        </div>

        {/* Sélecteur collaborateurs du service */}
        <div
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: 10,
            overflowX: "auto",
            padding: "4px 2px 14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {service.people.map((person, index) => (
            <button
              key={person.prenom}
              type="button"
              onClick={() => setActiveIndex(index)}
              style={{
                padding: "11px 14px",
                borderRadius: 14,
                border:
                  index === activeIndex
                    ? "1px solid rgba(56,189,248,0.58)"
                    : "1px solid rgba(148,163,184,0.18)",
                background:
                  index === activeIndex
                    ? "rgba(56,189,248,0.12)"
                    : "rgba(15,23,42,0.55)",
                color: "#f8fafc",
                fontWeight: 1000,
                fontSize: 13,
                cursor: "pointer",
                boxShadow:
                  index === activeIndex
                    ? "0 0 22px rgba(56,189,248,0.12)"
                    : "none",
                whiteSpace: "nowrap",
              }}
            >
              {person.prenom} · {person.role}
            </button>
          ))}
        </div>

        <Glass
          style={{
            ...landingLikeBg,
            padding: 0,
            borderRadius: 30,
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(148,163,184,0.18)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.55,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 50% 26%, rgba(34,211,238,0.16), transparent 35%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              bottom: 86,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent)",
              pointerEvents: "none",
            }}
          />

          <div className="nw-service-hero-grid" style={{ position: "relative", zIndex: 1 }}>
            <div className="nw-service-visual" style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 50% 62%, rgba(255,255,255,0.08), transparent 28%)",
                  pointerEvents: "none",
                }}
              />

              <div
                className="nw-service-image-wrap"
                style={{
                  height: "100%",
                  minHeight: 520,
                  alignItems: "flex-end",
                }}
              >
                <img
                  src={activePerson.file}
                  alt={activePerson.prenom}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "92%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 22px 40px rgba(0,0,0,0.42))",
                  }}
                />
              </div>
            </div>

            <div className="nw-service-content">
              <div
                style={{
                  display: "inline-flex",
                  width: "fit-content",
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(148,163,184,0.18)",
                  fontSize: 12,
                  fontWeight: 1000,
                  marginBottom: 14,
                  backdropFilter: "blur(8px)",
                }}
              >
                {service.name}
              </div>

              <h2
                style={{
                  margin: "0 0 10px",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 1000,
                  lineHeight: 1.05,
                  color: "#f8fafc",
                }}
              >
                Découvrez <span className="nw-accent">{activePerson.prenom}</span>
              </h2>

              <div
                style={{
                  fontSize: "clamp(18px, 3vw, 24px)",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.92)",
                  marginBottom: 12,
                }}
              >
                {activePerson.role}
              </div>

              <p
                style={{
                  margin: "0 0 22px",
                  lineHeight: 1.75,
                  fontSize: "clamp(15px, 2.4vw, 17px)",
                  color: "rgba(255,255,255,0.90)",
                  maxWidth: 720,
                }}
              >
                {activePerson.pitch}
              </p>

              <div className="nw-btn-row" style={{ marginBottom: 24 }}>
                <PrimaryBtnLink href="/abonnements">Voir les abonnements →</PrimaryBtnLink>
                <BtnLink href="/automatisations">Voir les automatisations →</BtnLink>
              </div>

              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.12)",
                  margin: "0 0 24px",
                }}
              />

              <div className="nw-features-grid" style={{ marginBottom: 24 }}>
                {activePerson.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 18,
                      border: "1px solid rgba(148,163,184,0.16)",
                      background: "rgba(255,255,255,0.05)",
                      fontSize: 16,
                      color: "#f8fafc",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.12)",
                  margin: "0 0 24px",
                }}
              />

              <div
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  fontWeight: 900,
                }}
              >
                <span className="nw-accent">Ce qu’{pronoun} permet de gagner</span>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26 }}>
                {activePerson.gains.map((gain) => (
                  <div
                    key={gain}
                    style={{
                      padding: "10px 13px",
                      borderRadius: 999,
                      border: "1px solid rgba(148,163,184,0.16)",
                      background: "rgba(255,255,255,0.05)",
                      fontSize: 14,
                      color: "#f8fafc",
                    }}
                  >
                    {gain}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginBottom: 8,
                  fontSize: 17,
                  fontWeight: 900,
                }}
              >
                <span className="nw-accent">{activePerson.scenarioTitle}</span>
              </div>

              <div
                style={{
                  borderRadius: 22,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background: "rgba(255,255,255,0.05)",
                  padding: 18,
                  lineHeight: 1.7,
                  fontSize: 16,
                  color: "#f8fafc",
                  backdropFilter: "blur(8px)",
                }}
              >
                {activePerson.scenarioText}
              </div>
            </div>
          </div>
        </Glass>

        {/* Bloc unique en bas */}
        <Glass
          style={{
            padding: 22,
            borderRadius: 24,
            marginTop: 20,
            border: "1px solid rgba(148,163,184,0.16)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 1000,
              letterSpacing: 1,
              textTransform: "uppercase",
              opacity: 0.75,
              marginBottom: 10,
            }}
          >
            Détails du collaborateur
          </div>

          <h3
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(24px, 4vw, 30px)",
              fontWeight: 1000,
              color: "#f8fafc",
            }}
          >
            {activePerson.prenom}, un collaborateur IA visible, utile et pilotable
          </h3>

          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.12)",
              margin: "0 0 20px",
            }}
          />

          <div style={{ marginBottom: 22 }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 900,
                marginBottom: 8,
                color: "#38bdf8",
              }}
            >
              Présentation
            </div>
            <p style={{ margin: 0, lineHeight: 1.75, opacity: 0.92 }}>
              {activePerson.pitch}
            </p>
          </div>

          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.10)",
              margin: "0 0 20px",
            }}
          />

          <div style={{ marginBottom: 22 }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 900,
                marginBottom: 8,
                color: "#38bdf8",
              }}
            >
              Utilité concrète
            </div>
            <p style={{ margin: 0, lineHeight: 1.75, opacity: 0.92 }}>
              {activePerson.utility}
            </p>
          </div>

          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.10)",
              margin: "0 0 20px",
            }}
          />

          <div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 900,
                marginBottom: 10,
                color: "#38bdf8",
              }}
            >
              Indicateurs et leviers
            </div>

            <p
              style={{
                margin: "0 0 14px",
                lineHeight: 1.7,
                opacity: 0.9,
              }}
            >
              Ce que le service {service.name} aide à améliorer.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {service.kpis.map((kpi) => (
                <span
                  key={kpi}
                  style={{
                    padding: "9px 12px",
                    borderRadius: 999,
                    border: "1px solid rgba(148,163,184,0.18)",
                    background: "rgba(2,6,23,0.25)",
                    fontSize: 13,
                  }}
                >
                    {kpi}
                </span>
              ))}
            </div>
          </div>
        </Glass>
      </Container>
    </main>
  );
}