import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog | Viya Nexus — AI Automation Insights for Indian SMEs",
  description: "Practical guides on WhatsApp automation, digital marketing strategy, and website development for Indian businesses. No fluff — just results.",
  alternates: { canonical: "https://viyanexus.vercel.app/blog" },
};

const posts = [
  {
    slug: "whatsapp-chatbot-automation-india",
    title: "WhatsApp Chatbot Automation: Why Indian SMEs Can't Afford to Ignore It",
    excerpt: "78% of Indian consumers prefer WhatsApp for business communication. Yet most businesses still reply manually. Here's the real ROI of automating.",
    date: "May 11, 2026",
    readTime: "6 min",
    tag: "AUTOMATION",
  },
  {
    slug: "digital-marketing-strategy-small-business-india",
    title: "Digital Marketing Strategy for Small Businesses in India: A No-BS Guide",
    excerpt: "Most Indian SMEs are wasting money on digital marketing. Here's a 3-channel framework that actually drives leads — not just likes.",
    date: "May 11, 2026",
    readTime: "5 min",
    tag: "MARKETING",
  },
  {
    slug: "website-development-best-practices-india",
    title: "Website Development Best Practices: Speed, Trust, and Conversions",
    excerpt: "53% of mobile visitors leave sites that take over 3 seconds to load. In India, where 75% of traffic is mobile, speed is everything.",
    date: "May 11, 2026",
    readTime: "5 min",
    tag: "WEB DEV",
  },
];

export default function BlogPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0C12" }}>
      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,18,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "0 24px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em" }}>← Home</Link>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "white", textDecoration: "none", textTransform: "uppercase" }}>VIYA NEXUS</Link>
        <a href="https://wa.me/919003360494?text=Hi%20Viya%20Nexus" target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00", padding: "8px 16px", fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>Book Call</a>
      </nav>

      <main style={{ paddingTop: "120px", paddingBottom: "80px", maxWidth: "800px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.15em" }}>BLOG</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: "12px", marginBottom: "12px" }}>
          Insights for businesses that want to <span style={{ background: "linear-gradient(135deg, #C9910A, #E8B84B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>grow smarter</span>.
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "48px", maxWidth: "560px" }}>
          Practical guides on automation, marketing, and technology — written for Indian business owners, not developers.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {posts.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", padding: "32px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "all 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(201,145,10,0.08)", padding: "3px 8px", border: "1px solid rgba(201,145,10,0.12)" }}>{post.tag}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.2)" }}>{post.date} · {post.readTime} read</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "#F0EDE8", lineHeight: 1.3, marginBottom: "8px" }}>{post.title}</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: "12px" }}>{post.excerpt}</p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.1em", display: "inline-flex", alignItems: "center", gap: "6px" }}>Read Article <ArrowRight size={11} /></span>
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
