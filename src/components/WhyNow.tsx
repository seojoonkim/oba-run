"use client";

import { motion } from "framer-motion";

const stats = [
  {
    emoji: "🇰🇷",
    label: "한국 API 시장",
    value: "$7,310만 → $2억 6,330만",
    period: "2024→2033",
    comment:
      "2033년엔 3,500억 원짜리 파티가 열립니다 🥳 지금 문 안 열면 우리만 초대장 못 받아요!",
  },
  {
    emoji: "🌍",
    label: "글로벌 Open Banking",
    value: "$570억 → $3,300억",
    period: "2023→2027",
    comment: "글로벌 친구들은 지갑 열고 400조 원대 거래 중! 💸",
  },
  {
    emoji: "🤖",
    label: "AI 에이전트 API 수요",
    value: "30% 증가",
    period: "Gartner",
    comment: "AI도 밥(데이터)을 먹어야 일하죠! 🤖",
  },
  {
    emoji: "📊",
    label: "공공API",
    value: "10만 개 데이터셋",
    period: "but...",
    comment: "민간 데이터는 다 어디 숨었나요? 👀",
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function WhyNow() {
  return (
    <section id="why-now" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">왜 지금?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            &ldquo;솔직히, 진작 했어야 했는데.&rdquo;
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card p-6 md:p-8 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.emoji}</div>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 mb-3">{stat.period}</p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {stat.comment}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Essay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 max-w-3xl mx-auto"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            API라는 말을 들으면 많은 사람이 먼저 기술을 떠올립니다. 서버와
            서버가 대화하는 방식, 개발자 문서, 인증 키, JSON 응답 같은 것들요.
            그런데 조금만 더 들여다보면 API는 기술이라기보다{" "}
            <span className="text-purple-400 font-semibold">사회</span>에 더
            가깝습니다.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            한국에서 API 연동을 요청하면 돌아오는 대답, 다들 아시죠?
          </p>
          <ul className="space-y-2 mb-6">
            <li className="text-gray-400 flex items-start gap-2">
              <span className="text-pink-500">•</span>
              &ldquo;비즈니스 심사가 필요합니다.&rdquo;
            </li>
            <li className="text-gray-400 flex items-start gap-2">
              <span className="text-pink-500">•</span>
              &ldquo;담당자 연결해 드릴게요.&rdquo;{" "}
              <span className="text-gray-600">(그 후 영원한 침묵)</span>
            </li>
            <li className="text-gray-400 flex items-start gap-2">
              <span className="text-pink-500">•</span>
              &ldquo;현재 외부 연동은 지원하지 않습니다.&rdquo;
            </li>
          </ul>
          <p className="text-lg md:text-xl font-semibold text-white">
            세계에서 가장 빠른 인터넷을 가진 나라에서,
            <br />
            <span className="gradient-text">
              API 하나 연동하는 데 3개월이 걸립니다.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
