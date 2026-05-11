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
      const resetTimer = setTimeout(() => {
        setVisibleCount(0);
        setIsTyping(false);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }

    const nextMsg = conversation[visibleCount];
    const typingDelay = nextMsg.from === "bot" ? 1800 : 1200;
    const showDelay = nextMsg.from === "bot" ? 800 : 500;

    const typingTimer = setTimeout(() => {
      setIsTyping(true);
      setTypingSide(nextMsg.from);
    }, 600);

    const msgTimer = setTimeout(() => {
      setIsTyping(false);
      setVisibleCount(prev => prev + 1);
    }, typingDelay + showDelay);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(msgTimer);
    };
  }, [visibleCount]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleCount, isTyping]);

  return (
    <div className="phone-wrapper">
      {/* iPhone outer shell */}
      <div className="iphone-shell">
        {/* Physical buttons */}
        <div className="btn-silent" />
        <div className="btn-vol-up" />
        <div className="btn-vol-down" />
        <div className="btn-power" />

        {/* Inner screen bezel */}
        <div className="iphone-inner">
          {/* Notch */}
          <div className="notch">
            <div className="notch-speaker" />
            <div className="notch-camera" />
          </div>

          {/* Status Bar */}
          <div className="status-bar">
            <span className="sb-time">9:41</span>
            <div className="sb-icons">
              <div className="sb-signal">
                {[4, 6, 9, 12].map((h, i) => (
                  <div key={i} style={{ width: "3px", height: `${h}px`, background: i < 3 ? "#1A1A1A" : "#1A1A1A", borderRadius: "1px" }} />
                ))}
              </div>
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#1A1A1A" }}>5G</span>
              <div className="sb-battery">
                <div className="sb-batt-fill" />
                <div className="sb-batt-tip" />
              </div>
            </div>
          </div>

          {/* WhatsApp Header — light mode */}
          <div className="wa-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008069" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            <div className="wa-avatar">
              <span>VN</span>
            </div>
            <div className="wa-info">
              <div className="wa-name">Viya Nexus AI</div>
              <div className="wa-seen">online</div>
            </div>
            <div className="wa-actions">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54656F" strokeWidth="1.8"><path d="M15.6 11.82c.18-.12.18-.42 0-.54l-7.2-4.8c-.2-.14-.4 0-.4.27v9.6c0 .27.2.41.4.27l7.2-4.8z"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54656F" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#54656F"><circle cx="12" cy="6" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/></svg>
            </div>
          </div>

          {/* Chat area — warm beige WhatsApp light */}
          <div ref={chatRef} className="wa-chat">
            {/* Date chip */}
            <div className="date-chip"><span>TODAY</span></div>

            {/* Encrypted notice */}
            <div className="encrypt-chip">
              <span>🔒 Messages and calls are end-to-end encrypted. Tap to learn more.</span>
            </div>

            {/* Messages */}
            <AnimatePresence>
              {conversation.slice(0, visibleCount).map((m, i) => (
                <motion.div key={`msg-${i}`}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`bubble ${m.from}`}>
                  {/* Tail */}
                  <div className={`tail ${m.from}`} />
                  <p>{m.text}</p>
                  <div className="bubble-meta">
                    <span className="bubble-time">{getTime(i)}</span>
                    {m.from === "user" && (
                      <svg width="16" height="9" viewBox="0 0 16 11" fill="none">
                        <path d="M1 5.5L4.5 9L11 2" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 5.5L8.5 9L15 2" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`bubble ${typingSide}`}
                  style={{ padding: "10px 16px" }}>
                  <div className="typing-dots">
                    {[0, 1, 2].map(j => (
                      <motion.div key={j}
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.15 }}
                        className="dot" />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div className="wa-input">
            <div className="input-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              <div className="input-field">Message</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <div className="mic-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 1a4 4 0 00-4 4v7a4 4 0 008 0V5a4 4 0 00-4-4zM19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg>
            </div>
          </div>

          {/* Home indicator */}
          <div className="home-ind">
            <div className="home-bar" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .phone-wrapper {
          position: relative;
          filter: drop-shadow(0 40px 80px rgba(0,0,0,0.45)) drop-shadow(0 10px 20px rgba(0,0,0,0.25));
        }

        /* ===== IPHONE SHELL ===== */
        .iphone-shell {
          width: 290px;
          border-radius: 48px;
          background: linear-gradient(160deg, #4A4A50 0%, #2C2C30 20%, #3A3A3E 40%, #2A2A2E 60%, #3C3C40 80%, #2E2E32 100%);
          padding: 12px;
          position: relative;
          box-shadow:
            inset 0 1px 1px rgba(255,255,255,0.12),
            inset 0 -1px 1px rgba(0,0,0,0.4),
            0 0 0 1px rgba(0,0,0,0.5),
            0 2px 4px rgba(0,0,0,0.3);
        }

        /* Side buttons */
        .btn-silent {
          position: absolute; left: -3px; top: 100px;
          width: 4px; height: 22px; border-radius: 0 0 0 3px;
          background: linear-gradient(180deg, #555, #3A3A3E, #555);
          box-shadow: -1px 0 2px rgba(0,0,0,0.3);
        }
        .btn-vol-up {
          position: absolute; left: -3px; top: 140px;
          width: 4px; height: 36px; border-radius: 3px 0 0 3px;
          background: linear-gradient(180deg, #555, #3A3A3E, #555);
          box-shadow: -1px 0 2px rgba(0,0,0,0.3);
        }
        .btn-vol-down {
          position: absolute; left: -3px; top: 185px;
          width: 4px; height: 36px; border-radius: 3px 0 0 3px;
          background: linear-gradient(180deg, #555, #3A3A3E, #555);
          box-shadow: -1px 0 2px rgba(0,0,0,0.3);
        }
        .btn-power {
          position: absolute; right: -3px; top: 155px;
          width: 4px; height: 50px; border-radius: 0 3px 3px 0;
          background: linear-gradient(180deg, #555, #3A3A3E, #555);
          box-shadow: 1px 0 2px rgba(0,0,0,0.3);
        }

        /* Inner screen */
        .iphone-inner {
          border-radius: 38px;
          overflow: hidden;
          background: #FFFFFF;
          position: relative;
        }

        /* ===== NOTCH ===== */
        .notch {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 140px; height: 30px; z-index: 30;
          background: #1A1A1A;
          border-radius: 0 0 22px 22px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .notch-speaker {
          width: 40px; height: 5px; border-radius: 3px;
          background: #2A2A2E;
        }
        .notch-camera {
          width: 10px; height: 10px; border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #2A3545, #0C1118);
          box-shadow: inset 0 0 2px rgba(60,100,160,0.2), 0 0 0 1.5px #222;
        }

        /* ===== STATUS BAR ===== */
        .status-bar {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 24px 4px;
          background: #008069;
          position: relative; z-index: 20;
        }
        .sb-time {
          font-size: 14px; font-weight: 700; color: white;
          font-family: var(--font-body); letter-spacing: 0.02em;
        }
        .sb-icons { display: flex; gap: 4px; align-items: center; }
        .sb-signal { display: flex; gap: 1.5px; align-items: flex-end; }
        .sb-signal div { background: white !important; }
        .sb-icons span { color: white !important; }
        .sb-battery {
          width: 22px; height: 11px; border: 1.5px solid rgba(255,255,255,0.8);
          border-radius: 3px; margin-left: 4px; position: relative;
        }
        .sb-batt-fill {
          position: absolute; inset: 1.5px; right: 3px;
          background: white; border-radius: 1px;
        }
        .sb-batt-tip {
          position: absolute; right: -4px; top: 2.5px;
          width: 2px; height: 5px;
          background: rgba(255,255,255,0.6); border-radius: 0 1px 1px 0;
        }

        /* ===== WHATSAPP HEADER ===== */
        .wa-header {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 10px 10px;
          background: #008069;
        }
        .wa-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #C9910A, #E8B84B);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 800; color: #422d00;
          flex-shrink: 0;
        }
        .wa-info { flex: 1; min-width: 0; }
        .wa-name {
          font-size: 15px; font-weight: 600; color: white;
          line-height: 1.2; font-family: var(--font-body);
        }
        .wa-seen {
          font-size: 11px; color: rgba(255,255,255,0.7);
          font-family: var(--font-body);
        }
        .wa-actions { display: flex; gap: 16px; align-items: center; }

        /* ===== CHAT AREA ===== */
        .wa-chat {
          background: #ECE5DD;
          background-image:
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2z'/%3E%3C/g%3E%3C/svg%3E");
          padding: 8px 10px;
          height: 320px;
          overflow-y: auto;
          display: flex; flex-direction: column; gap: 3px;
          scroll-behavior: smooth;
        }
        .wa-chat::-webkit-scrollbar { width: 0; }

        /* Date & encrypt chips */
        .date-chip { text-align: center; margin: 8px 0; }
        .date-chip span {
          background: rgba(255,255,255,0.85); padding: 4px 14px; border-radius: 8px;
          font-size: 10px; color: #54656F; font-family: var(--font-mono);
          letter-spacing: 0.06em; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .encrypt-chip { text-align: center; margin-bottom: 10px; padding: 0 12px; }
        .encrypt-chip span {
          background: rgba(255,230,150,0.35); padding: 5px 10px; border-radius: 6px;
          font-size: 8px; color: #54656F; font-family: var(--font-body);
          display: inline-block; line-height: 1.4;
        }

        /* ===== BUBBLES ===== */
        .bubble {
          max-width: 82%; margin-bottom: 2px;
          padding: 6px 10px 4px;
          position: relative;
          box-shadow: 0 1px 1px rgba(0,0,0,0.06);
        }
        .bubble.user {
          align-self: flex-end;
          background: #D9FDD3;
          border-radius: 10px 3px 10px 10px;
        }
        .bubble.bot {
          align-self: flex-start;
          background: #FFFFFF;
          border-radius: 3px 10px 10px 10px;
        }
        .bubble p {
          font-size: 12px; color: #111B21;
          line-height: 1.5; margin: 0; white-space: pre-line;
          font-family: var(--font-body);
        }
        .bubble-meta {
          display: flex; justify-content: flex-end; align-items: center;
          gap: 3px; margin-top: 2px;
        }
        .bubble-time { font-size: 9px; color: #667781; }

        /* Bubble tail */
        .tail { display: none; }

        /* Typing dots */
        .typing-dots { display: flex; gap: 5px; align-items: center; }
        .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #8696A0;
        }

        /* ===== INPUT BAR ===== */
        .wa-input {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 8px;
          background: #F0F2F5;
        }
        .input-row {
          flex: 1; display: flex; align-items: center; gap: 8px;
          background: #FFFFFF; border-radius: 24px;
          padding: 8px 12px;
        }
        .input-field {
          flex: 1; font-size: 14px; color: #8696A0;
          font-family: var(--font-body);
        }
        .mic-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: #008069; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 6px rgba(0,128,105,0.25); cursor: pointer;
          flex-shrink: 0;
        }

        /* ===== HOME INDICATOR ===== */
        .home-ind {
          padding: 6px 0 4px;
          display: flex; justify-content: center;
          background: #F0F2F5;
        }
        .home-bar {
          width: 100px; height: 4px; border-radius: 2px;
          background: rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}
