"use client";

import { motion } from "framer-motion";

const companies: { name: string; logo?: string }[] = [
  { name: "해시드", logo: "/logos/hashed.png" },
  { name: "스윙", logo: "/logos/swing.png" },
  { name: "차란", logo: "/logos/charan.png" },
];

export default function CompanyGrid() {
  return (
    <section className="py-28 md:py-36 px-6 relative spray-drip">
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,135,0.04) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 6: 초기 참여 흐름이 이미 보이고 있습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>누가 함께하실 수 있는지</span>{" "}
            <span className="text-white">이미 보이고 있습니다.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold leading-relaxed">
            아래 로고는 현재 페이지에 표시된 예시입니다. 핵심은 특정 이름보다,
            <span style={{ color: "#CCFF00" }}> 다양한 조직과 개인이 함께할 수 있는 구조</span>를 만드는 것입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 mb-10">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring" }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(204,255,0,0.03)" }}
              className="syndromez-box p-6 flex items-center justify-center aspect-square"
            >
              {company.logo ? (
                <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
              ) : (
                <span className="text-sm text-gray-400 text-center font-bold">{company.name}</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="syndromez-box p-8 md:p-10 max-w-3xl relative"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "#CCFF00" }} />

          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-3">
            FOR EARLY PARTICIPANTS
          </p>
          <p className="text-lg md:text-xl text-white mb-3 leading-relaxed">
            지금 참여하면 <span style={{ color: "#CCFF00" }}>초기 멤버로서 방향을 함께 만드는 대화</span>에 들어올 수 있습니다.
          </p>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
            FOA는 아직 시작 단계입니다. 그래서 오히려 지금 남기는 신청이 더 중요합니다.
            커뮤니티의 첫 프로그램, 운영 방식, 연결 방식에 가장 가까운 거리에서 참여할 수 있습니다.
          </p>

          <a
            href="#join"
            className="inline-flex items-center gap-2 px-10 py-4 font-emphasis text-black uppercase tracking-wider hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]"
            style={{
              background: "#CCFF00",
              fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              boxShadow: "0 0 20px rgba(204,255,0,0.2)",
            }}
          >
            초기 참여자로 등록하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
