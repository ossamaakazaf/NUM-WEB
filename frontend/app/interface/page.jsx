"use client";

import { useMemo, useState } from "react";
import { Container, Kicker, Glass, PrimaryBtnLink, BtnLink } from "../../components/Ui";
import { genererSiteDepuisPrompt } from "../../lib/siteBuilder";

export default function InterfacePage() {
  const [promptSite, setPromptSite] = useState("");
  const [configurationSite, setConfigurationSite] = useState(null);

  const exemplePromptSite =
    "Je suis une agence marketing, je veux un site vitrine moderne pour présenter mes services et générer des prospects.";

  const resumeSite = useMemo(() => {
    if (!configurationSite) return null;

    return {
      titre: configurationSite.meta.titreSite,
      secteur: configurationSite.meta.secteur,
      objectif: configurationSite.meta.objectif,
      sections: configurationSite.pages[0]?.sections?.length || 0,
    };
  }, [configurationSite]);

  function lancerGenerationSite() {
    const texte = promptSite.trim() || exemplePromptSite;
    const resultat = genererSiteDepuisPrompt(texte);
    setConfigurationSite(resultat);
  }

  const cartesKpi = [
    { label: "Chiffre d’affaires du mois", valeur: "48 320 €", evolution: "+12,4 %" },
    { label: "Prospects générés", valeur: "126", evolution: "+8,1 %" },
    { label: "Demandes clients ouvertes", valeur: "14", evolution: "-6,2 %" },
    { label: "Taux de satisfaction", valeur: "94 %", evolution: "+2,3 %" },
    { label: "Automatisations actives", valeur: "27", evolution: "+4" },
    { label: "Publications du mois", valeur: "18", evolution: "+5" },
  ];

  const services = [
    {
      nom: "Marketing",
      responsable: "Alex",
      statut: "Actif",
      kpi: "126 prospects générés",
      action: "Optimisation des campagnes et suivi de la performance",
    },
    {
      nom: "Commercial & Ventes",
      responsable: "Marc",
      statut: "Actif",
      kpi: "18 relances prioritaires",
      action: "Suivi des offres et accélération des conversions",
    },
    {
      nom: "Informatique & Automatisations",
      responsable: "Julia",
      statut: "Actif",
      kpi: "27 automatisations actives",
      action: "Réduction des tâches répétitives et fluidification des outils",
    },
    {
      nom: "Support & Relations Clients",
      responsable: "Emma",
      statut: "Actif",
      kpi: "94 % de satisfaction",
      action: "Suivi des demandes et amélioration de la qualité de service",
    },
    {
      nom: "Finances & Administration",
      responsable: "Lucas",
      statut: "Surveillance",
      kpi: "7 factures en attente",
      action: "Suivi des abonnements, facturation et visibilité financière",
    },
    {
      nom: "Qualité & Audit Interne",
      responsable: "Eden",
      statut: "Actif",
      kpi: "3 contrôles qualité en cours",
      action: "Audit des agents IA et vérification de la cohérence globale",
    },
  ];

  const outilsConnectes = [
    { nom: "Gmail", statut: "Connecté", detail: "Messages et relances synchronisés" },
    { nom: "Google Drive", statut: "Connecté", detail: "Documents et dossiers centralisés" },
    { nom: "Google Sheets", statut: "Connecté", detail: "Indicateurs et tableaux suivis" },
    { nom: "Notion", statut: "Connecté", detail: "Base documentaire et organisation" },
    { nom: "HubSpot", statut: "Connecté", detail: "Pipeline commercial synchronisé" },
    { nom: "Stripe", statut: "Connecté", detail: "Paiements et abonnements remontés" },
    { nom: "LinkedIn", statut: "Connecté", detail: "Suivi des publications et engagement" },
    { nom: "Instagram", statut: "Connecté", detail: "Publications et visibilité sociale" },
  ];

  const alertes = [
    "Le taux de conversion commercial a légèrement baissé cette semaine.",
    "7 factures nécessitent un suivi ou une relance.",
    "Le volume de demandes clients augmente sur les 3 derniers jours.",
    "Une baisse d’engagement est détectée sur les publications LinkedIn.",
  ];

  const recommandations = [
    "Relancer les prospects inactifs depuis plus de 7 jours.",
    "Prioriser les demandes clients avec délai de réponse élevé.",
    "Réallouer une partie du budget vers les campagnes les plus rentables.",
    "Vérifier les agents IA récemment mis à jour dans le pôle Qualité.",
  ];

  const indicateursMarketing = [
    { label: "Trafic", valeur: "14 280" },
    { label: "Leads", valeur: "126" },
    { label: "Conversion", valeur: "3,8 %" },
    { label: "Engagement social", valeur: "6,4 %" },
  ];

  const indicateursCommercial = [
    { label: "Prospects actifs", valeur: "42" },
    { label: "Offres envoyées", valeur: "19" },
    { label: "Relances en attente", valeur: "18" },
    { label: "Taux de signature", valeur: "31 %" },
  ];

  const indicateursSupport = [
    { label: "Demandes ouvertes", valeur: "14" },
    { label: "Temps de réponse", valeur: "2 h 18" },
    { label: "Satisfaction", valeur: "94 %" },
    { label: "Demandes résolues", valeur: "87" },
  ];

  const indicateursFinance = [
    { label: "CA mensuel", valeur: "48 320 €" },
    { label: "Abonnements actifs", valeur: "214" },
    { label: "Paiements reçus", valeur: "92 %" },
    { label: "Factures en attente", valeur: "7" },
  ];

  return (
    <main>
      <Container>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <Kicker>Interface NUMÉWEB</Kicker>
          <h1
            style={{
              fontSize: "clamp(34px, 6vw, 52px)",
              fontWeight: 1000,
              margin: "0 0 12px",
              lineHeight: 1.08,
              color: "#f8fafc",
            }}
          >
            Pilotez toute votre activité depuis <span className="nw-accent">NUMÉWEB</span>
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
            Connectez vos outils, centralisez vos données, suivez vos indicateurs clés et laissez
            vos collaborateurs IA assister le pilotage de votre entreprise au quotidien.
          </p>

          <div className="nw-btn-row" style={{ justifyContent: "center", marginTop: 16 }}>
            <PrimaryBtnLink href="/abonnements">Demander un accès →</PrimaryBtnLink>
            <BtnLink href="/services/marketing">Voir un service IA →</BtnLink>
          </div>
        </div>

        {/* Bandeau supérieur */}
        <Glass
          style={{
            padding: 22,
            borderRadius: 28,
            position: "relative",
            overflow: "hidden",
            marginBottom: 20,
            background:
              "radial-gradient(120% 120% at 50% 18%, rgba(56,189,248,0.16), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(15,23,42,0.78), rgba(2,6,23,0.72))",
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

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 1000,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    opacity: 0.75,
                    marginBottom: 8,
                  }}
                >
                  Vue d’ensemble
                </div>
                <h2 style={{ margin: 0, fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 1000 }}>
                  Tableau de pilotage intelligent
                </h2>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.18)",
                  background: "rgba(255,255,255,0.05)",
                  fontSize: 13,
                  fontWeight: 900,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: "#22c55e",
                    boxShadow: "0 0 18px rgba(34,197,94,0.6)",
                  }}
                />
                Compte connecté et synchronisé
              </div>
            </div>

            <div className="nw-interface-kpi-grid">
              {cartesKpi.map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderRadius: 22,
                    border: "1px solid rgba(148,163,184,0.16)",
                    background: "rgba(255,255,255,0.05)",
                    padding: 16,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ fontSize: 13, opacity: 0.8, lineHeight: 1.5 }}>{item.label}</div>
                  <div
                    style={{
                      fontSize: "clamp(24px, 4vw, 32px)",
                      fontWeight: 1000,
                      marginTop: 8,
                      color: "#f8fafc",
                    }}
                  >
                    {item.valeur}
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      display: "inline-flex",
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(56,189,248,0.10)",
                      border: "1px solid rgba(56,189,248,0.18)",
                      color: "#38bdf8",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    {item.evolution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Glass>

        {/* Création et génération de site web */}
        <Glass
          style={{
            padding: 22,
            borderRadius: 26,
            marginBottom: 20,
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(120% 120% at 50% 18%, rgba(56,189,248,0.16), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(15,23,42,0.78), rgba(2,6,23,0.72))",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.5,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
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
              Création web
            </div>

            <h2 style={{ margin: "0 0 10px", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 1000 }}>
              Création et génération de <span className="nw-accent">site web</span>
            </h2>

            <p style={{ margin: "0 0 16px", lineHeight: 1.75, opacity: 0.92 }}>
              Décrivez votre activité, votre objectif et votre style. NUMÉWEB prépare une structure
              de site professionnelle, prête à être enrichie, personnalisée et pilotée.
            </p>

            <div className="nw-generateur-integre-grid">
              <div>
                <textarea
                  value={promptSite}
                  onChange={(e) => setPromptSite(e.target.value)}
                  placeholder={exemplePromptSite}
                  className="nw-generateur-zone"
                />

                <div className="nw-btn-row" style={{ marginTop: 14 }}>
                  <button
                    type="button"
                    onClick={lancerGenerationSite}
                    style={{
                      padding: "12px 18px",
                      borderRadius: 12,
                      background: "linear-gradient(90deg, #0ea5e9, #22d3ee)",
                      color: "#ffffff",
                      fontWeight: 1000,
                      cursor: "pointer",
                      border: "none",
                      boxShadow: "0 0 24px rgba(14,165,233,0.24)",
                    }}
                  >
                    Générer un site
                  </button>

                  <button
                    type="button"
                    onClick={() => setPromptSite(exemplePromptSite)}
                    style={{
                      padding: "12px 18px",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.05)",
                      color: "#f8fafc",
                      fontWeight: 1000,
                      cursor: "pointer",
                      border: "1px solid rgba(148,163,184,0.18)",
                    }}
                  >
                    Exemple
                  </button>

                  <BtnLink href="/interface/site-web">Module complet →</BtnLink>
                </div>
              </div>

              <div
                style={{
                  borderRadius: 22,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background: "rgba(255,255,255,0.05)",
                  padding: 18,
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
                  Aperçu de génération
                </div>

                {resumeSite ? (
                  <div style={{ lineHeight: 1.8, opacity: 0.94 }}>
                    <div>
                      <strong>Titre du site :</strong> {resumeSite.titre}
                    </div>
                    <div>
                      <strong>Secteur détecté :</strong> {resumeSite.secteur}
                    </div>
                    <div>
                      <strong>Objectif :</strong> {resumeSite.objectif}
                    </div>
                    <div>
                      <strong>Nombre de sections :</strong> {resumeSite.sections}
                    </div>

                    <div
                      style={{
                        marginTop: 14,
                        padding: 12,
                        borderRadius: 16,
                        background: "rgba(56,189,248,0.08)",
                        border: "1px solid rgba(56,189,248,0.14)",
                        color: "#38bdf8",
                        fontWeight: 900,
                      }}
                    >
                      Structure prête à être transformée en site pilotable dans NUMÉWEB.
                    </div>
                  </div>
                ) : (
                  <div style={{ lineHeight: 1.75, opacity: 0.88 }}>
                    Écrivez un prompt pour voir ici le résumé du site généré :
                    type de site, objectif, secteur détecté et structure prévue.
                  </div>
                )}
              </div>
            </div>
          </div>
        </Glass>

        {/* Zone centrale */}
        <div className="nw-interface-main-grid">
          <Glass style={{ padding: 20, borderRadius: 26 }}>
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
              Services IA actifs
            </div>

            <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 1000 }}>
              Vos pôles pilotés dans NUMÉWEB
            </h3>

            <div style={{ display: "grid", gap: 12 }}>
              {services.map((service) => (
                <div
                  key={service.nom}
                  style={{
                    borderRadius: 22,
                    border: "1px solid rgba(148,163,184,0.16)",
                    background: "rgba(255,255,255,0.04)",
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 1000, fontSize: 18 }}>{service.nom}</div>
                      <div style={{ opacity: 0.82, marginTop: 4, fontSize: 14 }}>
                        Responsable : <span className="nw-accent">{service.responsable}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "7px 11px",
                        borderRadius: 999,
                        background:
                          service.statut === "Actif"
                            ? "rgba(34,197,94,0.12)"
                            : "rgba(245,158,11,0.12)",
                        border:
                          service.statut === "Actif"
                            ? "1px solid rgba(34,197,94,0.18)"
                            : "1px solid rgba(245,158,11,0.18)",
                        color: service.statut === "Actif" ? "#22c55e" : "#f59e0b",
                        fontSize: 12,
                        fontWeight: 1000,
                      }}
                    >
                      {service.statut}
                    </div>
                  </div>

                  <div style={{ marginTop: 12, fontSize: 14, opacity: 0.9 }}>
                    <strong style={{ color: "#38bdf8" }}>Indicateur principal :</strong> {service.kpi}
                  </div>

                  <div style={{ marginTop: 8, fontSize: 14, opacity: 0.88, lineHeight: 1.65 }}>
                    {service.action}
                  </div>
                </div>
              ))}
            </div>
          </Glass>

          <div style={{ display: "grid", gap: 18 }}>
            <Glass style={{ padding: 20, borderRadius: 26 }}>
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
                Alertes prioritaires
              </div>

              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 1000 }}>
                Ce qui nécessite votre attention
              </h3>

              <div style={{ display: "grid", gap: 10 }}>
                {alertes.map((alerte) => (
                  <div
                    key={alerte}
                    style={{
                      padding: 14,
                      borderRadius: 18,
                      border: "1px solid rgba(239,68,68,0.14)",
                      background: "rgba(239,68,68,0.06)",
                      lineHeight: 1.6,
                    }}
                  >
                    {alerte}
                  </div>
                ))}
              </div>
            </Glass>

            <Glass style={{ padding: 20, borderRadius: 26 }}>
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
                Recommandations IA
              </div>

              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 1000 }}>
                Actions suggérées par NUMÉWEB
              </h3>

              <div style={{ display: "grid", gap: 10 }}>
                {recommandations.map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: 14,
                      borderRadius: 18,
                      border: "1px solid rgba(56,189,248,0.14)",
                      background: "rgba(56,189,248,0.06)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Glass>
          </div>
        </div>

        <Glass style={{ padding: 20, borderRadius: 26, marginTop: 20 }}>
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
            Outils connectés
          </div>

          <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 1000 }}>
            NUMÉWEB centralise votre écosystème
          </h3>

          <div className="nw-interface-tools-grid">
            {outilsConnectes.map((outil) => (
              <div
                key={outil.nom}
                style={{
                  borderRadius: 20,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background: "rgba(255,255,255,0.04)",
                  padding: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontWeight: 1000 }}>{outil.nom}</div>
                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(34,197,94,0.12)",
                      border: "1px solid rgba(34,197,94,0.18)",
                      color: "#22c55e",
                      fontSize: 12,
                      fontWeight: 1000,
                    }}
                  >
                    {outil.statut}
                  </div>
                </div>

                <div style={{ marginTop: 10, fontSize: 14, opacity: 0.86, lineHeight: 1.6 }}>
                  {outil.detail}
                </div>
              </div>
            ))}
          </div>
        </Glass>

        <Glass style={{ padding: 20, borderRadius: 26, marginTop: 20 }}>
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
            Exemples de tableaux de bord KPI
          </div>

          <h3 style={{ margin: "0 0 16px", fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 1000 }}>
            Des vues adaptées à chaque service
          </h3>

          <div className="nw-interface-dashboard-grid">
            <div
              style={{
                borderRadius: 22,
                border: "1px solid rgba(148,163,184,0.16)",
                background: "rgba(255,255,255,0.04)",
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 1000, fontSize: 18, marginBottom: 12 }}>
                <span className="nw-accent">Tableau de bord Marketing</span>
              </div>
              <div className="nw-interface-mini-grid">
                {indicateursMarketing.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      borderRadius: 16,
                      border: "1px solid rgba(148,163,184,0.14)",
                      background: "rgba(2,6,23,0.28)",
                      padding: 12,
                    }}
                  >
                    <div style={{ fontSize: 12, opacity: 0.75 }}>{item.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 1000, marginTop: 6 }}>{item.valeur}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 22,
                border: "1px solid rgba(148,163,184,0.16)",
                background: "rgba(255,255,255,0.04)",
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 1000, fontSize: 18, marginBottom: 12 }}>
                <span className="nw-accent">Tableau de bord Commercial</span>
              </div>
              <div className="nw-interface-mini-grid">
                {indicateursCommercial.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      borderRadius: 16,
                      border: "1px solid rgba(148,163,184,0.14)",
                      background: "rgba(2,6,23,0.28)",
                      padding: 12,
                    }}
                  >
                    <div style={{ fontSize: 12, opacity: 0.75 }}>{item.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 1000, marginTop: 6 }}>{item.valeur}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 22,
                border: "1px solid rgba(148,163,184,0.16)",
                background: "rgba(255,255,255,0.04)",
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 1000, fontSize: 18, marginBottom: 12 }}>
                <span className="nw-accent">Tableau de bord Support client</span>
              </div>
              <div className="nw-interface-mini-grid">
                {indicateursSupport.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      borderRadius: 16,
                      border: "1px solid rgba(148,163,184,0.14)",
                      background: "rgba(2,6,23,0.28)",
                      padding: 12,
                    }}
                  >
                    <div style={{ fontSize: 12, opacity: 0.75 }}>{item.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 1000, marginTop: 6 }}>{item.valeur}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 22,
                border: "1px solid rgba(148,163,184,0.16)",
                background: "rgba(255,255,255,0.04)",
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 1000, fontSize: 18, marginBottom: 12 }}>
                <span className="nw-accent">Tableau de bord Finance</span>
              </div>
              <div className="nw-interface-mini-grid">
                {indicateursFinance.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      borderRadius: 16,
                      border: "1px solid rgba(148,163,184,0.14)",
                      background: "rgba(2,6,23,0.28)",
                      padding: 12,
                    }}
                  >
                    <div style={{ fontSize: 12, opacity: 0.75 }}>{item.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 1000, marginTop: 6 }}>{item.valeur}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Glass>
      </Container>
    </main>
  );
}