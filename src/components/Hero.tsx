"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/* Graffiti background tags — SYNDROMEZ brutalist feel */
const graffitiWords = [
  { text: "API", x: "8%", y: "12%", rotate: -15, size: "text-7xl", color: "rgba(204,255,0,0.06)" },
  { text: "JSON", x: "78%", y: "18%", rotate: 12, size: "text-5xl", color: "rgba(255,45,120,0.05)" },
  { text: "HTTP", x: "88%", y: "62%", rotate: -8, size: "text-4xl", color: "rgba(0,255,135,0.05)" },
  { text: "REST", x: "3%", y: "72%", rotate: 18, size: "text-6xl", color: "rgba(204,255,0,0.04)" },
  { text: "OPEN", x: "62%", y: "78%", rotate: -6, size: "text-7xl", color: "rgba(255,45,120,0.06)" },
  { text: "SDK", x: "28%", y: "88%", rotate: 14, size: "text-3xl", color: "rgba(0,255,135,0.04)" },
  { text: "WEBHOOK", x: "48%", y: "8%", rotate: -4, size: "text-3xl", color: "rgba(204,255,0,0.03)" },
  { text: "GraphQL", x: "18%", y: "42%", rotate: 9, size: "text-5xl", color: "rgba(255,45,120,0.04)" },
  { text: "OAuth", x: "72%", y: "42%", rotate: -12, size: "text-4xl", color: "rgba(0,255,135,0.04)" },
  { text: "WTF", x: "55%", y: "55%", rotate: -20, size: "text-8xl", color: "rgba(204,255,0,0.03)" },
];

/* Spray particles */
function SprayParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const colors = ["#CCFF00", "#FF2D78", "#00FF87"];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}40`,
          }}
          animate={{
            y: [0, -20, 8, -15, 0],
            x: [0, 8, -6, 4, 0],
            opacity: [0.2, 0.4, 0.3, 0.5, 0.2],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* 🎨 ILLUSTRATION 1: Hero Background — Graffiti Wall */}
      <div className="absolute inset-0 illustration-container">
        <Image
          src="/images/illustrations/hero-graffiti.png"
          alt="그래피티 낙서 벽 배경"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Dark overlay + radial accents */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: bgScale,
          background:
            "radial-gradient(ellipse at 25% 15%, rgba(204,255,0,0.05) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 75% 80%, rgba(255,45,120,0.04) 0%, transparent 50%), " +
            "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Graffiti tags */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {graffitiWords.map((word, i) => (
          <motion.span
            key={i}
            className={`absolute ${word.size} font-black uppercase select-none`}
            style={{
              left: word.x,
              top: word.y,
              color: word.color,
              fontFamily: "var(--font-black-han-sans), 'Black Han Sans', Impact, sans-serif",
            }}
            initial={{ opacity: 0, filter: "blur(10px)", rotate: word.rotate * 1.5 }}
            animate={{ opacity: 1, filter: "blur(0px)", rotate: word.rotate }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
          >
            {word.text}
          </motion.span>
        ))}
      </div>

      <SprayParticles />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-6"
        style={{ y: contentY }}
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Phase breadcrumb — SYNDROMEZ style */}
          <motion.p
            className="phase-label mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            PHASE 0: A NEW BREED OF API CULTURE
          </motion.p>

          {/* Domain tag */}
          <motion.p
            className="text-sm md:text-base tracking-[0.5em] uppercase mb-6 neon-glow-lime"
            style={{ color: "#CCFF00" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            foa.wtf
          </motion.p>

          {/* Giant FOA — SYNDROMEZ massive scale */}
          <motion.h1
            className="text-[9rem] md:text-[14rem] lg:text-[18rem] font-display leading-none mb-2"
            style={{
              letterSpacing: "-0.03em",
            }}
            initial={{ opacity: 0, filter: "blur(30px)", scale: 1.2 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          >
            <span
              style={{
                color: "#CCFF00",
                filter: "drop-shadow(0 0 60px rgba(204,255,0,0.4))",
              }}
            >
              FOA
            </span>
          </motion.h1>

          {/* Subtitle — SYNDROMEZ highlighter block */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="highlight-block text-lg md:text-2xl tracking-[0.1em]">
              FRIENDS OF OPEN API
            </span>
          </motion.div>

          {/* Slogan */}
          <motion.p
            className="text-3xl md:text-5xl font-black text-white mb-8 neon-pulse"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            What The Fun!
          </motion.p>

          {/* Tagline — cleaner, SYNDROMEZ style */}
          <motion.div
            className="max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              연결되지 않으면, 아무것도 시작되지 않는다.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="font-black" style={{ color: "#CCFF00" }}>열린 API가 열린 세상을 만든다.</span>
            </p>
          </motion.div>

          <motion.p
            className="text-base text-gray-500 max-w-xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            닫힌 문 뒤에 잠든 가능성을 깨우는 사람들.
          </motion.p>

          {/* CTA — SYNDROMEZ angular button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
          >
            <a
              href="#why-now"
              className="inline-block px-14 py-5 font-black text-lg uppercase tracking-wider text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(204,255,0,0.5)]"
              style={{
                background: "#CCFF00",
                fontFamily: "var(--font-black-han-sans), 'Black Han Sans', Impact, sans-serif",
                boxShadow: "0 0 30px rgba(204,255,0,0.3)",
              }}
            >
              WHY NOW →
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom neon line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, #CCFF00, #FF2D78, #00FF87, transparent)",
          boxShadow: "0 0 15px rgba(204,255,0,0.4)",
        }}
      />
    </section>
  );
}
