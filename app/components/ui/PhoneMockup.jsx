"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const messages = [
  { side: "right", text: "Hi, I saw your ad for the skincare kit 🧴" },
  { side: "left", text: "Hey! 👋 The Premium Glow Kit is available.\n\n✨ Vitamin C Serum\n🧴 Hyaluronic Moisturizer\n🌙 Night Repair Cream\n\nWant to grab one?" },
  { side: "right", text: "What's the price?" },
  { side: "left", text: "₹2,499 (MRP ₹3,999) — 38% OFF 🔥\n\nFree shipping + COD 🚚\n⏳ Valid for 2 hours!" },
  { side: "right", text: "Yes! COD to Bangalore 560001" },
  { side: "left", text: "✅ Order Confirmed!\n\n📦 #VN-48291\n📍 Bangalore 560001\n💰 ₹2,499 COD\n📅 2-3 days delivery" },
];

function MsgTime({ index }) {
  const m = 32 + Math.floor(index / 2);
  return <span style={S.time}>{`10:${m} AM`}</span>;
}

function Ticks() {
  return (
    <svg width="16" height="8" viewBox="0 0 16 11" fill="none" style={{ flexShrink: 0 }}>
      <path d="M1 5.5L4.5 9L11 2" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5.5L8.5 9L15 2" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function PhoneMockup() {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (count >= messages.length) {
      const t = setTimeout(() => { setCount(0); setTyping(false); }, 6000);
      return () => clearTimeout(t);
    }
    const next = messages[count];
    const d1 = next.side === "left" ? 1600 : 1000;
    const t1 = setTimeout(() => setTyping(true), 500);
    const t2 = setTimeout(() => { setTyping(false); setCount(c => c + 1); }, d1 + 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [count]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [count, typing]);

  return (
    <div style={S.wrapper}>
      {/* ──── PHONE FRAME ──── */}
      <div style={S.frame}>
        {/* Side buttons */}
        <div style={{ ...S.sideBtn, top: 90, left: -3, height: 18 }} />
        <div style={{ ...S.sideBtn, top: 130, left: -3, height: 34 }} />
        <div style={{ ...S.sideBtn, top: 172, left: -3, height: 34 }} />
        <div style={{ ...S.sideBtn, top: 150, right: -3, left: "auto", height: 46 }} />

        {/* Screen area */}
        <div style={S.screen}>

          {/* ─ NOTCH ─ */}
          <div style={S.notch}>
            <div style={S.notchSpeaker} />
            <div style={S.notchCam} />
          </div>

          {/* ─ STATUS BAR ─ */}
          <div style={S.statusBar}>
            <span style={S.statusTime}>9:41</span>
            <div style={S.statusRight}>
              {[4,6,8,11].map((h,i) => <div key={i} style={{ width: 2.5, height: h, background: "#fff", borderRadius: 1 }} />)}
              <span style={S.statusCarrier}>5G</span>
              <div style={S.battery}><div style={S.battFill}/></div>
            </div>
          </div>

          {/* ─ WA HEADER ─ */}
          <div style={S.waHeader}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            <div style={S.avatar}><span style={S.avatarText}>VN</span></div>
            <div style={{ flex: 1 }}>
              <div style={S.waName}>Viya Nexus AI</div>
              <div style={S.waOnline}>online</div>
            </div>
            <div style={S.waIcons}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
            </div>
          </div>

          {/* ─ CHAT ─ */}
          <div ref={scrollRef} style={S.chat}>
            <div style={S.dateChip}><span style={S.dateText}>TODAY</span></div>
            <div style={S.encryptWrap}><span style={S.encryptText}>🔒 End-to-end encrypted</span></div>

            <AnimatePresence>
              {messages.slice(0, count).map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  style={m.side === "right" ? S.bubbleR : S.bubbleL}
                >
                  <p style={S.msgText}>{m.text}</p>
                  <div style={S.meta}>
                    <MsgTime index={i} />
                    {m.side === "right" && <Ticks />}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={messages[count]?.side === "right" ? S.bubbleR : S.bubbleL}
                >
                  <div style={S.dots}>
                    {[0,1,2].map(j => (
                      <motion.div key={j}
                        animate={{ opacity: [0.3,1,0.3], y: [0,-3,0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: j*0.15 }}
                        style={S.dot} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ─ INPUT BAR ─ */}
          <div style={S.inputBar}>
            <div style={S.inputRow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9" r="0.5" fill="#8696A0"/><circle cx="15" cy="9" r="0.5" fill="#8696A0"/></svg>
              <span style={S.inputPlaceholder}>Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <div style={S.micBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 1a4 4 0 00-4 4v7a4 4 0 008 0V5a4 4 0 00-4-4z"/><path d="M19 10v2a7 7 0 01-14 0v-2" fill="none" stroke="white" strokeWidth="2"/><path d="M12 19v4M8 23h8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </div>

          {/* ─ HOME BAR ─ */}
          <div style={S.homeWrap}><div style={S.homeBar}/></div>
        </div>
      </div>
    </div>
  );
}

/* ──────────── STYLES ──────────── */
const S = {
  wrapper: {
    position: "relative",
    filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5)) drop-shadow(0 0 80px rgba(201,145,10,0.06))",
  },

  // FRAME
  frame: {
    width: 300, borderRadius: 50, position: "relative",
    background: "linear-gradient(165deg, #52525A 0%, #2E2E32 25%, #3E3E42 50%, #28282C 75%, #3A3A3E 100%)",
    padding: 10,
    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 1px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.6)",
  },
  sideBtn: {
    position: "absolute", width: 3.5, borderRadius: 2,
    background: "linear-gradient(180deg, #606068, #3A3A3E, #606068)",
    boxShadow: "-1px 0 3px rgba(0,0,0,0.4)",
  },

  // SCREEN
  screen: { borderRadius: 42, overflow: "hidden", background: "#000" },

  // NOTCH
  notch: {
    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
    width: 130, height: 30, background: "#000", borderRadius: "0 0 20px 20px",
    zIndex: 30, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
  },
  notchSpeaker: { width: 38, height: 4.5, borderRadius: 3, background: "#1C1C1E" },
  notchCam: {
    width: 10, height: 10, borderRadius: "50%",
    background: "radial-gradient(circle at 40% 35%, #1A2535, #080C12)",
    boxShadow: "inset 0 0 2px rgba(50,80,140,0.2), 0 0 0 1.5px #1A1A1E",
  },

  // STATUS BAR
  statusBar: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "12px 26px 4px", background: "#075E54",
  },
  statusTime: { fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "var(--font-body)" },
  statusRight: { display: "flex", gap: 3, alignItems: "center" },
  statusCarrier: { fontSize: 10, fontWeight: 700, color: "#fff", marginLeft: 3 },
  battery: {
    width: 22, height: 10, border: "1.5px solid rgba(255,255,255,0.7)",
    borderRadius: 3, marginLeft: 4, position: "relative",
  },
  battFill: { position: "absolute", top: 2, left: 2, right: 4, bottom: 2, background: "#fff", borderRadius: 1 },

  // WA HEADER
  waHeader: {
    display: "flex", alignItems: "center", gap: 8,
    padding: "8px 12px 10px", background: "#075E54",
  },
  avatar: {
    width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
    background: "linear-gradient(135deg, #C9910A, #E8B84B)",
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 2px 8px rgba(201,145,10,0.35)",
  },
  avatarText: { fontSize: 12, fontWeight: 800, color: "#422d00" },
  waName: { fontSize: 15, fontWeight: 600, color: "#fff", lineHeight: 1.2 },
  waOnline: { fontSize: 11, color: "rgba(255,255,255,0.65)" },
  waIcons: { display: "flex", gap: 16, alignItems: "center" },

  // CHAT
  chat: {
    background: "#ECE5DD",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.018'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
    padding: "8px 8px", height: 330, overflowY: "auto",
    display: "flex", flexDirection: "column", gap: 2,
    scrollBehavior: "smooth", scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  // DATE / ENCRYPT
  dateChip: { textAlign: "center", margin: "8px 0" },
  dateText: {
    background: "rgba(255,255,255,0.9)", padding: "4px 14px", borderRadius: 8,
    fontSize: 10, color: "#54656F", fontFamily: "var(--font-mono)",
    letterSpacing: "0.06em", boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
  },
  encryptWrap: { textAlign: "center", marginBottom: 10, padding: "0 14px" },
  encryptText: {
    background: "rgba(255,220,120,0.3)", padding: "5px 12px", borderRadius: 6,
    fontSize: 8.5, color: "#54656F", lineHeight: "1.4", display: "inline-block",
  },

  // BUBBLES
  bubbleR: {
    maxWidth: "80%", alignSelf: "flex-end", marginBottom: 2,
    background: "#D9FDD3", borderRadius: "10px 4px 10px 10px",
    padding: "6px 8px 3px", boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
  },
  bubbleL: {
    maxWidth: "80%", alignSelf: "flex-start", marginBottom: 2,
    background: "#fff", borderRadius: "4px 10px 10px 10px",
    padding: "6px 8px 3px", boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
  },
  msgText: {
    fontSize: 11.5, color: "#111B21", lineHeight: 1.45, margin: 0,
    whiteSpace: "pre-line", wordBreak: "break-word",
  },
  meta: { display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3, marginTop: 1 },
  time: { fontSize: 8, color: "#667781" },

  // TYPING
  dots: { display: "flex", gap: 4, alignItems: "center", padding: "4px 6px" },
  dot: { width: 6, height: 6, borderRadius: "50%", background: "#8696A0" },

  // INPUT
  inputBar: {
    display: "flex", alignItems: "center", gap: 6,
    padding: "6px 8px", background: "#F0F2F5",
  },
  inputRow: {
    flex: 1, display: "flex", alignItems: "center", gap: 10,
    background: "#fff", borderRadius: 24, padding: "9px 14px",
  },
  inputPlaceholder: { flex: 1, fontSize: 14, color: "#8696A0" },
  micBtn: {
    width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
    background: "#075E54", display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 2px 6px rgba(7,94,84,0.3)",
  },

  // HOME
  homeWrap: { padding: "8px 0 6px", display: "flex", justifyContent: "center", background: "#F0F2F5" },
  homeBar: { width: 110, height: 4, borderRadius: 2, background: "rgba(0,0,0,0.12)" },
};
