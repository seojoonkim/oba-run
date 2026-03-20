"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useState } from "react";

const formSchema = z.object({
  company: z.string().min(1, "소속을 알려주세요! 🏠"),
  name: z.string().min(1, "이름이 뭐예요? 👋"),
  email: z.email("이메일 형식이 좀 이상해요 🤔"),
  interest: z.string().min(1, "관심 분야 하나만요! 🎯"),
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
    <section id="join" className="py-24 md:py-32 px-6 relative">
      {/* Background spray */}
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(212,255,0,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 skew-title neon-glow-green" style={{ fontFamily: "Impact, Inter, sans-serif" }}>
            <span style={{ color: "#00FF87" }}>들어올래요?</span>
            <span className="ml-3">🚀</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold">
            API는 열어야 열리고, 가입은 해야 되는 거예요 😉
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="wall-card p-12 text-center relative"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #D4FF00, #00FF87)" }} />
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                🎊
              </motion.div>
              <h3 className="text-2xl font-black mb-3" style={{ color: "#D4FF00", fontFamily: "Impact, Inter, sans-serif" }}>
                합류 완료! 반가워요 🔥
              </h3>
              <p className="text-gray-400 mb-8">곧 연락갈 거예요. 기다려주세요!</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="font-bold transition-colors underline underline-offset-4"
                style={{ color: "#00FF87" }}
              >
                옆에 있는 사람도 가입시킬래요 👀
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit(onSubmit)}
              className="wall-card p-8 md:p-12 space-y-6 relative"
              style={{ transform: "rotate(0.5deg)" }}
            >
              {/* Top neon bar */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #D4FF00, #FF2D78, #00FF87)" }} />

              {/* Company */}
              <div>
                <label className="block text-sm font-black uppercase tracking-wider mb-2" style={{ color: "#D4FF00" }}>
                  어디서 오셨어요? 🏢
                </label>
                <input
                  {...register("company", { required: "소속을 알려주세요! 🏠" })}
                  placeholder="회사 / 소속"
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white placeholder-gray-600 font-bold transition-all"
                  style={{ borderRadius: "2px" }}
                />
                {errors.company && (
                  <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-black uppercase tracking-wider mb-2" style={{ color: "#D4FF00" }}>
                  뭐라고 부르면 돼요? 😊
                </label>
                <input
                  {...register("name", { required: "이름이 뭐예요? 👋" })}
                  placeholder="이름"
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white placeholder-gray-600 font-bold transition-all"
                  style={{ borderRadius: "2px" }}
                />
                {errors.name && (
                  <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-black uppercase tracking-wider mb-2" style={{ color: "#D4FF00" }}>
                  연락받을 이메일 📮
                </label>
                <input
                  {...register("email", {
                    required: "이메일을 입력해주세요",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "이메일 형식이 좀 이상해요 🤔",
                    },
                  })}
                  type="email"
                  placeholder="이메일"
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white placeholder-gray-600 font-bold transition-all"
                  style={{ borderRadius: "2px" }}
                />
                {errors.email && (
                  <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Interest */}
              <div>
                <label className="block text-sm font-black uppercase tracking-wider mb-2" style={{ color: "#D4FF00" }}>
                  어떤 API에 꽂혀있어요? 🎯
                </label>
                <input
                  {...register("interest", { required: "관심 분야 하나만요! 🎯" })}
                  placeholder="금융, 커머스, 공공데이터, AI, 등등..."
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white placeholder-gray-600 font-bold transition-all"
                  style={{ borderRadius: "2px" }}
                />
                {errors.interest && (
                  <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>
                    {errors.interest.message}
                  </p>
                )}
              </div>

              {/* Submit - Graffiti style button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(212,255,0,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 font-black text-lg uppercase tracking-wider text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #D4FF00, #00FF87)",
                  clipPath: "polygon(1% 0%, 100% 2%, 99% 100%, 0% 97%)",
                  fontFamily: "Impact, Inter, sans-serif",
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    >
                      ⏳
                    </motion.span>
                    스프레이 칠하는 중... 🧚
                  </span>
                ) : (
                  "FOA 합류하기! 🔥"
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
