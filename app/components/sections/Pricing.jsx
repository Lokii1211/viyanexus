"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Star, Shield } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20know%20about%20pricing";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for testing the waters",
    features: [
      "1 WhatsApp AI Chatbot",
      "Up to 500 conversations/mo",
      "Basic FAQ automation",
      "7-day delivery",
      "30-day support",
      "Performance report",
    ],
    cta: "Get Started",
    popular: false,
    color: "#71717A",
  },
  {
    name: "Growth",
    tagline: "Most popular for scaling SMEs",
    features: [
      "WhatsApp AI + Website Landing Page",
      "Unlimited conversations",
      "Lead qualification flows",
      "CRM integration",
      "Multi-language support",
      "7-day delivery",
      "90-day priority support",
      "Monthly optimization reports",
    ],
    cta: "Most Popular — Talk to Us",
    popular: true,
    color: "#C9910A",
  },
  {
    name: "Enterprise",
    tagline: "Full-stack AI transformation",
    features: [
      "Everything in Growth",
      "AI Voice Agent (24/7 calls)",
      "Custom landing page",
      "Workflow automation suite",
      "Dedicated automation engineer",
      "Quarterly strategy sessions",
      "12-month support & optimization",
      "Priority WhatsApp support",
    ],
    cta: "Go Enterprise",
    popular: false,
    color: "#8B5CF6",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-pad" style={{ background: "#06080D", position: "relative", overflow: "hidden" }} ref={ref}>
      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">PLANS</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="section-title" style={{ marginBottom: "16px" }}>
            Choose Your <span className="gradient-text">Automation Level</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="section-sub" style={{ margin: "0 auto" }}>
            Every business is different. Pick a plan, and we&apos;ll custom-build the solution on a free strategy call.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "16px", alignItems: "stretch" }}>
          {plans.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="pricing-card"
              style={{
                background: p.popular ? "#0F1219" : "#0A0C12",
                border: p.popular ? "1px solid rgba(201,145,10,0.25)" : "1px solid rgba(255,255,255,0.04)",
                padding: "32px 24px", display: "flex", flexDirection: "column",
                position: "relative", overflow: "hidden", transition: "all 0.4s ease",
              }}
            >
              {p.popular && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, #C9910A, #E8B84B)" }} />
              )}
              {p.popular && (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  marginBottom: "16px", width: "fit-content",
                  background: "rgba(201,145,10,0.1)", border: "1px solid rgba(201,145,10,0.2)",
                  padding: "4px 10px",
                }}>
                  <Star size={10} style={{ color: "#C9910A", fill: "#C9910A" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.12em" }}>Most Demanded</span>
                </div>
              )}

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "4px" }}>{p.name}</h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "24px" }}>{p.tagline}</p>

              {/* Features */}
              <div style={{ flex: 1, marginBottom: "24px" }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 0" }}>
                    <Check size={12} style={{ color: p.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  width: "100%", padding: "14px",
                  background: p.popular ? "linear-gradient(135deg, #C9910A, #E8B84B)" : "transparent",
                  color: p.popular ? "#422d00" : p.color,
                  boxShadow: p.popular ? "0 4px 20px rgba(201,145,10,0.2)" : `inset 0 0 0 1px ${p.color}40`,
                  fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none",
                  transition: "all 0.3s",
                }}>
                {p.cta} <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          style={{ textAlign: "center", marginTop: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.12)" }}>
            <Shield size={12} style={{ color: "#16A34A" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.08em" }}>Custom pricing based on your needs — book a free call to get your quote</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .pricing-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
      `}</style>
    </section>
  );
}
