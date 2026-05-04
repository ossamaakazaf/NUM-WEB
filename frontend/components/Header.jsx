"use client";

import Link from "next/link";

export default function Header() {
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Interface", href: "/interface" },
    { label: "Automatisations", href: "/automatisations" },
    { label: "Abonnements", href: "/abonnements" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        background: "rgba(2, 8, 26, 0.72)",
        borderBottom: "1px solid rgba(148,163,184,0.14)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#f8fafc",
            fontWeight: 1000,
            letterSpacing: 0.4,
            flexShrink: 0,
          }}
        >
          <img
            src="/logo-numeweb.png"
            alt="NUMÉWEB"
            style={{
              width: 40,
              height: 40,
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 0 14px rgba(56,189,248,0.35))",
            }}
          />

          <span>NUMÉWEB</span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "9px 11px",
                borderRadius: 999,
                color: "#f8fafc",
                fontSize: 13,
                fontWeight: 900,
                opacity: 0.88,
                border: "1px solid rgba(148,163,184,0.12)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}