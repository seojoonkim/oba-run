"use client";

import { motion } from "framer-motion";

// Empty state for now — will be populated with real data later
const companies: { name: string; logo?: string }[] = [];

export default function CompanyGrid() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,135,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 skew-title" style={{ fontFamily: "Impact, Inter, sans-serif" }}>
            <span className="gradient-text">같이 하는 사람들</span>
            <span className="ml-3" style={{ color: "#FF2D78" }}>🤙</span>
          </h2>
        </motion.div>

        {companies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: (i % 2 === 0 ? -2 : 3) }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.1 }}
                className="sticker-card p-6 flex items-center justify-center aspect-square"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-sm text-gray-400 text-center font-bold">
                    {company.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="wall-card p-12 md:p-16 text-center max-w-2xl mx-auto relative"
          >
            {/* Neon top bar */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #FF2D78, #D4FF00)" }} />

            <div className="text-5xl mb-6">🦗</div>
            <p className="text-xl md:text-2xl text-gray-300 mb-3 font-black" style={{ fontFamily: "Impact, Inter, sans-serif" }}>
              귀뚜라미 소리밖에 안 들려요...
            </p>
            <p className="text-gray-500 mb-8 font-bold">
              첫 번째로 이름 올리면 레전드예요. 진짜로.
            </p>
            <a
              href="#join"
              className="inline-block px-8 py-3 font-black text-black uppercase tracking-wider hover:scale-105 transition-transform"
              style={{
                background: "linear-gradient(135deg, #D4FF00, #00FF87)",
                clipPath: "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)",
              }}
            >
              레전드 1호 되기 🏆
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
