"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#06080D",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "48px", height: "48px", borderRadius: "50%",
              border: "2px solid rgba(201,145,10,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}
          >
            <span style={{
              fontFamily: "var(--font-display)", fontSize: "20px",
              fontWeight: 700, color: "#C9910A",
            }}>VN</span>
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: "-4px",
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "#C9910A",
              }}
            />
          </motion.div>

          {/* Loading bar */}
          <div style={{
            width: "120px", height: "2px",
            background: "rgba(201,145,10,0.1)",
            borderRadius: "1px", overflow: "hidden",
          }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #C9910A, #E8B84B)",
                borderRadius: "1px",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
