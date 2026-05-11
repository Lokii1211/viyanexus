"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20book%20a%20free%20strategy%20call";

export default function InnerPageLayout({ children, backLabel = "Home", backHref = "/" }) {
  return (
    <>
      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(10,12,18,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        padding: "0 24px", height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href={backHref} style={{
          display: "flex", alignItems: "center", gap: "8px",
          fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.5)",
          textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em",
          transition: "color 0.3s",
        }}>
          <ArrowLeft size={14} /> {backLabel}
        </Link>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", overflow: "hidden", background: "#111318", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,145,10,0.2)" }}>
            <Image src="/vn-logo.png" alt="Logo" width={28} height={28} style={{ width: "28px", height: "28px", objectFit: "cover", mixBlendMode: "screen" }} />
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "white", textTransform: "uppercase" }}>VIYA NEXUS</span>
        </Link>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
          background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00",
          padding: "8px 16px", fontFamily: "var(--font-mono)", fontSize: "9px",
          fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
          textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px",
        }}>
          Book Call <ArrowRight size={10} />
        </a>
      </nav>

      {/* Content */}
      <main style={{ paddingTop: "60px", minHeight: "100vh", background: "#0A0C12" }}>
        {children}
      </main>

      {/* Simple footer */}
      <footer style={{
        background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 24px", textAlign: "center",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600,
          color: "white", textDecoration: "none", textTransform: "uppercase",
        }}>VIYA NEXUS</Link>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a", marginTop: "12px" }}>
          © 2026 VIYA NEXUS. India&apos;s Premium AI Automation Partner.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "16px" }}>
          <Link href="/blog" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a", textDecoration: "none" }}>Blog</Link>
          <Link href="/case-studies" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a", textDecoration: "none" }}>Case Studies</Link>
          <Link href="/#services" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a", textDecoration: "none" }}>Services</Link>
          <Link href="/#pricing" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </>
  );
}
