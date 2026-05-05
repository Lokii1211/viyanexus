"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  { q: "How fast can you actually deliver?", a: "7 business days for most projects. The clock starts from advance + all required details. For complex multi-platform builds, we'll give an honest timeline before you commit." },
  { q: "Do I need any technical knowledge?", a: "Zero. You run your business — we handle everything technical. After delivery, we walk you through it. Most clients manage their automation within 30 minutes of handover." },
  { q: "What happens if something breaks?", a: "All projects include 30 days of free support. If the bot breaks or misbehaves — we fix it within 24 hours. After 30 days, monthly support retainers from ₹5,000/month." },
  { q: "What is the Voice AI? Does it sound robotic?", a: "Our Voice AI uses the latest conversational AI — it sounds natural, speaks in your tone, handles complex conversations. Choose English, Tamil, Hindi, or Telugu. Most callers don't realize it's AI." },
  { q: "How is this different from a freelancer?", a: "Speed (7 days vs 6 weeks), System (everything works together), and Support (we're here after delivery). We specialize in Indian businesses — we understand your customers." },
  { q: "Can you integrate with my existing tools?", a: "Yes. Zoho, HubSpot, Salesforce, Calendly, Razorpay, PayU, Google Sheets. Tell us your stack before we start — we confirm integration before you pay." },
  { q: "Is WhatsApp automation legal?", a: "We use only Meta's official WhatsApp Business API — zero ban risk. Same infrastructure used by Swiggy, Zomato, and every major Indian brand." },
  { q: "What's the payment structure?", a: "50% advance to start. 50% on delivery and approval. Invoice via UPI, NEFT, or Razorpay." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="section-pad" style={{ background: "#0A0C12", position: "relative" }} ref={ref}>
      <div className="container-main">
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">FAQ</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="section-title">
            Every question you have — answered.
          </motion.h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              className="glass-panel"
              style={{
                padding: "24px",
                borderLeft: openIndex === i ? "3px solid #C9910A" : "3px solid transparent",
                opacity: openIndex === i ? 1 : 0.7,
                transition: "all 0.5s",
              }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left", cursor: "pointer", background: "none", border: "none", color: "inherit" }}>
                <span style={{ fontSize: "15px", fontWeight: 600, paddingRight: "16px", lineHeight: 1.4, color: openIndex === i ? "#F0EDE8" : "#8B8880", transition: "color 0.3s" }}>{faq.q}</span>
                <span style={{ flexShrink: 0, color: "#C9910A" }}>{openIndex === i ? <X size={16} /> : <Plus size={16} />}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                    <p style={{ marginTop: "16px", fontSize: "14px", color: "#8B8880", lineHeight: 1.8 }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
