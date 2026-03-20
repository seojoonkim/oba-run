"use client";

import { motion } from "framer-motion";
import { Globe, Bot, BarChart3 } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";

const KRIcon = ({ size = 40, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 8C14.2 8 16 9.8 16 12C14 12 12 10.2 12 8Z" fill="currentColor" opacity="0.6" />
    <path d="M12 16C9.8 16 8 14.2 8 12C10 12 12 13.8 12 16Z" fill="currentColor" opacity="0.6" />
  </svg>
);

interface StatItem {
  icon: LucideIcon | typeof KRIcon;
  label: string;
  value: string;
  period: string;
  comment: string;
  accentColor: string;
}

const stats: StatItem[] = [
  {
    icon: KRIcon,
    label: "한국 API 시장",
    value: "$7,310만 → $2억 6,330만",
    period: "2024→2033",
    comment: "3,500억 원 규모의 구조. 그러나 대부분의 문은 닫혀 있다.",
    accentColor: "#CCFF00",
  },
  {
    icon: Globe,
    label: "글로벌 OPEN BANKING",
    value: "$570억 → $3,300억",
    period: "2023→2027",
    comment: "400조 원이 흐르는 세계. 우리는 아직 허가를 기다리고 있다.",
    accentColor: "#FF2D78",
  },
  {
    icon: Bot,
    label: "AI 에이전트 API 수요",
    value: "+30%",
    period: "GARTNER 2026",
    comment: "통로 없는 자율적 존재는 사유하되 행동하지 못한다.",
    accentColor: "#00FF87",
  },
  {
    icon: BarChart3,
    label: "공공 API",
    value: "100K+",
    period: "DATASETS",
    comment: "공공 데이터는 10만 개. 민간의 문은 여전히 닫혀 있다.",
    accentColor: "#CCFF00",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyNow() {
  return (
    <section id="why-now" className="py-28 md:py-36 px-6 relative paint-splatter spray-drip">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Phase breadcrumb */}
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 1: THE OPPORTUNITY
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#CCFF00" }}>지금이 아니면</span>{" "}
            <span className="text-white">언제인가.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-bold">
            늦었다고 느낀 순간이 가장 빠른 때다.
          </p>
        </motion.div>

        {/* 🎨 ILLUSTRATION 2: Korea vs Global */}
        <motion.div
          className="w-full mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/illustrations/korea-vs-global.png"
            alt="한국 vs 글로벌 API 생태계 대비"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Stats — SYNDROMEZ thin-border grid with mega numbers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[rgba(204,255,0,0.2)] mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="syndromez-box p-8 md:p-10 relative group"
                whileHover={{
                  backgroundColor: "rgba(204,255,0,0.03)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Icon */}
                <div className="mb-3" style={{ color: stat.accentColor }}>
                  <IconComponent size={32} />
                </div>

                {/* Label — small caps */}
                <p className="text-[0.65rem] uppercase tracking-[0.25em] mb-2 font-emphasis" style={{ color: stat.accentColor }}>
                  {stat.label}
                </p>

                {/* MEGA number — SYNDROMEZ massive scale */}
                <p className="mega-number text-3xl md:text-4xl mb-1">
                  {stat.value}
                </p>

                {/* Period */}
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-600 mb-4 font-emphasis">
                  {stat.period}
                </p>

                {/* Comment */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {stat.comment}
                </p>

                {/* Corner accent dot */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: stat.accentColor, boxShadow: `0 0 10px ${stat.accentColor}` }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Essay — SYNDROMEZ dark panel with side accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="syndromez-box p-8 md:p-12 max-w-3xl mx-auto relative"
        >
          {/* Left accent bar */}
          <div
            className="absolute top-0 left-0 w-1 h-full"
            style={{ background: "#CCFF00", boxShadow: "0 0 15px rgba(204,255,0,0.3)" }}
          />

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 pl-6">
            연결 통로는 기술이 아니다. 서버, 인증, 포맷 — 그건 수단일 뿐.
            본질은{" "}
            <span className="highlight-block text-sm">관계</span>다.
            누가 누구에게 존재의 가능성을 열어주느냐의 문제.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 pl-6">
            연결을 요청하면 돌아오는 세 가지 침묵:
          </p>
          <ul className="space-y-3 mb-6 pl-6">
            <li className="text-gray-400 flex items-start gap-3">
              <span style={{ color: "#FF2D78" }} className="font-emphasis text-lg">✘</span>
              &ldquo;비즈니스 심사가 필요합니다&rdquo;
            </li>
            <li className="text-gray-400 flex items-start gap-3">
              <span style={{ color: "#FF2D78" }} className="font-emphasis text-lg">✘</span>
              &ldquo;담당자 연결해 드릴게요&rdquo;{" "}
              <span className="text-gray-600">(끝없는 침묵)</span>
            </li>
            <li className="text-gray-400 flex items-start gap-3">
              <span style={{ color: "#FF2D78" }} className="font-emphasis text-lg">✘</span>
              &ldquo;외부 연동은 지원하지 않습니다&rdquo;
            </li>
          </ul>
          <div className="pl-6">
            <p className="text-lg md:text-xl font-emphasis text-white">
              인터넷 속도 세계 1위.
            </p>
            <p className="mega-number text-2xl md:text-3xl mt-2">
              API 연결에 3개월.
            </p>
            <p className="text-sm text-gray-500 mt-2">연결에 3개월이 걸리는 구조에서, 가능성은 기다려주지 않는다.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
