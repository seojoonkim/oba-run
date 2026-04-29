"use client";

import { Beer, Wrench, Compass, Handshake } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";

interface Activity {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
  accentColor: string;
}

const activities: Activity[] = [
  {
    icon: Beer,
    title: "네트워킹",
    tag: "NETWORKING",
    description: "오픈소스, 오픈 API, 운영 경험을 솔직하게 나눕니다. 성공도 실패도 축적해 다음 팀의 레퍼런스로 만듭니다.",
    accentColor: "#CCFF00",
  },
  {
    icon: Wrench,
    title: "해커톤",
    tag: "HACKATHON",
    description: "열린 코드와 열린 인터페이스가 만나면 짧은 시간 안에도 실제 프로토타입이 나옵니다. 실행으로 문화를 증명합니다.",
    accentColor: "#FF2D78",
  },
  {
    icon: Compass,
    title: "가이드라인",
    tag: "STANDARDS",
    description: "문서, SDK, 예제, 라이선스, 기여 방식까지 현실에서 작동하는 공개 기준을 함께 정리합니다.",
    accentColor: "#00FF87",
  },
  {
    icon: Handshake,
    title: "네트워킹",
    tag: "NETWORK",
    description: "회사를 소개하는 자리가 아니라, 서로의 코드·API·문제의식을 연결하는 자리로 만듭니다. 좋은 협업은 신뢰에서 시작됩니다.",
    accentColor: "#CCFF00",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-32 md:py-40 px-6 relative spray-drip">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,135,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <p className="phase-label mb-6">
          PHASE 4: 무엇을 함께할지 볼까요?
        </p>

        {/* 모바일: 타이틀 (이미지 위에 분리) */}
        <div className="md:hidden mb-8">
          <h2 className="text-5xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#00FF87" }}>무엇을</span>{" "}
            <span className="text-white">함께할지 볼까요?</span>
          </h2>
          <p className="text-base text-gray-400 font-bold max-w-2xl">
            거창한 선언보다, 공개하고 만들고 연결하는 장면을 실제로 늘리겠습니다.
          </p>
          <p className="text-base text-gray-400 font-bold mt-4 max-w-2xl">
            <span className="highlight-block">OBA (Open Builders Alliance)</span>는 국내 오픈 API·오픈소스 빌더들이 <span style={{ color: "#CCFF00" }}>1년에 두 차례 모이는 위켄드톤(Weekend-thon)</span>입니다. 주말(Weekend) + 해커톤(Hackathon)을 결합한 컨셉으로, 1박 2일 동안 학생·직장인 누구나 집중적으로 참여할 수 있는 환경을 만듭니다.
          </p>
        </div>

        {/* 🎨 ILLUSTRATION 4: Hackathon / Meetup — PC에서는 타이틀 오버레이 포함 */}
        <div className="relative w-full mb-16 overflow-hidden rounded-lg">
          <Image
            src="/images/illustrations/hackathon-meetup.png"
            alt="해커톤과 네트워킹 장면"
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
              <span style={{ color: "#00FF87" }}>무엇을</span>{" "}
              <span className="text-white">함께할지 볼까요?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-bold max-w-2xl">
              거창한 선언보다, 공개하고 만들고 연결하는 장면을 실제로 늘리겠습니다.
            </p>
            <p className="text-base md:text-lg text-gray-400 font-bold mt-4">
              <span className="highlight-block">OBA (Open Builders Alliance)</span>는 국내 오픈 API·오픈소스 빌더들이 <span style={{ color: "#CCFF00" }}>1년에 두 차례 모이는 위켄드톤(Weekend-thon)</span>입니다.
            </p>
          </div>
        </div>

        {/* Activity cards — SYNDROMEZ 4-column grid with thin borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {activities.map((activity, i) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={i}
                className="syndromez-box p-8 cursor-default group relative text-center flex h-full flex-col items-center justify-center"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: activity.accentColor }}
                />

                {/* Tag */}
                <p className="text-[0.72rem] uppercase tracking-[0.3em] mb-4 font-emphasis" style={{ color: activity.accentColor }}>
                  {activity.tag}
                </p>

                {/* Icon */}
                <div
                  className="mb-4 group-hover:scale-125 transition-transform duration-300"
                  style={{ color: activity.accentColor }}
                >
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>

                {/* Title — SYNDROMEZ ALL-CAPS bold */}
                <h3
                  className="text-xl md:text-2xl font-emphasis text-white mb-3 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif" }}
                >
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {activity.description}
                </p>

                {/* Bottom corner OBA tag */}
                <div
                  className="absolute bottom-3 right-3 text-[0.58rem] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: activity.accentColor }}
                >
                  OBA
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
