"use client";

import { useMemo, useRef, useState } from "react";
import { Container, Kicker, Glass, PrimaryBtnLink, BtnLink } from "../../../components/Ui";
import SiteRenderer from "../../../components/site-builder/SiteRenderer";

function dupliquerConfiguration(configuration) {
  return JSON.parse(JSON.stringify(configuration));
}

export default function PageCreationSite() {
  const [prompt, setPrompt] = useState("");
  const [configuration, setConfiguration] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState("");
  const fileInputRef = useRef(null);
  const [targetImageField, setTargetImageField] = useState(null);

  const exemplePrompt =
    "Je suis avocat d'affaires à Paris, je veux un site premium, très professionnel, avec une page d'accueil complète, des services détaillés, une page à propos rassurante, une page contact claire et une FAQ utile.";

  const pageActive = configuration?.pages?.[pageIndex] || null;

  const resume = useMemo(() => {
    if (!configuration) return null;

    return {
      titre: configuration.meta.titreSite,
      metier: configuration.meta.metier,
      objectif: configuration.meta.objectif,
      style: configuration.meta.style,
      secteurVisuel: configuration.meta.secteurVisuel,
      pages: configuration.pages?.length || 0,
    };
  }, [configuration]);

  async function lancerGeneration() {
    const texte = prompt.trim() || exemplePrompt;

    try {
      setChargement(true);
      setErreur("");
      setPageIndex(0);

      const res = await fetch("/api/generer-site", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: texte }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Erreur API :", data);
        setErreur(data?.details || data?.error || "Erreur lors de la génération du site.");
        return;
      }

      setConfiguration(data.configuration);
    } catch (err) {
      console.error("Erreur fetch :", err);
      setErreur("Erreur serveur.");
    } finally {
      setChargement(false);
    }
  }

  function mettreAJourSectionSimple(type, champ, valeur) {
    setConfiguration((prev) => {
      if (!prev) return prev;
      const next = dupliquerConfiguration(prev);
      const bloc = next.pages[pageIndex].sections.find((s) => s.type === type);
      if (bloc) bloc[champ] = valeur;
      return next;
    });
  }

  function mettreAJourListe(type, index, valeur) {
    setConfiguration((prev) => {
      if (!prev) return prev;
      const next = dupliquerConfiguration(prev);
      const bloc = next.pages[pageIndex].sections.find((s) => s.type === type);
      if (bloc?.items?.[index] !== undefined) {
        if (typeof bloc.items[index] === "string") {
          bloc.items[index] = valeur;
        } else if (bloc.items[index]?.label !== undefined) {
          bloc.items[index].label = valeur;
        }
      }
      return next;
    });
  }

  function ouvrirUploadImage(sectionType) {
    setTargetImageField(sectionType);
    fileInputRef.current?.click();
  }

  function gererUploadLocal(event) {
    const file = event.target.files?.[0];
    if (!file || !targetImageField) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setConfiguration((prev) => {
        if (!prev) return prev;
        const next = dupliquerConfiguration(prev);
        const bloc = next.pages[pageIndex].sections.find((s) => s.type === targetImageField);
        if (bloc) bloc.image = dataUrl;
        return next;
      });
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  }

  const hero = pageActive?.sections?.find((s) => s.type === "hero");
  const services = pageActive?.sections?.find((s) => s.type === "services");
  const texte = pageActive?.sections?.find((s) => s.type === "texte");
  const faq = pageActive?.sections?.find((s) => s.type === "faq");
  const cta = pageActive?.sections?.find((s) => s.type === "cta");
  const contact = pageActive?.sections?.find((s) => s.type === "contact");
  const methode = pageActive?.sections?.find((s) => s.type === "methode");
  const avantages = pageActive?.sections?.find((s) => s.type === "avantages");
  const reassurance = pageActive?.sections?.find((s) => s.type === "reassurance");

  return (
    <main>
      <Container>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={gererUploadLocal}
          style={{ display: "none" }}
        />

        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <Kicker>Création de site avec l’IA</Kicker>
          <h1
            style={{
              fontSize: "clamp(34px, 6vw, 52px)",
              fontWeight: 1000,
              margin: "0 0 12px",
              lineHeight: 1.08,
              color: "#f8fafc",
            }}
          >
            Générez un site web avec <span className="nw-accent">NUMÉWEB</span>
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
            NUMÉWEB remplit désormais les pages comme un vrai site professionnel,
            avec un accueil plus dense et des pages métier beaucoup plus crédibles.
          </p>
        </div>

        <div className="nw-generateur-grid">
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
              Étape 1
            </div>

            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "clamp(24px, 4vw, 30px)",
                fontWeight: 1000,
              }}
            >
              Décrivez le site à créer
            </h2>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={exemplePrompt}
              className="nw-generateur-zone"
            />

            <div className="nw-btn-row" style={{ marginTop: 14 }}>
              <button
                type="button"
                onClick={lancerGeneration}
                disabled={chargement}
                style={{
                  padding: "12px 18px",
                  borderRadius: 12,
                  background: "linear-gradient(90deg, #0ea5e9, #22d3ee)",
                  color: "#ffffff",
                  fontWeight: 1000,
                  cursor: chargement ? "not-allowed" : "pointer",
                  border: "none",
                  boxShadow: "0 0 24px rgba(14,165,233,0.24)",
                  opacity: chargement ? 0.7 : 1,
                }}
              >
                {chargement ? "Génération en cours..." : "Générer le site"}
              </button>

              <button
                type="button"
                onClick={() => setPrompt(exemplePrompt)}
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
                Utiliser l’exemple
              </button>
            </div>

            {erreur && (
              <div
                style={{
                  marginTop: 14,
                  padding: 12,
                  borderRadius: 14,
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.18)",
                  color: "#fca5a5",
                  lineHeight: 1.6,
                }}
              >
                {erreur}
              </div>
            )}

            {resume && (
              <div
                style={{
                  marginTop: 20,
                  borderRadius: 20,
                  border: "1px solid rgba(148,163,184,0.16)",
                  background: "rgba(255,255,255,0.04)",
                  padding: 16,
                }}
              >
                <div style={{ fontWeight: 1000, marginBottom: 8 }}>Résumé de la génération</div>
                <div style={{ lineHeight: 1.8, opacity: 0.92 }}>
                  <div><strong>Titre :</strong> {resume.titre}</div>
                  <div><strong>Métier :</strong> {resume.metier}</div>
                  <div><strong>Objectif :</strong> {resume.objectif}</div>
                  <div><strong>Style :</strong> {resume.style}</div>
                  <div><strong>Secteur visuel :</strong> {resume.secteurVisuel}</div>
                  <div><strong>Nombre de pages :</strong> {resume.pages}</div>
                </div>
              </div>
            )}

            {configuration && (
              <>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 1000,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    opacity: 0.75,
                    marginTop: 22,
                    marginBottom: 10,
                  }}
                >
                  Pages générées
                </div>

                <div className="nw-page-tabs">
                  {configuration.pages.map((p, index) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setPageIndex(index)}
                      className={`nw-page-tab ${index === pageIndex ? "active" : ""}`}
                    >
                      {p.titre}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="nw-btn-row" style={{ marginTop: 18 }}>
              <PrimaryBtnLink href="/interface">Retour à l’interface →</PrimaryBtnLink>
              <BtnLink href="/services/creation-marque">Voir le service Création & Marque →</BtnLink>
            </div>
          </Glass>

          <Glass
            style={{
              padding: 18,
              borderRadius: 26,
              position: "relative",
              overflow: "hidden",
              background:
                "radial-gradient(120% 120% at 50% 20%, rgba(56,189,248,0.16), rgba(0,0,0,0) 58%), linear-gradient(180deg, rgba(15,23,42,0.78), rgba(2,6,23,0.72))",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                opacity: 0.55,
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
                Aperçu du site
              </div>

              {configuration ? (
                <SiteRenderer
                  configuration={configuration}
                  pageIndex={pageIndex}
                  onPageChange={setPageIndex}
                />
              ) : (
                <div
                  style={{
                    borderRadius: 22,
                    border: "1px solid rgba(148,163,184,0.16)",
                    background: "rgba(255,255,255,0.04)",
                    padding: 24,
                    lineHeight: 1.75,
                    opacity: 0.9,
                  }}
                >
                  Générez un site pour afficher ici toutes les pages.
                </div>
              )}
            </div>
          </Glass>
        </div>

        {configuration && pageActive && (
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
              Édition no-code
            </div>

            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "clamp(24px, 4vw, 30px)",
                fontWeight: 1000,
              }}
            >
              Modifier la page <span className="nw-accent">{pageActive.titre}</span>
            </h2>

            <div className="nw-editeur-nocode-grid">
              {hero && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">Présentation principale</div>

                  <label className="nw-editeur-label">Titre</label>
                  <input
                    className="nw-editeur-input"
                    value={hero.titre || ""}
                    onChange={(e) => mettreAJourSectionSimple("hero", "titre", e.target.value)}
                  />

                  <label className="nw-editeur-label">Sous-titre</label>
                  <input
                    className="nw-editeur-input"
                    value={hero.sousTitre || ""}
                    onChange={(e) => mettreAJourSectionSimple("hero", "sousTitre", e.target.value)}
                  />

                  <label className="nw-editeur-label">Description</label>
                  <textarea
                    className="nw-editeur-textarea"
                    value={hero.description || ""}
                    onChange={(e) => mettreAJourSectionSimple("hero", "description", e.target.value)}
                  />

                  <label className="nw-editeur-label">Image principale</label>
                  <textarea
                    className="nw-editeur-textarea"
                    value={hero.image || ""}
                    onChange={(e) => mettreAJourSectionSimple("hero", "image", e.target.value)}
                  />

                  <div className="nw-btn-row" style={{ marginTop: 12 }}>
                    <button
                      type="button"
                      className="nw-upload-btn"
                      onClick={() => ouvrirUploadImage("hero")}
                    >
                      Importer une image principale
                    </button>
                  </div>
                </div>
              )}

              {services && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">Services</div>

                  {services.items?.map((item, index) => (
                    <div key={index}>
                      <label className="nw-editeur-label">Élément {index + 1}</label>
                      <input
                        className="nw-editeur-input"
                        value={typeof item === "string" ? item : item?.label || ""}
                        onChange={(e) => mettreAJourListe("services", index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              )}

              {methode && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">Méthode</div>

                  {methode.items?.map((item, index) => (
                    <div key={index}>
                      <label className="nw-editeur-label">Étape {index + 1}</label>
                      <input
                        className="nw-editeur-input"
                        value={typeof item === "string" ? item : item?.label || ""}
                        onChange={(e) => mettreAJourListe("methode", index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              )}

              {avantages && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">Avantages</div>

                  {avantages.items?.map((item, index) => (
                    <div key={index}>
                      <label className="nw-editeur-label">Avantage {index + 1}</label>
                      <input
                        className="nw-editeur-input"
                        value={typeof item === "string" ? item : item?.label || ""}
                        onChange={(e) => mettreAJourListe("avantages", index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              )}

              {reassurance && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">Réassurance</div>

                  {reassurance.items?.map((item, index) => (
                    <div key={index}>
                      <label className="nw-editeur-label">Point {index + 1}</label>
                      <input
                        className="nw-editeur-input"
                        value={typeof item === "string" ? item : item?.label || ""}
                        onChange={(e) => mettreAJourListe("reassurance", index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              )}

              {texte && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">Bloc texte</div>

                  <label className="nw-editeur-label">Titre</label>
                  <input
                    className="nw-editeur-input"
                    value={texte.titre || ""}
                    onChange={(e) => mettreAJourSectionSimple("texte", "titre", e.target.value)}
                  />

                  <label className="nw-editeur-label">Description</label>
                  <textarea
                    className="nw-editeur-textarea"
                    value={texte.description || ""}
                    onChange={(e) => mettreAJourSectionSimple("texte", "description", e.target.value)}
                  />
                </div>
              )}

              {faq && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">FAQ</div>

                  {faq.items?.map((item, index) => (
                    <div key={index}>
                      <label className="nw-editeur-label">Question {index + 1}</label>
                      <input
                        className="nw-editeur-input"
                        value={typeof item === "string" ? item : item?.label || ""}
                        onChange={(e) => mettreAJourListe("faq", index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              )}

              {cta && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">Bouton d'action</div>

                  <label className="nw-editeur-label">Titre</label>
                  <input
                    className="nw-editeur-input"
                    value={cta.titre || ""}
                    onChange={(e) => mettreAJourSectionSimple("cta", "titre", e.target.value)}
                  />

                  <label className="nw-editeur-label">Description</label>
                  <textarea
                    className="nw-editeur-textarea"
                    value={cta.description || ""}
                    onChange={(e) => mettreAJourSectionSimple("cta", "description", e.target.value)}
                  />

                  <label className="nw-editeur-label">Bouton</label>
                  <input
                    className="nw-editeur-input"
                    value={cta.bouton || ""}
                    onChange={(e) => mettreAJourSectionSimple("cta", "bouton", e.target.value)}
                  />
                </div>
              )}

              {contact && (
                <div className="nw-editeur-card">
                  <div className="nw-editeur-titre">Contact</div>

                  <label className="nw-editeur-label">E-mail</label>
                  <input
                    className="nw-editeur-input"
                    value={contact.email || ""}
                    onChange={(e) => mettreAJourSectionSimple("contact", "email", e.target.value)}
                  />

                  <label className="nw-editeur-label">Téléphone</label>
                  <input
                    className="nw-editeur-input"
                    value={contact.telephone || ""}
                    onChange={(e) => mettreAJourSectionSimple("contact", "telephone", e.target.value)}
                  />
                </div>
              )}
            </div>
          </Glass>
        )}
      </Container>
    </main>
  );
}