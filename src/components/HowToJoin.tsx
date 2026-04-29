"use client";

import { DoorOpen, MessageCircle, Rocket, Globe, GitBranch, Users, Flag } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  tag: string;
  description: string;
  accent: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: "01",
    title: "들어온다",
    tag: "ENTER",
    description:
      "텔레그램 채널에 입장합니다. 별도 서류, 심사, 승인 절차 없습니다. 링크 하나면 됩니다.",
    accent: "#CCFF00",
    icon: DoorOpen,
  },
  {
    number: "02",
    title: "대화한다",
    tag: "TALK",
    description:
      "OBA 운영팀과 1:1로 대화합니다. 어떤 걸 열 수 있는지, 어디서부터 시작할지 같이 탐색합니다.",
    accent: "#27A7E7",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "공개한다",
    tag: "OPEN",
    description:
      "API, SDK, 데이터셋 중 하나라도. 완벽하지 않아도 됩니다. 형식보다 실행이 우선입니다.",
    accent: "#00FF87",
    icon: Rocket,
  },
];

interface JoinType {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
  accent: string;
}

const joinTypes: JoinType[] = [
  {
    icon: Globe,
    title: "오픈 API 제공",
    tag: "OPEN API",
    description: "외부 개발자가 붙을 수 있는 인터페이스를 공개합니다. 연결이 곧 성장입니다.",
    accent: "#CCFF00",
  },
  {
    icon: GitBranch,
    title: "오픈소스 기여",
    tag: "OPEN SOURCE",
    description: "내부 도구나 라이브러리를 공개합니다. 쓰는 사람이 늘면 코드도 강해집니다.",
    accent: "#FF2D78",
  },
  {
    icon: Users,
    title: "위켄드 파트너",
    tag: "PARTNER",
    description: "공간, 멘토, 과제를 제공합니다. 빌더들이 당신의 기술 위에 만들어 봅니다.",
    accent: "#00FF87",
  },
  {
    icon: Flag,
    title: "초기 멤버 등록",
    tag: "EARLY MEMBER",
    description: "지금 당장 열 것 없어도 괜찮습니다. 방향성을 함께 만들어 가는 것부터 시작합니다.",
    accent: "#27A7E7",
  },
];

export default function HowToJoin() {
  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(39,167,231,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(204,255,0,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <p className="phase-label mb-6">
          PHASE 6: 어떻게 참여하나요?
        </p>

        {/* Title */}
        <div className="mb-16 max-w-3xl">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-display uppercase mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span style={{ color: "#27A7E7" }}>3단계면</span>{" "}
            <span className="text-white">충분합니다</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed">
            상반기·하반기 시즌마다 열리는 빌더스 위켄드(Builders Weekend),{" "}
            <span className="highlight-block">들어오고, 대화하고, 공개하면 됩니다.</span>
          </p>
        </div>

        {/* 3 Steps — horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[rgba(39,167,231,0.2)] mb-20">
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <div
                key={i}
                className="syndromez-box p-8 md:p-10 text-center flex flex-col items-center justify-start group relative transition-colors duration-300 hover:bg-[rgba(39,167,231,0.03)]"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: step.accent }}
                />

                {/* Number */}
                <p
                  className="mega-number text-5xl md:text-6xl mb-3"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </p>

                {/* Tag */}
                <p
                  className="text-[0.72rem] uppercase tracking-[0.3em] mb-4 font-emphasis"
                  style={{ color: step.accent }}
                >
                  {step.tag}
                </p>

                {/* Icon */}
                <div
                  className="mb-4 group-hover:scale-125 transition-transform duration-300"
                  style={{ color: step.accent }}
                >
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl font-emphasis text-white mb-3 uppercase tracking-wide"
                  style={{
                    fontFamily:
                      "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector (desktop only, not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 items-center justify-center bg-black border border-white/10 rounded-full">
                    <span className="text-gray-500 text-sm">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Participation Types */}
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[0.88rem] uppercase tracking-[0.25em] font-emphasis mb-8 text-center"
            style={{ color: "#00FF87" }}
          >
            HOW YOU CAN PARTICIPATE
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[rgba(0,255,135,0.2)]">
            {joinTypes.map((type, i) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={i}
                  className="syndromez-box p-8 text-center cursor-default group relative flex flex-col items-center justify-start transition-colors duration-300 hover:bg-[rgba(0,255,135,0.03)]"
                >
                  {/* Tag */}
                  <p
                    className="text-[0.72rem] uppercase tracking-[0.3em] mb-4 font-emphasis"
                    style={{ color: type.accent }}
                  >
                    {type.tag}
                  </p>

                  {/* Icon */}
                  <div
                    className="mb-4 group-hover:scale-125 transition-transform duration-300"
                    style={{ color: type.accent }}
                  >
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-emphasis mb-3 uppercase tracking-wider"
                    style={{
                      fontFamily:
                        "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
                      color: type.accent,
                    }}
                  >
                    {type.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {type.description}
                  </p>

                  {/* Corner accent */}
                  <div
                    className="absolute bottom-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: type.accent }}
                  />
                </div>
              );
            })}
          </div>

          {/* Bottom callout */}
          <div className="syndromez-box p-8 md:p-10 mt-0 border-t-0 border border-[rgba(0,255,135,0.2)] relative">
            <div
              className="absolute top-0 left-0 w-1 h-full"
              style={{
                background: "#27A7E7",
                boxShadow: "0 0 15px rgba(39,167,231,0.3)",
              }}
            />
            <p className="text-base md:text-lg text-gray-300 leading-relaxed pl-6">
              <span className="highlight-block">완벽할 필요 없습니다.</span>{" "}
              API 하나, 레포 하나, 아이디어 하나라도 괜찮습니다.
              <strong className="text-white">1년에 두 차례</strong> 돌아오는 빌더스 위켄드(Builders Weekend)에서, 열겠다는 의지와 만듭니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
