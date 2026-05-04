function getItemText(item) {
  if (typeof item === "string") return item;
  if (item && typeof item === "object") {
    if (item.label) return item.label;
    if (item.valeur) return item.valeur;
  }
  return "";
}

function renderSection(section) {
  if (section.type === "hero") {
    return (
      <section className="nw-site-hero-centered">
        {section.image && (
          <div className="nw-site-hero-image-wrap">
            <img src={section.image} alt="" className="nw-site-hero-image" />
          </div>
        )}

        <div className="nw-site-hero-centered-content">
          <h1>{section.titre}</h1>
          {section.sousTitre && <h2>{section.sousTitre}</h2>}
          {section.description && <p>{section.description}</p>}
        </div>
      </section>
    );
  }

  if (section.type === "services") {
    return (
      <section className="nw-site-section">
        <h3>{section.titre}</h3>

        <div className="nw-site-cartes-3">
          {section.items?.map((item, i) => (
            <div key={i} className="nw-site-carte">
              <h4>{getItemText(item)}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === "cta") {
    return (
      <section className="nw-site-section">
        <h3>{section.titre}</h3>
        <p>{section.description}</p>
      </section>
    );
  }

  return null;
}

export default function SiteRenderer({
  configuration,
  pageIndex = 0,
  onPageChange,
}) {
  if (!configuration?.pages?.length) return null;

  const page = configuration.pages[pageIndex];

  return (
    <div className="nw-site-preview-shell">
      {/* TOP BAR */}
      <div className="nw-site-preview-topbar">
        <div className="nw-site-preview-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="nw-site-preview-url">
          aperçu-site.numeweb.ai/{page.slug}
        </div>
      </div>

      {/* SITE */}
      <div className="nw-apercu-site">
        {/* NAVBAR */}
        <div className="nw-site-navbar">
          <div
            className="nw-site-logo"
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            {/* LOGO NUMEWEB */}
            <img
              src="/logo-numeweb.png"
              alt="NUMÉWEB"
              style={{
                width: 36,
                height: 36,
                objectFit: "contain",
              }}
            />

            <span style={{ fontWeight: 1000 }}>
              {configuration?.meta?.titreSite || "Votre marque"}
            </span>
          </div>

          {/* MENU */}
          <div className="nw-site-menu">
            {configuration.pages.map((p, idx) => (
              <button key={idx} onClick={() => onPageChange?.(idx)}>
                {p.titre}
              </button>
            ))}
          </div>
        </div>

        {/* SECTIONS */}
        {page.sections.map((section, index) => (
          <div key={index}>{renderSection(section)}</div>
        ))}

        {/* FOOTER */}
        <div className="nw-site-footer">
          © {new Date().getFullYear()}{" "}
          {configuration?.meta?.titreSite || "Votre marque"}
        </div>
      </div>
    </div>
  );
}