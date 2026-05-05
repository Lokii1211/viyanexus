"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20explore%20automation%20for%20my%20business";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(6,8,13,0.95)" : "rgba(10,10,10,0.6)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "background 0.3s",
      }}
    >
      {/* Top Row: Logo + CTA */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{
            width: "34px", height: "34px", borderRadius: "50%", overflow: "hidden",
            background: "#111318", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, border: "1px solid rgba(201,145,10,0.25)",
          }}>
            <Image src="/vn-logo.png" alt="Viya Nexus Logo" width={34} height={34}
              style={{ width: "34px", height: "34px", objectFit: "cover", mixBlendMode: "screen" }} loading="eager" />
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, letterSpacing: "-0.01em", color: "#C9910A" }}>VIYA NEXUS</span>
        </a>

        {/* CTA — always visible */}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
          style={{
            background: "#C9910A", color: "#422d00",
            padding: "8px 18px",
            fontFamily: "var(--font-mono)", textTransform: "uppercase",
            letterSpacing: "0.1em", fontSize: "10px", fontWeight: 700,
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px",
            whiteSpace: "nowrap",
          }}>
          Book Call <ArrowRight size={12} />
        </a>
      </div>

      {/* Nav Links — horizontal scroll on all screens */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        overflowX: "auto", overflowY: "hidden",
        scrollbarWidth: "none", msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto", padding: "0 16px",
          display: "flex", gap: "0", minWidth: "max-content",
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              style={{
                fontFamily: "var(--font-mono)", textTransform: "uppercase",
                letterSpacing: "0.12em", fontSize: "10px",
                textDecoration: "none", color: "rgba(255,255,255,0.5)",
                padding: "10px 14px",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
                borderBottom: "1px solid transparent",
              }}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </motion.nav>
  );
}
