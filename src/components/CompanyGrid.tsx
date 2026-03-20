"use client";

import { motion } from "framer-motion";

// Empty state for now — will be populated with real data later
const companies: { name: string; logo?: string }[] = [];

export default function CompanyGrid() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">참여중인 친구들</span>
          </h2>
        </motion.div>

        {companies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 flex items-center justify-center aspect-square"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-sm text-gray-400 text-center">
                    {company.name}
                  </span>
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
            className="glass-card p-12 md:p-16 text-center max-w-2xl mx-auto"
          >
            <div className="text-5xl mb-6">🎤</div>
            <p className="text-xl md:text-2xl text-gray-300 mb-3">
              아직 여긴 너무 조용하네요...
            </p>
            <p className="text-gray-500 mb-8">
              지금 바로 첫 번째 친구가 되어주세요!
            </p>
            <a
              href="#join"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              첫 친구 되기 ✋
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
