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
          PHASE 2: 무엇이 막고 있는지 볼까요?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>무엇이</span>{" "}
            <span className="text-white">막고 있는지 볼까요?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold max-w-2xl">
            공개와 협업이 드문 구조에서는, 한 줄의 연결과 하나의 기여조차 지나치게 비싸집니다.
          </p>
        </motion.div>

        {/* 🎨 ILLUSTRATION 3: Closed Door / Wall */}
        <motion.div
          className="w-full mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
          viewport={{ once: true, margin: "-50px" }}
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="syndromez-box p-8 md:p-10"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-emphasis mb-4" style={{ color: "#FF2D78" }}>
              CLOSED ECOSYSTEM
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              많은 기업이 코드, 문서, API, 운영 노하우를 <span className="font-emphasis" style={{ color: "#FF2D78" }}>공유 자산</span>이 아니라
              <span className="highlight-block text-sm"> 내부 자산과 승인 대상</span>으로만 다룹니다.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              자격을 증명하고, 심사를 통과하고, 담당자를 기다리는 동안
              — 만들려던 것은 늦어지고, 배우려던 흐름도 끊깁니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="syndromez-box p-8 md:p-10"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-emphasis mb-4" style={{ color: "#00FF87" }}>
              AI WITHOUT HANDS
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              공개되어 있더라도 끝이 아닙니다. 문서는 미로이고, 예제는 부족하고, 유지보수는 끊기고,
              외부 기여와 재사용을 전제로 설계되지 않은 경우가 많습니다.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              AI와 소프트웨어가 더 빠르게 협업하는 시대에 구조를 닫아두면,
              빌더는 <span className="highlight-block-green text-sm">생각은 할 수 있지만 함께 만들 수는 없는 상태</span>에 머물게 됩니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
