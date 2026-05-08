"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Phone, Globe, BarChart3, Workflow, Megaphone, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20need%20help%20with%20automation";

const services = [
  {
    icon: MessageSquare, title: "WhatsApp AI Chatbot",
    short: "24/7 sales & support on autopilot",
    image: "/services/whatsapp.png",
    desc: "Custom-trained AI that handles enquiries, qualifies leads, takes orders, schedules appointments, and sends follow-ups — all through WhatsApp Business API.",
    features: ["Menu browsing & ordering", "Lead qualification", "Appointment booking", "Auto follow-ups", "Multi-language support"],
    result: "94% fewer manual replies",
    popular: true,
  },
  {
    icon: Phone, title: "AI Voice Agent",
    short: "Never miss a call again",
    image: "/services/voiceai.png",
    desc: "AI-powered virtual receptionist that answers calls 24/7, books appointments, handles FAQs, and routes complex queries to your team.",
    features: ["24/7 call handling", "Appointment scheduling", "Natural conversation", "Call transcription", "CRM integration"],
    result: "96% call resolution rate",
    popular: false,
  },
  {
    icon: Globe, title: "Web Development",
    short: "High-converting websites in 7 days",
    image: "/services/webdev.png",
    desc: "Custom-built, mobile-first websites optimized for speed, SEO, and conversions. Landing pages, business sites, and e-commerce platforms that turn visitors into paying customers.",
    features: ["Mobile-first design", "SEO optimization", "WhatsApp CTA integration", "Speed optimized (<2s load)", "Analytics built-in", "Hosting & maintenance"],
    result: "2.3x more leads captured",
    popular: false,
  },
  {
    icon: Megaphone, title: "Digital Marketing",
    short: "Grow your brand, drive real revenue",
    image: "/services/marketing.png",
    desc: "Data-driven digital marketing campaigns across Google Ads, Meta Ads, and organic channels. We don't just drive traffic — we drive qualified leads that convert.",
    features: ["Google & Meta Ads", "SEO & content strategy", "Social media management", "Email marketing automation", "Monthly ROI reports", "Competitor analysis"],
    result: "3.5x average ROAS",
    popular: false,
  },
  {
    icon: Workflow, title: "Workflow Automation",
    short: "Connect everything, automate anything",
    image: "/services/workflow.png",
    desc: "End-to-end business process automation — from lead capture to invoicing. We connect your CRM, calendar, payment gateway, and communication channels.",
    features: ["Multi-tool integration", "Custom workflows", "Error handling", "Auto-notifications", "Real-time sync"],
    result: "4+ hours saved daily",
    popular: false,
  },
  {
    icon: BarChart3, title: "Analytics & Optimization",
    short: "Data-driven decisions, monthly",
    image: null,
    desc: "Monthly performance reports with actionable insights. We continuously optimize your automations based on real conversation data and conversion metrics.",
    features: ["Monthly reports", "Conversion tracking", "Bot optimization", "ROI dashboards", "Growth recommendations"],
    result: "Continuous improvement",
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" className="section-pad" style={{ background: "#0F1219", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "30%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(201,145,10,0.025) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">WHAT WE BUILD</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="section-title" style={{ marginBottom: "16px" }}>
            Solutions That <span className="gradient-text">Actually Work</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="section-sub" style={{ margin: "0 auto" }}>
            Not generic templates. Custom-engineered solutions built for your business, your customers, your growth.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "14px" }}>
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
                  background: isOpen ? "#0D0F16" : "#0A0C12",
                  border: isOpen ? "1px solid rgba(201,145,10,0.2)" : "1px solid rgba(255,255,255,0.04)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                {/* Top glow line on expand */}
                <motion.div
                  animate={{ opacity: isOpen ? 0.8 : 0 }}
                  style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, #C9910A, transparent)" }}
                />

                {s.popular && (
                  <div style={{
                    position: "absolute", top: "12px", right: "12px", zIndex: 3,
                    background: "rgba(201,145,10,0.12)", border: "1px solid rgba(201,145,10,0.2)",
                    padding: "3px 10px", fontFamily: "var(--font-mono)", fontSize: "8px",
                    color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.12em",
                  }}>★ Most Popular</div>
                )}

                {/* Service image */}
                {s.image && (
                  <div style={{ position: "relative", width: "100%", height: "140px", overflow: "hidden" }}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      sizes="(max-width: 768px) 100vw, 340px"
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, #0A0C12 5%, rgba(10,12,18,0.3) 50%, rgba(10,12,18,0.6) 100%)",
                    }} />
                  </div>
                )}

                {/* No image fallback — gradient header */}
                {!s.image && (
                  <div style={{
                    width: "100%", height: "140px",
                    background: "linear-gradient(135deg, rgba(201,145,10,0.06), rgba(201,145,10,0.02), rgba(168,85,247,0.04))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={40} style={{ color: "rgba(201,145,10,0.15)" }} />
                  </div>
                )}

                <div style={{ padding: "16px 20px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{
                        width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(201,145,10,0.06)", border: "1px solid rgba(201,145,10,0.1)",
                        flexShrink: 0,
                      }}>
                      <Icon size={17} style={{ color: "#C9910A" }} />
                    </motion.div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "white" }}>{s.title}</h3>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.short}</p>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronRight size={16} style={{ color: isOpen ? "#C9910A" : "rgba(255,255,255,0.15)" }} />
                    </motion.div>
                  </div>

                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", lineHeight: 1.7, marginBottom: isOpen ? "14px" : "0" }}>{s.desc}</p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
                          {s.features.map((f, j) => (
                            <motion.span key={j}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: j * 0.04 }}
                              style={{
                                padding: "4px 10px", background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                fontFamily: "var(--font-mono)", fontSize: "9px",
                                color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em",
                              }}>✓ {f}</motion.span>
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
                              transition: "all 0.3s",
                            }}>
                            Get This <ArrowRight size={10} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .service-card:hover {
          border-color: rgba(201,145,10,0.12) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
        }
      `}</style>
    </section>
  );
}
