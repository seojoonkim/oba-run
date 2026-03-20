"use client";

import { motion } from "framer-motion";

const roles = [
  {
    emoji: "🚀",
    title: "스타트업",
    description:
      '"외부 API 연동하고 싶은데 문이 안 열려요" 여기 동지들 있습니다.',
  },
  {
    emoji: "🏢",
    title: "대기업",
    description:
      "API 열어볼까 고민 중이라면, 여기서 먼저 실험해보세요.",
  },
  {
    emoji: "💻",
    title: "개발자",
    description:
      "API 문서 읽다가 화난 적 있으면 자격 충분합니다.",
  },
  {
    emoji: "🎓",
    title: "학생",
    description:
      "공공 API로 프로젝트 하다가 좌절한 적 있으면 환영합니다.",
  },
  {
    emoji: "🤖",
    title: "AI 빌더",
    description:
      "에이전트한테 먹일 API를 찾고 있다면, 여기가 맞습니다.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhoCanJoin() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-900/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-900/15 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">누구나 친구야</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            &ldquo;API에 관심 있으면 그걸로 충분해요.&rdquo;
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {roles.map((role, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`glass-card p-8 text-center cursor-default transition-all duration-300 ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="text-5xl mb-4">{role.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-3">
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
