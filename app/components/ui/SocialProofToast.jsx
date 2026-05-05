"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  { text: "Ravi from Hyderabad booked a call", icon: "📞", time: "Just now" },
  { text: "Restaurant owner enquired about WA bot", icon: "🤖", time: "2 min ago" },
  { text: "Priya booked a free consultation", icon: "✅", time: "Just now" },
  { text: "New lead — Real Estate automation", icon: "🏠", time: "3 min ago" },
  { text: "Arun upgraded to Growth plan", icon: "🚀", time: "Just now" },
  { text: "Coaching owner viewed pricing", icon: "👀", time: "1 min ago" },
];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const showTimer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    }, 30000);

    const initialTimer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    }, 15000);

    return () => { clearInterval(showTimer); clearTimeout(initialTimer); };
  }, []);

  const msg = messages[msgIndex];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
          style={{
            position: "fixed", bottom: "90px", left: "16px", zIndex: 40,
            maxWidth: "240px",
            background: "linear-gradient(135deg, #151821, #1a1d28)",
            borderLeft: "2px solid #C9910A",
            borderTop: "1px solid rgba(201,145,10,0.1)",
            borderRight: "1px solid rgba(201,145,10,0.06)",
            borderBottom: "1px solid rgba(201,145,10,0.06)",
            padding: "10px 14px",
            boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "14px", flexShrink: 0 }}>{msg.icon}</span>
            <div>
              <p style={{ fontSize: "11px", color: "#F0EDE8", lineHeight: 1.4, fontWeight: 500 }}>{msg.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "3px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ade80" }} />
                <span style={{ fontSize: "8px", fontFamily: "var(--font-mono)", color: "#4A4845", letterSpacing: "0.06em" }}>{msg.time}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
