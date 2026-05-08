"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const conversation = [
  { from: "user", text: "Hi, I saw your ad for the premium skincare kit 🧴" },
  { from: "bot", text: "Hey there! 👋 Yes, the Premium Glow Kit is available!\n\n✨ Vitamin C Serum\n🧴 Hyaluronic Moisturizer\n🌙 Night Repair Cream\n\nWant to grab one?" },
  { from: "user", text: "What's the price?" },
  { from: "bot", text: "₹2,499 (MRP ₹3,999) — 38% OFF! 🔥\n\nFree shipping + COD available 🚚\n⏳ Offer valid for 2 hours only!" },
  { from: "user", text: "Yes! COD to Bangalore 560001" },
  { from: "bot", text: "✅ Order Confirmed!\n\n📦 #VN-48291\n📍 Bangalore 560001\n💰 ₹2,499 COD\n📅 Delivery: 2-3 days\n\nThank you! 🙏" },
  { from: "user", text: "That was super fast! Thanks 😊" },
  { from: "bot", text: "Happy to help! 💛\n\nYou'll get tracking on WhatsApp.\nRefer a friend & get 15% off next order! 🎁" },
];

function getTime(index) {
  const base = 10 * 60 + 32;
  const mins = base + Math.floor(index / 2);
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}:${m.toString().padStart(2, "0")} AM`;
}

export default function PhoneMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSide, setTypingSide] = useState("user");
  const chatRef = useRef(null);

  useEffect(() => {
    if (visibleCount >= conversation.length) {
      // Reset after a pause and replay
      const resetTimer = setTimeout(() => {
        setVisibleCount(0);
        setIsTyping(false);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }

    const nextMsg = conversation[visibleCount];
    const typingDelay = nextMsg.from === "bot" ? 1800 : 1200;
    const showDelay = nextMsg.from === "bot" ? 800 : 500;

    // Show typing indicator
    const typingTimer = setTimeout(() => {
      setIsTyping(true);
      setTypingSide(nextMsg.from);
    }, 600);

    // Show message
    const msgTimer = setTimeout(() => {
      setIsTyping(false);
      setVisibleCount(prev => prev + 1);
    }, typingDelay + showDelay);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(msgTimer);
    };
  }, [visibleCount]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleCount, isTyping]);

  return (
    <div style={{
      width: "280px", borderRadius: "40px",
      background: "#000000", overflow: "hidden",
      border: "3px solid rgba(255,255,255,0.06)",
      boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)",
      position: "relative",
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: "absolute", top: "8px", left: "50%", transform: "translateX(-50%)",
        width: "100px", height: "28px", background: "#000",
        borderRadius: "20px", zIndex: 30,
        display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
      }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1a1a1a", border: "1px solid #2a2a2a" }} />
      </div>

      {/* Status bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "12px 24px 2px", fontSize: "12px", color: "rgba(255,255,255,0.7)",
        fontFamily: "var(--font-mono)", fontWeight: 700, background: "#111B21",
      }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          {[5, 7, 9, 12].map((h, i) => (
            <div key={i} style={{ width: "3px", height: `${h}px`, background: "rgba(255,255,255,0.6)", borderRadius: "1px" }} />
          ))}
          <span style={{ fontSize: "9px", marginLeft: "3px", fontWeight: 600 }}>5G</span>
          <div style={{ width: "20px", height: "10px", border: "1.5px solid rgba(255,255,255,0.5)", borderRadius: "3px", marginLeft: "4px", position: "relative" }}>
            <div style={{ position: "absolute", inset: "1.5px", right: "3px", background: "#25D366", borderRadius: "1px" }} />
            <div style={{ position: "absolute", right: "-4px", top: "2px", width: "2px", height: "5px", background: "rgba(255,255,255,0.35)", borderRadius: "0 1px 1px 0" }} />
          </div>
        </div>
      </div>

      {/* WhatsApp header */}
      <div style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "6px 10px 8px",
        background: "#111B21",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          background: "linear-gradient(135deg, #C9910A, #E8B84B)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "10px", fontWeight: 800, color: "#422d00",
          boxShadow: "0 2px 8px rgba(201,145,10,0.3)",
        }}>VN</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "white", lineHeight: 1.2 }}>Viya Nexus AI</div>
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: "9px", color: "#25D366", fontFamily: "var(--font-mono)", fontWeight: 600 }}
          >● online</motion.div>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </div>
      </div>

      {/* Live chat area */}
      <div ref={chatRef} style={{
        background: "#0B141A",
        padding: "8px 8px",
        height: "300px",
        overflowY: "auto",
        display: "flex", flexDirection: "column", gap: "3px",
        scrollBehavior: "smooth",
      }}>
        {/* Date chip */}
        <div style={{ textAlign: "center", margin: "4px 0 8px" }}>
          <span style={{
            background: "#1D2B36", padding: "3px 12px", borderRadius: "6px",
            fontSize: "9px", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)",
          }}>TODAY</span>
        </div>

        {/* Encryption notice */}
        <div style={{ textAlign: "center", marginBottom: "8px", padding: "0 20px" }}>
          <span style={{
            background: "rgba(232,184,75,0.06)", padding: "4px 10px", borderRadius: "4px",
            fontSize: "7px", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-mono)",
            display: "inline-flex", alignItems: "center", gap: "4px",
          }}>🔒 Messages are end-to-end encrypted</span>
        </div>

        {/* Messages — appear one by one */}
        <AnimatePresence>
          {conversation.slice(0, visibleCount).map((m, i) => (
            <motion.div key={`msg-${i}`}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                maxWidth: "84%",
                alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                background: m.from === "user" ? "#005C4B" : "#1F2C34",
                padding: "5px 8px 2px",
                borderRadius: m.from === "user" ? "8px 2px 8px 8px" : "2px 8px 8px 8px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
                marginBottom: "1px",
              }}>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.92)", lineHeight: 1.45, margin: 0, whiteSpace: "pre-line" }}>{m.text}</p>
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "3px", marginTop: "1px", paddingBottom: "1px" }}>
                <span style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.28)" }}>{getTime(i)}</span>
                {m.from === "user" && (
                  <svg width="13" height="7" viewBox="0 0 16 11" fill="none">
                    <path d="M1 5.5L4.5 9L11 2" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 5.5L8.5 9L15 2" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Live typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              style={{
                alignSelf: typingSide === "bot" ? "flex-start" : "flex-end",
                background: typingSide === "bot" ? "#1F2C34" : "#005C4B",
                padding: "10px 14px",
                borderRadius: typingSide === "bot" ? "2px 8px 8px 8px" : "8px 2px 8px 8px",
                display: "flex", gap: "4px", alignItems: "center",
              }}>
              {[0, 1, 2].map(j => (
                <motion.div key={j}
                  animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.15 }}
                  style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.5)" }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: "6px",
        padding: "6px 8px",
        background: "#111B21",
      }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        <div style={{
          flex: 1, background: "#2A3942", borderRadius: "20px",
          padding: "7px 14px", fontSize: "11px", color: "rgba(255,255,255,0.25)",
          fontFamily: "var(--font-body)",
        }}>
          Type a message
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(37,211,102,0.3)", cursor: "pointer",
          }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </motion.div>
      </div>

      {/* Home indicator */}
      <div style={{ padding: "6px 0 4px", display: "flex", justifyContent: "center", background: "#111B21" }}>
        <div style={{ width: "90px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.1)" }} />
      </div>
    </div>
  );
}
