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
    <div className="iphone-frame">
      {/* iPhone outer chrome — titanium bezel */}
      <div className="iphone-bezel">
        {/* Side buttons */}
        <div className="iphone-btn-silent" />
        <div className="iphone-btn-volup" />
        <div className="iphone-btn-voldn" />
        <div className="iphone-btn-power" />

        {/* Screen */}
        <div className="iphone-screen">
          {/* Dynamic Island */}
          <div className="dynamic-island">
            <div className="di-camera" />
            <motion.div className="di-indicator"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Status bar */}
          <div className="status-bar">
            <span className="sb-time">9:41</span>
            <div className="sb-right">
              <div className="sb-signal">
                {[4, 6, 8, 11].map((h, i) => (
                  <div key={i} style={{ width: "2.5px", height: `${h}px`, background: "rgba(255,255,255,0.7)", borderRadius: "1px" }} />
                ))}
              </div>
              <span className="sb-carrier">5G</span>
              <div className="sb-battery">
                <div className="sb-battery-fill" />
                <div className="sb-battery-tip" />
              </div>
            </div>
          </div>

          {/* WhatsApp header */}
          <div className="wa-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            <div className="wa-avatar">
              <span>VN</span>
              <div className="wa-online-dot" />
            </div>
            <div className="wa-info">
              <div className="wa-name">Viya Nexus AI</div>
              <motion.div className="wa-status"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >● online</motion.div>
            </div>
            <div className="wa-header-icons">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </div>
          </div>

          {/* Chat area */}
          <div ref={chatRef} className="wa-chat">
            {/* Date chip */}
            <div className="wa-date-chip">
              <span>TODAY</span>
            </div>

            {/* Encryption */}
            <div className="wa-encrypt">
              <span>🔒 Messages are end-to-end encrypted</span>
            </div>

            {/* Messages */}
            <AnimatePresence>
              {conversation.slice(0, visibleCount).map((m, i) => (
                <motion.div key={`msg-${i}`}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`wa-msg ${m.from}`}>
                  <p>{m.text}</p>
                  <div className="wa-msg-meta">
                    <span className="wa-msg-time">{getTime(i)}</span>
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

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`wa-msg ${typingSide}`}
                  style={{ padding: "10px 14px" }}>
                  <div className="typing-dots">
                    {[0, 1, 2].map(j => (
                      <motion.div key={j}
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.15 }}
                        className="typing-dot" />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div className="wa-input-bar">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            <div className="wa-input-field">Type a message</div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="wa-send-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
            </motion.div>
          </div>

          {/* Home indicator */}
          <div className="iphone-home-ind">
            <div className="home-bar" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .iphone-frame {
          position: relative;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.5)) drop-shadow(0 0 1px rgba(201,145,10,0.15));
        }
        .iphone-bezel {
          width: 280px;
          border-radius: 44px;
          background: linear-gradient(145deg, #2A2A2E 0%, #1A1A1E 50%, #2A2A2E 100%);
          padding: 3px;
          position: relative;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.3),
            0 0 0 0.5px rgba(255,255,255,0.05);
        }

        /* Side buttons */
        .iphone-btn-silent {
          position: absolute; left: -2.5px; top: 85px;
          width: 3px; height: 20px; border-radius: 2px;
          background: linear-gradient(180deg, #3A3A3E, #2A2A2E);
        }
        .iphone-btn-volup {
          position: absolute; left: -2.5px; top: 120px;
          width: 3px; height: 32px; border-radius: 2px;
          background: linear-gradient(180deg, #3A3A3E, #2A2A2E);
        }
        .iphone-btn-voldn {
          position: absolute; left: -2.5px; top: 160px;
          width: 3px; height: 32px; border-radius: 2px;
          background: linear-gradient(180deg, #3A3A3E, #2A2A2E);
        }
        .iphone-btn-power {
          position: absolute; right: -2.5px; top: 135px;
          width: 3px; height: 40px; border-radius: 2px;
          background: linear-gradient(180deg, #3A3A3E, #2A2A2E);
        }

        .iphone-screen {
          border-radius: 42px;
          overflow: hidden;
          background: #000;
          position: relative;
        }

        /* Dynamic Island */
        .dynamic-island {
          position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
          width: 120px; height: 32px; background: #000;
          border-radius: 20px; z-index: 30;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.03);
        }
        .di-camera {
          width: 10px; height: 10px; border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #1E2530, #0A0E14);
          box-shadow: inset 0 0 2px rgba(100,140,200,0.15), 0 0 0 1px rgba(255,255,255,0.05);
        }
        .di-indicator {
          width: 4px; height: 4px; border-radius: 50%;
          background: #25D366;
        }

        /* Status bar */
        .status-bar {
          display: flex; justify-content: space-between; align-items: center;
          padding: 14px 28px 2px;
          font-size: 13px; color: rgba(255,255,255,0.8);
          font-family: var(--font-body); font-weight: 600;
          background: #111B21;
        }
        .sb-time { font-size: 13px; font-weight: 700; letter-spacing: 0.02em; }
        .sb-right { display: flex; gap: 4px; align-items: center; }
        .sb-signal { display: flex; gap: 1.5px; align-items: flex-end; }
        .sb-carrier { font-size: 10px; font-weight: 700; margin-left: 2px; }
        .sb-battery {
          width: 22px; height: 10px; border: 1.5px solid rgba(255,255,255,0.45);
          border-radius: 3px; margin-left: 3px; position: relative;
        }
        .sb-battery-fill {
          position: absolute; inset: 1.5px; right: 3px;
          background: #25D366; border-radius: 1px;
        }
        .sb-battery-tip {
          position: absolute; right: -4px; top: 2.5px;
          width: 2px; height: 4px;
          background: rgba(255,255,255,0.3); border-radius: 0 1px 1px 0;
        }

        /* WhatsApp header */
        .wa-header {
          display: flex; align-items: center; gap: 8px;
          padding: 6px 12px 8px;
          background: #111B21;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .wa-avatar {
          width: 34px; height: 34px; border-radius: 50%;
          background: linear-gradient(135deg, #C9910A, #E8B84B);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; color: #422d00;
          box-shadow: 0 2px 8px rgba(201,145,10,0.3);
          position: relative; flex-shrink: 0;
        }
        .wa-online-dot {
          position: absolute; bottom: 0; right: 0;
          width: 8px; height: 8px; border-radius: 50%;
          background: #25D366; border: 2px solid #111B21;
        }
        .wa-info { flex: 1; min-width: 0; }
        .wa-name { font-size: 14px; font-weight: 600; color: white; line-height: 1.2; }
        .wa-status { font-size: 9px; color: #25D366; font-family: var(--font-mono); font-weight: 600; }
        .wa-header-icons { display: flex; gap: 14px; align-items: center; }

        /* Chat area */
        .wa-chat {
          background: #0B141A;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          padding: 8px 10px;
          height: 310px;
          overflow-y: auto;
          display: flex; flex-direction: column; gap: 3px;
          scroll-behavior: smooth;
        }
        .wa-chat::-webkit-scrollbar { width: 0; }

        .wa-date-chip { text-align: center; margin: 6px 0 8px; }
        .wa-date-chip span {
          background: rgba(29,43,54,0.9); padding: 4px 14px; border-radius: 8px;
          font-size: 10px; color: rgba(255,255,255,0.45); font-family: var(--font-mono);
          letter-spacing: 0.08em;
        }
        .wa-encrypt { text-align: center; margin-bottom: 8px; padding: 0 16px; }
        .wa-encrypt span {
          background: rgba(232,184,75,0.06); padding: 4px 10px; border-radius: 6px;
          font-size: 8px; color: rgba(255,255,255,0.22); font-family: var(--font-mono);
          display: inline-flex; align-items: center; gap: 4px;
        }

        /* Messages */
        .wa-msg {
          max-width: 82%; margin-bottom: 1px;
          padding: 6px 8px 3px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .wa-msg.user {
          align-self: flex-end;
          background: #005C4B;
          border-radius: 10px 3px 10px 10px;
        }
        .wa-msg.bot {
          align-self: flex-start;
          background: #1F2C34;
          border-radius: 3px 10px 10px 10px;
        }
        .wa-msg p {
          font-size: 11.5px; color: rgba(255,255,255,0.92);
          line-height: 1.5; margin: 0; white-space: pre-line;
          font-family: var(--font-body);
        }
        .wa-msg-meta {
          display: flex; justify-content: flex-end; align-items: center;
          gap: 3px; margin-top: 2px; padding-bottom: 1px;
        }
        .wa-msg-time { font-size: 8px; color: rgba(255,255,255,0.25); }

        .typing-dots { display: flex; gap: 4px; align-items: center; }
        .typing-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: rgba(255,255,255,0.5);
        }

        /* Input bar */
        .wa-input-bar {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 10px;
          background: #111B21;
        }
        .wa-input-field {
          flex: 1; background: #2A3942; border-radius: 20px;
          padding: 8px 14px; font-size: 12px; color: rgba(255,255,255,0.25);
          font-family: var(--font-body);
        }
        .wa-send-btn {
          width: 34px; height: 34px; border-radius: 50%;
          background: #25D366; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(37,211,102,0.25); cursor: pointer;
        }

        /* Home indicator */
        .iphone-home-ind {
          padding: 8px 0 6px;
          display: flex; justify-content: center;
          background: #111B21;
        }
        .home-bar {
          width: 100px; height: 4px; border-radius: 2px;
          background: rgba(255,255,255,0.12);
        }
      `}</style>
    </div>
  );
}
