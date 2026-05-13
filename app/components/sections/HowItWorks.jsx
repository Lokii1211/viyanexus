"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Search, Rocket, BarChart3, ArrowRight, Zap } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20book%20a%20free%20strategy%20call";

const steps = [
  {
    icon: Phone, num: "01", title: "Free Strategy Call",
    desc: "30-minute call. We audit your current workflow, find the bottlenecks, and show you exactly where automation will save time and money.",
    time: "Day 1", detail: "No pitch. No pressure. Just clarity.",
    color: "#E8B84B",
  },
  {
    icon: Search, num: "02", title: "Custom Blueprint",
    desc: "We design your automation architecture — which bots, which integrations, which flows. You approve everything before we build.",
    time: "Day 2-3", detail: "You see the plan. You own the plan.",
    color: "#3B82F6",
  },
  {
    icon: Rocket, num: "03", title: "We Build & Deploy",
    desc: "Our engineers build your AI agents, test them rigorously, and deploy to your WhatsApp, Instagram, or phone system.",
    time: "Day 4-7", detail: "Zero downtime. Zero disruption.",
    color: "#16A34A",
  },
  {
    icon: BarChart3, num: "04", title: "You Scale Effortlessly",
    desc: "Your AI handles 80% of conversations. You focus on growth. We monitor, optimize, and iterate monthly.",
    time: "Day 7+", detail: "We don't disappear after delivery.",
    color: "#A855F7",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-pad" style={{ background: "#0A0C12", position: "relative", overflow: "hidden" }} ref={ref}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(201,145,10,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">HOW IT WORKS</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="section-title" style={{ marginBottom: "16px" }}>
            From Call to <span className="gradient-text">Live in 7 Days</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="section-sub" style={{ margin: "0 auto" }}>
            No 3-month timelines. No scope creep. Four steps to a business that runs itself.
          </motion.p>
        </div>

        {/* Timeline Steps */}
        <div className="timeline-grid">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="step-card"
                style={{ position: "relative" }}
              >
                {/* Numbered badge — large */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  marginBottom: "20px",
                }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: `${s.color}12`,
                    border: `2px solid ${s.color}35`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 900,
                    color: s.color, flexShrink: 0,
                    boxShadow: `0 0 20px ${s.color}10`,
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    flex: 1, height: "2px",
                    background: `linear-gradient(to right, ${s.color}30, transparent)`,
                  }} className="step-connector" />
                </div>

                {/* Time badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  padding: "4px 10px", marginBottom: "14px",
                  background: `${s.color}08`, border: `1px solid ${s.color}18`,
                  fontFamily: "var(--font-mono)", fontSize: "9px",
                  color: s.color, textTransform: "uppercase", letterSpacing: "0.1em",
                }}>
                  <Zap size={8} /> {s.time}
                </div>

                {/* Icon */}
                <div style={{
                  width: "44px", height: "44px", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  background: `${s.color}08`, border: `1px solid ${s.color}15`,
                  marginBottom: "14px",
                }}>
                  <Icon size={20} style={{ color: s.color }} />
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "8px" }}>
                  {s.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.7, marginBottom: "12px" }}>
                  {s.desc}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: `${s.color}90`, letterSpacing: "0.05em" }}>
                  → {s.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Final badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1 }}
          style={{
            textAlign: "center", margin: "32px auto 0",
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "10px 24px",
            background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.15)",
            fontFamily: "var(--font-mono)", fontSize: "11px", color: "#16A34A",
            textTransform: "uppercase", letterSpacing: "0.1em",
          }}
          className="final-badge-wrap"
        >
          🚀 You&apos;re Live — Business Running on Autopilot
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.1 }}
          style={{ textAlign: "center", marginTop: "32px" }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00",
              padding: "14px 32px", fontFamily: "var(--font-mono)",
              textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px",
              fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(201,145,10,0.25)",
            }}>
            Start Your 7-Day Transformation <ArrowRight size={14} />
          </a>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.2)", marginTop: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Free strategy call • No credit card • 30-day support included
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .step-card {
          padding: 28px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }
        .step-card:hover {
          background: rgba(201,145,10,0.02);
          border-color: rgba(201,145,10,0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }
        .step-connector { display: none; }
        .final-badge-wrap { display: flex; justify-content: center; width: 100%; }
        @media (min-width: 768px) {
          .timeline-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .step-connector { display: block; }
        }
        @media (min-width: 1024px) {
          .timeline-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
