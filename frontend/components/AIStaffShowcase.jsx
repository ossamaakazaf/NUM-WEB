"use client";

const teams = [
  {
    department: "Pôle Marketing IA",
    accent: "from-cyan-400/30 via-sky-500/20 to-blue-600/10",
    description:
      "Une cellule dédiée à l’acquisition, au contenu et à la performance digitale.",
    manager: {
      name: "Alex",
      role: "Manager Marketing",
      image: "/team/alex.png",
      tags: ["Stratégie", "Acquisition", "Pilotage"],
    },
    members: [
      {
        name: "Liam",
        role: "Responsable Acquisition & Performance",
        image: "/team/liam.png",
        tags: ["Ads", "Analytics", "Conversion"],
      },
      {
        name: "Sofia",
        role: "Stratège Marketing & Contenus",
        image: "/team/sofia.png",
        tags: ["Contenu", "Branding", "SEO"],
      },
    ],
  },
  {
    department: "Pôle Commercial & Ventes IA",
    accent: "from-blue-400/30 via-indigo-500/20 to-cyan-600/10",
    description:
      "Une équipe conçue pour structurer les offres, accélérer les relances et fluidifier la conversion.",
    manager: {
      name: "Marc",
      role: "Manager Commercial",
      image: "/team/marc.png",
      tags: ["Ventes", "Suivi", "Offres"],
    },
    members: [
      {
        name: "Iris",
        role: "Architecte d’Offres, Suivi & Relances",
        image: "/team/iris.png",
        tags: ["Offres", "CRM", "Closing"],
      },
      {
        name: "Noa",
        role: "Optimisateur Relation & Conversion",
        image: "/team/noa.png",
        tags: ["Relance", "Tunnel", "Conversion"],
      },
    ],
  },
  {
    department: "Pôle Informatique & Automatisation IA",
    accent: "from-sky-400/30 via-cyan-500/20 to-indigo-600/10",
    description:
      "Le moteur technique qui fiabilise les systèmes, automatise les tâches et améliore la productivité.",
    manager: {
      name: "Julia",
      role: "Manager Informatique & Automatisation",
      image: "/team/julia.png",
      tags: ["Systèmes", "Automatisation", "Coordination"],
    },
    members: [
      {
        name: "Adam",
        role: "Informaticien Support Application",
        image: "/team/adam.png",
        tags: ["Support", "Maintenance", "Outils"],
      },
      {
        name: "Leo",
        role: "Optimisateur Automatisation & Productivité",
        image: "/team/leo.png",
        tags: ["Workflows", "Automations", "Gain de temps"],
      },
    ],
  },
  {
    department: "Pôle Support & Relation Client IA",
    accent: "from-cyan-400/30 via-blue-500/20 to-sky-600/10",
    description:
      "Une présence réactive et structurée pour renforcer l’expérience client à chaque étape.",
    manager: {
      name: "Emma",
      role: "Manager Relation Client",
      image: "/team/emma.png",
      tags: ["Support", "Satisfaction", "Coordination"],
    },
    members: [
      {
        name: "Nina",
        role: "Spécialiste Suivi & Assistance Client",
        image: "/team/nina.png",
        tags: ["Suivi", "Réactivité", "Clarté"],
      },
      {
        name: "Ethan",
        role: "Agent Fluidité & Qualité de Service",
        image: "/team/ethan.png",
        tags: ["Qualité", "Support", "Expérience"],
      },
    ],
  },
];

function MemberCard({ person, center = false }) {
  return (
    <div
      className={`group relative transition-all duration-500 ${
        center ? "z-20" : "z-10"
      }`}
    >
      <div className="relative">
        <div
          className={`absolute inset-0 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110 ${
            center
              ? "bg-cyan-400/30"
              : "bg-blue-400/20"
          }`}
        />
        <div
          className={`relative mx-auto overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(56,189,248,0.15)] backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_80px_rgba(56,189,248,0.28)] ${
            center
              ? "h-44 w-44 md:h-56 md:w-56"
              : "h-32 w-32 md:h-40 md:w-40"
          }`}
        >
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <div
        className={`mx-auto mt-4 w-fit rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${
          center ? "max-w-xs" : "max-w-[220px]"
        }`}
      >
        <h3 className="text-white font-semibold tracking-wide text-lg">
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-cyan-300 font-medium leading-snug">
          {person.role}
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {person.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-medium text-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamBlock({ team, index }) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-xl">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${team.accent} pointer-events-none`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.18))]" />
      <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
            {team.department}
          </div>

          <p className="mt-5 text-sm md:text-base leading-relaxed text-slate-200/90">
            {team.description}
          </p>
        </div>

        <div className="relative mx-auto mt-12 flex max-w-5xl items-end justify-center">
          <div className="pointer-events-none absolute left-1/2 top-[34%] hidden h-px w-[68%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent md:block" />
          <div className="pointer-events-none absolute left-1/2 top-[34%] hidden h-24 w-[68%] -translate-x-1/2 rounded-full border border-cyan-300/10 blur-sm md:block" />

          <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-end md:justify-center md:gap-0">
            <div className="md:translate-x-8 md:translate-y-8">
              <MemberCard person={team.members[0]} />
            </div>

            <div className="md:-mx-2">
              <MemberCard person={team.manager} center />
            </div>

            <div className="md:-translate-x-8 md:translate-y-8">
              <MemberCard person={team.members[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AIStaffShowcase() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.10),transparent_22%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Équipe IA NUMÉWEB
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Des collaborateurs IA
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              plus humains, plus puissants, plus visibles
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Chaque pôle NUMÉWEB est présenté comme une cellule intelligente,
            coordonnée et premium. Plus de gros cadres rigides. À la place :
            de la présence, de la lumière, de la profondeur et une vraie
            sensation d’équipe.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {teams.map((team, index) => (
            <TeamBlock key={`${team.department}-${index}`} team={team} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}