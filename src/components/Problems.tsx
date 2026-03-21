"use client";

import Image from "next/image";

const builderVoices = [
  '"API 키 하나 받으려고 3개월 기다렸습니다. 그 사이 미국 서비스로 바꿨어요." — 스타트업 CTO',
  '"문서는 있는데 실제로는 연동이 안 됩니다. 담당자도 모르는 것 같았어요." — 백엔드 개발자',
  '"PR을 보냈는데 6개월째 리뷰가 없습니다." — 오픈소스 기여자',
  '"국내 서비스를 쓰고 싶었는데 결국 해외 API 위에 올렸습니다." — 프로덕트 팀장',
];

const slogans = [
  { text: "열린다는 건, 존재를 인정하는 일이다.", color: "#CCFF00" },
  { text: "허가를 기다리는 동안, 세상은 이미 다음으로 넘어간다.", color: "#FF2D78" },
  { text: "아이디어는 제안서가 아니라 실행에서 증명된다.", color: "#00FF87" },
  { text: "닫힌 문 뒤에서, 가능성은 조용히 소멸한다.", color: "#CCFF00" },
  { text: "같은 프로토콜을 쓴다는 건, 같은 세계에 속한다는 뜻이다.", color: "#FF2D78" },
];

export default function Problems() {
  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden spray-drip">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(255,45,120,0.06) 0%, transparent 65%)" }}
      />

      {/* Builder Voices Marquee */}
      <div className="relative overflow-hidden mb-12 py-4 border-y border-white/5">
        <div className="marquee-track flex gap-16 whitespace-nowrap">
          {[...builderVoices, ...builderVoices].map((voice, i) => (
            <span
              key={i}
              className="text-sm md:text-base text-gray-500 italic font-bold shrink-0"
            >
              {voice}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <p className="phase-label mb-6">
          PHASE 2: 무엇이 막고 있는지 볼까요?
        </p>

        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>무엇이</span>{" "}
            <span className="text-white">막고 있는지 볼까요?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold max-w-2xl">
            바이브코딩의 시대에 닫힌 구조는 단지 불편한 것이 아니라, 점점 더 빠르게 고립되는 구조가 됩니다.
          </p>
        </div>

        {/* 🎨 ILLUSTRATION 3: Closed Door / Wall */}
        <div className="w-full mb-16">
          <Image
            src="/images/illustrations/closed-door.png"
            alt="닫힌 문과 벽 - 빌더 접근 불가"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        {/* Slogans — SYNDROMEZ border boxes */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {slogans.map((slogan, i) => (
            <div
              key={i}
              className="px-6 py-3 text-sm md:text-base font-emphasis cursor-default flex items-center justify-center text-center min-h-[72px] transition-all duration-200 hover:scale-105"
              style={{
                border: `1px solid ${slogan.color}40`,
                color: slogan.color,
                background: "rgba(0,0,0,0.5)",
              }}
            >
              {slogan.text}
            </div>
          ))}
        </div>

        {/* OBA mention */}
        <p className="text-center text-lg md:text-xl text-gray-300 font-bold mb-16 max-w-3xl mx-auto">
          <span className="highlight-block">OBA (Open Builders Alliance)</span>는 이런 고립을 끝내기 위해 모였습니다.
        </p>

        {/* Essay — dual column SYNDROMEZ layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="syndromez-box p-8 md:p-10">
            <p className="text-[0.88rem] uppercase tracking-[0.25em] font-emphasis mb-4" style={{ color: "#FF2D78" }}>
              CLOSED ECOSYSTEM
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              바이브코딩으로 더 많은 사람이 만들 수 있게 되었지만, 닫힌 회사는 여전히 코드와 API와 문서를
              <span className="font-emphasis" style={{ color: "#FF2D78" }}> 함께 쓰이는 자산</span>이 아니라
              <strong className="text-white"> 내부 승인 대상</strong>으로만 다룹니다.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              그 사이 빌더들은 더 빠르고 더 열린 해외 플랫폼으로 이동합니다. 열지 않는 회사는 느린 회사가 아니라,
              점점 <strong className="text-white">참조되지 않는 회사</strong>가 됩니다.
            </p>
          </div>

          <div className="syndromez-box p-8 md:p-10">
            <p className="text-[0.88rem] uppercase tracking-[0.25em] font-emphasis mb-4" style={{ color: "#00FF87" }}>
              AI WITHOUT HANDS
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              한국의 많은 빌더들이 국내가 아니라 해외 서비스 위에서 만들고 있다는 사실은, 문제의 핵심이 기술 부족이 아니라
              공개와 협업 구조의 부족이라는 점을 보여줍니다.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              쓰이지 않고, 연결되지 않고, 조합되지 않는 순간 그 회사의 기술과 제품은 생태계 밖으로 밀려납니다.
              닫힌 구조는 결국 행동하지 못하는 시스템이 아니라, <strong className="text-white">함께 쓰이지 못하는 시스템</strong>이 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
