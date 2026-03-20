"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* Graffiti background words — more varied opacity & sizes */
const graffitiWords = [
  { text: "API", x: "8%", y: "12%", rotate: -15, size: "text-7xl", color: "rgba(212,255,0,0.07)" },
  { text: "JSON", x: "78%", y: "18%", rotate: 12, size: "text-5xl", color: "rgba(255,45,120,0.06)" },
  { text: "HTTP", x: "88%", y: "62%", rotate: -8, size: "text-4xl", color: "rgba(0,255,135,0.06)" },
  { text: "REST", x: "3%", y: "72%", rotate: 18, size: "text-6xl", color: "rgba(212,255,0,0.05)" },
  { text: "OPEN", x: "62%", y: "78%", rotate: -6, size: "text-7xl", color: "rgba(255,45,120,0.07)" },
  { text: "SDK", x: "28%", y: "88%", rotate: 14, size: "text-3xl", color: "rgba(0,255,135,0.05)" },
  { text: "WEBHOOK", x: "48%", y: "8%", rotate: -4, size: "text-3xl", color: "rgba(212,255,0,0.04)" },
  { text: "GraphQL", x: "18%", y: "42%", rotate: 9, size: "text-5xl", color: "rgba(255,45,120,0.05)" },
  { text: "OAuth", x: "72%", y: "42%", rotate: -12, size: "text-4xl", color: "rgba(0,255,135,0.05)" },
  { text: "CRUD", x: "42%", y: "28%", rotate: 16, size: "text-3xl", color: "rgba(212,255,0,0.04)" },
  { text: "WTF", x: "55%", y: "55%", rotate: -20, size: "text-8xl", color: "rgba(255,45,120,0.04)" },
  { text: "v2", x: "90%", y: "35%", rotate: 25, size: "text-2xl", color: "rgba(0,255,135,0.06)" },
];

/* Spray paint particles */
function SprayParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const colors = ["#D4FF00", "#FF2D78", "#00FF87"];
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
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
            opacity: [0.15, 0.5, 0.2, 0.6, 0.15],
            scale: [1, 1.3, 0.8, 1.2, 1],
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
      {/* Dark wall background with stronger radial spots */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: bgScale,
          background:
            "radial-gradient(ellipse at 25% 15%, rgba(212,255,0,0.06) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 75% 80%, rgba(255,45,120,0.05) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 50% 50%, rgba(0,255,135,0.02) 0%, transparent 60%), " +
            "#0a0a0a",
        }}
      />

      {/* Graffiti background tags */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {graffitiWords.map((word, i) => (
          <motion.span
            key={i}
            className={`absolute ${word.size} font-black uppercase select-none`}
            style={{
              left: word.x,
              top: word.y,
              color: word.color,
              fontFamily: "Impact, Inter, sans-serif",
            }}
            initial={{ opacity: 0, filter: "blur(10px)", rotate: word.rotate * 1.5 }}
            animate={{ opacity: 1, filter: "blur(0px)", rotate: word.rotate }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
          >
            {word.text}
          </motion.span>
        ))}
      </div>

      {/* Spray paint particles */}
      <SprayParticles />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-6"
        style={{ y: contentY }}
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Domain tag */}
          <motion.p
            className="text-sm md:text-base tracking-[0.5em] uppercase mb-6 neon-glow-yellow"
            style={{ color: "#D4FF00" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            foa.wtf
          </motion.p>

          {/* Giant FOA title — bigger, bolder, with glow */}
          <motion.h1
            className="text-[9rem] md:text-[14rem] lg:text-[18rem] font-black leading-none mb-2"
            style={{
              fontFamily: "Impact, Inter, sans-serif",
              letterSpacing: "-0.03em",
              transform: "skewX(-3deg)",
            }}
            initial={{ opacity: 0, filter: "blur(30px)", scale: 1.2 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          >
            <span
              className="gradient-text"
              style={{
                filter: "drop-shadow(0 0 40px rgba(212,255,0,0.3)) drop-shadow(0 0 80px rgba(255,45,120,0.2))",
              }}
            >
              FOA
            </span>
          </motion.h1>

          {/* Subtitle — "Friends of Open API" on one line */}
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl font-black uppercase tracking-[0.15em] mb-4 whitespace-nowrap neon-glow-pink"
            style={{ color: "#FF2D78" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Friends of Open API
          </motion.p>

          {/* Slogan — with flicker */}
          <motion.p
            className="text-3xl md:text-5xl font-black text-white mb-8 neon-flicker"
            style={{ transform: "skewX(-3deg)" }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            What The Fun! 🎉
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            API 안 열면 아무것도 안 돼.
            <br />
            그러니까 일단 열자. 같이.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            닫힌 뒤에 갇힌 가능성, 우리가 꺼낼게요.
            <br />
            친구 모이면 문은 저절로 열립니다.
          </motion.p>

          {/* CTA Button — spray can style with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
          >
            <a
              href="#why-now"
              className="inline-block px-12 py-5 font-black text-lg uppercase tracking-wider text-black transition-all duration-300 hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #D4FF00, #00FF87)",
                clipPath: "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)",
                boxShadow: "0 0 30px rgba(212,255,0,0.3), 0 0 60px rgba(0,255,135,0.15)",
                fontFamily: "Impact, Inter, sans-serif",
              }}
            >
              벽 뚫으러 가기 💥
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom drip line — thicker */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5"
        style={{
          background: "linear-gradient(90deg, #D4FF00, #FF2D78, #00FF87, #D4FF00)",
          boxShadow: "0 0 20px rgba(212,255,0,0.4), 0 0 40px rgba(255,45,120,0.2)",
        }}
      />
    </section>
  );
}
