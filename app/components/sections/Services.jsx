"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Phone, Bot, BarChart3, Globe, Workflow, ArrowRight, ChevronRight } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20need%20help%20with%20automation";

const services = [
  {
    icon: MessageSquare, title: "WhatsApp AI Chatbot",
    short: "24/7 sales & support on autopilot",
    desc: "Custom-trained AI that handles enquiries, qualifies leads, takes orders, schedules appointments, and sends follow-ups — all through WhatsApp Business API.",
    features: ["Menu browsing & ordering", "Lead qualification", "Appointment booking", "Auto follow-ups", "Multi-language support"],
    result: "94% fewer manual replies",
    popular: true,
  },
  {
    icon: Phone, title: "AI Voice Agent",
    short: "Never miss a call again",
    desc: "AI-powered virtual receptionist that answers calls 24/7, books appointments, handles FAQs, and routes complex queries to your team.",
    features: ["24/7 call handling", "Appointment scheduling", "Natural conversation", "Call transcription", "CRM integration"],
    result: "96% call resolution rate",
    popular: false,
  },
  {
    icon: Bot, title: "Instagram DM Bot",
    short: "Convert followers into customers",
    desc: "Automated Instagram DM responses for story mentions, comments, and direct enquiries. Qualifies leads and pushes them to WhatsApp.",
    features: ["Story reply automation", "Comment triggers", "Lead capture forms", "WhatsApp handoff", "Analytics dashboard"],
    result: "40% more conversions",
    popular: false,
  },
  {
    icon: Workflow, title: "Workflow Automation",
    short: "Connect everything, automate anything",
    desc: "End-to-end business process automation — from lead capture to invoicing. We connect your CRM, calendar, payment gateway, and communication channels.",
    features: ["Multi-tool integration", "Custom workflows", "Error handling", "Auto-notifications", "Real-time sync"],
    result: "4+ hours saved daily",
    popular: false,
  },
  {
    icon: Globe, title: "AI Landing Pages",
    short: "High-converting pages in 48 hours",
    desc: "Conversion-optimized landing pages with integrated WhatsApp CTAs, lead capture, and analytics. Built to convert traffic into paying customers.",
    features: ["Mobile-first design", "WhatsApp CTA integration", "A/B testing ready", "Speed optimized", "Analytics built-in"],
    result: "2.3x more leads captured",
    popular: false,
  },
  {
    icon: BarChart3, title: "Analytics & Optimization",
    short: "Data-driven decisions, monthly",
    desc: "Monthly performance reports with actionable insights. We continuously optimize your automations based on real conversation data and conversion metrics.",
    features: ["Monthly reports", "Conversion tracking", "Bot optimization", "ROI dashboards", "Growth recommendations"],
    result: "Continuous improvement",
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" className="section-pad" style={{ background: "#0F1219", position: "relative", overflow: "hidden" }} ref={ref}>
      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">WHAT WE BUILD</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="section-title" style={{ marginBottom: "16px" }}>
            AI Solutions That <span className="gradient-text">Actually Work</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="section-sub" style={{ margin: "0 auto" }}>
            Not generic chatbots. Custom-engineered AI agents trained on your business, your tone, your customers.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "16px" }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isOpen = expanded === i;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                onClick={() => setExpanded(isOpen ? null : i)}
                className="service-card"
                style={{
                  background: "#0A0C12",
                  border: isOpen ? "1px solid rgba(201,145,10,0.2)" : "1px solid rgba(255,255,255,0.04)",
                  padding: "28px",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                {s.popular && (
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "rgba(201,145,10,0.12)", border: "1px solid rgba(201,145,10,0.2)",
                    padding: "3px 10px", fontFamily: "var(--font-mono)", fontSize: "8px",
                    color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.12em",
                  }}>★ Most Popular</div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                  <div style={{
                    width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(201,145,10,0.06)", border: "1px solid rgba(201,145,10,0.1)",
                    flexShrink: 0,
                  }}>
                    <Icon size={18} style={{ color: "#C9910A" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "white" }}>{s.title}</h3>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.short}</p>
                  </div>
                  <ChevronRight size={16} style={{ color: "rgba(255,255,255,0.2)", transform: isOpen ? "rotate(90deg)" : "rotate(0)", transition: "transform 0.3s" }} />
                </div>

                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.7, marginBottom: isOpen ? "16px" : "0" }}>{s.desc}</p>

                {/* Expandable content */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                    {s.features.map((f, j) => (
                      <span key={j} style={{
                        padding: "4px 10px", background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        fontFamily: "var(--font-mono)", fontSize: "9px",
                        color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em",
                      }}>✓ {f}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#E8B84B", fontWeight: 700 }}>📈 {s.result}</span>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="cta-btn-animate"
                      style={{
                        padding: "8px 16px", background: "rgba(201,145,10,0.1)",
                        border: "1px solid rgba(201,145,10,0.2)",
                        fontFamily: "var(--font-mono)", fontSize: "10px",
                        color: "#C9910A", textDecoration: "none",
                        textTransform: "uppercase", letterSpacing: "0.1em",
                        display: "inline-flex", alignItems: "center", gap: "6px",
                      }}>
                      Get This <ArrowRight size={10} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .service-card:hover {
          border-color: rgba(201,145,10,0.15) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}
