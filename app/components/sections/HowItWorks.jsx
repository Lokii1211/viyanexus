"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones, FileText, Settings, Rocket, Shield, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20book%20a%20free%20strategy%20call";

const steps = [
  { num: "01", icon: <Headphones size={22} />, title: "Free Strategy Call", day: "Day 0", desc: "30-minute call where we understand your business, your biggest manual time-sinks, and exactly what automation will do for you.", tag: "NO COMMITMENT" },
  { num: "02", icon: <FileText size={22} />, title: "Custom Blueprint", day: "Day 1–2", desc: "We design your complete automation workflow — which tools, which triggers, which messages. You see the plan before we write a single line.", tag: "FULL TRANSPARENCY" },
  { num: "03", icon: <Settings size={22} />, title: "We Build", day: "Day 2–6", desc: "Our team builds your WhatsApp bot, voice agent, chatbot, or full stack — tested, optimised, and ready to handle real conversations.", tag: "7-DAY DELIVERY" },
  { num: "04", icon: <Rocket size={22} />, title: "You Grow", day: "Day 7+", desc: "Go live. Watch leads convert on autopilot. We monitor the first 30 days, fix anything, and make sure it performs exactly as promised.", tag: "30-DAY SUPPORT" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-pad" style={{ background: "#0A0C12", position: "relative" }} ref={ref}>
      <div className="container-main">
        {/* Header */}
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">THE PROCESS</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title">
            From inquiry to automation — in 7 days.
          </motion.h2>
        </div>

        {/* 4-Column Grid */}
        <div className="process-grid">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              style={{ position: "relative" }}
            >
              {/* Ghost Number */}
              <div style={{ position: "absolute", top: "-24px", left: 0, fontFamily: "var(--font-display)", fontSize: "100px", fontWeight: 700, color: "rgba(201,145,10,0.04)", pointerEvents: "none", lineHeight: 1, userSelect: "none" }}>
                {step.num}
              </div>

              <div className="glass-panel" style={{ padding: "28px", position: "relative", zIndex: 10, transition: "border-color 0.5s" }}>
                <span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9910A", marginBottom: "16px" }}>
                  {step.day}
                </span>

                <div style={{ width: "40px", height: "40px", background: "rgba(201,145,10,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9910A", marginBottom: "16px" }}>
                  {step.icon}
                </div>

                <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px", lineHeight: 1.3, color: "#F0EDE8" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#8B8880", lineHeight: 1.7, marginBottom: "12px" }}>
                  {step.desc}
                </p>
                <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A4845" }}>
                  {step.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="glass-panel guarantee-box"
          style={{ marginTop: "48px", padding: "32px", borderColor: "rgba(201,145,10,0.2)" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}>
            <Shield size={28} style={{ color: "#C9910A" }} />
            <p style={{ fontSize: "15px", color: "#F0EDE8", maxWidth: "500px" }}>
              <strong>7-Day Guarantee:</strong> If we miss the delivery timeline for any reason — you get a full refund on the advance. No questions asked.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
              style={{ background: "#C9910A", color: "#422d00", padding: "14px 32px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", marginTop: "8px" }}>
              Start Now <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .process-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
