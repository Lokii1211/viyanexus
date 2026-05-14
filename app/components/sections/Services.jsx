"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Phone, Globe, BarChart3, Workflow, Megaphone, ArrowRight, ChevronRight } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20need%20help%20with%20automation";

/* Premium CSS-based service visuals */
function ServiceVisual({ type, color }) {
  const base = { width: "100%", height: "160px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
  const glow = { position: "absolute", width: "200px", height: "200px", borderRadius: "50%", filter: "blur(60px)", opacity: 0.15 };

  if (type === "whatsapp") return (
    <div style={{ ...base, background: "linear-gradient(135deg, #0a120e 0%, #0d1a14 100%)" }}>
      <div style={{ ...glow, background: "#25D366", top: "-40%", right: "-10%" }} />
      <div style={{ display: "flex", gap: "8px", alignItems: "flex-end", zIndex: 2 }}>
        {/* Chat bubbles */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ background: "#DCF8C6", borderRadius: "12px 12px 12px 2px", padding: "8px 14px", maxWidth: "140px" }}>
            <div style={{ fontSize: "9px", color: "#1a1a1a", fontFamily: "var(--font-body)" }}>Hi, I'd like to order 🍕</div>
          </div>
          <div style={{ background: "#DCF8C6", borderRadius: "12px 12px 12px 2px", padding: "8px 14px", maxWidth: "160px" }}>
            <div style={{ fontSize: "9px", color: "#1a1a1a", fontFamily: "var(--font-body)" }}>What's available today?</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "12px 12px 2px 12px", padding: "8px 14px", maxWidth: "150px" }}>
            <div style={{ fontSize: "8px", color: "#25D366", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>🤖 AI BOT</div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)", marginTop: "2px" }}>Here's today's menu! 📋</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px 12px 2px 12px", padding: "8px 14px" }}>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}>Order placed ✅ ETA 25min</div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to top, #0A0C12, transparent)" }} />
    </div>
  );

  if (type === "voiceai") return (
    <div style={{ ...base, background: "linear-gradient(135deg, #0a0c18 0%, #0f1125 100%)" }}>
      <div style={{ ...glow, background: "#3B82F6", top: "-30%", left: "20%" }} />
      <div style={{ zIndex: 2, textAlign: "center" }}>
        {/* Avatar circle */}
        <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "linear-gradient(135deg, #3B82F6, #60A5FA)", margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)", border: "2px solid rgba(96,165,250,0.3)" }}>
          <Phone size={20} style={{ color: "white" }} />
        </div>
        {/* Waveform */}
        <div style={{ display: "flex", gap: "3px", justifyContent: "center", alignItems: "center", height: "24px" }}>
          {[14, 20, 28, 18, 24, 30, 16, 22, 26, 12, 20, 28, 14, 22].map((h, i) => (
            <motion.div key={i} animate={{ height: [h * 0.3, h, h * 0.3] }} transition={{ duration: 0.8 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "2px", background: `linear-gradient(to top, #3B82F6, #60A5FA)`, borderRadius: "1px", opacity: 0.6 + (i % 3) * 0.15 }} />
          ))}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(59,130,246,0.6)", marginTop: "6px", letterSpacing: "0.1em" }}>LIVE • AI AGENT SPEAKING</div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to top, #0A0C12, transparent)" }} />
    </div>
  );

  if (type === "webdev") return (
    <div style={{ ...base, background: "linear-gradient(135deg, #0a0c12 0%, #12110d 100%)" }}>
      <div style={{ ...glow, background: "#E8B84B", top: "-30%", right: "10%" }} />
      <div style={{ zIndex: 2, width: "200px" }}>
        {/* Mini browser frame */}
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "4px", padding: "6px 8px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#EF4444" }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#EAB308" }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#22C55E" }} />
            <div style={{ flex: 1, height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginLeft: "4px" }} />
          </div>
          <div style={{ padding: "10px" }}>
            <div style={{ height: "4px", width: "60%", background: "rgba(201,145,10,0.3)", borderRadius: "2px", marginBottom: "6px" }} />
            <div style={{ height: "3px", width: "90%", background: "rgba(255,255,255,0.06)", borderRadius: "2px", marginBottom: "4px" }} />
            <div style={{ height: "3px", width: "75%", background: "rgba(255,255,255,0.04)", borderRadius: "2px", marginBottom: "8px" }} />
            <div style={{ display: "flex", gap: "4px" }}>
              <div style={{ flex: 1, height: "24px", background: "rgba(201,145,10,0.08)", borderRadius: "2px" }} />
              <div style={{ flex: 1, height: "24px", background: "rgba(255,255,255,0.03)", borderRadius: "2px" }} />
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "7px", color: "rgba(201,145,10,0.4)", marginTop: "6px", textAlign: "center", letterSpacing: "0.08em" }}>LOAD TIME: 1.2s • MOBILE OPTIMIZED</div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to top, #0F1219, transparent)" }} />
    </div>
  );

  if (type === "marketing") return (
    <div style={{ ...base, background: "linear-gradient(135deg, #120d0a 0%, #1a120d 100%)" }}>
      <div style={{ ...glow, background: "#F97316", top: "-30%", left: "30%" }} />
      <div style={{ zIndex: 2, display: "flex", gap: "12px", alignItems: "flex-end" }}>
        {/* Bar chart */}
        {[{ h: 30, l: "Jan" }, { h: 42, l: "Feb" }, { h: 38, l: "Mar" }, { h: 55, l: "Apr" }, { h: 68, l: "May" }, { h: 82, l: "Jun" }].map((b, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <motion.div initial={{ height: 0 }} animate={{ height: b.h }} transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              style={{ width: "18px", background: `linear-gradient(to top, #F97316, #FBBF24)`, borderRadius: "2px 2px 0 0", opacity: 0.4 + i * 0.12 }} />
            <div style={{ fontSize: "6px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.2)", marginTop: "4px" }}>{b.l}</div>
          </div>
        ))}
        <div style={{ position: "absolute", top: "12px", right: "16px", textAlign: "right" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 900, color: "#FBBF24" }}>3.5x</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "7px", color: "rgba(249,115,22,0.5)", letterSpacing: "0.08em" }}>AVG ROAS</div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to top, #0A0C12, transparent)" }} />
    </div>
  );

  if (type === "workflow") return (
    <div style={{ ...base, background: "linear-gradient(135deg, #0d0a14 0%, #110d1a 100%)" }}>
      <div style={{ ...glow, background: "#A855F7", top: "-20%", left: "40%" }} />
      <div style={{ zIndex: 2, display: "flex", alignItems: "center", gap: "6px" }}>
        {/* Pipeline nodes */}
        {["Lead", "Qualify", "CRM", "Follow-up", "Close"].map((n, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.15 }}
              style={{ width: "36px", height: "36px", borderRadius: "8px", background: `rgba(168,85,247,${0.08 + i * 0.04})`, border: `1px solid rgba(168,85,247,${0.15 + i * 0.05})`, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
              <div style={{ fontSize: "6px", fontFamily: "var(--font-mono)", color: `rgba(168,85,247,${0.5 + i * 0.1})`, textAlign: "center", lineHeight: 1.2 }}>{n}</div>
            </motion.div>
            {i < 4 && <motion.div initial={{ width: 0 }} animate={{ width: 12 }} transition={{ delay: 0.4 + i * 0.15 }} style={{ height: "1px", background: "rgba(168,85,247,0.3)" }} />}
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to top, #0A0C12, transparent)" }} />
    </div>
  );

  // analytics fallback
  return (
    <div style={{ ...base, background: "linear-gradient(135deg, rgba(201,145,10,0.06), rgba(201,145,10,0.02), rgba(168,85,247,0.04))" }}>
      <BarChart3 size={40} style={{ color: "rgba(201,145,10,0.15)" }} />
    </div>
  );
}

const services = [
  { icon: MessageSquare, title: "WhatsApp AI Chatbot", short: "24/7 sales & support on autopilot", visual: "whatsapp",
    desc: "Custom-trained AI that handles enquiries, qualifies leads, takes orders, schedules appointments, and sends follow-ups — all through WhatsApp Business API.",
    features: ["Menu browsing & ordering", "Lead qualification", "Appointment booking", "Auto follow-ups", "Multi-language support"],
    result: "94% fewer manual replies", popular: true },
  { icon: Phone, title: "AI Voice Agent", short: "Never miss a call again", visual: "voiceai",
    desc: "AI-powered virtual receptionist that answers calls 24/7, books appointments, handles FAQs, and routes complex queries to your team.",
    features: ["24/7 call handling", "Appointment scheduling", "Natural conversation", "Call transcription", "CRM integration"],
    result: "96% call resolution rate", popular: false },
  { icon: Globe, title: "Web Development", short: "High-converting websites in 7 days", visual: "webdev",
    desc: "Custom-built, mobile-first websites optimized for speed, SEO, and conversions. Landing pages, business sites, and e-commerce platforms that turn visitors into paying customers.",
    features: ["Mobile-first design", "SEO optimization", "WhatsApp CTA integration", "Speed optimized (<2s load)", "Analytics built-in", "Hosting & maintenance"],
    result: "2.3x more leads captured", popular: false },
  { icon: Megaphone, title: "Digital Marketing", short: "Grow your brand, drive real revenue", visual: "marketing",
    desc: "Data-driven digital marketing campaigns across Google Ads, Meta Ads, and organic channels. We don't just drive traffic — we drive qualified leads that convert.",
    features: ["Google & Meta Ads", "SEO & content strategy", "Social media management", "Email marketing automation", "Monthly ROI reports", "Competitor analysis"],
    result: "3.5x average ROAS", popular: false },
  { icon: Workflow, title: "Workflow Automation", short: "Connect everything, automate anything", visual: "workflow",
    desc: "End-to-end business process automation — from lead capture to invoicing. We connect your CRM, calendar, payment gateway, and communication channels.",
    features: ["Multi-tool integration", "Custom workflows", "Error handling", "Auto-notifications", "Real-time sync"],
    result: "4+ hours saved daily", popular: false },
  { icon: BarChart3, title: "Analytics & Optimization", short: "Data-driven decisions, monthly", visual: "analytics",
    desc: "Monthly performance reports with actionable insights. We continuously optimize your automations based on real conversation data and conversion metrics.",
    features: ["Monthly reports", "Conversion tracking", "Bot optimization", "ROI dashboards", "Growth recommendations"],
    result: "Continuous improvement", popular: false },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" className="section-pad" style={{ background: "#0F1219", position: "relative", overflow: "hidden" }} ref={ref}>
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
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                onClick={() => setExpanded(isOpen ? null : i)} className="service-card"
                style={{ background: isOpen ? "#0D0F16" : "#0A0C12", border: isOpen ? "1px solid rgba(201,145,10,0.2)" : "1px solid rgba(255,255,255,0.04)", cursor: "pointer", position: "relative", overflow: "hidden", transition: "all 0.4s ease" }}>
                <motion.div animate={{ opacity: isOpen ? 0.8 : 0 }}
                  style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, #C9910A, transparent)" }} />
                {s.popular && (
                  <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 3, background: "rgba(201,145,10,0.12)", border: "1px solid rgba(201,145,10,0.2)", padding: "3px 10px", fontFamily: "var(--font-mono)", fontSize: "8px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.12em" }}>★ Most Popular</div>
                )}

                <ServiceVisual type={s.visual} />

                <div style={{ padding: "16px 20px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{ width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,145,10,0.06)", border: "1px solid rgba(201,145,10,0.1)", flexShrink: 0 }}>
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
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
                          {s.features.map((f, j) => (
                            <motion.span key={j} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: j * 0.04 }}
                              style={{ padding: "4px 10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>✓ {f}</motion.span>
                          ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#E8B84B", fontWeight: 700 }}>📈 {s.result}</span>
                          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="cta-btn-animate"
                            style={{ padding: "8px 16px", background: "rgba(201,145,10,0.1)", border: "1px solid rgba(201,145,10,0.2)", fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C9910A", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em", display: "inline-flex", alignItems: "center", gap: "6px", transition: "all 0.3s" }}>
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
      <style jsx>{`.service-card:hover { border-color: rgba(201,145,10,0.12) !important; transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.35); }`}</style>
    </section>
  );
}
