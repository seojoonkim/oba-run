"use client";

import { motion } from "framer-motion";

const slogans = [
  "우리 API 좀 열어주면 안 될까? 🥺",
  "비즈니스 심사 3개월? 그 시간이면 해커톤 3번 해요 🏃‍♂️",
  "제휴 제안서 쓰다가 지쳐서 만든 캠페인 😇",
  "API 문은 닫혀있고, 내 아이디어는 썩어가고 🥀",
  "우리가 남이가! API로 연결되는 찐친 바이브 👯‍♀️",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Problems() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">뭐가 문제냐고?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            &ldquo;수도꼭지를 틀고 싶었을 뿐인데, 갑자기 댐 건설
            사업계획서를 제출하라고 하는 느낌.&rdquo;
          </p>
        </motion.div>

        {/* Slogans */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {slogans.map((slogan, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card px-6 py-4 text-sm md:text-base text-gray-200 hover:scale-105 transition-transform cursor-default"
            >
              {slogan}
            </motion.div>
          ))}
        </motion.div>

        {/* Essay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 max-w-3xl mx-auto space-y-6"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            많은 기업이 API를{" "}
            <span className="text-pink-400 font-semibold">제품</span>이 아니라{" "}
            <span className="text-orange-400 font-semibold">특권</span>처럼
            다룹니다. 누구나 읽고 실험하고 조합할 수 있는 공개된 인터페이스가
            아니라, &ldquo;이 회사를 믿어도 되는가&rdquo;를 먼저 증명해야 겨우
            열어주는 출입증처럼.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            공공 API는 또 다른 종류의 좌절을 줍니다. 문서가 모호하고, 응답
            포맷이 일관되지 않고, 예고 없이 오류가 나고. 이름은 공개인데,
            경험은 비공개에 가깝습니다.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            AI 에이전트 시대가 오면, 닫힌 API 문화는 곧{" "}
            <span className="gradient-text font-bold">
              닫힌 가능성의 문화
            </span>
            가 됩니다. API가 없으면 에이전트는 똑똑한 구경꾼일 뿐입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
