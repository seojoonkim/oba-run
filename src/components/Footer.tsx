"use client";

import { motion } from "framer-motion";
import { Unlock, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* 🎨 ILLUSTRATION 7: Footer Graffiti Wall Background */}
      <div className="absolute inset-0 illustration-container">
        <Image
          src="/images/illustrations/footer-graffiti-wall.png"
          alt="그래피티 벽 배경"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Top neon line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, #CCFF00, #FF2D78, #00FF87, transparent)",
          boxShadow: "0 0 15px rgba(204,255,0,0.3)",
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Massive FOA logo */}
          <h3
            className="text-6xl md:text-8xl font-display mb-4 neon-pulse"
            style={{ color: "#CCFF00" }}
          >
            FOA
          </h3>

          <p className="flex items-center justify-center gap-2 text-gray-400 mb-2 font-bold text-sm uppercase tracking-wider">
            Friends of API <Globe size={14} style={{ color: "#00FF87" }} />
          </p>

          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 font-bold mb-3">
            WHAT THE FUN!
          </p>

          <p className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-10">
            API 열어. 다 열어. 문도 열어. 마음도 열어. <Unlock size={14} style={{ color: "#CCFF00" }} />
          </p>

          {/* Bottom links — minimal */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <a href="#why-now" className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-600 hover:text-[#CCFF00] transition-colors font-bold">
              WHY NOW
            </a>
            <span className="text-gray-800">|</span>
            <a href="#join" className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-600 hover:text-[#CCFF00] transition-colors font-bold">
              JOIN
            </a>
            <span className="text-gray-800">|</span>
            <a href="https://foa.wtf" className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-600 hover:text-[#CCFF00] transition-colors font-bold">
              FOA.WTF
            </a>
          </div>

          <p className="text-gray-800 text-[0.6rem] font-bold uppercase tracking-[0.2em]">
            © 2026 FOA · 이 사이트 소스코드? 당연히 열려있지 · CTRL+U
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
