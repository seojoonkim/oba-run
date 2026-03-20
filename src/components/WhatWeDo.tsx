"use client";

import { motion } from "framer-motion";
import { Beer, Wrench, Compass, Handshake } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";

interface Activity {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
  accentColor: string;
}

const activities: Activity[] = [
  {
    icon: Beer,
    title: "밋업",
    tag: "MEETUP",
    description: "모여서 이야기한다. 성공담, 삽질기, 분노 — 전부 괜찮다. 깊게 파고, 가볍게 마무리.",
    accentColor: "#CCFF00",
  },
  {
    icon: Wrench,
    title: "해커톤",
    tag: "HACKATHON",
    description: "회원사가 API를 열면, 참가자들이 48시간 안에 무언가를 만든다. 예상 밖의 매시업이 탄생하는 순간.",
    accentColor: "#FF2D78",
  },
  {
    icon: Compass,
    title: "가이드라인",
    tag: "STANDARDS",
    description: "한국형 API 설계 기준을 함께 만든다. 현실에서 작동하는 표준.",
    accentColor: "#00FF87",
  },
  {
    icon: Handshake,
    title: "네트워킹",
    tag: "NETWORK",
    description: "서로의 API를 소개하고, 연결하고, 직접 써본다. 좋은 연동은 좋은 관계에서 나온다.",
    accentColor: "#CCFF00",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhatWeDo() {
  return (
    <section className="py-28 md:py-36 px-6 relative spray-drip">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,135,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 3: THE SOLUTION
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#00FF87" }}>그래서 뭐</span>{" "}
            <span className="text-white">하는데?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold flex items-center gap-2">
            거창하지 않다. 모이고, 만들고, 연결한다. <Beer size={20} style={{ color: "#CCFF00" }} />
          </p>
        </motion.div>

        {/* 🎨 ILLUSTRATION 4: Hackathon / Meetup */}
        <motion.div
          className="illustration-container w-full h-48 md:h-64 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/illustrations/hackathon-meetup.png"
            alt="해커톤과 밋업 장면"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Activity cards — SYNDROMEZ 4-column grid with thin borders */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {activities.map((activity, i) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="syndromez-box p-8 cursor-default group relative"
                whileHover={{
                  backgroundColor: "rgba(204,255,0,0.03)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: activity.accentColor }}
                />

                {/* Tag */}
                <p className="text-[0.55rem] uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: activity.accentColor }}>
                  {activity.tag}
                </p>

                {/* Icon */}
                <div
                  className="mb-4 group-hover:scale-125 transition-transform duration-300"
                  style={{ color: activity.accentColor }}
                >
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>

                {/* Title — SYNDROMEZ ALL-CAPS bold */}
                <h3
                  className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-black-han-sans), 'Black Han Sans', Impact, sans-serif" }}
                >
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {activity.description}
                </p>

                {/* Bottom corner FOA tag */}
                <div
                  className="absolute bottom-3 right-3 text-[0.5rem] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: activity.accentColor }}
                >
                  FOA
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
