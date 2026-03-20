"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useState } from "react";
import { Flame, PartyPopper, Check } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  company: z.string().min(1, "소속을 알려주세요."),
  name: z.string().min(1, "이름을 입력해주세요."),
  email: z.email("유효한 이메일을 입력해주세요."),
  interest: z.string().min(1, "관심 분야를 하나 이상 입력해주세요."),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  "첫 밋업/해커톤 소식을 가장 먼저 받습니다.",
  "커뮤니티 초기 방향과 프로그램에 의견을 남길 수 있습니다.",
  "관심 분야가 맞는 사람들과 이후 연결 가능성이 생깁니다.",
];

export default function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const result = formSchema.safeParse(data);
    if (!result.success) return;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="join" className="py-28 md:py-36 px-6 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(204,255,0,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 5: 함께하실 준비가 되셨다면 알려주세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#00FF87" }}>참여는 어렵지 않습니다.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed">
            <span style={{ color: "#CCFF00" }}>이름과 관심 분야</span>를 남기면,
            FOA의 첫 프로그램과 다음 액션을 가장 먼저 안내받습니다.
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
              alt="문이 열리는 모습 - CTA"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mb-8"
            />

            <div className="syndromez-box p-8 space-y-6">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-3">
                  WHAT HAPPENS NEXT
                </p>
                <ol className="space-y-4">
                  {[
                    "폼을 남기면 관심 분야와 소속을 기준으로 초기 참여자를 모읍니다.",
                    "준비되는 첫 밋업/해커톤 소식과 참여 안내를 순차적으로 공유합니다.",
                    "필요하면 이후 협업이나 대화가 이어질 수 있습니다.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-4 items-start">
                      <div
                        className="w-8 h-8 shrink-0 flex items-center justify-center font-black text-black"
                        style={{ background: index === 1 ? "#FF2D78" : "#CCFF00" }}
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
                  WHY JOIN EARLY
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

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="syndromez-box p-12 text-center relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "#CCFF00" }} />

                <motion.div
                  className="flex justify-center mb-6"
                  animate={{ rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.3, 1.1, 1.25, 1] }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <PartyPopper size={64} style={{ color: "#CCFF00" }} />
                </motion.div>
                <h3 className="text-2xl font-display mb-3 uppercase tracking-wide neon-glow-lime" style={{ color: "#CCFF00" }}>
                  신청이 기록되었다.
                </h3>
                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">YOU&apos;RE ON THE LIST</p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  초기 참여자 명단에 등록했습니다. 이후 밋업/해커톤 관련 안내가 준비되면 순차적으로 공유합니다.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-bold transition-all underline underline-offset-4 hover:scale-105"
                  style={{ color: "#00FF87" }}
                >
                  다른 이름도 남기기
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit(onSubmit)}
                className="syndromez-box p-8 md:p-12 space-y-6 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #CCFF00, #FF2D78, #00FF87)" }} />

                <div className="mb-2">
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-2">
                    APPLY TO FOA
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    아직 긴 지원서는 필요 없습니다. 먼저 누가 어떤 관심으로 모이는지 확인하는 단계입니다.
                  </p>
                </div>

                <div>
                  <label className="block text-[0.65rem] font-emphasis uppercase tracking-[0.25em] mb-2" style={{ color: "#CCFF00" }}>
                    소속
                  </label>
                  <input
                    {...register("company", { required: "소속을 알려주세요." })}
                    placeholder="회사명, 팀명, 또는 프리랜서"
                    className="w-full px-4 py-3 bg-black/50 border border-[rgba(204,255,0,0.2)] text-white placeholder-gray-600 font-bold transition-all"
                  />
                  {errors.company && (
                    <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[0.65rem] font-emphasis uppercase tracking-[0.25em] mb-2" style={{ color: "#CCFF00" }}>
                    이름
                  </label>
                  <input
                    {...register("name", { required: "이름을 입력해주세요." })}
                    placeholder="닉네임도 가능"
                    className="w-full px-4 py-3 bg-black/50 border border-[rgba(204,255,0,0.2)] text-white placeholder-gray-600 font-bold transition-all"
                  />
                  {errors.name && (
                    <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[0.65rem] font-emphasis uppercase tracking-[0.25em] mb-2" style={{ color: "#CCFF00" }}>
                    이메일
                  </label>
                  <input
                    {...register("email", {
                      required: "이메일을 입력해주세요.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "유효한 이메일을 입력해주세요.",
                      },
                    })}
                    type="email"
                    placeholder="you@awesome.api"
                    className="w-full px-4 py-3 bg-black/50 border border-[rgba(204,255,0,0.2)] text-white placeholder-gray-600 font-bold transition-all"
                  />
                  {errors.email && (
                    <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-1 text-[0.65rem] font-emphasis uppercase tracking-[0.25em] mb-2" style={{ color: "#CCFF00" }}>
                    관심 분야 <Flame size={12} style={{ color: "#FF2D78" }} />
                  </label>
                  <input
                    {...register("interest", { required: "관심 분야를 하나 이상 입력해주세요." })}
                    placeholder="금융, 커머스, 공공데이터, AI, 전부"
                    className="w-full px-4 py-3 bg-black/50 border border-[rgba(204,255,0,0.2)] text-white placeholder-gray-600 font-bold transition-all"
                  />
                  {errors.interest && (
                    <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>{errors.interest.message}</p>
                  )}
                </div>

                <div className="syndromez-box p-4 bg-black/30">
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-2">
                    제출 전에 알고 가기
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    폼 제출 = 초기 참여 의사 등록입니다. 프로그램이 준비되는 대로 다음 액션을 안내합니다.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(204,255,0,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 font-emphasis text-lg uppercase tracking-wider text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: "#CCFF00",
                    fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
                    boxShadow: "0 0 20px rgba(204,255,0,0.2)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        ◌
                      </motion.span>
                      기록 중...
                    </span>
                  ) : (
                    "첫 밋업 소식 받기"
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
