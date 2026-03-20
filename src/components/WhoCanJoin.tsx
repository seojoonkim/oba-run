"use client";

import { motion } from "framer-motion";
import { Rocket, Building2, Laptop, GraduationCap, Bot, GitPullRequest } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";

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
    description: "닫힌 구조 앞에서 멈춘 경험이 있다면. 여기가 맞다.",
    accent: "#CCFF00",
  },
  {
    icon: Building2,
    title: "대기업",
    tag: "ENTERPRISE",
    description: "구조를 열까 고민 중이라면, 여기서 먼저 실험할 수 있다.",
    accent: "#FF2D78",
  },
  {
    icon: Laptop,
    title: "개발자",
    tag: "DEVELOPERS",
    description: "불친절한 문서와 씨름해본 사람이라면 자격 충분.",
    accent: "#00FF87",
  },
  {
    icon: GraduationCap,
    title: "학생",
    tag: "STUDENTS",
    description: "공공 데이터로 무언가를 만들려다 벽에 부딪힌 경험. 그것이 입장권.",
    accent: "#CCFF00",
  },
  {
    icon: Bot,
    title: "AI 빌더",
    tag: "AI BUILDERS",
    description: "자율적 존재에게 연결할 통로를 찾고 있다면. 제대로 온 것이다.",
    accent: "#FF2D78",
  },
  {
    icon: GitPullRequest,
    title: "오픈소스 기여자",
    tag: "OPEN SOURCE",
    description: "기여를 제안했으나 침묵만 돌아온 적 있다면. 동지다.",
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
  return (
    <section className="py-28 md:py-36 px-6 relative overflow-hidden spray-drip">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(255,45,120,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 4: 어떤 분들과 함께할지 볼까요?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#CCFF00" }}>문 앞에 선</span>{" "}
            <span className="text-white">어떤 분들과 함께할까요?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold">
            닫힌 구조 앞에서 멈춰보신 적이 있다면 <span className="highlight-block text-sm">충분히 함께할 수 있습니다</span>
          </p>
        </motion.div>

        {/* 🎨 ILLUSTRATION 5: Diverse People Gathering */}
        <motion.div
          className="w-full mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
                <p className="text-[0.55rem] uppercase tracking-[0.3em] mb-4 font-emphasis" style={{ color: role.accent }}>
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
