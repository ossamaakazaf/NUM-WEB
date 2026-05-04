import OpenAI from "openai";

function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

const TEXT_MODEL = process.env.OPENAI_TEXT_MODEL || "gpt-4.1-mini";
const IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1-mini";

const nullableString = {
  anyOf: [{ type: "string" }, { type: "null" }],
};

const itemSchema = {
  anyOf: [
    { type: "string" },
    {
      type: "object",
      additionalProperties: false,
      properties: {
        valeur: { type: "string" },
        label: { type: "string" },
      },
      required: ["valeur", "label"],
    },
  ],
};

const sectionSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    type: { type: "string" },
    titre: nullableString,
    sousTitre: nullableString,
    description: nullableString,
    boutonPrincipal: nullableString,
    boutonSecondaire: nullableString,
    bouton: nullableString,
    email: nullableString,
    telephone: nullableString,
    imagePrompt: nullableString,
    imageAlt: nullableString,
    image: nullableString,
    items: {
      anyOf: [
        {
          type: "array",
          items: itemSchema,
        },
        { type: "null" },
      ],
    },
  },
  required: [
    "type",
    "titre",
    "sousTitre",
    "description",
    "boutonPrincipal",
    "boutonSecondaire",
    "bouton",
    "email",
    "telephone",
    "imagePrompt",
    "imageAlt",
    "image",
    "items",
  ],
};

const pageSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    slug: { type: "string" },
    titre: { type: "string" },
    sections: {
      type: "array",
      minItems: 4,
      items: sectionSchema,
    },
  },
  required: ["slug", "titre", "sections"],
};

const schemaSite = {
  name: "configuration_site_numeweb",
  strict: true,
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      meta: {
        type: "object",
        additionalProperties: false,
        properties: {
          metier: { type: "string" },
          objectif: { type: "string" },
          style: { type: "string" },
          titreSite: { type: "string" },
          sousTitreSite: { type: "string" },
          secteurVisuel: { type: "string" },
          palette: {
            anyOf: [
              {
                type: "array",
                items: { type: "string" },
              },
              { type: "null" },
            ],
          },
        },
        required: [
          "metier",
          "objectif",
          "style",
          "titreSite",
          "sousTitreSite",
          "secteurVisuel",
          "palette",
        ],
      },
      pages: {
        type: "array",
        minItems: 5,
        maxItems: 5,
        items: pageSchema,
      },
    },
    required: ["meta", "pages"],
  },
};

function dataUrlFromBase64(base64) {
  return `data:image/png;base64,${base64}`;
}

function getSectionsToIllustrate(configuration) {
  const result = [];

  configuration?.pages?.forEach((page, pageIndex) => {
    page.sections.forEach((section, sectionIndex) => {
      const shouldIllustrate =
        section.type === "hero" ||
        (page.slug === "accueil" &&
          ["services", "temoignages", "methode", "reassurance"].includes(section.type));

      if (shouldIllustrate) {
        result.push({ pageIndex, sectionIndex });
      }
    });
  });

  return result;
}

async function genererImagePourSection(section, meta, pageTitle) {
  const promptImage = `
Crée une image ultra premium, professionnelle, réaliste et précise pour un site web.
Métier : ${meta.metier}
Style : ${meta.style}
Secteur visuel : ${meta.secteurVisuel}
Objectif : ${meta.objectif}
Page : ${pageTitle}

Section : ${section.type}
Titre : ${section.titre || ""}
Sous-titre : ${section.sousTitre || ""}
Description : ${section.description || ""}
Brief image : ${section.imagePrompt || ""}

Contraintes :
- image haut de gamme
- visuel réaliste et crédible
- composition élégante
- pas de texte incrusté
- pas de watermark
- scène cohérente avec le métier
- esthétique professionnelle de site premium
`.trim();

  const result = await client.images.generate({
    model: IMAGE_MODEL,
    prompt: promptImage,
    size: "1536x1024",
    quality: "medium",
  });

  const b64 = result?.data?.[0]?.b64_json;
  if (!b64) return null;

  return dataUrlFromBase64(b64);
}

export async function POST(req) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OPENAI_API_KEY manquante dans .env.local" },
        { status: 500 }
      );
    }
    const client = getOpenAIClient();
    const body = await req.json();
    const promptUtilisateur = body?.prompt?.trim();

    if (!promptUtilisateur) {
      return Response.json(
        { error: "Le prompt est obligatoire." },
        { status: 400 }
      );
    }

    const reponse = await client.chat.completions.create({
      model: TEXT_MODEL,
      messages: [
        {
          role: "developer",
          content: `
Tu es NUMÉWEB, une IA experte en génération de sites web premium et professionnels.

Tu dois générer un site complet de 5 pages :
- Accueil
- Services
- À propos
- Contact
- FAQ

Règles impératives :
- Réponds uniquement avec un JSON valide conforme au schéma
- Le contenu doit être en français
- Le contenu doit être précis selon le métier
- Chaque page doit ressembler à un vrai site professionnel, pas à une maquette vide
- Toutes les pages doivent être bien remplies, denses et crédibles

Règles page Accueil :
- au minimum 8 sections
- hero centré avec grande image
- chiffres
- services
- avantages
- méthode
- témoignages
- réassurance
- CTA
- éventuellement un texte de positionnement si utile

Règles page Services :
- hero
- texte d’introduction
- détail des offres
- bénéfices client
- méthode ou déroulé
- CTA

Règles page À propos :
- hero
- présentation détaillée
- approche / vision
- points de confiance
- CTA

Règles page Contact :
- hero
- texte de contact
- coordonnées
- réassurance
- CTA

Règles page FAQ :
- hero
- introduction courte
- liste de questions fréquentes bien précises au métier
- CTA final

Types de section autorisés :
- hero
- chiffres
- services
- avantages
- methode
- temoignages
- reassurance
- texte
- faq
- cta
- contact

Règles de contenu :
- pas de phrases vagues
- pas de contenu pauvre
- chaque section doit être utile commercialement
- les titres doivent être professionnels et impactants
- les CTA doivent être adaptés au métier
- si métier sensible, ton sobre et rassurant

Règles visuelles :
- accueil avec grande image hero centrée
- images cohérentes avec le métier
- secteur visuel parmi :
  "sante", "sport", "juridique", "restauration", "immobilier", "luxe", "conseil", "artisan", "business"
          `.trim(),
        },
        {
          role: "user",
          content: `
Voici la demande du client :
${promptUtilisateur}

Génère le site complet.
          `.trim(),
        },
      ],
      response_format: {
        type: "json_schema",
        json_schema: schemaSite,
      },
    });

    const contenu = reponse.choices?.[0]?.message?.content;

    if (!contenu) {
      return Response.json(
        { error: "Aucune réponse générée par le modèle." },
        { status: 500 }
      );
    }

    const configuration = JSON.parse(contenu);

    const sectionsToIllustrate = getSectionsToIllustrate(configuration);

    for (const entry of sectionsToIllustrate) {
      const page = configuration.pages[entry.pageIndex];
      const section = page.sections[entry.sectionIndex];

      try {
        const imageDataUrl = await genererImagePourSection(
          section,
          configuration.meta,
          page.titre
        );
        section.image = imageDataUrl || null;
      } catch (imageError) {
        console.error("Erreur génération image :", imageError?.message || imageError);
        section.image = null;
      }
    }

    return Response.json({ configuration });
  } catch (error) {
    console.error("Erreur génération site :", error);

    return Response.json(
      {
        error: "Erreur pendant la génération du site.",
        details: error?.message || "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
