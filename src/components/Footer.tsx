"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6 relative" style={{ borderTop: "2px solid rgba(212,255,0,0.15)" }}>
      {/* Neon line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #D4FF00, #FF2D78, #00FF87, transparent)" }} />

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-3xl md:text-4xl font-black mb-3 skew-title neon-glow-yellow"
            style={{ fontFamily: "Impact, Inter, sans-serif", color: "#D4FF00" }}
          >
            foa.wtf
          </h3>
          <p className="text-gray-400 mb-2 font-bold">
            Friends of Open API — What The Fun! 🎉
          </p>
          <p className="text-gray-500 text-sm mb-8 font-bold">
            API 열어. 다 열어. 🔓
          </p>
          <p className="text-gray-700 text-xs font-bold uppercase tracking-wider">
            © 2026 FOA. 당연히 이 사이트 API도 열려있어요 😎
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
