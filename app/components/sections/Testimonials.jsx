"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, CheckCircle, Quote } from "lucide-react";

const testimonials = [
  { quote: "Before Viya Nexus, I was personally answering WhatsApp from 7am to 11pm. Now the bot handles 90% of it. I got my evenings back.", name: "Priya R.", role: "Owner", company: "SpiceRoute Restaurant", service: "WhatsApp Automation", stars: 5, avatar: "PR", color: "#E8B84B" },
  { quote: "I was skeptical about AI calling my leads. But the Voice AI they built actually books appointments better than my receptionist.", name: "Karthik M.", role: "Director", company: "MedCare Clinic", service: "Voice AI Assistant", stars: 5, avatar: "KM", color: "#3B82F6" },
  { quote: "My real estate inquiries are now automatically sorted — bot handles cold leads, I only talk to serious buyers. Saved me 4 hours a day.", name: "Suresh V.", role: "MD", company: "Emerald Realty", service: "WhatsApp + Lead Funnel", stars: 5, avatar: "SV", color: "#16A34A" },
  { quote: "Enrollment conversions went up almost immediately after they set up the WhatsApp automation. The ROI was visible in week one.", name: "Deepa S.", role: "Founder", company: "FitCoach Online", service: "Chatbot + Marketing", stars: 5, avatar: "DS", color: "#A855F7" },
  { quote: "Honestly I was expecting a junior freelancer experience. Instead they delivered a full system that runs my customer support.", name: "Rajan T.", role: "Founder", company: "StyleBox D2C", service: "Full Automation Stack", stars: 5, avatar: "RT", color: "#F97316" },
  { quote: "They delivered exactly what they promised in 7 days. In 8 years of hiring developers, that has never happened before.", name: "Anitha K.", role: "Director", company: "EduSpark Academy", service: "Website + WhatsApp", stars: 5, avatar: "AK", color: "#14B8A6" },
  { quote: "The chatbot they built understands Tamil slang better than my own team. My customers love it.", name: "Vikram S.", role: "CEO", company: "FreshKart Groceries", service: "AI Chatbot", stars: 5, avatar: "VS", color: "#EC4899" },
  { quote: "Our lead response went from 8 hours to 2 minutes. We're closing deals we used to lose every single day.", name: "Meera J.", role: "VP Sales", company: "AutoParts Hub", service: "WhatsApp Automation", stars: 5, avatar: "MJ", color: "#EAB308" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId;
    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += 0.5;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          container.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(scroll);
    };
    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <section className="section-pad" style={{ background: "#06080D", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "500px", height: "400px", background: "radial-gradient(ellipse, rgba(201,145,10,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">WHAT CLIENTS SAY</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title">
            Businesses That <span className="gradient-text">Stopped Working Weekends.</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[0,1,2,3,4].map(i => <Star key={i} size={14} style={{ color: "#E8B84B", fill: "#E8B84B" }} />)}
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>5.0 / 5.0 from 30+ clients</span>
          </motion.div>
        </div>
      </div>

      {/* Scrolling testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setHoveredIdx(null); }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        style={{
          display: "flex", gap: "16px",
          overflowX: "auto", overflowY: "hidden",
          padding: "0 24px 20px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none", msOverflowStyle: "none",
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            animate={{
              scale: hoveredIdx === i ? 1.02 : 1,
              y: hoveredIdx === i ? -4 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              padding: "28px", minWidth: "340px", maxWidth: "380px", flexShrink: 0,
              background: hoveredIdx === i ? "rgba(201,145,10,0.03)" : "rgba(255,255,255,0.015)",
              border: hoveredIdx === i ? "1px solid rgba(201,145,10,0.15)" : "1px solid rgba(255,255,255,0.04)",
              cursor: "default", position: "relative", overflow: "hidden",
              transition: "background 0.3s, border-color 0.3s",
              boxShadow: hoveredIdx === i ? "0 16px 48px rgba(0,0,0,0.3), 0 0 20px rgba(201,145,10,0.04)" : "none",
            }}
          >
            {/* Gold top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "2px",
              background: `linear-gradient(to right, transparent, ${t.color}, transparent)`,
              opacity: hoveredIdx === i ? 0.8 : 0.2,
              transition: "opacity 0.3s",
            }} />

            {/* Quote icon */}
            <Quote size={20} style={{
              position: "absolute", top: "14px", right: "14px",
              color: hoveredIdx === i ? "rgba(201,145,10,0.15)" : "rgba(255,255,255,0.03)",
              transition: "color 0.3s",
            }} />

            {/* Stars */}
            <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
              {Array.from({ length: 5 }).map((_, j) => (
                <motion.div key={j}
                  animate={hoveredIdx === i ? { scale: [1, 1.3, 1], rotate: [0, 15, 0] } : {}}
                  transition={{ delay: j * 0.05, duration: 0.3 }}>
                  <Star size={13} style={{ color: "#E8B84B", fill: "#E8B84B" }} />
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <p style={{ color: "rgba(240,237,232,0.8)", fontSize: "13.5px", fontStyle: "italic", lineHeight: 1.75, marginBottom: "20px", fontFamily: "var(--font-body)" }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author with avatar */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              {/* Avatar circle with initials + colored ring */}
              <div style={{
                width: "42px", height: "42px",
                borderRadius: "50%",
                background: `${t.color}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: t.color, fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "14px",
                border: `2px solid ${t.color}40`,
                boxShadow: hoveredIdx === i ? `0 0 12px ${t.color}20` : "none",
                transition: "box-shadow 0.3s",
                flexShrink: 0,
              }}>
                {t.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#F0EDE8", marginBottom: "2px" }}>{t.name}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.3 }}>{t.role}, {t.company}</p>
              </div>
            </div>

            {/* Service tag */}
            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
              <CheckCircle size={10} style={{ color: "#16A34A" }} />
              <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "#C9910A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Verified — {t.service}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom proof strip */}
      <div className="container-main">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          style={{
            textAlign: "center", marginTop: "40px",
            display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap",
          }}>
          {[
            { val: "30+", label: "Verified Clients" },
            { val: "5.0★", label: "Average Rating" },
            { val: "100%", label: "On-Time Delivery" },
            { val: "92%", label: "Repeat Rate" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 900, color: i === 1 ? "#E8B84B" : "white" }}>
                {s.val}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
