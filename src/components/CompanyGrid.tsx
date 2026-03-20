"use client";

import { motion } from "framer-motion";
import { Package, Trophy } from "lucide-react";

const companies: { name: string; logo?: string }[] = [];

export default function CompanyGrid() {
  return (
    <section className="py-28 md:py-36 px-6 relative spray-drip">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,135,0.04) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Phase breadcrumb */}
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 6: THE CREW
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>같이 하는</span>{" "}
            <span className="text-white">사람들</span>
          </h2>
        </motion.div>

        {companies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">
            {companies.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring" }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(204,255,0,0.03)" }}
                className="syndromez-box p-6 flex items-center justify-center aspect-square"
              >
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                ) : (
                  <span className="text-sm text-gray-400 text-center font-bold">{company.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="syndromez-box p-12 md:p-16 text-center max-w-2xl mx-auto relative"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "#FF2D78" }} />

            <div className="flex justify-center mb-6" style={{ color: "#FF2D78" }}>
              <Package size={56} strokeWidth={1.5} />
            </div>

            <p className="mega-number text-3xl md:text-4xl mb-2" style={{ color: "#FF2D78" }}>
              0
            </p>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-600 font-bold mb-4">
              MEMBERS — BE THE FIRST
            </p>

            <p className="text-xl text-gray-300 mb-2 font-display" style={{ fontFamily: "var(--font-black-han-sans), 'Black Han Sans', Impact, sans-serif" }}>
              아직 아무도 없어요 🤫
            </p>
            <p className="text-gray-500 mb-8 text-sm">
              첫 번째로 이름 올리면 OG. 진짜 레전드.
            </p>

            <a
              href="#join"
              className="inline-flex items-center gap-2 px-10 py-4 font-black text-black uppercase tracking-wider hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]"
              style={{
                background: "#CCFF00",
                fontFamily: "Black Han Sans, Impact, Inter, sans-serif",
                boxShadow: "0 0 20px rgba(204,255,0,0.2)",
              }}
            >
              OG 1호 찍기 <Trophy size={20} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
