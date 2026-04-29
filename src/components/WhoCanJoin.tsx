"use client";

import { Rocket, Building2, Laptop, GraduationCap, Bot, GitPullRequest } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";

interface Role {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
  accent: string;
}

const roles: Role[] = [
  {
    icon: Rocket,
    title: "스타트업",
    tag: "STARTUPS",
    description: "외부 API 연결하려다 막혀봤다면. 그 문제, 같이 풉니다.",
    accent: "#CCFF00",
  },
  {
    icon: Building2,
    title: "대기업",
    tag: "ENTERPRISE",
    description: "코드를 열고 싶은데 사례가 없다면. 여기서 먼저 실험합니다.",
    accent: "#FF2D78",
  },
  {
    icon: Laptop,
    title: "개발자",
    tag: "DEVELOPERS",
    description: "닫힌 문서, 닫힌 저장소에 지쳤다면. 열린 코드로 만드는 사람들입니다.",
    accent: "#00FF87",
  },
  {
    icon: GraduationCap,
    title: "학생",
    tag: "STUDENTS",
    description: "오픈소스로 뭔가 만들다 벽에 부딪혀봤다면. 그 경험이 입장권입니다.",
    accent: "#CCFF00",
  },
  {
    icon: Bot,
    title: "AI 빌더",
    tag: "AI BUILDERS",
    description: "AI 에이전트가 실제로 쓸 수 있는 열린 API를 찾고 있다면. 여기 있습니다.",
    accent: "#FF2D78",
  },
  {
    icon: GitPullRequest,
    title: "오픈소스 기여자",
    tag: "OPEN SOURCE",
    description: "PR 보냈는데 반응이 없었다면. 공개 협업이 되는 곳, 여기입니다.",
    accent: "#00FF87",
  },
];

export default function WhoCanJoin() {
  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden spray-drip">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(255,45,120,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <p className="phase-label mb-6">
          PHASE 5: 이런 분을 찾습니다
        </p>

        {/* 모바일: 타이틀 (이미지 위에 분리) */}
        <div className="md:hidden mb-8">
          <h2 className="text-5xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#CCFF00" }}>이런 분이라면,</span>{" "}
            <span className="text-white">바로 여기입니다</span>
          </h2>
          <p className="text-base text-gray-400 font-bold max-w-2xl">
            열린 개발에 공감하는 사람이라면, 역할과 경력 상관없이 환영합니다.
          </p>
          <p className="text-base text-gray-400 font-bold mt-4 max-w-2xl">
            <span className="highlight-block">OBA (Open Builders Alliance)</span> — 국내 오픈 API·오픈소스 빌더들이 1년에 두 차례 모이는 빌더스 위켄드입니다.
          </p>
        </div>

        {/* 🎨 ILLUSTRATION 5: Diverse People Gathering — PC에서는 타이틀 오버레이 포함 */}
        <div className="relative w-full mb-16 overflow-hidden rounded-lg">
          <Image
            src="/images/illustrations/diverse-crew.png"
            alt="다양한 사람들이 모이는 모습"
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
              <span style={{ color: "#CCFF00" }}>이런 분이라면,</span>{" "}
              <span className="text-white">바로 여기입니다</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-bold max-w-2xl">
              열린 개발에 공감하는 사람이라면, 역할과 경력 상관없이 환영합니다.
            </p>
            <p className="text-base md:text-lg text-gray-400 font-bold mt-4">
              <span className="highlight-block">OBA (Open Builders Alliance)</span> — 국내 오픈 API·오픈소스 빌더들이 1년에 두 차례 모이는 빌더스 위켄드입니다.
            </p>
          </div>
        </div>

        {/* Role cards — SYNDROMEZ grid, thin borders, clean */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {roles.map((role, i) => {
            const IconComponent = role.icon;
            return (
              <div
                key={i}
                className="syndromez-box p-8 text-center cursor-default group relative transition-colors duration-300 hover:bg-[rgba(204,255,0,0.03)]"
              >
                {/* Tag */}
                <p className="text-[0.72rem] uppercase tracking-[0.3em] mb-4 font-emphasis" style={{ color: role.accent }}>
                  {role.tag}
                </p>

                {/* Icon */}
                <div className="flex justify-center mb-4 group-hover:scale-125 transition-transform duration-300" style={{ color: role.accent }}>
                  <IconComponent size={44} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-emphasis mb-3 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif", color: role.accent }}
                >
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {role.description}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute bottom-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: role.accent }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
