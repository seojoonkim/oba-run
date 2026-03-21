"use client";

import { motion } from "framer-motion";
import { Rocket, Building2, Laptop, GraduationCap, Bot, GitPullRequest } from "lucide-react";
import { type LucideIcon } from "lucide-react";
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

interface Role {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
  accent: string;
}

const roles: Role[] = [
  {
    icon: Rocket,
    title: "스타트업",
    tag: "STARTUPS",
    description: "외부 도구, 코드, API를 연결하려다 반복해서 막혔다면. 바로 이 문제를 같이 풀 사람입니다.",
    accent: "#CCFF00",
  },
  {
    icon: Building2,
    title: "대기업",
    tag: "ENTERPRISE",
    description: "조직의 구조를 더 열고 싶지만 방법과 사례가 부족했다면, 여기서 먼저 안전하게 실험할 수 있습니다.",
    accent: "#FF2D78",
  },
  {
    icon: Laptop,
    title: "개발자",
    tag: "DEVELOPERS",
    description: "불친절한 문서, 닫힌 저장소, 모호한 연동 조건과 씨름해봤다면 이미 충분한 문제의식을 갖고 있습니다.",
    accent: "#00FF87",
  },
  {
    icon: GraduationCap,
    title: "학생",
    tag: "STUDENTS",
    description: "공개 데이터나 오픈소스로 무언가를 만들려다 현실의 벽을 느껴봤다면, 그 경험 자체가 입장권입니다.",
    accent: "#CCFF00",
  },
  {
    icon: Bot,
    title: "AI 빌더",
    tag: "AI BUILDERS",
    description: "에이전트와 소프트웨어가 실제로 행동할 수 있게 할 열린 코드와 열린 인터페이스를 찾고 있다면, 제대로 오셨습니다.",
    accent: "#FF2D78",
  },
  {
    icon: GitPullRequest,
    title: "오픈소스 기여자",
    tag: "OPEN SOURCE",
    description: "기여를 제안했지만 반응이 없었거나, 공개 협업이 얼마나 어려운지 체감해봤다면 이미 같은 편입니다.",
    accent: "#00FF87",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function WhoCanJoin() {
  const sec = useInView(0);
  const imgIv = useInView(0);
  const cardsIv = useInView(0);

  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden spray-drip">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(255,45,120,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <motion.p
          ref={sec.ref}
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          animate={sec.visible ? { opacity: 1 } : { opacity: 0 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          PHASE 4: 어떤 분들과 함께할지 볼까요?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sec.visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#CCFF00" }}>문 앞에 선</span>{" "}
            <span className="text-white">어떤 분들과 함께할까요?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold max-w-2xl">
            공개와 협업의 부족함을 체감해보셨다면, 이미 이 문제를 함께 풀 자격이 있습니다.
          </p>
          <p className="text-[calc(1rem+1px)] md:text-[calc(1.15rem+1px)] text-gray-300 mt-4">
            <span className="highlight-block">OBA (Open Builders Alliance)</span>에서 한국 빌더 생태계를 함께 만들어 가요.
          </p>
        </motion.div>

        {/* 🎨 ILLUSTRATION 5: Diverse People Gathering */}
        <motion.div
          ref={imgIv.ref}
          className="w-full mb-16"
          initial={{ opacity: 0 }}
          animate={imgIv.visible ? { opacity: 1 } : { opacity: 0 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src="/images/illustrations/diverse-crew.png"
            alt="다양한 사람들이 모이는 모습"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Role cards — SYNDROMEZ grid, thin borders, clean */}
        <motion.div
          ref={cardsIv.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
          variants={containerVariants}
          initial="hidden"
          animate={cardsIv.visible ? "visible" : "hidden"}
          style={{ backfaceVisibility: "hidden" }}
        >
          {roles.map((role, i) => {
            const IconComponent = role.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="syndromez-box p-8 text-center cursor-default group relative"
                whileHover={{
                  backgroundColor: "rgba(204,255,0,0.03)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Tag */}
                <p className="text-[0.72rem] uppercase tracking-[0.3em] mb-4 font-emphasis" style={{ color: role.accent }}>
                  {role.tag}
                </p>

                {/* Icon */}
                <div className="flex justify-center mb-4 group-hover:scale-125 transition-transform duration-300" style={{ color: role.accent }}>
                  <IconComponent size={44} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-emphasis mb-3 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif", color: role.accent }}
                >
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {role.description}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute bottom-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: role.accent }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
