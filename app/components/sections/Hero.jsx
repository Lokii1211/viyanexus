"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import PhoneMockup from "../ui/PhoneMockup";
import { ChevronDown, MessageCircle } from "lucide-react";

const HeroMesh = dynamic(() => import("../ui/HeroMesh"), { ssr: false });

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20explore%20automation%20for%20my%20business";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* 3-Layer Background */}
      <div className="absolute inset-0 bg-[#06080D]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(201,145,10,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,145,10,0.08) 0%, transparent 70%)" }} />
      <HeroMesh />

      {/* Content — uses CSS container-main for reliable responsive padding */}
      <div className="relative z-10 container-main w-full" style={{ paddingTop: "clamp(140px, 18vh, 200px)", paddingBottom: "clamp(60px, 8vh, 120px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {/* On large screens: side-by-side. On small: stacked */}
          <div className="hero-layout">
            {/* Left */}
            <div className="hero-content">
              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                style={{ marginBottom: "32px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "6px 16px", border: "1px solid rgba(201,145,10,0.2)", background: "rgba(201,145,10,0.05)" }}>
                  <span style={{ width: "6px", height: "6px", background: "#C9910A", animation: "pulse-gold 3s infinite" }} />
                  <span style={{ fontFamily: "var(--font-mono)", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "11px" }}>
                    INDIA&apos;S PREMIUM AI AUTOMATION PARTNER
                  </span>
                </div>
              </motion.div>

              {/* Headline — Cormorant Garamond */}
              <h1 style={{ marginBottom: "32px" }}>
                <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
                  style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, color: "white", fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Your Business,
                </motion.span>
                <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.7 }}
                  style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: "4px" }}>
                  <span style={{ position: "relative", display: "inline-block", fontStyle: "italic" }}>
                    Runs Itself.
                    <svg style={{ position: "absolute", bottom: "-8px", left: 0, width: "100%" }} viewBox="0 0 420 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path d="M2 6C120.333 3.33333 299.667 3.33333 418 6" stroke="#C9910A" strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 0.8, ease: "easeInOut" }} />
                    </svg>
                  </span>
                </motion.span>
              </h1>

              {/* Subheadline */}
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.6 }}
                style={{ fontFamily: "var(--font-body)", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#d4c4ae", maxWidth: "520px", lineHeight: 1.7, marginBottom: "32px" }}>
                Scale without limits. We deploy elite WhatsApp automation and AI voice agents that handle your sales, support, and operations — while you sleep.
              </motion.p>

              {/* Pain Proof Strip */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.6 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "20px 0", marginBottom: "24px" }}>
                {[
                  { val: "₹50L+", label: "REVENUE GENERATED" },
                  { val: "30+", label: "BUSINESSES" },
                  { val: "7-DAY", label: "DELIVERY" },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "#fabc3e", fontWeight: 700, fontSize: "15px" }}>{s.val}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#d4c4ae", letterSpacing: "0.12em" }}>{s.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
                  style={{ background: "#C9910A", color: "#422d00", padding: "18px 40px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>
                  Book Free Strategy Call
                </a>
                <a href="#portfolio" className="cta-btn-animate"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderLeft: "1px solid rgba(255,255,255,0.1)", borderRight: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "18px 32px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "13px", textDecoration: "none" }}>
                  Watch Demo
                </a>
              </motion.div>

              {/* WhatsApp link */}
              <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                href={WA_LINK} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span style={{ fontFamily: "var(--font-mono)", color: "#d4c4ae", fontSize: "12px", letterSpacing: "0.08em" }}>Message us on WhatsApp</span>
              </motion.a>
            </div>

            {/* Right: Phone Mockup — only on desktop */}
            <motion.div initial={{ opacity: 0, x: 60, scale: 0.92 }} animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1.0, duration: 1 }}
              className="hero-phone">
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.6 }}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Scroll</span>
        <ChevronDown size={16} style={{ color: "#C9910A", animation: "bounce-down 2s ease-in-out infinite" }} />
      </motion.div>

      <style jsx>{`
        .hero-layout { display: flex; flex-direction: column; gap: 40px; }
        .hero-content { flex: 1; }
        .hero-phone { display: none; }
        @media (min-width: 1024px) {
          .hero-layout { flex-direction: row; align-items: center; gap: 64px; }
          .hero-phone { display: block; flex-shrink: 0; }
        }
      `}</style>
    </section>
  );
}
