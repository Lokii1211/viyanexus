"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";

const starterChips = [
  "What services do you offer?",
  "How much does it cost?",
  "I want a WhatsApp bot",
  "Tell me about Voice AI",
];

const botResponses = {
  "What services do you offer?":
    "We offer 6 core services:\n\n• WhatsApp Automation\n• Voice AI Assistant\n• AI Business Chatbot\n• Website Design\n• Marketing Automation\n• Full Automation Stack\n\nWhich one interests you?",
  "How much does it cost?":
    "Projects start at ₹15,000 and go up based on complexity. But before we talk numbers — what's the biggest thing eating your time in your business right now?",
  "I want a WhatsApp bot":
    "Perfect — that's our most popular service! A WhatsApp bot can handle auto-replies, lead capture, orders, and broadcasts 24/7.\n\nWhat kind of business do you run?",
  "Tell me about Voice AI":
    "Our Voice AI answers every call — even at 3am. It handles incoming customer calls, books appointments, and even makes cold calls. Languages: English, Tamil, Hindi, Telugu.\n\nWant to see how it works for your industry?",
  default:
    "Great to meet you! We help Indian businesses automate their WhatsApp, calls, and customer communication — so the business runs even when you're not watching.\n\nWhat kind of business are you running?",
};

const WA_LINK = "https://wa.me/919003360494";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 8000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 13000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: text.trim() }]);
    setInput("");
    setIsTyping(true);
    const newCount = exchangeCount + 1;
    setExchangeCount(newCount);

    setTimeout(() => {
      let reply = botResponses[text] || botResponses.default;
      if (newCount >= 3 && !showLeadForm) {
        reply += "\n\nWant me to have someone reach out on WhatsApp? Just share your name and number.";
        setShowLeadForm(true);
      }
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    setMessages((prev) => [...prev, { from: "bot", text: `Done! Someone from Viya Nexus will WhatsApp you within 2 hours, ${name}. 🚀` }]);
    setShowLeadForm(false);
  };

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 bg-[#151821] border border-[rgba(201,145,10,0.08)] px-4 py-3 shadow-xl max-w-[220px]">
            <p className="text-sm text-[#8B8880]">Hi! Need help choosing a service? 👋</p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#151821] border-r border-b border-[rgba(201,145,10,0.08)] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger */}
      <motion.button onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#06080D] border-2 border-[#C9910A]/50 flex items-center justify-center shadow-[0_0_20px_rgba(201,145,10,0.15)] hover:shadow-[0_0_30px_rgba(201,145,10,0.15)] transition-all duration-300"
        style={{ animation: "pulse-gold 3s ease-in-out infinite" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Open chat">
        {isOpen ? <X size={22} className="text-[#C9910A]" /> : (
          <div className="relative">
            <Bot size={22} className="text-[#C9910A]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C9910A] text-[6px] font-bold text-[#06080D] flex items-center justify-center">AI</span>
          </div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-120px)] bg-[#0F1219] border border-[rgba(201,145,10,0.08)] shadow-2xl flex flex-col overflow-hidden">

            {/* Header */}
            <div className="bg-[#151821] px-5 py-4 border-b border-[rgba(201,145,10,0.08)] flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#C9910A] to-[#E8B84B] flex items-center justify-center">
                <Bot size={18} className="text-[#06080D]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Viya AI Assistant</p>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#4A4845] hover:text-[#F0EDE8] transition-colors"><X size={18} /></button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="bg-[#151821] px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-[#8B8880]">Hi! 👋 I&apos;m Viya, your AI assistant. How can I help you automate your business today?</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {starterChips.map((chip) => (
                      <button key={chip} onClick={() => sendMessage(chip)}
                        className="px-3 py-2 bg-[#151821] border border-[rgba(201,145,10,0.08)] text-xs text-[#8B8880] hover:border-[#C9910A]/30 hover:text-[#E8B84B] transition-all duration-300">
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-3 text-sm whitespace-pre-line ${
                    msg.from === "user" ? "bg-gradient-to-r from-[#C9910A] to-[#E8B84B] text-[#06080D] font-medium" : "bg-[#151821] text-[#8B8880]"
                  }`}>{msg.text}</div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#151821] px-4 py-3 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4A4845]" style={{ animation: "typing-dots 1.4s infinite 0s" }} />
                    <span className="w-2 h-2 rounded-full bg-[#4A4845]" style={{ animation: "typing-dots 1.4s infinite 0.2s" }} />
                    <span className="w-2 h-2 rounded-full bg-[#4A4845]" style={{ animation: "typing-dots 1.4s infinite 0.4s" }} />
                  </div>
                </div>
              )}

              {showLeadForm && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#151821] border border-[#C9910A]/20 p-4">
                  <p className="text-sm font-semibold text-[#E8B84B] mb-3">Quick connect:</p>
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <input name="name" type="text" placeholder="Your name" required className="w-full px-4 py-2.5 bg-[#06080D] border border-[rgba(201,145,10,0.08)] text-sm text-[#F0EDE8] placeholder-[#4A4845] focus:outline-none focus:border-[#C9910A]/50" />
                    <input name="phone" type="tel" placeholder="WhatsApp number" required pattern="[0-9]{10}" className="w-full px-4 py-2.5 bg-[#06080D] border border-[rgba(201,145,10,0.08)] text-sm text-[#F0EDE8] placeholder-[#4A4845] focus:outline-none focus:border-[#C9910A]/50" />
                    <button type="submit" className="w-full py-2.5 bg-gradient-to-r from-[#C9910A] to-[#E8B84B] text-[#06080D] font-bold text-sm hover:shadow-[0_0_20px_rgba(201,145,10,0.15)] transition-all">Connect me →</button>
                  </form>
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[rgba(201,145,10,0.08)] bg-[#151821]">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex items-center gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 bg-[#06080D] border border-[rgba(201,145,10,0.08)] text-sm text-[#F0EDE8] placeholder-[#4A4845] focus:outline-none focus:border-[#C9910A]/30" />
                <button type="submit" disabled={!input.trim()}
                  className="w-10 h-10 bg-[#C9910A] flex items-center justify-center hover:shadow-[0_0_15px_rgba(201,145,10,0.15)] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                  <Send size={16} className="text-[#06080D]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
