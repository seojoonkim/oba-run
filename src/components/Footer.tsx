"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-black gradient-text mb-3">
            oaf.wtf
          </h3>
          <p className="text-gray-400 mb-2">
            Open API Friends — What The Fun!
          </p>
          <p className="text-gray-500 text-sm mb-8">
            &ldquo;닫힌 API를 여는 친구들의 모임&rdquo;
          </p>
          <p className="text-gray-600 text-xs">
            © 2026 OAF. 이 웹사이트의 API는 당연히 열려 있습니다.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
