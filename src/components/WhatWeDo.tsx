"use client";

import { motion } from "framer-motion";

const activities = [
  {
    icon: "🍻",
    title: "밋업",
    description:
      "정기적으로 모여서 이야기합니다. 성공담도, 실패담도, 분노도 환영. 테마별 세션으로 깊게 파고, 맥주 한 잔으로 마무리.",
  },
  {
    icon: "🛠️",
    title: "해커톤",
    description:
      "회원사들이 API를 내놓고, 참가자들이 뭔가를 만들어봅니다. 48시간 안에 탄생하는 기상천외한 매시업.",
  },
  {
    icon: "📐",
    title: "가이드라인",
    description:
      '한국형 API 설계 가이드라인을 함께 만듭니다. "모범 사례"가 아니라 "현실적으로 따를 수 있는 기준"을 목표로.',
  },
  {
    icon: "🤝",
    title: "네트워킹",
    description:
      "서로의 API를 소개하고, 연결하고, 실제로 써보는 자리. 매칭은 기술이 아니라 관계에서 시작됩니다.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

export default function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">뭘 할 건데?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            &ldquo;거창한 건 없어요. 친구들끼리 할 수 있는 것부터.&rdquo;
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card p-8 cursor-default group transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {activity.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {activity.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
