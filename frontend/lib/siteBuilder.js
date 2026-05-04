export const BLOCS_DISPONIBLES = {
    hero: "Bannière principale",
    services: "Services",
    avantages: "Avantages",
    temoignages: "Témoignages",
    contact: "Contact",
    faq: "Questions fréquentes",
    chiffres: "Chiffres clés",
    cta: "Appel à l’action",
  };
  
  function detecterSecteur(prompt) {
    const p = prompt.toLowerCase();
  
    if (
      p.includes("coach sportif") ||
      p.includes("coach sport") ||
      p.includes("fitness") ||
      p.includes("musculation") ||
      p.includes("remise en forme") ||
      p.includes("préparation physique")
    ) {
      return "coach_sportif";
    }
  
    if (p.includes("restaurant") || p.includes("traiteur") || p.includes("cuisine")) {
      return "restauration";
    }
  
    if (
      p.includes("avocat") ||
      p.includes("cabinet juridique") ||
      p.includes("juridique")
    ) {
      return "juridique";
    }
  
    if (p.includes("immobilier") || p.includes("agence immobilière")) {
      return "immobilier";
    }
  
    if (
      p.includes("artisan") ||
      p.includes("plombier") ||
      p.includes("électricien") ||
      p.includes("menuisier") ||
      p.includes("peintre")
    ) {
      return "artisan";
    }
  
    if (
      p.includes("photographe") ||
      p.includes("vidéaste") ||
      p.includes("créateur")
    ) {
      return "creation";
    }
  
    if (
      p.includes("coach") ||
      p.includes("consultant") ||
      p.includes("conseil")
    ) {
      return "conseil";
    }
  
    if (p.includes("agence") || p.includes("marketing")) {
      return "agence";
    }
  
    return "entreprise";
  }
  
  function detecterObjectif(prompt) {
    const p = prompt.toLowerCase();
  
    if (p.includes("devis")) return "demande de devis";
    if (p.includes("rendez-vous") || p.includes("réservation")) return "prise de rendez-vous";
    if (p.includes("vente")) return "vente";
    if (p.includes("prospects") || p.includes("leads")) return "génération de prospects";
  
    return "présentation";
  }
  
  function construireBaseParSecteur(secteur) {
    const bases = {
      coach_sportif: {
        nomEntreprise: "Votre coaching sportif",
        accroche: "Transformez votre forme avec un accompagnement personnalisé.",
        description:
          "Nous aidons chaque client à atteindre ses objectifs physiques grâce à un suivi humain, motivant et structuré.",
        services: [
          "Coaching individuel",
          "Perte de poids",
          "Remise en forme",
          "Préparation physique",
        ],
        avantages: [
          "Un accompagnement personnalisé",
          "Des objectifs clairs et mesurables",
          "Une progression visible dans le temps",
        ],
        temoignages: [
          "J’ai retrouvé une vraie régularité dans mes séances et des résultats concrets.",
          "Le suivi est motivant, clair et parfaitement adapté à mon niveau.",
        ],
        chiffres: [
          { valeur: "120+", label: "Clients accompagnés" },
          { valeur: "92 %", label: "Objectifs atteints" },
          { valeur: "4,9/5", label: "Satisfaction moyenne" },
        ],
      },
  
      restauration: {
        nomEntreprise: "Votre établissement",
        accroche: "Un site clair et appétissant pour donner envie dès la première visite.",
        description:
          "Nous mettons en valeur votre univers, votre carte et vos informations essentielles pour simplifier la réservation.",
        services: [
          "Présentation de la carte",
          "Réservations",
          "Événements",
          "Informations pratiques",
        ],
        avantages: [
          "Une image plus soignée",
          "Une meilleure visibilité",
          "Une réservation plus simple",
        ],
        temoignages: [
          "Le site reflète enfin l’identité du lieu.",
          "Nos clients trouvent plus vite les informations importantes.",
        ],
        chiffres: [
          { valeur: "4,8/5", label: "Avis clients" },
          { valeur: "24 h", label: "Réponse moyenne" },
          { valeur: "300+", label: "Réservations mensuelles" },
        ],
      },
  
      juridique: {
        nomEntreprise: "Votre cabinet juridique",
        accroche: "Présentez votre expertise avec sérieux, clarté et confiance.",
        description:
          "Nous structurons votre présence en ligne pour mettre en avant vos domaines d’intervention et rassurer vos clients.",
        services: [
          "Conseil juridique",
          "Accompagnement des dossiers",
          "Analyse et conformité",
          "Prise de rendez-vous",
        ],
        avantages: [
          "Une image sérieuse et crédible",
          "Des domaines d’expertise plus lisibles",
          "Une prise de contact plus fluide",
        ],
        temoignages: [
          "Le site inspire davantage confiance à nos clients.",
          "Notre expertise est beaucoup plus claire dès la page d’accueil.",
        ],
        chiffres: [
          { valeur: "15 ans", label: "Expérience cumulée" },
          { valeur: "98 %", label: "Clients satisfaits" },
          { valeur: "24 h", label: "Délai de réponse" },
        ],
      },
  
      immobilier: {
        nomEntreprise: "Votre agence immobilière",
        accroche: "Donnez envie, rassurez et générez des contacts qualifiés.",
        description:
          "Nous mettons en valeur votre accompagnement, vos biens et votre expertise pour renforcer la prise de contact.",
        services: [
          "Vente de biens",
          "Estimation",
          "Accompagnement acquéreurs",
          "Conseil immobilier",
        ],
        avantages: [
          "Une image plus haut de gamme",
          "Des contacts mieux qualifiés",
          "Une meilleure lisibilité de l’offre",
        ],
        temoignages: [
          "Le site met beaucoup mieux en valeur notre agence.",
          "Nous recevons des demandes plus ciblées.",
        ],
        chiffres: [
          { valeur: "250+", label: "Biens accompagnés" },
          { valeur: "96 %", label: "Clients satisfaits" },
          { valeur: "48 h", label: "Réponse moyenne" },
        ],
      },
  
      artisan: {
        nomEntreprise: "Votre entreprise artisanale",
        accroche: "Mettez en avant votre savoir-faire et générez plus de demandes locales.",
        description:
          "Nous valorisons vos réalisations, vos services et votre sérieux pour transformer les visites en demandes concrètes.",
        services: [
          "Interventions sur mesure",
          "Travaux et réalisations",
          "Accompagnement client",
          "Devis rapide",
        ],
        avantages: [
          "Plus de visibilité locale",
          "Une image rassurante",
          "Des demandes mieux qualifiées",
        ],
        temoignages: [
          "Le site nous apporte des demandes plus sérieuses.",
          "Nos services sont enfin présentés clairement.",
        ],
        chiffres: [
          { valeur: "180+", label: "Interventions réalisées" },
          { valeur: "97 %", label: "Clients satisfaits" },
          { valeur: "24 h", label: "Réponse moyenne" },
        ],
      },
  
      creation: {
        nomEntreprise: "Votre studio créatif",
        accroche: "Montrez votre style, vos réalisations et votre singularité.",
        description:
          "Nous construisons une présentation visuelle claire et engageante pour valoriser votre univers et générer des demandes.",
        services: [
          "Photographie",
          "Création visuelle",
          "Identité de marque",
          "Contenus créatifs",
        ],
        avantages: [
          "Une image plus marquante",
          "Un univers plus cohérent",
          "Une présence plus mémorable",
        ],
        temoignages: [
          "Le site reflète enfin notre style.",
          "Nos clients comprennent mieux notre univers dès les premières secondes.",
        ],
        chiffres: [
          { valeur: "80+", label: "Projets créatifs" },
          { valeur: "4,9/5", label: "Avis moyens" },
          { valeur: "3x", label: "Plus de demandes" },
        ],
      },
  
      conseil: {
        nomEntreprise: "Votre cabinet",
        accroche: "Présentez votre expertise avec clarté et crédibilité.",
        description:
          "Nous aidons vos prospects à comprendre rapidement votre valeur et à passer à l’action en toute confiance.",
        services: [
          "Audit",
          "Accompagnement stratégique",
          "Conseil opérationnel",
          "Suivi personnalisé",
        ],
        avantages: [
          "Une expertise mieux valorisée",
          "Une offre plus lisible",
          "Une prise de contact facilitée",
        ],
        temoignages: [
          "Une présentation beaucoup plus professionnelle de notre activité.",
          "Nos prospects comprennent mieux notre valeur.",
        ],
        chiffres: [
          { valeur: "120+", label: "Clients accompagnés" },
          { valeur: "98 %", label: "Satisfaction" },
          { valeur: "24 h", label: "Réponse moyenne" },
        ],
      },
  
      agence: {
        nomEntreprise: "Votre agence",
        accroche: "Une présence digitale claire, moderne et orientée résultats.",
        description:
          "Nous accompagnons nos clients avec une approche structurée, visible et performante pour développer leur activité.",
        services: [
          "Stratégie digitale",
          "Acquisition de prospects",
          "Création de contenus",
          "Pilotage de la performance",
        ],
        avantages: [
          "Un accompagnement structuré",
          "Une image plus premium",
          "Des résultats plus lisibles",
        ],
        temoignages: [
          "Une équipe réactive et une vraie montée en qualité.",
          "Nous avons clarifié notre offre et gagné en conversion.",
        ],
        chiffres: [
          { valeur: "38 %", label: "Croissance moyenne" },
          { valeur: "126", label: "Prospects générés" },
          { valeur: "4,9/5", label: "Satisfaction" },
        ],
      },
  
      entreprise: {
        nomEntreprise: "Votre entreprise",
        accroche: "Un site professionnel pour présenter votre activité avec impact.",
        description:
          "Nous structurons votre présence en ligne pour rendre votre offre plus lisible, renforcer votre image et faciliter la prise de contact.",
        services: [
          "Présentation de l’entreprise",
          "Mise en avant des services",
          "Valorisation des points forts",
          "Prise de contact simplifiée",
        ],
        avantages: [
          "Une image plus claire",
          "Une offre plus compréhensible",
          "Une meilleure présence digitale",
        ],
        temoignages: [
          "Notre activité est enfin présentée de manière professionnelle.",
          "Le site nous aide à mieux convaincre nos prospects.",
        ],
        chiffres: [
          { valeur: "98 %", label: "Clients satisfaits" },
          { valeur: "24 h", label: "Délai de réponse" },
          { valeur: "120+", label: "Projets accompagnés" },
        ],
      },
    };
  
    return bases[secteur] || bases.entreprise;
  }
  
  function construireCta(objectif, secteur) {
    if (secteur === "coach_sportif") {
      return {
        titre: "Commencez votre transformation",
        bouton: "Réserver une séance découverte",
        description: "Faites le premier pas vers un accompagnement sportif adapté à vos objectifs.",
      };
    }
  
    if (objectif === "demande de devis") {
      return {
        titre: "Demandez votre devis",
        bouton: "Obtenir un devis",
        description: "Recevez une estimation claire et adaptée à votre besoin.",
      };
    }
  
    if (objectif === "prise de rendez-vous") {
      return {
        titre: "Planifiez un rendez-vous",
        bouton: "Prendre rendez-vous",
        description: "Choisissez un créneau pour échanger avec notre équipe.",
      };
    }
  
    if (objectif === "génération de prospects") {
      return {
        titre: "Parlons de votre projet",
        bouton: "Être recontacté",
        description: "Laissez vos coordonnées pour recevoir un accompagnement personnalisé.",
      };
    }
  
    return {
      titre: "Contactez-nous",
      bouton: "Nous contacter",
      description: "Échangeons autour de votre besoin et de votre activité.",
    };
  }
  
  export function genererSiteDepuisPrompt(prompt) {
    const secteur = detecterSecteur(prompt);
    const objectif = detecterObjectif(prompt);
    const base = construireBaseParSecteur(secteur);
    const cta = construireCta(objectif, secteur);
  
    return {
      meta: {
        secteur,
        objectif,
        titreSite: base.nomEntreprise,
        sousTitreSite: base.accroche,
      },
      pages: [
        {
          slug: "accueil",
          titre: "Accueil",
          sections: [
            {
              type: "hero",
              titre: base.nomEntreprise,
              sousTitre: base.accroche,
              description: base.description,
              boutonPrincipal: cta.bouton,
              boutonSecondaire: "Découvrir nos services",
            },
            {
              type: "chiffres",
              titre: "Quelques repères",
              items: base.chiffres,
            },
            {
              type: "services",
              titre: "Nos services",
              items: base.services,
            },
            {
              type: "avantages",
              titre: "Pourquoi nous choisir",
              items: base.avantages,
            },
            {
              type: "temoignages",
              titre: "Ils nous font confiance",
              items: base.temoignages,
            },
            {
              type: "cta",
              titre: cta.titre,
              description: cta.description,
              bouton: cta.bouton,
            },
            {
              type: "contact",
              titre: "Contact",
              description:
                "Parlez-nous de votre besoin. Nous revenons vers vous rapidement.",
              email: "contact@entreprise.fr",
              telephone: "01 23 45 67 89",
            },
          ],
        },
      ],
    };
  }