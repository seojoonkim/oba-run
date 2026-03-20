"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useState } from "react";
import { Flame, PartyPopper } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  company: z.string().min(1, "소속을 알려주세요."),
  name: z.string().min(1, "이름을 입력해주세요."),
  email: z.email("유효한 이메일을 입력해주세요."),
  interest: z.string().min(1, "관심 분야를 하나 이상 입력해주세요."),
});

type FormData = z.infer<typeof formSchema>;

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
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(204,255,0,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative">
        {/* Phase breadcrumb */}
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 5: JOIN THE CREW
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#00FF87" }}>문은 열려 있다.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold">
            열린 구조처럼, 참여도 열려 있다. 이름을 남기면 된다.
          </p>
        </motion.div>

        {/* 🎨 ILLUSTRATION 6: Opening Door */}
        <motion.div
          className="w-full mb-12"
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
            className="w-full h-auto"
          />
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
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "#CCFF00" }} />

              <motion.div
                className="flex justify-center mb-6"
                animate={{ rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.3, 1.1, 1.25, 1] }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <PartyPopper size={64} style={{ color: "#CCFF00" }} />
              </motion.div>
              <h3 className="text-2xl font-display mb-3 uppercase tracking-wide neon-glow-lime" style={{ color: "#CCFF00" }}>
                기록되었다.
              </h3>
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">REGISTRATION COMPLETE</p>
              <p className="text-gray-500 mb-8">확인 메일을 보낸다. 스팸함도 확인할 것.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="font-bold transition-all underline underline-offset-4 hover:scale-105"
                style={{ color: "#00FF87" }}
              >
                한 명 더 데려오기
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
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #CCFF00, #FF2D78, #00FF87)" }} />

              {/* Company */}
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

              {/* Name */}
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

              {/* Email */}
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

              {/* Interest */}
              <div>
                <label className="flex items-center gap-1 text-[0.65rem] font-emphasis uppercase tracking-[0.25em] mb-2" style={{ color: "#CCFF00" }}>
                  관심 API <Flame size={12} style={{ color: "#FF2D78" }} />
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

              {/* Submit — SYNDROMEZ solid block button */}
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
                  "등록하기"
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
