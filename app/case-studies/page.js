import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Case Studies | Viya Nexus — Real Results for Indian Businesses",
  description: "See how Indian SMEs are using WhatsApp automation, Voice AI, and digital marketing to recover revenue, save time, and scale operations. Real numbers. Real businesses.",
  alternates: { canonical: "https://viyanexus.vercel.app/case-studies" },
};

const cases = [
  {
    slug: "spiceroute-restaurant",
    client: "SpiceRoute",
    industry: "RESTAURANT CHAIN",
    location: "Chennai",
    headline: "From 180 manual WhatsApp replies/day to 12. ₹50L+ annual revenue recovered.",
    stats: [
      { value: "94%", label: "Fewer manual replies" },
      { value: "4.25×", label: "More catering leads" },
      { value: "₹50.4L", label: "Annual revenue added" },
    ],
    services: ["WhatsApp Automation", "Website Development", "Digital Marketing"],
  },
  {
    slug: "emerald-real-estate",
    client: "Emerald Properties",
    industry: "REAL ESTATE",
    location: "Coimbatore",
    headline: "Lead response went from 8 hours to 2 minutes. Site visits doubled in 30 days.",
    stats: [
      { value: "2min", label: "Response time" },
      { value: "2×", label: "Site visit bookings" },
      { value: "₹1.2Cr", label: "Pipeline generated" },
    ],
    services: ["WhatsApp Automation", "Lead Qualification Bot"],
  },
  {
    slug: "fitcoach-online",
    client: "FitCoach Pro",
    industry: "ONLINE COACHING",
    location: "Bangalore",
    headline: "Enrollment conversions up 40%. Saves 2 hours every day on repetitive DMs.",
    stats: [
      { value: "40%", label: "More enrollments" },
      { value: "2hrs", label: "Saved daily" },
      { value: "₹8.4L", label: "Extra annual revenue" },
    ],
    services: ["WhatsApp Automation", "Marketing Automation"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0C12" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,18,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "0 24px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em" }}>← Home</Link>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "white", textDecoration: "none", textTransform: "uppercase" }}>VIYA NEXUS</Link>
        <a href="https://wa.me/919003360494?text=Hi%20Viya%20Nexus" target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00", padding: "8px 16px", fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>Book Call</a>
      </nav>

      <main style={{ paddingTop: "120px", paddingBottom: "80px", maxWidth: "900px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.15em" }}>CASE STUDIES</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: "12px", marginBottom: "12px" }}>
          Real results from <span style={{ background: "linear-gradient(135deg, #C9910A, #E8B84B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>real businesses</span>.
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "48px", maxWidth: "560px" }}>
          Every project is different. Here&apos;s what happened when these Indian businesses automated their operations with Viya Nexus.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {cases.map((c, i) => (
            <Link key={i} href={`/case-studies/${c.slug}`} style={{ textDecoration: "none", display: "block", padding: "28px", background: "#0F1219", border: "1px solid rgba(255,255,255,0.04)", transition: "all 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(201,145,10,0.08)", padding: "3px 8px", border: "1px solid rgba(201,145,10,0.12)" }}>{c.industry}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.2)" }}>{c.location}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "#F0EDE8", lineHeight: 1.3, marginBottom: "16px" }}>{c.headline}</h2>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "16px" }}>
                {c.stats.map((s, j) => (
                  <div key={j}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "#E8B84B" }}>{s.value}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                {c.services.map((s, j) => (
                  <span key={j} style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.3)", padding: "2px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>{s}</span>
                ))}
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.1em", display: "inline-flex", alignItems: "center", gap: "6px" }}>Read Case Study <ArrowRight size={11} /></span>
            </Link>
          ))}
        </div>
      </main>

      <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a" }}>© 2026 VIYA NEXUS. India&apos;s Premium AI Automation Partner.</p>
      </footer>
    </div>
  );
}
