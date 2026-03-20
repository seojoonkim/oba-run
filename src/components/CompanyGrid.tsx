"use client";

import { motion } from "framer-motion";

const companies: {
  name: string;
  logo?: string;
  url: string;
  fit?: string;
  imgClassName?: string;
}[] = [
  {
    name: "Hashed",
    logo: "/logos/hashed-black.png",
    url: "https://hashed.com",
    fit: "w-full h-full object-cover",
  },
  {
    name: "Swing",
    logo: "/logos/swing.png",
    url: "https://swingmobility.co",
    imgClassName: "max-w-[72%] max-h-[52%] object-contain",
  },
  {
    name: "Charan",
    logo: "/logos/charan.png",
    url: "https://charan.ai",
    imgClassName: "max-w-[74%] max-h-[54%] object-contain",
  },
  {
    name: "ottto",
    logo: "/logos/ottto.png",
    url: "https://ottto.io",
    imgClassName: "max-w-[78%] max-h-[50%] object-contain",
  },
  {
    name: "Delight Labs",
    logo: "/logos/delight-labs.jpg",
    url: "https://delightlabs.io",
    imgClassName: "max-w-[58%] max-h-[58%] object-contain",
  },
];

export default function CompanyGrid() {
  return (
    <section className="py-28 md:py-36 px-6 relative spray-drip">
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,135,0.04) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.p
          className="phase-label mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PHASE 6: 초기 참여 흐름, 볼까요?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>누가 함께할지</span>{" "}
            <span className="text-white">볼까요?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold leading-relaxed">
            아래 로고는 API 개방 운동에 함께하고 있는 기업과 투자사의 예시입니다.
            <span style={{ color: "#CCFF00" }}> 이 흐름은 이제 시작입니다.</span> 더 많은 참여를 기다리고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 mb-10 auto-rows-fr">
          {companies.map((company, i) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${company.name} website`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring" }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(204,255,0,0.03)" }}
              className="group h-full focus-visible:outline-none"
            >
              <div className="syndromez-box h-full min-h-[172px] p-6 flex flex-col items-center justify-center gap-4 transition-colors duration-200 group-hover:border-[#CCFF00]/55 group-focus-visible:border-[#CCFF00]/55">
                {company.logo ? (
                  <div className="flex h-[72px] w-[156px] items-center justify-center overflow-hidden">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={company.imgClassName ?? company.fit ?? "max-w-full max-h-full object-contain"}
                    />
                  </div>
                ) : (
                  <span className="text-sm text-gray-400 text-center font-bold">{company.name}</span>
                )}

                <span className="text-xs uppercase tracking-[0.22em] text-gray-400 font-emphasis transition-colors duration-200 group-hover:text-white group-focus-visible:text-white">
                  {company.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="syndromez-box p-8 md:p-10 max-w-3xl relative text-center mx-auto flex flex-col items-center"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "#CCFF00" }} />

          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-3">
            FOR EARLY PARTICIPANTS
          </p>
          <p className="text-lg md:text-xl text-white mb-3 leading-relaxed">
            지금 참여하면 <span style={{ color: "#CCFF00" }}>초기 멤버로서 방향을 함께 만드는 대화</span>에 들어올 수 있습니다.
          </p>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
            FOA는 아직 시작 단계입니다. 그래서 오히려 지금 남기는 신청이 더 중요합니다.
            커뮤니티의 첫 프로그램, 운영 방식, 연결 방식에 가장 가까운 거리에서 참여할 수 있습니다.
          </p>

          <a
            href="#join"
            className="inline-flex items-center gap-2 px-10 py-4 font-emphasis text-black uppercase tracking-wider hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]"
            style={{
              background: "#CCFF00",
              fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              boxShadow: "0 0 20px rgba(204,255,0,0.2)",
            }}
          >
            초기 참여자로 등록하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
