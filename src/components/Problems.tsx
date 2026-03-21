"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const slogans = [
  { text: "열린다는 건, 존재를 인정하는 일이다.", color: "#CCFF00" },
  { text: "허가를 기다리는 동안, 세상은 이미 다음으로 넘어간다.", color: "#FF2D78" },
  { text: "아이디어는 제안서가 아니라 실행에서 증명된다.", color: "#00FF87" },
  { text: "닫힌 문 뒤에서, 가능성은 조용히 소멸한다.", color: "#CCFF00" },
  { text: "같은 프로토콜을 쓴다는 건, 같은 세계에 속한다는 뜻이다.", color: "#FF2D78" },
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
    <section className="py-32 md:py-40 px-6 relative overflow-hidden spray-drip">
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
          viewport={{ once: true, amount: 0.1 }}
        >
          PHASE 2: 무엇이 막고 있는지 볼까요?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>무엇이</span>{" "}
            <span className="text-white">막고 있는지 볼까요?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold max-w-2xl">
            바이브코딩의 시대에 닫힌 구조는 단지 불편한 것이 아니라, 점점 더 빠르게 고립되는 구조가 됩니다.
          </p>
        </motion.div>

        {/* 🎨 ILLUSTRATION 3: Closed Door / Wall */}
        <motion.div
          className="w-full mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/illustrations/closed-door.png"
            alt="닫힌 문과 벽 - 빌더 접근 불가"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Slogans — SYNDROMEZ border boxes */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {slogans.map((slogan, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="px-6 py-3 text-sm md:text-base font-emphasis cursor-default flex items-center justify-center text-center min-h-[72px]"
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="syndromez-box p-8 md:p-10"
          >
            <p className="text-[0.88rem] uppercase tracking-[0.25em] font-emphasis mb-4" style={{ color: "#FF2D78" }}>
              CLOSED ECOSYSTEM
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              바이브코딩으로 더 많은 사람이 만들 수 있게 되었지만, 닫힌 회사는 여전히 코드와 API와 문서를
              <span className="font-emphasis" style={{ color: "#FF2D78" }}> 함께 쓰이는 자산</span>이 아니라
              <span className="highlight-block text-sm"> 내부 승인 대상</span>으로만 다룹니다.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              그 사이 빌더들은 더 빠르고 더 열린 해외 플랫폼으로 이동합니다. 열지 않는 회사는 느린 회사가 아니라,
              점점 <span className="highlight-block text-sm">참조되지 않는 회사</span>가 됩니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="syndromez-box p-8 md:p-10"
          >
            <p className="text-[0.88rem] uppercase tracking-[0.25em] font-emphasis mb-4" style={{ color: "#00FF87" }}>
              AI WITHOUT HANDS
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              한국의 많은 빌더들이 국내가 아니라 해외 서비스 위에서 만들고 있다는 사실은, 문제의 핵심이 기술 부족이 아니라
              공개와 협업 구조의 부족이라는 점을 보여줍니다.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              쓰이지 않고, 연결되지 않고, 조합되지 않는 순간 그 회사의 기술과 제품은 생태계 밖으로 밀려납니다.
              닫힌 구조는 결국 <span className="highlight-block-green text-sm">행동하지 못하는 시스템이 아니라, 함께 쓰이지 못하는 시스템</span>이 됩니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
