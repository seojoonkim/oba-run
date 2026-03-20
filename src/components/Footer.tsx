"use client";

import { motion } from "framer-motion";
import { Unlock, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* 🎨 ILLUSTRATION 7: Footer Graffiti Wall Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/illustrations/graffiti-wall-footer.jpg"
          alt="그래피티 벽 배경"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/35" />

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

          <p className="flex items-center justify-center gap-2 text-gray-200 mb-2 font-emphasis text-sm uppercase tracking-wider [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
            Friends of API <Globe size={14} style={{ color: "#00FF87" }} />
          </p>

          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-300 font-emphasis mb-3 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
            닫힌 구조를 열다.
          </p>

          <p className="flex items-center justify-center gap-2 text-gray-200/90 text-sm mb-10 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
            벽이 말을 하게 만드는 사람들. <Unlock size={14} style={{ color: "#CCFF00" }} />
          </p>

          {/* Bottom links — minimal */}
          <div className="flex items-center justify-center gap-8 mb-8 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            <a href="#why-now" className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-300 hover:text-[#CCFF00] transition-colors font-bold">
              WHY NOW
            </a>
            <span className="text-gray-500">|</span>
            <a href="#join" className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-300 hover:text-[#CCFF00] transition-colors font-bold">
              JOIN
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://foa.wtf" className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-300 hover:text-[#CCFF00] transition-colors font-bold">
              FOA.WTF
            </a>
          </div>

          <p className="text-gray-400 text-[0.6rem] font-bold uppercase tracking-[0.2em] [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
            © 2026 FOA · 소스코드도 열려 있다 · CTRL+U
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
