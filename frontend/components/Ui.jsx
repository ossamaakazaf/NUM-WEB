import Link from "next/link";

export function Container({ children }) {
  return <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 20px 90px" }}>{children}</div>;
}

export function Kicker({ children }) {
  return (
    <div style={{ color: "#38bdf8", letterSpacing: ".22em", textTransform: "uppercase", fontSize: 12, marginBottom: 10 }}>
      {children}
    </div>
  );
}

export function Glass({ children, style }) {
  return (
    <div
      style={{
        borderRadius: 20,
        border: "1px solid rgba(148,163,184,0.18)",
        background: "rgba(15,23,42,0.75)",
        boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
        backdropFilter: "blur(10px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function BtnLink({ href, children }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 14,
        border: "1px solid rgba(148,163,184,0.18)",
        background: "rgba(2,6,23,0.35)",
        fontWeight: 900,
        whiteSpace: "nowrap",
        color: "#f8fafc",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}

export function PrimaryBtnLink({ href, children }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 14px",
        borderRadius: 14,
        border: "1px solid rgba(56,189,248,0.45)",
        background: "rgba(56,189,248,0.12)",
        boxShadow: "0 0 26px rgba(56,189,248,0.18)",
        fontWeight: 1000,
        whiteSpace: "nowrap",
        color: "#f8fafc",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}