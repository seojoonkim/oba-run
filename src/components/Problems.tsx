"use client";

import { motion } from "framer-motion";

const slogans = [
  { text: "API 좀 열어달라고요 제발 🥺", rotate: -3, color: "#D4FF00" },
  { text: "심사 3개월이면 해커톤 3번 뛰어요 🏃‍♂️💨", rotate: 2, color: "#FF2D78" },
  { text: "제휴 제안서 쓰다가 화병 걸려서 만든 모임 😇", rotate: -2, color: "#00FF87" },
  { text: "API 문은 잠겼고 내 아이디어는 유통기한 지남 🥀", rotate: 4, color: "#D4FF00" },
  { text: "API로 연결되면 우린 찐친이에요 👯‍♀️", rotate: -4, color: "#FF2D78" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 200, damping: 15 },
  },
};

export default function Problems() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Spray paint background splatter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(255,45,120,0.08) 0%, transparent 70%)" }}
      />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full blur-3xl"
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
            <span className="gradient-text">도대체 뭐가 문제야?</span>
            <span className="ml-3" style={{ color: "#FF2D78" }}>🤔</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold max-w-2xl mx-auto">
            물 한 잔 달라고 했더니 댐 건설 사업계획서를 내래요.
            진심으로요. 🏗️
          </p>
        </motion.div>

        {/* Slogans - Sticker style */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {slogans.map((slogan, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="px-6 py-4 text-sm md:text-base font-black cursor-default relative"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `2px solid ${slogan.color}40`,
                transform: `rotate(${slogan.rotate}deg)`,
                color: slogan.color,
                clipPath: "polygon(1% 0%, 100% 2%, 99% 100%, 0% 98%)",
              }}
              whileHover={{
                rotate: 0,
                scale: 1.1,
                borderColor: slogan.color,
                transition: { duration: 0.2 },
              }}
            >
              {slogan.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Essay - raw graffiti wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="wall-card p-8 md:p-12 max-w-3xl mx-auto space-y-6 relative"
          style={{ transform: "rotate(1deg)" }}
        >
          {/* Neon accent line */}
          <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "linear-gradient(180deg, #D4FF00, #FF2D78, #00FF87)" }} />

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            대부분의 기업이 API를{" "}
            <span style={{ color: "#FF2D78" }} className="font-black">제품</span>이 아니라{" "}
            <span style={{ color: "#D4FF00" }} className="font-black">VIP 출입증</span>
            처럼 다뤄요. &ldquo;너 누군데 우리 API 써?&rdquo; 부터 시작하는 거죠.
            일단 증명하고, 심사받고, 기다리고... 그러다 프로젝트 접어요 😮‍💨
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            공공 API도 만만치 않아요. 문서는 미궁, 응답 포맷은 랜덤,
            에러는 서프라이즈 🎁 이름만 &ldquo;공개&rdquo;지 체감은 비공개...
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            AI 에이전트 시대 온다면서요? API 안 열면 에이전트는 그냥{" "}
            <span className="gradient-text font-black text-xl">
              똑똑한 구경꾼
            </span>
            이에요. 손발이 묶인 천재. 좀 풀어주자고요 🔓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
