"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20know%20more%20about%20pricing";

const plans = [
  {
    name: "Starter",
    badge: "For businesses just starting",
    borderColor: "#A67C00",
    features: ["WhatsApp Business setup + auto-reply", "FAQ bot (up to 20 questions)", "Lead capture form integration", "1 landing page", "14-day post-delivery support"],
    bestFor: "Small restaurants, solo coaches, single-location businesses",
    cta: "Get Started →", ctaStyle: "outline", popular: false,
  },
  {
    name: "Growth",
    badge: "For businesses serious about scaling",
    borderColor: "#fabc3e",
    features: ["Full WhatsApp automation flow", "AI chatbot trained on your business", "Full website (5 pages, conversion-optimized)", "CRM integration", "WhatsApp broadcast campaign setup", "30-day post-delivery support", "1 month of free monitoring"],
    bestFor: "Real estate agents, growing coaching businesses, multi-location brands",
    cta: "Book Free Call →", ctaStyle: "primary", popular: true,
  },
  {
    name: "Scale",
    badge: "For businesses ready to fully automate",
    borderColor: "#8A9BAD",
    features: ["Everything in Growth", "Voice AI Assistant (inbound + outbound)", "Multi-platform automation (Insta + WA + Web)", "Complete marketing funnel + ads setup", "Monthly analytics dashboard", "Dedicated account manager"],
    bestFor: "D2C brands, healthcare chains, enterprise businesses, funded startups",
    cta: "Let's Talk →", ctaStyle: "silver", popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-pad dot-grid" style={{ background: "#06080D", position: "relative", minHeight: "100vh" }} ref={ref}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.span initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
            style={{ fontFamily: "var(--font-mono)", color: "#fabc3e", letterSpacing: "0.15em", fontSize: "12px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>
            INVESTMENT
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: "white", marginBottom: "24px", maxWidth: "700px", margin: "0 auto 24px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Transparent pricing. No surprise invoices.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "#a6b7ca" }}>
            All projects include 30 days of post-delivery support.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={plan.popular ? "pricing-card-popular" : "pricing-card"}
              style={{
                background: "#0F1219",
                padding: "40px 32px",
                display: "flex", flexDirection: "column",
                position: "relative",
                borderTop: `${plan.popular ? "4px" : "3px"} solid ${plan.borderColor}`,
                borderLeft: plan.popular ? "1px solid #52525b" : "1px solid #27272a",
                borderRight: plan.popular ? "1px solid #52525b" : "1px solid #27272a",
                borderBottom: plan.popular ? "1px solid #52525b" : "1px solid #27272a",
                borderRadius: "2px",
                boxShadow: plan.popular ? "0 0 50px rgba(201,145,10,0.1)" : "none",
              }}
            >
              {/* MOST POPULAR badge */}
              {plan.popular && (
                <div style={{ position: "absolute", top: "-16px", left: "50%", transform: "translateX(-50%)", background: "#fabc3e", padding: "4px 16px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#422d00", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>MOST POPULAR</span>
                </div>
              )}

              <div style={{ marginBottom: "32px" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", color: "#71717a", marginBottom: "12px" }}>{plan.badge}</p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: plan.popular ? "44px" : "36px", color: "#E8B84B", marginBottom: "8px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {plan.name}
                </h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.1em" }}>Custom quote based on your needs</p>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", marginBottom: "32px", background: plan.popular ? "linear-gradient(90deg, transparent, #c9910a, transparent)" : "linear-gradient(90deg, transparent, rgba(201,145,10,0.2), transparent)" }} />

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 48px 0", flex: 1 }}>
                {plan.features.map((feat, j) => (
                  <li key={j} style={{ display: "flex", gap: "12px", fontSize: "14px", color: plan.popular ? "#e4e4e7" : "#d4d4d8", marginBottom: "16px" }}>
                    <span style={{ fontSize: "16px", color: plan.ctaStyle === "silver" ? "#b7c8db" : "#fabc3e", flexShrink: 0 }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Best for + CTA */}
              <div>
                <p style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#71717a", textTransform: "uppercase", marginBottom: "24px", fontStyle: "italic" }}>Best for: {plan.bestFor}</p>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`cta-btn-animate${plan.ctaStyle === "primary" ? " cta-pulse" : ""}`}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "100%", padding: "16px 24px",
                    fontFamily: "var(--font-mono)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em",
                    textDecoration: "none",
                    ...(plan.ctaStyle === "primary"
                      ? { background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#18181b", fontWeight: 700 }
                      : plan.ctaStyle === "silver"
                      ? { borderTop: "1px solid #b7c8db", borderLeft: "1px solid #b7c8db", borderRight: "1px solid #b7c8db", borderBottom: "1px solid #b7c8db", color: "#b7c8db", background: "transparent" }
                      : { borderTop: "1px solid #fabc3e", borderLeft: "1px solid #fabc3e", borderRight: "1px solid #fabc3e", borderBottom: "1px solid #fabc3e", color: "#fabc3e", background: "transparent" }),
                  }}>
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          style={{ marginTop: "80px", textAlign: "center", borderTop: "1px solid #1c1c1e", paddingTop: "64px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "#d4d4d8", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Not sure which plan? Book a free 30-minute call. We&apos;ll tell you exactly what you need — and what you don&apos;t.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
            style={{ display: "inline-flex", alignItems: "center", gap: "12px", color: "#fabc3e", fontFamily: "var(--font-mono)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
            <MessageCircle size={16} />
            WhatsApp us — reply within 2 hours →
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: stretch;
        }
        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .pricing-card-popular {
            transform: scale(1.05);
            z-index: 10;
          }
        }
      `}</style>
    </section>
  );
}
