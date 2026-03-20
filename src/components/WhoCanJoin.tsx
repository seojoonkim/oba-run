"use client";

import { motion } from "framer-motion";

const roles = [
  {
    emoji: "🚀",
    title: "스타트업",
    description:
      "API 문 두드리다가 멍든 적 있으면 여기예요 🚪🤕 동지들 가득합니다.",
    rotate: -4,
    accent: "#D4FF00",
  },
  {
    emoji: "🏢",
    title: "대기업",
    description:
      "API 열어볼까 고민 중이시죠? 여기서 먼저 실험해보세요. 의외로 재밌어요 😎",
    rotate: 3,
    accent: "#FF2D78",
  },
  {
    emoji: "💻",
    title: "개발자",
    description:
      "API 문서 읽다가 혈압 오른 적 있으면 자격 충분해요 🩺",
    rotate: -2,
    accent: "#00FF87",
  },
  {
    emoji: "🎓",
    title: "학생",
    description:
      "공공 API로 프로젝트 하다가 좌절? 그 경험이 입장권이에요 🎫",
    rotate: 5,
    accent: "#D4FF00",
  },
  {
    emoji: "🤖",
    title: "AI 빌더",
    description:
      "에이전트한테 먹일 API 찾고 있다면 제대로 찾아왔어요 🎯",
    rotate: -3,
    accent: "#FF2D78",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 180, damping: 15 },
  },
};

export default function WhoCanJoin() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Neon spray background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(255,45,120,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(212,255,0,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 skew-title" style={{ fontFamily: "Impact, Inter, sans-serif" }}>
            <span className="gradient-text">누구든 환영이에요</span>
            <span className="ml-3" style={{ color: "#D4FF00" }}>🙌</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold">
            API에 관심 있으면 그걸로 충분해요. 진짜로.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {roles.map((role, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="sticker-card p-8 text-center cursor-default relative"
              style={{ transform: `rotate(${role.rotate}deg)` }}
              whileHover={{ rotate: 0, y: -8, scale: 1.05, transition: { duration: 0.3 } }}
            >
              {/* Top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: role.accent }}
              />
              {/* Corner tag */}
              <div
                className="absolute top-2 right-2 w-3 h-3 rounded-full"
                style={{ background: role.accent, boxShadow: `0 0 10px ${role.accent}60` }}
              />

              <div className="text-5xl mb-4" style={{ filter: `drop-shadow(0 0 8px ${role.accent}40)` }}>
                {role.emoji}
              </div>
              <h3
                className="text-xl font-black text-white mb-3 uppercase tracking-wider"
                style={{ fontFamily: "Impact, Inter, sans-serif", color: role.accent }}
              >
                {role.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
