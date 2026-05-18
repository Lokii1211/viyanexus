"use client";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.08);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          style={{
            position: "fixed", bottom: "90px", right: "24px", zIndex: 40,
            width: "42px", height: "42px", borderRadius: "50%",
            background: "rgba(201,145,10,0.1)",
            border: "1px solid rgba(201,145,10,0.2)",
            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#C9910A",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          whileHover={{
            scale: 1.1,
            background: "rgba(201,145,10,0.15)",
            borderColor: "rgba(201,145,10,0.4)",
            boxShadow: "0 4px 24px rgba(201,145,10,0.15)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
