"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* Graffiti background tags — SYNDROMEZ brutalist feel */
const graffitiWords = [
  { text: "API", x: "8%", y: "12%", rotate: -15, size: "text-7xl", color: "rgba(204,255,0,0.018)" },
  { text: "JSON", x: "78%", y: "18%", rotate: 12, size: "text-5xl", color: "rgba(255,45,120,0.016)" },
  { text: "HTTP", x: "88%", y: "62%", rotate: -8, size: "text-4xl", color: "rgba(0,255,135,0.016)" },
  { text: "REST", x: "3%", y: "72%", rotate: 18, size: "text-6xl", color: "rgba(204,255,0,0.015)" },
  { text: "OPEN", x: "62%", y: "78%", rotate: -6, size: "text-7xl", color: "rgba(255,45,120,0.018)" },
  { text: "SDK", x: "28%", y: "88%", rotate: 14, size: "text-3xl", color: "rgba(0,255,135,0.014)" },
  { text: "WEBHOOK", x: "48%", y: "8%", rotate: -4, size: "text-3xl", color: "rgba(204,255,0,0.012)" },
  { text: "GraphQL", x: "18%", y: "42%", rotate: 9, size: "text-5xl", color: "rgba(255,45,120,0.015)" },
  { text: "OAuth", x: "72%", y: "42%", rotate: -12, size: "text-4xl", color: "rgba(0,255,135,0.014)" },
  { text: "RUN", x: "55%", y: "55%", rotate: -20, size: "text-8xl", color: "rgba(204,255,0,0.012)" },
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
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <Image
          src="/images/illustrations/hero-graffiti.jpg"
          alt="그래피티 낙서 벽 배경"
          fill
          className="object-cover opacity-30 hero-image-texture"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 hero-pixel-overlay" />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 15%, rgba(204,255,0,0.022) 0%, transparent 42%), " +
            "radial-gradient(ellipse at 75% 80%, rgba(255,45,120,0.018) 0%, transparent 42%), " +
            "linear-gradient(180deg, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.66) 48%, rgba(0,0,0,0.86) 100%)",
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
            initial={{ opacity: 0, filter: "blur(16px)", rotate: word.rotate * 1.5 }}
            animate={{ opacity: 0.42, filter: "blur(3px)", rotate: word.rotate }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
          >
            {word.text}
          </motion.span>
        ))}
      </div>

      <SprayParticles />

      <motion.div
        className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-20 pb-12 md:pt-24 md:pb-14"
        style={{ y: contentY }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <motion.p
            className="phase-label mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            PHASE 0: 열린 빌더 생태계를 함께 만들어볼까요?
          </motion.p>

          <motion.p
            className="mb-4 text-[0.94rem] uppercase tracking-[0.36em] text-gray-300 md:text-[1rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            OBA — OPEN BUILDERS ALLIANCE
          </motion.p>

          <motion.h1
            className="mb-2 pt-[0.16em] pb-[0.04em] text-[5.46rem] leading-[1.01] font-display sm:text-[7.35rem] md:text-[10.5rem] lg:text-[14.07rem] xl:text-[17.85rem]"
            style={{
              letterSpacing: "-0.045em",
              overflow: "visible",
            }}
            initial={{ opacity: 0, filter: "blur(30px)", scale: 1.2 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0.28, duration: 1.2, ease: "easeOut" }}
          >
            <span>
              <span className="hero-logo-gradient">OBA</span>
              <span style={{ color: "#27A7E7" }}>.</span>
              <span style={{ color: "#FF2D78" }}>RUN</span>
            </span>
          </motion.h1>

          <motion.div
            className="mb-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <span className="highlight-block text-[1rem] tracking-[0.06em] md:text-[1.1rem]">
              OPEN BUILDERS ALLIANCE
            </span>
          </motion.div>

          <motion.p
            className="mx-auto mb-5 max-w-4xl text-[1.1rem] leading-snug font-bold text-white md:text-[1.7rem] lg:text-[2.15rem]"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            바이브코딩은 <span style={{ color: "#CCFF00" }}>소프트웨어 제작 역량을 빠르게 대중화</span>하고 있습니다.
            그런데 한국에서는 외부 개발자, 스타트업, 파트너가 쉽게 붙을 수 있도록 기술과 인터페이스를 공개한 회사가 아직 너무 희귀합니다.
            그래서 한국의 많은 빌더들이 해외 플랫폼과 서비스를 기반으로 만드는 이유도 여기에 있습니다.
          </motion.p>

          <motion.div
            className="mx-auto mb-8 grid max-w-4xl grid-cols-3 gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
          >
            {[
              "무엇을 하나요: 밋업, 해커톤, 가이드라인, 네트워킹",
              "누가 오나요: 외부 개발자와 파트너가 더 쉽게 붙길 바라는 사람들",
              "왜 지금인가요: 지금 열지 않으면 시장에서 덜 쓰이고 덜 선택될 수 있으니까",
            ].map((item) => (
              <div
                key={item}
                className="syndromez-box flex min-h-[112px] items-center justify-center bg-black/45 p-2.5 text-center md:min-h-[102px]"
              >
                <p className="text-[0.82rem] leading-[1.4] text-gray-200 md:text-[1.06rem]">{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-row items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <a
              href="#join"
              className="inline-block whitespace-nowrap px-4 py-4 text-[0.9rem] font-emphasis uppercase tracking-[0.035em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(204,255,0,0.5)] sm:px-9 sm:text-[1.05rem] sm:tracking-[0.08em] md:px-12"
              style={{
                background: "#CCFF00",
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
                boxShadow: "0 0 30px rgba(204,255,0,0.3)",
              }}
            >
              텔레그램 채널 들어가기
            </a>
            <a
              href="#what-we-do"
              className="inline-block whitespace-nowrap border border-white/20 px-4 py-4 text-[0.9rem] font-emphasis uppercase tracking-[0.035em] text-white transition-all duration-300 hover:scale-105 hover:border-[#00FF87] hover:text-[#00FF87] sm:px-9 sm:text-[1.05rem] sm:tracking-[0.08em] md:px-12"
              style={{
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              }}
            >
              무엇을 하는지 보기
            </a>
          </motion.div>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-[0.9rem] text-gray-500 md:text-[0.96rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            OBA는 <span style={{ color: "#CCFF00" }}>Open Builders Alliance</span>의 약자입니다. 도메인은 <span style={{ color: "#CCFF00" }}>oba.run</span> 입니다.
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
