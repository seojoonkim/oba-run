"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

const sprayParticles = [
  { id: 0, x: 4, y: 10, size: 2.2, color: "#CCFF00", delay: 0.1, duration: 5.2 },
  { id: 1, x: 12, y: 18, size: 3.4, color: "#FF2D78", delay: 0.7, duration: 6.1 },
  { id: 2, x: 20, y: 8, size: 1.8, color: "#00FF87", delay: 1.4, duration: 5.7 },
  { id: 3, x: 28, y: 24, size: 4.1, color: "#CCFF00", delay: 2.1, duration: 7.3 },
  { id: 4, x: 36, y: 14, size: 2.6, color: "#FF2D78", delay: 0.3, duration: 5.9 },
  { id: 5, x: 44, y: 30, size: 1.5, color: "#00FF87", delay: 1.1, duration: 6.5 },
  { id: 6, x: 52, y: 12, size: 3.8, color: "#CCFF00", delay: 2.8, duration: 5.4 },
  { id: 7, x: 60, y: 22, size: 2.1, color: "#FF2D78", delay: 1.9, duration: 6.8 },
  { id: 8, x: 68, y: 16, size: 3.1, color: "#00FF87", delay: 0.5, duration: 5.6 },
  { id: 9, x: 76, y: 28, size: 2.7, color: "#CCFF00", delay: 1.6, duration: 7.0 },
  { id: 10, x: 84, y: 12, size: 1.9, color: "#FF2D78", delay: 2.4, duration: 5.3 },
  { id: 11, x: 92, y: 20, size: 3.5, color: "#00FF87", delay: 0.9, duration: 6.2 },
  { id: 12, x: 8, y: 38, size: 2.3, color: "#CCFF00", delay: 1.7, duration: 5.8 },
  { id: 13, x: 16, y: 46, size: 4.0, color: "#FF2D78", delay: 2.2, duration: 6.9 },
  { id: 14, x: 24, y: 34, size: 1.7, color: "#00FF87", delay: 0.4, duration: 5.1 },
  { id: 15, x: 32, y: 42, size: 2.9, color: "#CCFF00", delay: 1.3, duration: 6.4 },
  { id: 16, x: 40, y: 50, size: 3.3, color: "#FF2D78", delay: 2.6, duration: 7.1 },
  { id: 17, x: 48, y: 38, size: 2.0, color: "#00FF87", delay: 0.8, duration: 5.5 },
  { id: 18, x: 56, y: 46, size: 4.2, color: "#CCFF00", delay: 1.5, duration: 6.7 },
  { id: 19, x: 64, y: 36, size: 1.6, color: "#FF2D78", delay: 2.9, duration: 5.9 },
  { id: 20, x: 72, y: 48, size: 2.8, color: "#00FF87", delay: 0.2, duration: 6.3 },
  { id: 21, x: 80, y: 40, size: 3.6, color: "#CCFF00", delay: 1.8, duration: 7.2 },
  { id: 22, x: 88, y: 52, size: 2.4, color: "#FF2D78", delay: 0.6, duration: 5.4 },
  { id: 23, x: 96, y: 44, size: 1.4, color: "#00FF87", delay: 2.0, duration: 6.0 },
  { id: 24, x: 6, y: 62, size: 3.0, color: "#CCFF00", delay: 1.0, duration: 5.7 },
  { id: 25, x: 14, y: 70, size: 2.2, color: "#FF2D78", delay: 2.5, duration: 6.6 },
  { id: 26, x: 22, y: 58, size: 3.9, color: "#00FF87", delay: 0.7, duration: 5.2 },
  { id: 27, x: 30, y: 66, size: 1.8, color: "#CCFF00", delay: 1.9, duration: 6.8 },
  { id: 28, x: 38, y: 74, size: 2.5, color: "#FF2D78", delay: 0.1, duration: 5.6 },
  { id: 29, x: 46, y: 62, size: 3.2, color: "#00FF87", delay: 1.4, duration: 6.1 },
  { id: 30, x: 54, y: 70, size: 4.0, color: "#CCFF00", delay: 2.7, duration: 7.3 },
  { id: 31, x: 62, y: 60, size: 1.7, color: "#FF2D78", delay: 0.5, duration: 5.3 },
  { id: 32, x: 70, y: 72, size: 2.9, color: "#00FF87", delay: 1.6, duration: 6.5 },
  { id: 33, x: 78, y: 64, size: 3.4, color: "#CCFF00", delay: 2.3, duration: 5.8 },
  { id: 34, x: 86, y: 76, size: 2.1, color: "#FF2D78", delay: 0.9, duration: 6.9 },
  { id: 35, x: 94, y: 68, size: 1.5, color: "#00FF87", delay: 1.2, duration: 5.5 },
  { id: 36, x: 10, y: 84, size: 3.7, color: "#CCFF00", delay: 2.1, duration: 6.2 },
  { id: 37, x: 18, y: 92, size: 2.3, color: "#FF2D78", delay: 0.4, duration: 5.1 },
  { id: 38, x: 26, y: 80, size: 4.1, color: "#00FF87", delay: 1.7, duration: 7.0 },
  { id: 39, x: 34, y: 88, size: 1.9, color: "#CCFF00", delay: 2.8, duration: 5.4 },
  { id: 40, x: 42, y: 96, size: 2.7, color: "#FF2D78", delay: 0.8, duration: 6.7 },
  { id: 41, x: 50, y: 82, size: 3.1, color: "#00FF87", delay: 1.5, duration: 5.9 },
  { id: 42, x: 58, y: 90, size: 2.4, color: "#CCFF00", delay: 0.3, duration: 6.4 },
  { id: 43, x: 66, y: 78, size: 3.8, color: "#FF2D78", delay: 2.4, duration: 7.1 },
  { id: 44, x: 74, y: 86, size: 1.6, color: "#00FF87", delay: 1.1, duration: 5.2 },
  { id: 45, x: 82, y: 94, size: 2.8, color: "#CCFF00", delay: 2.0, duration: 6.8 },
  { id: 46, x: 90, y: 82, size: 3.3, color: "#FF2D78", delay: 0.6, duration: 5.6 },
  { id: 47, x: 98, y: 90, size: 2.0, color: "#00FF87", delay: 1.8, duration: 6.3 },
  { id: 48, x: 50, y: 6, size: 1.4, color: "#CCFF00", delay: 2.2, duration: 5.0 },
  { id: 49, x: 58, y: 98, size: 2.6, color: "#FF2D78", delay: 0.2, duration: 6.0 },
];

function SprayParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sprayParticles.map((p) => (
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
            duration: p.duration,
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
      <div className="absolute inset-0">
        <Image
          src="/images/illustrations/hero-graffiti.jpg"
          alt="그래피티 낙서 벽 배경"
          fill
          className="object-cover opacity-54"
          priority
        />
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          scale: bgScale,
          background:
            "radial-gradient(ellipse at 25% 15%, rgba(204,255,0,0.05) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 75% 80%, rgba(255,45,120,0.04) 0%, transparent 50%), " +
            "linear-gradient(180deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.27) 50%, rgba(0,0,0,0.60) 100%)",
        }}
      />

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

      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16"
        style={{ y: contentY }}
      >
        <div className="text-center max-w-6xl mx-auto">
          <motion.p
            className="phase-label mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            PHASE 0: 열린 API 문화를 함께 만들어볼까요?
          </motion.p>

          <motion.p
            className="text-[calc(0.875rem+1px)] md:text-[calc(1rem+1px)] tracking-[0.45em] uppercase mb-5 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            FOA — FRIENDS OF API
          </motion.p>

          <motion.h1
            className="text-[6.5rem] sm:text-[8.5rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-display leading-[0.88] mb-3"
            style={{
              letterSpacing: "-0.05em",
            }}
            initial={{ opacity: 0, filter: "blur(30px)", scale: 1.2 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0.28, duration: 1.2, ease: "easeOut" }}
          >
            <span className="hero-logo-gradient">
              foa.wtf
            </span>
          </motion.h1>

          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <span className="highlight-block text-base md:text-xl tracking-[0.08em]">
              OPEN API PEOPLE, MEETUPS, HACKATHONS, AND PRACTICAL COLLABORATION
            </span>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl lg:text-4xl text-white mb-6 max-w-4xl mx-auto leading-snug font-bold"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            FOA는 <span style={{ color: "#CCFF00" }}>열린 API 생태계를 만들고 싶은 사람들</span>이
            만나서 배우고, 만들고, 연결되는 커뮤니티입니다.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
          >
            스타트업, 기업, 개발자, 학생, AI 빌더까지. 닫힌 구조 앞에서 멈춰보신 적이 있다면 함께하실 수 있습니다.
            첫 밋업과 해커톤, 그리고 이후 협업 기회를 함께 설계해가겠습니다.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
          >
            {[
              "무엇을 하나요: 밋업, 해커톤, 가이드라인, 네트워킹",
              "누가 오나요: API를 열고 쓰고 연결하고 싶은 사람들",
              "지금 하면 좋은 이유: 첫 참여자로 방향을 같이 만들 수 있음",
            ].map((item) => (
              <div key={item} className="syndromez-box p-4 bg-black/35 flex items-center justify-center text-center min-h-[112px]">
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <a
              href="#join"
              className="inline-block px-10 md:px-14 py-5 font-emphasis text-lg uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(204,255,0,0.5)]"
              style={{
                background: "#CCFF00",
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
                boxShadow: "0 0 30px rgba(204,255,0,0.3)",
              }}
            >
              첫 밋업 소식 받기
            </a>
            <a
              href="#what-we-do"
              className="inline-block px-10 md:px-14 py-5 font-emphasis text-lg uppercase tracking-wider text-white border border-white/20 transition-all duration-300 hover:scale-105 hover:border-[#00FF87] hover:text-[#00FF87]"
              style={{
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              }}
            >
              무엇을 하는지 보기
            </a>
          </motion.div>

          <motion.p
            className="text-sm text-gray-500 max-w-2xl mx-auto mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            FOA를 기본 표기로 사용합니다. 도메인은 <span style={{ color: "#CCFF00" }}>foa.wtf</span> 입니다.
          </motion.p>
        </div>
      </motion.div>

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
