"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Door animation: doors split open as user scrolls
  const leftDoor = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const rightDoor = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const doorOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.5],
    [
      "linear-gradient(135deg, #0a0a0a 0%, #1a0533 50%, #0a0a0a 100%)",
      "linear-gradient(135deg, #4c1d95 0%, #831843 50%, #9a3412 100%)",
    ]
  );

  return (
    <section ref={ref} className="relative min-h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          style={{ background: bgGradient }}
        />

        {/* Colorful world behind the doors */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: contentOpacity }}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ["#8b5cf6", "#ec4899", "#f97316", "#10b981"][
                    i % 4
                  ],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Door Left */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full z-10"
          style={{
            x: leftDoor,
            opacity: doorOpacity,
            background:
              "linear-gradient(90deg, #111827, #1f2937)",
          }}
        >
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="w-3 h-12 bg-gray-500 rounded-full" />
          </div>
        </motion.div>

        {/* Door Right */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full z-10"
          style={{
            x: rightDoor,
            opacity: doorOpacity,
            background:
              "linear-gradient(270deg, #111827, #1f2937)",
          }}
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <div className="w-3 h-12 bg-gray-500 rounded-full" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            className="text-sm md:text-base tracking-[0.3em] uppercase text-purple-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Scroll to open the door
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="gradient-text">Open API Friends</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl font-bold text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            What The Fun! 🎉
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            열리지 않으면, 연결되지 않는다.
            <br />
            연결되지 않으면, 아무 일도 일어나지 않는다.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            닫힌 API 뒤에 갇힌 가능성을 꺼내자.
            <br />
            친구들이 모이면, 문은 열린다.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="#why-now"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-semibold text-lg hover:scale-105 transition-transform"
            >
              문 열어보기 👇
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
