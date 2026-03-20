"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const slogans = [
  { text: "API 좀 열어달라고요 제발 🥺", color: "#CCFF00" },
  { text: "심사 3개월이면 해커톤 3번 뛰어요 💨", color: "#FF2D78" },
  { text: "제휴 제안서 쓰다가 화병 걸려서 만든 모임 😇", color: "#00FF87" },
  { text: "API 문은 잠겼고 내 아이디어는 유통기한 지남 🥀", color: "#CCFF00" },
  { text: "API로 연결되면 우린 찐친이에요 👯", color: "#FF2D78" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -25 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 200, damping: 15 },
  },
};

export default function Problems() {
  return (
    <section className="py-28 md:py-36 px-6 relative overflow-hidden spray-drip">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(255,45,120,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 2: THE PROBLEM
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4" style={{ fontFamily: "Impact, Inter, sans-serif", letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>도대체 뭐가</span>{" "}
            <span className="text-white">문제야?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold max-w-2xl">
            물 한 잔 달라고 했더니 댐 건설 사업계획서를 내래요.
          </p>
        </motion.div>

        {/* 🎨 ILLUSTRATION 3: Closed Door / Wall */}
        <motion.div
          className="illustration-container w-full h-56 md:h-72 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/illustrations/closed-door.png"
            alt="닫힌 문과 벽 - API 접근 불가"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Slogans — SYNDROMEZ border boxes */}
        <motion.div
          className="flex flex-wrap gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {slogans.map((slogan, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="px-6 py-3 text-sm md:text-base font-black cursor-default"
              style={{
                border: `1px solid ${slogan.color}40`,
                color: slogan.color,
                background: "rgba(0,0,0,0.5)",
              }}
              whileHover={{
                borderColor: slogan.color,
                boxShadow: `0 0 20px ${slogan.color}20`,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              {slogan.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Essay — dual column SYNDROMEZ layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="syndromez-box p-8 md:p-10"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-bold mb-4" style={{ color: "#FF2D78" }}>
              CLOSED ECOSYSTEM
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              대부분의 기업이 API를{" "}
              <span className="font-black" style={{ color: "#FF2D78" }}>제품</span>이 아니라{" "}
              <span className="highlight-block text-sm">VIP 출입증</span>
              처럼 다뤄요.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              &ldquo;너 누군데 우리 API 써?&rdquo; 부터 시작.
              증명하고, 심사받고, 기다리고... 그러다 프로젝트 접어요 😮‍💨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="syndromez-box p-8 md:p-10"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-bold mb-4" style={{ color: "#00FF87" }}>
              AI WITHOUT HANDS
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              공공 API도 만만치 않아요. 문서는 미궁, 응답 포맷은 랜덤,
              에러는 서프라이즈 🎁
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              AI 에이전트 시대 온다면서요? API 안 열면 에이전트는 그냥{" "}
              <span className="highlight-block-green text-sm">똑똑한 구경꾼</span>.
              손발이 묶인 천재 🔓
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
