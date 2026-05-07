"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20book%20a%20free%20strategy%20call";

/* Shared button style — 100% inline, no CSS classes that might get stripped */
const btnShared = {
  width: "200px",
  height: "50px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "var(--font-mono)",
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textDecoration: "none",
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.3s",
};

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ position: "relative", padding: "80px 0", overflow: "hidden" }} ref={ref}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #8B6000, #C9910A 60%, #E8B84B)" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#06080D", fontSize: "clamp(28px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
          Ready to stop doing it manually?
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.15 }}
          style={{ color: "rgba(6,8,13,0.65)", fontSize: "clamp(15px, 1.5vw, 18px)", maxWidth: "500px", margin: "0 auto 36px", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
          Book a free 30-minute strategy call. No pitch. No commitment.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }}
          style={{ display: "flex", flexDirection: "row", gap: "0", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          {/* PRIMARY */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
            style={{ ...btnShared, background: "#06080D", color: "#E8B84B" }}>
            Book Free Call <ArrowRight size={14} />
          </a>
          {/* SECONDARY — same width/height, uses box-shadow for border (doesn't add size) */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
            style={{ ...btnShared, background: "transparent", color: "#06080D", boxShadow: "inset 0 0 0 2px #06080D" }}>
            <MessageCircle size={14} /> WhatsApp Us
          </a>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(6,8,13,0.5)", marginTop: "28px" }}>
          No credit card required &nbsp;•&nbsp; Reply within 2 hours &nbsp;•&nbsp; 7-day delivery
        </motion.p>
      </div>
    </section>
  );
}
