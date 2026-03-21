"use client";

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
      <div className="absolute inset-0 bg-black/68" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/42 to-black/60" />

      {/* Top neon line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, #CCFF00, #FF2D78, #00FF87, transparent)",
          boxShadow: "0 0 15px rgba(204,255,0,0.3)",
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div>
          {/* Massive OBA logo */}
          <h3
            className="text-6xl md:text-8xl font-display mb-4 neon-pulse"
            style={{ color: "#CCFF00" }}
          >
            OBA
          </h3>

          <p className="flex items-center justify-center gap-2 text-gray-100 mb-2 font-emphasis text-[0.88rem] uppercase tracking-wider [text-shadow:0_2px_14px_rgba(0,0,0,0.72)] md:text-[0.85rem]">
            Open Builders Alliance <Globe size={14} style={{ color: "#00FF87" }} />
          </p>

          <p className="text-[0.88rem] uppercase tracking-[0.3em] text-gray-100 font-emphasis mb-3 [text-shadow:0_2px_14px_rgba(0,0,0,0.72)] md:text-[0.76rem]">
            닫힌 구조보다 열린 레퍼런스를 늘리자.
          </p>

          <p className="flex items-center justify-center gap-2 text-gray-100 text-[0.92rem] mb-10 [text-shadow:0_2px_14px_rgba(0,0,0,0.72)] md:text-[1.06rem]">
            코드와 API와 문화를 함께 여는 사람들. <Unlock size={14} style={{ color: "#CCFF00" }} />
          </p>

          {/* Bottom links — minimal */}
          <div className="flex items-center justify-center gap-8 mb-8 [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]">
            <a href="#why-now" className="text-[0.86rem] uppercase tracking-[0.25em] text-gray-100 hover:text-[#CCFF00] transition-colors font-bold md:text-[0.82rem]">
              WHY NOW
            </a>
            <span className="text-gray-500">|</span>
            <a href="#join" className="text-[0.86rem] uppercase tracking-[0.25em] text-gray-100 hover:text-[#CCFF00] transition-colors font-bold md:text-[0.82rem]">
              JOIN
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://oba.run" className="text-[0.86rem] uppercase tracking-[0.25em] text-gray-100 hover:text-[#CCFF00] transition-colors font-bold md:text-[0.82rem]">
              OBA.RUN
            </a>
          </div>

          <p className="text-gray-200 text-[0.82rem] font-bold uppercase tracking-[0.2em] [text-shadow:0_2px_14px_rgba(0,0,0,0.72)] md:text-[0.86rem]">
            © 2026 OBA · 소스코드도 열려 있다 · CTRL+U
          </p>
        </div>
      </div>
    </footer>
  );
}
