"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check, ArrowRight, Zap, Shield, Star } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20know%20about%20pricing";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for testing the waters",
    price: "₹15,000",
    period: "/one-time",
    savings: null,
    features: [
      "1 WhatsApp AI Chatbot",
      "Up to 500 conversations/mo",
      "Basic FAQ automation",
      "7-day delivery",
      "30-day support",
      "Performance report",
    ],
    notIncluded: ["Voice AI", "Instagram bot", "Custom integrations"],
    cta: "Get Started",
    popular: false,
    color: "#71717A",
  },
  {
    name: "Growth",
    tagline: "Most popular for scaling SMEs",
    price: "₹35,000",
    period: "/one-time",
    savings: "Save ₹25K vs hiring",
    features: [
      "WhatsApp AI + Instagram DM Bot",
      "Unlimited conversations",
      "Lead qualification flows",
      "CRM integration",
      "Multi-language support",
      "7-day delivery",
      "90-day priority support",
      "Monthly optimization reports",
    ],
    notIncluded: [],
    cta: "Most Popular — Get This",
    popular: true,
    color: "#C9910A",
  },
  {
    name: "Enterprise",
    tagline: "Full-stack AI transformation",
    price: "₹75,000",
    period: "/one-time",
    savings: "Save ₹2L+/year on staff",
    features: [
      "Everything in Growth",
      "AI Voice Agent (24/7 calls)",
      "Custom landing page",
      "Workflow automation suite",
      "Priority WhatsApp support",
      "Dedicated automation engineer",
      "Quarterly strategy sessions",
      "12-month support & optimization",
    ],
    notIncluded: [],
    cta: "Go Enterprise",
    popular: false,
    color: "#8B5CF6",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  /* Countdown timer for urgency */
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pricing" className="section-pad" style={{ background: "#06080D", position: "relative", overflow: "hidden" }} ref={ref}>
      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">PRICING</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="section-title" style={{ marginBottom: "16px" }}>
            Invest Once. <span className="gradient-text">Save Forever.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="section-sub" style={{ margin: "0 auto 24px" }}>
            One-time setup. No monthly fees. No hidden charges. Just automation that pays for itself within 30 days.
          </motion.p>

          {/* Urgency timer */}
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "12px",
              background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)",
              padding: "8px 20px",
            }}>
            <Zap size={14} style={{ color: "#EF4444" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Early-bird pricing ends in{" "}
              <strong>{String(timeLeft.h).padStart(2, "0")}:{String(timeLeft.m).padStart(2, "0")}:{String(timeLeft.s).padStart(2, "0")}</strong>
            </span>
          </motion.div>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "16px", alignItems: "stretch" }}>
          {plans.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="pricing-card"
              style={{
                background: p.popular ? "#0F1219" : "#0A0C12",
                border: p.popular ? "1px solid rgba(201,145,10,0.25)" : "1px solid rgba(255,255,255,0.04)",
                padding: "32px 28px",
                display: "flex", flexDirection: "column",
                position: "relative", overflow: "hidden",
                transition: "all 0.4s ease",
              }}
            >
              {/* Popular badge */}
              {p.popular && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: "linear-gradient(to right, #C9910A, #E8B84B)",
                }} />
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
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>{p.tagline}</p>

              {/* Price */}
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 900, color: p.color }}>{p.price}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{p.period}</span>
              </div>

              {p.savings && (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "4px",
                  marginBottom: "20px", width: "fit-content",
                  padding: "3px 8px", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.15)",
                }}>
                  <Shield size={10} style={{ color: "#16A34A" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#16A34A", letterSpacing: "0.04em" }}>{p.savings}</span>
                </div>
              )}

              {/* Features */}
              <div style={{ flex: 1, marginBottom: "24px" }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 0" }}>
                    <Check size={12} style={{ color: p.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="cta-btn-animate"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  width: "100%", padding: "14px",
                  background: p.popular ? "linear-gradient(135deg, #C9910A, #E8B84B)" : "transparent",
                  color: p.popular ? "#422d00" : p.color,
                  boxShadow: p.popular ? "none" : `inset 0 0 0 1px ${p.color}40`,
                  fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  textDecoration: "none", transition: "all 0.3s",
                }}>
                {p.cta} <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            💳 Secure payment via UPI, bank transfer, or card &nbsp;•&nbsp; 🔒 NDA available &nbsp;•&nbsp; 📞 Free consultation before you decide
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .pricing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}
