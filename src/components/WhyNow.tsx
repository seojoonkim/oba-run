"use client";

import { motion } from "framer-motion";

const stats = [
  {
    emoji: "🇰🇷",
    label: "한국 API 시장",
    value: "$7,310만 → $2억 6,330만",
    period: "2024→2033",
    comment:
      "3,500억 원짜리 파티인데 초대장이 없어요. 문 안 두드리면 영원히 못 들어감 🚪",
    rotate: -2,
    accentColor: "#D4FF00",
  },
  {
    emoji: "🌍",
    label: "글로벌 Open Banking",
    value: "$570억 → $3,300억",
    period: "2023→2027",
    comment: "밖에선 400조 원 굴리는 중. 우린 아직 제휴 문의 메일 쓰는 중 📧",
    rotate: 3,
    accentColor: "#FF2D78",
  },
  {
    emoji: "🤖",
    label: "AI 에이전트 API 수요",
    value: "30% 증가",
    period: "Gartner",
    comment: "AI한테 밥(=API) 안 주면 걔네 그냥 멍때림 🫠",
    rotate: -3,
    accentColor: "#00FF87",
  },
  {
    emoji: "📊",
    label: "공공API",
    value: "10만 개 데이터셋",
    period: "but...",
    comment: "공공은 10만 개인데 민간은요? 숨바꼭질 중 🙈",
    rotate: 4,
    accentColor: "#D4FF00",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function WhyNow() {
  return (
    <section id="why-now" className="py-24 md:py-32 px-6 relative paint-splatter">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 skew-title" style={{ fontFamily: "Impact, Inter, sans-serif" }}>
            <span className="gradient-text">지금 아니면 언제?</span>
            <span className="ml-3" style={{ color: "#D4FF00" }}>⏰</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-black">
            솔직히 늦었어요. 근데 안 하는 것보단 낫죠 🤷
          </p>
        </motion.div>

        {/* Stats Grid - Poster/Sticker style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="wall-card p-6 md:p-8 relative tape-effect"
              style={{ transform: `rotate(${stat.rotate}deg)` }}
              whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.3 } }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: stat.accentColor }}
              />
              <div className="text-4xl mb-3">{stat.emoji}</div>
              <p
                className="text-xs uppercase tracking-[0.2em] mb-1 font-black"
                style={{ color: stat.accentColor }}
              >
                {stat.label}
              </p>
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-600 mb-3 font-bold uppercase">{stat.period}</p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {stat.comment}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Essay - wall poster style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="wall-card p-8 md:p-12 max-w-3xl mx-auto relative"
          style={{ transform: "rotate(-1deg)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #D4FF00, #FF2D78, #00FF87)" }} />
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            API 하면 기술 얘기 같죠? 서버 통신, 인증 키, JSON... 근데 진짜
            파보면 API는 기술보다{" "}
            <span style={{ color: "#D4FF00" }} className="font-black">관계</span>의
            문제예요. 누가 누구한테 데이터를 열어주느냐의 문제.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            한국에서 API 연동 요청하면 돌아오는 3종 세트, 다들 겪어봤죠? 😅
          </p>
          <ul className="space-y-3 mb-6">
            <li className="text-gray-400 flex items-start gap-3">
              <span style={{ color: "#FF2D78" }} className="font-black text-lg">✘</span>
              &ldquo;비즈니스 심사가 필요합니다&rdquo; (서류 20장 제출 시작 📝)
            </li>
            <li className="text-gray-400 flex items-start gap-3">
              <span style={{ color: "#FF2D78" }} className="font-black text-lg">✘</span>
              &ldquo;담당자 연결해 드릴게요&rdquo;{" "}
              <span className="text-gray-600">(그리고 영원한 읽씹 💀)</span>
            </li>
            <li className="text-gray-400 flex items-start gap-3">
              <span style={{ color: "#FF2D78" }} className="font-black text-lg">✘</span>
              &ldquo;외부 연동은 지원하지 않습니다&rdquo; (끝. 그냥 끝. 🚫)
            </li>
          </ul>
          <p className="text-lg md:text-xl font-black text-white">
            와이파이 세계 1위인데
            <br />
            <span className="gradient-text text-2xl">
              API 하나 받는 데 3개월... 이거 좀 웃기지 않나요? 😅
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
