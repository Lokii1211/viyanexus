"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20know%20about%20";

const services = [
  { num: "01", name: "WhatsApp Automation", desc: "Replaces manual WhatsApp replies that take 2–4 hours/day with high-volume CRM integrated engagement protocols.", featured: false, wide: true, moduleRef: "WA-01" },
  { num: "02", name: "Voice AI Assistant", desc: "Eliminate missed calls and overwhelmed receptionists. Our AI handles inbound support and outbound scheduling with near-zero latency.", featured: true, wide: true, moduleRef: "V-AI", badges: ["Inbound Routing", "Outbound Campaigns"] },
  { num: "03", name: "AI Business Chatbot", desc: "Replaces expensive customer support staff for all routine queries.", featured: false, wide: false, moduleRef: "CB-03" },
  { num: "04", name: "Web Design & Dev", desc: "Replaces outdated sites that embarrass you in high-stakes client calls.", featured: false, wide: false, moduleRef: "WEB-04" },
  { num: "05", name: "Marketing Automation", desc: "Fixes inconsistent follow-ups and captures every lost lead opportunity.", featured: false, wide: false, moduleRef: "MKT-05" },
  { num: "06", name: "Full Automation Stack", desc: "Replaces fragmented systems and constant firefighting with a single unit.", featured: false, wide: false, moduleRef: "FAS-06", tag: "POPULAR" },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-pad" style={{ background: "#06080D", position: "relative", overflow: "hidden" }} ref={ref}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(201,145,10,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.span initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
            style={{ fontFamily: "var(--font-mono)", color: "#C9910A", letterSpacing: "0.2em", fontSize: "12px", textTransform: "uppercase", display: "block", marginBottom: "24px" }}>
            Our Services
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)", color: "white", lineHeight: 1.1, marginBottom: "16px", letterSpacing: "-0.02em", fontWeight: 700 }}>
            Six ways we put your business on autopilot.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "#71717a" }}>
            Every service is built to work while you sleep.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className={s.wide ? "service-card-wide" : "service-card"}
              style={{
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                background: "#0F1219",
                borderTop: s.featured ? "2px solid rgba(201,145,10,0.5)" : "1px solid rgba(201,145,10,0.08)",
                borderLeft: "1px solid rgba(201,145,10,0.08)",
                borderRight: "1px solid rgba(201,145,10,0.08)",
                borderBottom: "1px solid rgba(201,145,10,0.08)",
                borderRadius: "2px",
                padding: s.wide ? "36px" : "28px",
                minHeight: s.wide ? "300px" : "260px",
                transition: "border-color 0.4s",
              }}
            >
              <div>
                {/* Featured / Tag badge — own row */}
                {s.featured && (
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ background: "#C9910A", color: "#422d00", fontFamily: "var(--font-mono)", fontSize: "9px", padding: "4px 12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>★ Most Demanded</span>
                  </div>
                )}
                {s.tag && (
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ background: "#52525b", color: "white", fontFamily: "var(--font-mono)", fontSize: "9px", padding: "4px 10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.tag}</span>
                  </div>
                )}

                {/* Number + Module */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,145,10,0.1)", border: "1px solid rgba(201,145,10,0.2)" }}>
                    <span style={{ color: "#C9910A", fontSize: "16px", fontWeight: 700 }}>{s.num}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.15)" }}>{s.moduleRef}</span>
                </div>

                {/* Title + Desc */}
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "white", marginBottom: "10px", lineHeight: 1.3, fontSize: s.wide ? "22px" : "17px" }}>
                  {s.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", color: "#a1a1aa", lineHeight: 1.7, fontSize: "13px", maxWidth: s.wide ? "400px" : "none" }}>
                  {s.desc}
                </p>
              </div>

              {/* Footer */}
              <div style={{ marginTop: "24px" }}>
                {s.badges && (
                  <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)", marginBottom: "16px" }}>
                    {s.badges.map((b, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C9910A" }} />
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
                <a href={`${WA_LINK}${encodeURIComponent(s.name)}`} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C9910A", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  → See How It Works <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }
          .service-card-wide { grid-column: span 2; }
          .service-card { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
