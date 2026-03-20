"use client";

import { motion } from "framer-motion";

const activities = [
  {
    icon: "🍻",
    title: "밋업",
    description:
      "모여서 떠들어요. 성공담, 삽질기, 분노 다 OK. 테마별로 깊게 파고 맥주로 마무리 🍺",
    rotate: -3,
    accentColor: "#D4FF00",
  },
  {
    icon: "🛠️",
    title: "해커톤",
    description:
      "회원사가 API 던지면 참가자들이 48시간 안에 뭔가 만들어요. 기상천외한 매시업 탄생 현장 🔥",
    rotate: 2,
    accentColor: "#FF2D78",
  },
  {
    icon: "📐",
    title: "가이드라인",
    description:
      "한국형 API 설계 기준을 같이 만들어요. '모범 사례' 아니고 '현실적으로 쓸 수 있는 거' 📏",
    rotate: 3,
    accentColor: "#00FF87",
  },
  {
    icon: "🤝",
    title: "네트워킹",
    description:
      "서로 API 소개하고, 연결하고, 직접 써보는 자리. 좋은 관계에서 좋은 연동이 나와요 ✨",
    rotate: -2,
    accentColor: "#D4FF00",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, type: "spring" as const, stiffness: 100 },
  },
};

export default function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      {/* Background spray */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,135,0.05) 0%, transparent 70%)" }}
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
            <span className="gradient-text">그래서 뭐 하는데?</span>
            <span className="ml-3" style={{ color: "#00FF87" }}>👀</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold">
            큰 거 아니에요. 일단 맥주부터 🍺
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="wall-card p-8 cursor-default group relative overflow-hidden"
              style={{ transform: `rotate(${activity.rotate}deg)` }}
              whileHover={{ rotate: 0, scale: 1.03, y: -4, transition: { duration: 0.3 } }}
            >
              {/* Side accent */}
              <div
                className="absolute top-0 left-0 w-1.5 h-full"
                style={{ background: activity.accentColor }}
              />
              {/* Bottom corner tag */}
              <div
                className="absolute bottom-0 right-0 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black"
                style={{ background: activity.accentColor }}
              >
                FOA
              </div>

              <div
                className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300"
                style={{ filter: "drop-shadow(0 0 10px rgba(212,255,0,0.3))" }}
              >
                {activity.icon}
              </div>
              <h3
                className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide"
                style={{ fontFamily: "Impact, Inter, sans-serif" }}
              >
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
