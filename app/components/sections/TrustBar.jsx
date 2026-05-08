"use client";

const industries = [
  "Restaurant Chains", "Real Estate Agencies", "Online Coaches", "D2C Brands",
  "Healthcare Clinics", "Education Centers", "E-commerce Stores", "Travel Agencies",
  "Law Firms", "Fitness Studios", "Financial Advisors", "Interior Designers",
  "SaaS Companies", "Dental Clinics", "Event Planners", "Consulting Firms",
];

export default function TrustBar() {
  const items = [...industries, ...industries];

  return (
    <section style={{
      position: "relative", zIndex: 20,
      padding: "14px 0",
      overflow: "hidden",
      background: "rgba(201,145,10,0.03)",
      borderTop: "1px solid rgba(201,145,10,0.06)",
      borderBottom: "1px solid rgba(201,145,10,0.06)",
    }}>
      {/* Fade edges */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none",
        maskImage: "linear-gradient(to right, #06080D, transparent 60px, transparent calc(100% - 60px), #06080D)",
        WebkitMaskImage: "linear-gradient(to right, #06080D, transparent 60px, transparent calc(100% - 60px), #06080D)",
      }} />

      <div style={{
        display: "flex", whiteSpace: "nowrap",
        animation: "marquee 50s linear infinite",
      }}>
        {items.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: "16px",
            padding: "0 16px",
          }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "rgba(201,145,10,0.35)",
              textTransform: "uppercase",
              fontWeight: 600,
            }}>
              {item}
            </span>
            <span style={{ color: "#C9910A", fontSize: "5px", opacity: 0.5 }}>◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
