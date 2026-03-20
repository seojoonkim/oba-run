"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, QrCode } from "lucide-react";
import Image from "next/image";

const steps = [
  "텔레그램 채널에 입장하면 OBA의 첫 공지와 다음 움직임을 바로 확인할 수 있습니다.",
  "준비되는 밋업/해커톤/오픈콜 소식은 채널에서 우선 공유됩니다.",
  "폼 없이 바로 입장하는 구조로 바꿔, 참여 허들을 낮추고 안내 동선을 단순화했습니다.",
];

const benefits = [
  "연락처를 남기지 않고도 OBA 업데이트를 바로 받을 수 있습니다.",
  "링크 클릭 또는 QR 스캔만으로 동일한 채널로 진입할 수 있습니다.",
  "모바일에서는 링크, 오프라인/데스크탑에서는 QR로 쉽게 접근할 수 있습니다.",
];

const telegramUrl = "https://t.me/oba_wtf";

export default function CTAForm() {
  return (
    <section id="join" className="py-28 md:py-36 px-6 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(39,167,231,0.12) 0%, transparent 58%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 5: 이제는 남기는 대신 바로 들어오세요
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#27A7E7" }}>Telegram에서</span>
            <br />
            <span style={{ color: "#CCFF00" }}>OBA를 바로 받으세요</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed">
            기존의 <span style={{ color: "#FF2D78" }}>연락처 입력 폼 UX를 제거</span>하고,
            <span style={{ color: "#CCFF00" }}> 텔레그램 채널 입장 CTA</span>로 전환했습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-3">
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
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-3">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
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
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-2">
                  JOIN THE CHANNEL
                </p>
                <h3 className="text-2xl md:text-3xl font-display uppercase" style={{ color: "#27A7E7" }}>
                  @oba_wtf
                </h3>
              </div>
            </div>

            <p className="text-base text-gray-300 leading-relaxed">
              아래 링크를 누르거나 QR 코드를 스캔하면
              <span style={{ color: "#CCFF00" }}> OBA 텔레그램 채널</span>로 바로 이동합니다.
            </p>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 border border-[rgba(39,167,231,0.55)] bg-white px-5 py-4 transition-all hover:scale-[1.01] hover:border-[rgba(39,167,231,0.95)] hover:shadow-[0_0_30px_rgba(39,167,231,0.2)]"
            >
              <div className="min-w-0">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-1">
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
                  <span style={{ color: "#CCFF00" }}> @oba_wtf</span> 채널로 연결됩니다.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  오프라인 자료, 발표 화면, 데스크탑 방문자용 진입 동선으로도 사용할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="syndromez-box p-4 bg-black/30">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-2">
                NO FORM, JUST ENTRY
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                더 이상 이름, 이메일, 관심사를 남기지 않아도 됩니다. 이제는 텔레그램 채널 입장 자체가 첫 CTA입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
