"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useState } from "react";

const formSchema = z.object({
  company: z.string().min(1, "어디서 오셨는지 알려주세요!"),
  name: z.string().min(1, "뭐라고 부르면 될까요?"),
  email: z.email("유효한 이메일을 입력해주세요"),
  interest: z.string().min(1, "관심 분야를 알려주세요!"),
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
    // Validate with zod
    const result = formSchema.safeParse(data);
    if (!result.success) return;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="join" className="py-24 md:py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />

      <div className="max-w-2xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">친구, 할래?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            &ldquo;문은 열어야 열리고, 친구는 신청해야 됩니다.&rdquo;
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="glass-card p-12 text-center"
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                🎊
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">
                환영합니다, 친구!
              </h3>
              <p className="text-gray-400 mb-8">곧 연락드릴게요.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-purple-400 hover:text-purple-300 transition-colors underline"
              >
                다른 친구도 소개할래요
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-8 md:p-12 space-y-6"
            >
              {/* Company */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  어디서 오셨어요?
                </label>
                <input
                  {...register("company", { required: "어디서 오셨는지 알려주세요!" })}
                  placeholder="회사 / 소속"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
                {errors.company && (
                  <p className="text-pink-400 text-sm mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  뭐라고 부르면 돼요?
                </label>
                <input
                  {...register("name", { required: "뭐라고 부르면 될까요?" })}
                  placeholder="이름"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
                {errors.name && (
                  <p className="text-pink-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  연락처 하나만요
                </label>
                <input
                  {...register("email", {
                    required: "이메일을 입력해주세요",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "유효한 이메일을 입력해주세요",
                    },
                  })}
                  type="email"
                  placeholder="이메일"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
                {errors.email && (
                  <p className="text-pink-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Interest */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  어떤 API에 관심 있어요?
                </label>
                <input
                  {...register("interest", { required: "관심 분야를 알려주세요!" })}
                  placeholder="금융, 커머스, 공공데이터, AI, 등등..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
                {errors.interest && (
                  <p className="text-pink-400 text-sm mt-1">
                    {errors.interest.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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
                    API 요정들이 처리하고 있어요...
                  </span>
                ) : (
                  "친구가 될래요? 🙋"
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
