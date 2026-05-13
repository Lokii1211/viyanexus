"use client";
import { motion } from "framer-motion";

const clients = [
  { name: "SpiceRoute", industry: "Restaurant" },
  { name: "Emerald Realty", industry: "Real Estate" },
  { name: "FitCoach Pro", industry: "Fitness" },
  { name: "MedCare AI", industry: "Healthcare" },
  { name: "StyleBox", industry: "D2C Fashion" },
  { name: "AutoParts Hub", industry: "E-Commerce" },
  { name: "EduSpark", industry: "EdTech" },
  { name: "FreshKart", industry: "Grocery" },
  { name: "TravelEase", industry: "Travel" },
  { name: "LegalDesk", industry: "Legal Tech" },
];

function LogoCard({ name, industry }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "10px",
      padding: "10px 20px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.04)",
      whiteSpace: "nowrap", flexShrink: 0,
      transition: "all 0.3s ease",
      cursor: "default",
    }}
    className="client-logo-card"
    >
      <div style={{
        width: "28px", height: "28px", borderRadius: "6px",
        background: "linear-gradient(135deg, rgba(201,145,10,0.12), rgba(201,145,10,0.04))",
        border: "1px solid rgba(201,145,10,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 800,
        color: "#C9910A", flexShrink: 0,
      }}>
        {name.charAt(0)}
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", lineHeight: 1.2 }}>
          {name}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {industry}
        </div>
      </div>
    </div>
  );
}

export default function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section style={{ background: "#06080D", padding: "32px 0", overflow: "hidden", position: "relative" }}>
      {/* Fade edges */}
      <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, #06080D, transparent)", zIndex: 2 }} />
      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, #06080D, transparent)", zIndex: 2 }} />

      {/* Label */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "9px",
          color: "rgba(255,255,255,0.15)", textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}>
          Trusted by businesses across India
        </span>
      </div>

      {/* Marquee */}
      <div style={{ display: "flex", gap: "12px", animation: "marquee 40s linear infinite" }}>
        {doubled.map((c, i) => (
          <LogoCard key={i} name={c.name} industry={c.industry} />
        ))}
      </div>

      <style jsx>{`
        .client-logo-card:hover {
          border-color: rgba(201,145,10,0.2) !important;
          background: rgba(201,145,10,0.04) !important;
        }
      `}</style>
    </section>
  );
}
