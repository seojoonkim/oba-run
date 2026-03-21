"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, QrCode } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function useInView(threshold = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const steps = [
  "텔레그램 채널에 들어오면 OBA의 다음 움직임과 이야기를 가장 먼저 확인할 수 있습니다.",
  "준비되는 밋업, 해커톤, 오픈콜, 공개 협업 소식도 채널에서 먼저 공유됩니다.",
  "관심 있다면 복잡한 절차 없이 바로 들어와 대화를 시작하면 됩니다.",
];

const benefits = [
  "연락처를 남기지 않아도 OBA의 공개 흐름과 업데이트를 바로 받을 수 있습니다.",
  "링크 클릭 또는 QR 스캔만으로 같은 채널에 바로 들어올 수 있습니다.",
  "모바일에서는 링크, 오프라인과 발표 현장에서는 QR로 쉽게 들어올 수 있습니다.",
];

const telegramUrl = "https://t.me/oba_run";

export default function CTAForm() {
  const sec = useInView(0);
  const leftIv = useInView(0);
  const rightIv = useInView(0);

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
        <motion.p
          ref={sec.ref}
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          animate={sec.visible ? { opacity: 1 } : { opacity: 0 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          PHASE 5: 바로 들어와서 이야기해볼까요?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sec.visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#27A7E7" }}>Telegram에서</span>
            <br />
            <span style={{ color: "#CCFF00" }}>바로 이야기해요</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed">
            복잡한 절차 없이 <span style={{ color: "#CCFF00" }}>텔레그램 채널에 바로 들어와</span>
            OBA와 대화를 시작해보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <motion.div
            ref={leftIv.ref}
            initial={{ opacity: 0 }}
            animate={leftIv.visible ? { opacity: 1 } : { opacity: 0 }}
            style={{ backfaceVisibility: "hidden" }}
          >
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
          </motion.div>

          <motion.div
            ref={rightIv.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={rightIv.visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="syndromez-box space-y-6 bg-black p-8 md:p-12 relative"
            style={{ backfaceVisibility: "hidden" }}
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
                  className="h-40 w-40"
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

            <div className="syndromez-box p-4 bg-black/30">
              <p className="text-[0.88rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-2">
                JUST COME IN
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                관심이 있다면 설명을 더 길게 읽지 않아도 됩니다. 텔레그램 채널에 바로 들어와 같이 이야기해보세요.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
