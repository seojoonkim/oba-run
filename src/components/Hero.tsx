"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* Graffiti background words */
const graffitiWords = [
  { text: "API", x: "10%", y: "15%", rotate: -12, size: "text-6xl", color: "rgba(212,255,0,0.06)" },
  { text: "JSON", x: "75%", y: "20%", rotate: 8, size: "text-5xl", color: "rgba(255,45,120,0.05)" },
  { text: "HTTP", x: "85%", y: "65%", rotate: -5, size: "text-4xl", color: "rgba(0,255,135,0.05)" },
  { text: "REST", x: "5%", y: "70%", rotate: 15, size: "text-5xl", color: "rgba(212,255,0,0.04)" },
  { text: "OPEN", x: "60%", y: "80%", rotate: -8, size: "text-6xl", color: "rgba(255,45,120,0.06)" },
  { text: "SDK", x: "30%", y: "85%", rotate: 10, size: "text-3xl", color: "rgba(0,255,135,0.05)" },
  { text: "WEBHOOK", x: "50%", y: "10%", rotate: -3, size: "text-3xl", color: "rgba(212,255,0,0.04)" },
  { text: "GraphQL", x: "20%", y: "45%", rotate: 7, size: "text-4xl", color: "rgba(255,45,120,0.04)" },
  { text: "OAuth", x: "70%", y: "45%", rotate: -10, size: "text-4xl", color: "rgba(0,255,135,0.04)" },
  { text: "CRUD", x: "40%", y: "30%", rotate: 12, size: "text-3xl", color: "rgba(212,255,0,0.03)" },
];

/* Spray paint particles */
function SprayParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const colors = ["#D4FF00", "#FF2D78", "#00FF87"];
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3,
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
          }}
          animate={{
            y: [0, -15, 5, -10, 0],
            x: [0, 5, -5, 3, 0],
            opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
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
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Dark wall background */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: bgScale,
          background: "radial-gradient(ellipse at 30% 20%, rgba(212,255,0,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255,45,120,0.03) 0%, transparent 50%), #0a0a0a",
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
              transform: `rotate(${word.rotate}deg)`,
              fontFamily: "Impact, Inter, sans-serif",
            }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
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
            className="text-sm md:text-base tracking-[0.4em] uppercase mb-6"
            style={{ color: "#D4FF00" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            foa.wtf
          </motion.p>

          {/* Giant FOA title - graffiti style */}
          <motion.h1
            className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none mb-2 skew-title"
            style={{
              fontFamily: "Impact, Inter, sans-serif",
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="gradient-text">FOA</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl font-black uppercase tracking-[0.15em] mb-4"
            style={{ color: "#FF2D78" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Friends of Open API
          </motion.p>

          {/* Slogan */}
          <motion.p
            className="text-3xl md:text-5xl font-black text-white mb-8 skew-title neon-glow-yellow"
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

          {/* CTA Button - spray can style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
          >
            <a
              href="#why-now"
              className="inline-block px-10 py-5 font-black text-lg uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,255,0,0.4)]"
              style={{
                background: "linear-gradient(135deg, #D4FF00, #00FF87)",
                clipPath: "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)",
              }}
            >
              벽 뚫으러 가기 👇
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom drip line */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #D4FF00, #FF2D78, #00FF87)" }} />
    </section>
  );
}
