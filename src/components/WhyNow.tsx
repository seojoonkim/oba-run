"use client";

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
    icon: Bot,
    label: "AI AGENTS 시장 전망",
    value: "$7.84B → $52.62B",
    period: "2025→2030",
    comment: "AI 에이전트 시장은 연평균 46.3% 성장 전망입니다. 연결 가능한 오픈 인터페이스와 오픈소스는 더 중요한 인프라가 됩니다.",
    accentColor: "#CCFF00",
  },
  {
    icon: Globe,
    label: "AI AGENTS CAGR",
    value: "46.3%",
    period: "ANNUAL GROWTH",
    comment: "에이전트가 늘어날수록, 실제 행동을 가능하게 하는 개방형 인터페이스의 가치도 함께 커집니다.",
    accentColor: "#FF2D78",
  },
  {
    icon: KRIcon,
    label: "행안부 공공데이터 활용 기업 비중",
    value: "33.7%",
    period: "국내 활용 현황",
    comment: "이미 많은 기업이 공공데이터를 활용하고 있습니다. 다음 단계는 더 넓은 민간 API와 오픈소스 협업의 확장입니다.",
    accentColor: "#00FF87",
  },
  {
    icon: BarChart3,
    label: "OPEN INFRASTRUCTURE 시장",
    value: "$7.67B · CAGR 17.1%",
    period: "GLOBAL MARKET",
    comment: "오픈 인터페이스와 오픈소스를 체계적으로 연결하고 운영하는 시장도 꾸준히 커지고 있습니다. 개방은 유행이 아니라 구조 변화입니다.",
    accentColor: "#CCFF00",
  },
];

export default function WhyNow() {
  return (
    <section id="why-now" className="py-32 md:py-40 px-6 relative paint-splatter spray-drip">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Phase breadcrumb */}
        <p className="phase-label mb-6">
          PHASE 1: 지금 이 기회, 함께 볼까요?
        </p>

        {/* 모바일: 타이틀 (이미지 위에 분리) */}
        <div className="md:hidden mb-8">
          <h2 className="text-5xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#CCFF00" }}>지금이 아니면</span>{" "}
            <span className="text-white">언제여야 할까요?</span>
          </h2>
          <p className="text-base text-gray-400 font-bold">
            바이브코딩이 빨라질수록, 외부 빌더가 쉽게 붙는 회사와 그렇지 않은 회사의 격차는 더 빠르게 벌어집니다. <span className="highlight-block">OBA (Open Builders Alliance)</span>는 이 변화의 최전선에서 한국 빌더 생태계를 엽니다.
          </p>
        </div>

        {/* 🎨 ILLUSTRATION 2: Korea vs Global — PC에서는 타이틀 오버레이 포함 */}
        <div className="relative w-full mb-16 overflow-hidden rounded-lg">
          <Image
            src="/images/illustrations/korea-vs-global.png"
            alt="한국 vs 글로벌 오픈 빌더 생태계 대비"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto md:h-[500px] md:object-cover"
          />

          {/* 상단 그라데이션 오버레이 (PC만) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />

          {/* PC에서만 보이는 오버레이 타이틀 */}
          <div className="absolute inset-0 hidden md:flex flex-col justify-start p-10 lg:p-14">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
              <span style={{ color: "#CCFF00" }}>지금이 아니면</span>{" "}
              <span className="text-white">언제여야 할까요?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-bold max-w-3xl">
              바이브코딩이 빨라질수록, 외부 빌더가 쉽게 붙는 회사와 그렇지 않은 회사의 격차는 더 빠르게 벌어집니다. <span className="highlight-block">OBA (Open Builders Alliance)</span>는 이 변화의 최전선에서 한국 빌더 생태계를 엽니다.
            </p>
          </div>
        </div>

        {/* Stats — SYNDROMEZ thin-border grid with mega numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[rgba(204,255,0,0.2)] mb-16">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                className="syndromez-box p-8 md:p-10 relative group text-center flex h-full flex-col items-center justify-center transition-colors duration-300 hover:bg-[rgba(204,255,0,0.03)]"
              >
                {/* Icon */}
                <div className="mb-3" style={{ color: stat.accentColor }}>
                  <IconComponent size={32} />
                </div>

                {/* Label — small caps */}
                <p className="text-[0.88rem] uppercase tracking-[0.25em] mb-2 font-emphasis" style={{ color: stat.accentColor }}>
                  {stat.label}
                </p>

                {/* MEGA number — SYNDROMEZ massive scale */}
                <p className="mega-number text-3xl md:text-4xl mb-1">
                  {stat.value}
                </p>

                {/* Period */}
                <p className="text-[0.88rem] uppercase tracking-[0.2em] text-gray-600 mb-4 font-emphasis">
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
              </div>
            );
          })}
        </div>

        {/* Essay — SYNDROMEZ dark panel with side accent */}
        <div className="syndromez-box p-8 md:p-12 max-w-3xl mx-auto relative">
          {/* Left accent bar */}
          <div
            className="absolute top-0 left-0 w-1 h-full"
            style={{ background: "#CCFF00", boxShadow: "0 0 15px rgba(204,255,0,0.3)" }}
          />

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 pl-6">
            바이브코딩은 더 많은 사람이 더 빠르게 소프트웨어를 만들 수 있게 하고 있습니다. 하지만 그 변화의 기반은 대부분 오픈소스와 오픈 API입니다.
            한국에서는 외부 개발자와 스타트업이 쉽게 붙을 수 있도록 기술과 인터페이스를 공개한 회사가 아직 많지 않습니다.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 pl-6">
            그래서 한국의 빌더들조차 해외 플랫폼과 해외 서비스를 기반으로 만들고 있습니다. OBA는 여기서
            지금 중요한 것은 기술 우위만이 아니라, 누가 더 빨리 외부 파트너와 새로운 사용처를 만들어내느냐입니다.
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
              협업 연결에 3개월.
            </p>
            <p className="text-sm text-gray-500 mt-2">연결에 3개월이 걸리는 구조에서, 가능성은 기다려주지 않는다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
