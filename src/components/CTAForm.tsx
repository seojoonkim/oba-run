"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useState } from "react";

const formSchema = z.object({
  company: z.string().min(1, "어디서 오셨는지 궁금해요! 🏠"),
  name: z.string().min(1, "이름 없이는 찐친 못 돼요 👋"),
  email: z.email("이메일 좀 다시 봐주세요 (오타인 듯) 🧐"),
  interest: z.string().min(1, "뭐에 꽂히셨는지 하나만! 🎯"),
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
      {/* Background spray — enhanced */}
      <div className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(212,255,0,0.06) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 20% 80%, rgba(0,255,135,0.04) 0%, transparent 50%)",
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
          <h2 className="text-4xl md:text-6xl font-black mb-4 neon-glow-green" style={{ fontFamily: "Impact, Inter, sans-serif", transform: "skewX(-5deg)" }}>
            <span style={{ color: "#00FF87" }}>들어올래요?</span>
            <span className="ml-3">🚀</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold">
            가입폼도 API처럼 열려있어요. 그냥 적으면 됨 😉
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
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: "linear-gradient(90deg, #D4FF00, #00FF87)",
                  boxShadow: "0 0 20px rgba(0,255,135,0.4)",
                }}
              />
              <motion.div
                className="text-7xl mb-6"
                animate={{ rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.3, 1.1, 1.25, 1] }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                🎊
              </motion.div>
              <h3 className="text-2xl font-black mb-3 neon-glow-yellow" style={{ color: "#D4FF00", fontFamily: "Impact, Inter, sans-serif" }}>
                웰컴 투 FOA! 찐친 등록 완료 🔥
              </h3>
              <p className="text-gray-400 mb-8">DM 날아갈 거예요. 스팸함도 확인해주세요 ㅎ</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="font-bold transition-colors underline underline-offset-4 hover:scale-105 transition-transform"
                style={{ color: "#00FF87" }}
              >
                옆에 있는 사람도 끌어들이기 👀
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
              style={{ transform: "rotate(0.8deg)" }}
            >
              {/* Top neon bar with glow */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: "linear-gradient(90deg, #D4FF00, #FF2D78, #00FF87)",
                  boxShadow: "0 0 20px rgba(212,255,0,0.3)",
                }}
              />

              {/* Company */}
              <div>
                <label className="block text-sm font-black uppercase tracking-wider mb-2" style={{ color: "#D4FF00" }}>
                  소속이 뭐예요? 🏢
                </label>
                <input
                  {...register("company", { required: "어디서 오셨는지 궁금해요! 🏠" })}
                  placeholder="회사명, 팀명, 또는 '프리랜서 전사'"
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
                  뭐라고 부르면 돼요? 🏷️
                </label>
                <input
                  {...register("name", { required: "이름 없이는 찐친 못 돼요 👋" })}
                  placeholder="닉네임도 OK"
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
                  연락 받을 곳 📮
                </label>
                <input
                  {...register("email", {
                    required: "이메일 없으면 초대장 못 보내요 💌",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "이메일 좀 다시 봐주세요 (오타인 듯) 🧐",
                    },
                  })}
                  type="email"
                  placeholder="you@awesome.api"
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
                  어떤 API에 미쳐있어요? 🔥
                </label>
                <input
                  {...register("interest", { required: "뭐에 꽂히셨는지 하나만! 🎯" })}
                  placeholder="금융, 커머스, 공공데이터, AI, 전부 다..."
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white placeholder-gray-600 font-bold transition-all"
                  style={{ borderRadius: "2px" }}
                />
                {errors.interest && (
                  <p className="text-sm mt-1 font-bold" style={{ color: "#FF2D78" }}>
                    {errors.interest.message}
                  </p>
                )}
              </div>

              {/* Submit - Graffiti style button with glow */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(212,255,0,0.5), 0 0 80px rgba(0,255,135,0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 font-black text-lg uppercase tracking-wider text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #D4FF00, #00FF87)",
                  clipPath: "polygon(1% 0%, 100% 2%, 99% 100%, 0% 97%)",
                  fontFamily: "Impact, Inter, sans-serif",
                  boxShadow: "0 0 20px rgba(212,255,0,0.3)",
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
                      🎨
                    </motion.span>
                    벽에 태그 새기는 중...
                  </span>
                ) : (
                  "찐친 등록하기 💥"
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
