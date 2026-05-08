"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, CheckCircle, Quote } from "lucide-react";

const testimonials = [
  { quote: "Before Viya Nexus, I was personally answering WhatsApp from 7am to 11pm. Now the bot handles 90% of it. I got my evenings back.", name: "Priya R.", role: "Restaurant Owner, Chennai", service: "WhatsApp Automation", stars: 5 },
  { quote: "I was skeptical about AI calling my leads. But the Voice AI they built actually books appointments better than my receptionist.", name: "Karthik M.", role: "Healthcare Clinic, Coimbatore", service: "Voice AI Assistant", stars: 5 },
  { quote: "My real estate inquiries are now automatically sorted — bot handles cold leads, I only talk to serious buyers. Saved me 4 hours a day.", name: "Suresh V.", role: "Real Estate Agency, Bangalore", service: "WhatsApp + Lead Funnel", stars: 5 },
  { quote: "Enrollment conversions went up almost immediately after they set up the WhatsApp automation. The ROI was visible in week one.", name: "Deepa S.", role: "Online Coach, Mumbai", service: "Chatbot + Marketing", stars: 5 },
  { quote: "Honestly I was expecting a junior freelancer experience. Instead they delivered a full system that runs my customer support.", name: "Rajan T.", role: "D2C Brand Founder, Hyderabad", service: "Full Automation Stack", stars: 5 },
  { quote: "They delivered exactly what they promised in 7 days. In 8 years of hiring developers, that has never happened before.", name: "Anitha K.", role: "Education Center, Madurai", service: "Website + WhatsApp", stars: 5 },
  { quote: "The chatbot they built understands Tamil slang better than my own team. My customers love it.", name: "Vikram S.", role: "Retail Chain, Salem", service: "AI Chatbot", stars: 5 },
  { quote: "Our lead response went from 8 hours to 2 minutes. We're closing deals we used to lose every single day.", name: "Meera J.", role: "Property Developer, Pune", service: "WhatsApp Automation", stars: 5 },
];

export default function Testimonials() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Auto-scroll effect
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
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">WHAT CLIENTS SAY</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title">
            Businesses that stopped working weekends.
          </motion.h2>
          {/* Overall rating */}
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "12px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[0,1,2,3,4].map(i => (
                <Star key={i} size={14} style={{ color: "#E8B84B", fill: "#E8B84B" }} />
              ))}
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>5.0 / 5.0 from 30+ clients</span>
          </motion.div>
        </div>
      </div>

      {/* Horizontally scrolling testimonials */}
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
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            animate={{
              scale: hoveredIdx === i ? 1.03 : 1,
              y: hoveredIdx === i ? -6 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              padding: "24px", minWidth: "310px", maxWidth: "350px", flexShrink: 0,
              background: hoveredIdx === i ? "rgba(201,145,10,0.04)" : "rgba(255,255,255,0.02)",
              border: hoveredIdx === i ? "1px solid rgba(201,145,10,0.15)" : "1px solid rgba(255,255,255,0.04)",
              borderLeft: "3px solid #C9910A",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
              transition: "background 0.3s, border-color 0.3s",
              boxShadow: hoveredIdx === i ? "0 16px 48px rgba(0,0,0,0.3), 0 0 20px rgba(201,145,10,0.05)" : "none",
            }}
          >
            {/* Quote icon */}
            <Quote size={20} style={{
              position: "absolute", top: "12px", right: "12px",
              color: hoveredIdx === i ? "rgba(201,145,10,0.15)" : "rgba(255,255,255,0.03)",
              transition: "color 0.3s",
            }} />

            {/* Stars — ALL 5 */}
            <div style={{ display: "flex", gap: "2px", marginBottom: "14px" }}>
              {Array.from({ length: 5 }).map((_, j) => (
                <motion.div key={j}
                  animate={hoveredIdx === i ? { scale: [1, 1.3, 1], rotate: [0, 15, 0] } : {}}
                  transition={{ delay: j * 0.05, duration: 0.3 }}
                >
                  <Star size={13} style={{ color: "#E8B84B", fill: "#E8B84B" }} />
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <p style={{ color: "rgba(240,237,232,0.8)", fontSize: "13px", fontStyle: "italic", lineHeight: 1.7, marginBottom: "18px", fontFamily: "var(--font-body)" }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "34px", height: "34px",
                background: hoveredIdx === i ? "rgba(201,145,10,0.15)" : "rgba(201,145,10,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#E8B84B", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "14px", borderRadius: "50%",
                transition: "background 0.3s",
                border: hoveredIdx === i ? "1px solid rgba(201,145,10,0.2)" : "1px solid transparent",
              }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#F0EDE8" }}>{t.name}</p>
                <p style={{ fontSize: "9px", color: "#4A4845", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.role}</p>
              </div>
            </div>

            {/* Service tag */}
            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
              <CheckCircle size={9} style={{ color: "#16A34A" }} />
              <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "#C9910A", letterSpacing: "0.06em" }}>Verified — {t.service}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Social Proof Counter */}
      <div className="container-main">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          style={{ textAlign: "center", marginTop: "40px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "#4A4845", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          30+ verified client transformations &nbsp;•&nbsp; 5.0/5 average rating &nbsp;•&nbsp; 100% on-time delivery
        </motion.div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
