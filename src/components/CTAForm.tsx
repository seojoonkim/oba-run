"use client";

import { ArrowUpRight, Check, QrCode, Link2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const steps = [
  "OBA는 1년에 두 차례(상반기·하반기) 열리는 국내 오픈 API·오픈소스 위켄드톤(Weekend-thon)입니다. 해커톤과 네트워킹이 한 자리에서 일어나는 주말입니다.",
  "이번 시즌 일정·공지·운영 소식을 텔레그램 채널에서 가장 먼저 받아볼 수 있습니다.",
  "관심 있다면 복잡한 절차 없이 바로 들어와 다음 시즌을 같이 준비하면 됩니다.",
];

const benefits = [
  "연락처를 남기지 않아도 OBA의 공개 흐름과 업데이트를 바로 받을 수 있습니다.",
  "링크 클릭 또는 QR 스캔만으로 같은 채널에 바로 들어올 수 있습니다.",
  "모바일에서는 링크, 오프라인과 발표 현장에서는 QR로 쉽게 들어올 수 있습니다.",
];

const telegramUrl = "https://t.me/oba_run";

function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://oba.run");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = "https://oba.run";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-emphasis mr-2">SHARE</span>
      <a
        href="https://twitter.com/intent/tweet?text=%ED%95%9C%EA%B5%AD%20%EB%B9%8C%EB%8D%94%EB%93%A4%EC%9D%B4%20%ED%95%B4%EC%99%B8%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EC%9C%84%EC%97%90%EC%84%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%9D%B4%EC%9C%A0%3F%20OBA%EA%B0%80%20%EB%B0%94%EA%BF%89%EB%8B%88%EB%8B%A4.%20oba.run&url=https://oba.run"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center border border-white/15 hover:border-[#CCFF00]/60 hover:bg-[#CCFF00]/10 transition-all duration-200 rounded-sm"
        aria-label="Share on X/Twitter"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-[#CCFF00]">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/sharing/share-offsite/?url=https://oba.run"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center border border-white/15 hover:border-[#FF2D78]/60 hover:bg-[#FF2D78]/10 transition-all duration-200 rounded-sm"
        aria-label="Share on LinkedIn"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-[#FF2D78]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <button
        onClick={handleCopy}
        className="relative w-10 h-10 flex items-center justify-center border border-white/15 hover:border-[#00FF87]/60 hover:bg-[#00FF87]/10 transition-all duration-200 rounded-sm"
        aria-label="Copy link"
      >
        <Link2 size={16} className="text-gray-400" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-[#00FF87] font-bold whitespace-nowrap bg-black/90 px-2 py-1 border border-[#00FF87]/30 rounded-sm">
            링크 복사됨!
          </span>
        )}
      </button>
    </div>
  );
}

export default function CTAForm() {
  return (
    <section id="join" className="py-32 md:py-40 px-6 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(39,167,231,0.12) 0%, transparent 58%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Member counter + First hackathon */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <div className="text-center">
            <span className="text-[#CCFF00] font-black text-4xl">127+</span>
            <span className="text-gray-400 text-sm ml-2">빌더가 함께하고 있습니다</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="syndromez-box p-6 text-center">
            <p className="phase-label mb-2">FIRST HACKATHON</p>
            <p className="text-2xl font-display text-white">2026년 5월 중 · 서울</p>
            <p className="text-gray-400 text-sm mt-2">텔레그램 참여자에게 먼저 공지됩니다</p>
          </div>
        </div>

        <p className="phase-label mb-6">
          PHASE 7: 바로 들어와서 이야기해볼까요?
        </p>

        <div className="mb-12 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#27A7E7" }}>Telegram에서</span>
            <br />
            <span style={{ color: "#CCFF00" }}>바로 이야기해요</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed">
            복잡한 절차 없이 <span style={{ color: "#CCFF00" }}>텔레그램 채널에 바로 들어와</span>
            OBA와 대화를 시작해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div>
            <Image
              src="/images/illustrations/opening-door.png"
              alt="문이 열리는 모습 - 텔레그램 CTA"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mb-8"
            />

            <div className="syndromez-box p-8 space-y-6">
              <div>
                <p className="text-[0.88rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-3">
                  HOW TO JOIN
                </p>
                <ol className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={step} className="flex gap-4 items-start">
                      <div
                        className="w-8 h-8 shrink-0 flex items-center justify-center font-black text-black"
                        style={{ background: index === 1 ? "#27A7E7" : "#CCFF00" }}
                      >
                        {index + 1}
                      </div>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <p className="text-[0.88rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-3">
                  WHY TELEGRAM
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex gap-3 items-start">
                      <Check size={18} className="mt-0.5 shrink-0" style={{ color: "#00FF87" }} />
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="syndromez-box space-y-6 bg-black p-8 md:p-12 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #27A7E7, #CCFF00, #00FF87)" }} />

            <div className="flex items-center gap-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white ring-1 ring-[#27A7E7]/30 shadow-[0_0_30px_rgba(39,167,231,0.18)]">
                <Image
                  src="/logos/telegram.svg"
                  alt="Telegram logo"
                  width={56}
                  height={56}
                  className="h-10 w-10"
                />
              </div>
              <div>
                <p className="text-[0.88rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-2">
                  JOIN THE CHANNEL
                </p>
                <h3 className="text-2xl md:text-3xl font-display uppercase" style={{ color: "#27A7E7" }}>
                  @oba_run
                </h3>
              </div>
            </div>

            <p className="text-base text-gray-300 leading-relaxed">
              아래 링크를 누르거나 QR 코드를 스캔하면
              <span style={{ color: "#CCFF00" }}> OBA 텔레그램 채널</span>로 바로 들어올 수 있습니다.
            </p>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 border border-[rgba(39,167,231,0.55)] bg-white px-5 py-4 transition-all hover:scale-[1.01] hover:border-[rgba(39,167,231,0.95)] hover:shadow-[0_0_30px_rgba(39,167,231,0.2)]"
            >
              <div className="min-w-0">
                <p className="text-[0.88rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-1">
                  DIRECT LINK
                </p>
                <p className="text-sm md:text-lg font-bold text-black break-all">{telegramUrl}</p>
              </div>
              <ArrowUpRight className="shrink-0" style={{ color: "#27A7E7" }} />
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 items-center">
              <div className="bg-black p-4 inline-flex justify-center w-fit ring-1 ring-white/10">
                <Image
                  src="/images/telegram-qr.png"
                  alt="OBA Telegram channel QR code"
                  width={160}
                  height={160}
                  className="h-40 w-40 aspect-square object-contain"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <QrCode size={18} style={{ color: "#CCFF00" }} />
                  <p className="text-sm font-emphasis uppercase tracking-[0.18em] text-gray-400">
                    QR ACCESS
                  </p>
                </div>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  모바일 카메라 또는 텔레그램 앱의 QR 스캐너로 스캔하면 동일한
                  <span style={{ color: "#CCFF00" }}> @oba_run</span> 채널로 연결됩니다.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  오프라인 자료, 발표 화면, 데스크탑 방문자용 진입 동선으로도 사용할 수 있습니다.
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* Share Buttons */}
        <ShareButtons />
      </div>
    </section>
  );
}
