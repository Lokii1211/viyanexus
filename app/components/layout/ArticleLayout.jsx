import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WA = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20read%20your%20blog%20and%20want%20to%20learn%20more";

export default function ArticleLayout({ tag, date, readTime, title, children }) {
  const s = {
    h2: { fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "#F0EDE8", marginTop: "40px", marginBottom: "16px", lineHeight: 1.3 },
    h3: { fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 600, color: "#E8B84B", marginTop: "32px", marginBottom: "12px", lineHeight: 1.3 },
    p: { fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: "16px" },
    strong: { color: "rgba(255,255,255,0.85)" },
    li: { fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "6px", paddingLeft: "4px" },
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0A0C12" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,18,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "0 24px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/blog" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em" }}>← Blog</Link>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "white", textDecoration: "none", textTransform: "uppercase" }}>VIYA NEXUS</Link>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00", padding: "8px 16px", fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>Book Call</a>
      </nav>

      <article style={{ paddingTop: "100px", paddingBottom: "60px", maxWidth: "680px", margin: "0 auto", padding: "100px 24px 60px" }}>
        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(201,145,10,0.08)", padding: "3px 8px", border: "1px solid rgba(201,145,10,0.12)" }}>{tag}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.2)" }}>{date} · {readTime} read</span>
        </div>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: "32px" }}>{title}</h1>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />

        {/* Article body */}
        <div className="article-body">{children}</div>

        {/* CTA */}
        <div style={{ marginTop: "48px", padding: "32px", background: "rgba(201,145,10,0.04)", border: "1px solid rgba(201,145,10,0.12)", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "white", marginBottom: "8px" }}>Ready to automate your business?</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>Book a free 30-minute strategy call. We&apos;ll show you exactly what&apos;s possible.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00", padding: "14px 28px", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Book Free Strategy Call <ArrowRight size={14} />
          </a>
        </div>
      </article>

      <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "16px" }}>
          <Link href="/blog" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a", textDecoration: "none" }}>Blog</Link>
          <Link href="/case-studies" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a", textDecoration: "none" }}>Case Studies</Link>
          <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a", textDecoration: "none" }}>Home</Link>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a" }}>© 2026 VIYA NEXUS.</p>
      </footer>

      <style>{`
        .article-body h2 { font-family: var(--font-display); font-size: 24px; font-weight: 700; color: #F0EDE8; margin-top: 40px; margin-bottom: 16px; line-height: 1.3; }
        .article-body h3 { font-family: var(--font-display); font-size: 20px; font-weight: 600; color: #E8B84B; margin-top: 32px; margin-bottom: 12px; }
        .article-body p { font-family: var(--font-body); font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.85; margin-bottom: 16px; }
        .article-body strong { color: rgba(255,255,255,0.85); }
        .article-body ul, .article-body ol { padding-left: 20px; margin-bottom: 16px; }
        .article-body li { font-family: var(--font-body); font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 6px; }
        .article-body blockquote { border-left: 3px solid #C9910A; padding: 16px 20px; margin: 24px 0; background: rgba(201,145,10,0.03); }
        .article-body blockquote p { color: rgba(255,255,255,0.7); font-style: italic; margin: 0; }
        .article-body table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .article-body th, .article-body td { padding: 10px 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.06); font-family: var(--font-mono); font-size: 12px; color: rgba(255,255,255,0.5); }
        .article-body th { color: #C9910A; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; }
      `}</style>
    </div>
  );
}
