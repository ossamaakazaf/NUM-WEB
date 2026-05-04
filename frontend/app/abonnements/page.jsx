import { Container, Kicker, Glass, BtnLink, PrimaryBtnLink } from "../../components/Ui";

export default function AbonnementsPage() {
  return (
    <main>
      <Container>
        <Kicker>Abonnements</Kicker>
        <h1 style={{ fontSize: 44, fontWeight: 1000, margin: "0 0 10px" }}>Offres</h1>
        <p style={{ opacity: 0.85, maxWidth: 980, lineHeight: 1.7, margin: 0 }}>
          Ici tu détailles tes offres (Essentiel / Pro / Entreprise): fonctionnalités, limites, accompagnement.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginTop: 16 }}>
          {[
            { name: "Essentiel", desc: "Démarrer: interface + indicateurs + 3 connexions." },
            { name: "Pro", desc: "Croissance: automatisations avancées + services IA complets." },
            { name: "Entreprise", desc: "Sur mesure: intégrations spécifiques + sécurité + accompagnement." },
          ].map((p) => (
            <Glass key={p.name} style={{ padding: 16 }}>
              <div style={{ fontWeight: 1000, marginBottom: 6 }}>{p.name}</div>
              <div style={{ opacity: 0.85, lineHeight: 1.6, fontSize: 13 }}>{p.desc}</div>
            </Glass>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <PrimaryBtnLink href="/services">Voir les services →</PrimaryBtnLink>
          <BtnLink href="/interface">Guide interface →</BtnLink>
          <BtnLink href="/automatisations">Automatisations →</BtnLink>
          <BtnLink href="/">Accueil →</BtnLink>
        </div>
      </Container>
    </main>
  );
}