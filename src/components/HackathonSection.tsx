"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function HackathonSection() {
  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(204,255,0,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Phase breadcrumb */}
        <p className="phase-label mb-6">2026 상반기 시즌 · 연 2회 정기 모임</p>

        {/* Title */}
        <div className="mb-16 max-w-4xl">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-display uppercase mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span style={{ color: "#CCFF00" }}>OBA</span>{" "}
            <span className="text-white">빌더스 위켄드 (Builders Weekend) #1</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed">
            OBA는 국내 오픈 API·오픈소스 빌더들이{" "}
            <span className="highlight-block">1년에 두 차례 모이는 빌더스 위켄드(Builders Weekend)</span>입니다. 해커톤과 네트워킹이 한 자리에서 일어나는 주말.
            <br />그 첫 번째 시즌에 초대합니다.
          </p>
        </div>

        {/* Venue Photos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 relative overflow-hidden border border-[rgba(255,45,120,0.2)]" style={{ aspectRatio: "16 / 10" }}>
              <img
                src="/kakao-ai-campus-1.jpg"
                alt="카카오 AI 캠퍼스 — 메인 전경"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-[0.72rem] uppercase tracking-[0.3em] font-emphasis" style={{ color: "#FF2D78" }}>VENUE</p>
                <p className="text-base md:text-lg text-white font-bold">카카오 AI 캠퍼스</p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-[rgba(255,45,120,0.2)]" style={{ aspectRatio: "4 / 5" }}>
              <img
                src="/kakao-ai-campus-2.jpg"
                alt="카카오 AI 캠퍼스 — 디테일"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Event Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[rgba(204,255,0,0.2)] mb-16">
          {/* Date */}
          <motion.div
            className="syndromez-box p-10 md:p-12 flex flex-col items-center text-center group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "#CCFF00" }}
            />
            <Calendar
              size={48}
              strokeWidth={1.5}
              className="mb-5"
              style={{ color: "#CCFF00" }}
            />
            <p
              className="text-[0.72rem] uppercase tracking-[0.3em] mb-3 font-emphasis"
              style={{ color: "#CCFF00" }}
            >
              DATE
            </p>
            <h3
              className="text-3xl md:text-4xl font-emphasis text-white mb-2"
              style={{
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              }}
            >
              5월 30–31일
            </h3>
            <p className="text-base text-gray-400">토요일 – 일요일 (1박 2일)</p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="syndromez-box p-10 md:p-12 flex flex-col items-center text-center group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "#FF2D78" }}
            />
            <MapPin
              size={48}
              strokeWidth={1.5}
              className="mb-5"
              style={{ color: "#FF2D78" }}
            />
            <p
              className="text-[0.72rem] uppercase tracking-[0.3em] mb-3 font-emphasis"
              style={{ color: "#FF2D78" }}
            >
              LOCATION
            </p>
            <h3
              className="text-3xl md:text-4xl font-emphasis text-white mb-2"
              style={{
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              }}
            >
              카카오 AI 캠퍼스
            </h3>
            <p className="text-base text-gray-400">
              경기도 용인시 수지구 호수로 96번길 7 (고기동 47-2)
            </p>
          </motion.div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[rgba(39,167,231,0.2)] mb-16">
          <motion.div
            className="syndromez-box p-8 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "#27A7E7" }}
            />
            <Clock
              size={32}
              strokeWidth={1.5}
              className="mb-4 mx-auto"
              style={{ color: "#27A7E7" }}
            />
            <p
              className="text-[0.72rem] uppercase tracking-[0.3em] mb-3 font-emphasis"
              style={{ color: "#27A7E7" }}
            >
              DURATION
            </p>
            <h4
              className="text-xl font-emphasis text-white mb-2"
              style={{
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              }}
            >
              1박 2일
            </h4>
            <p className="text-sm text-gray-400">
              토요일 오전 – 일요일 저녁
            </p>
          </motion.div>

          <motion.div
            className="syndromez-box p-8 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "#00FF87" }}
            />
            <Users
              size={32}
              strokeWidth={1.5}
              className="mb-4 mx-auto"
              style={{ color: "#00FF87" }}
            />
            <p
              className="text-[0.72rem] uppercase tracking-[0.3em] mb-3 font-emphasis"
              style={{ color: "#00FF87" }}
            >
              PARTICIPANTS
            </p>
            <h4
              className="text-xl font-emphasis text-white mb-2"
              style={{
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              }}
            >
              빌더 & 기업
            </h4>
            <p className="text-sm text-gray-400">
              오픈 API 제공 기업 + 써드파티 빌더
            </p>
          </motion.div>

          <motion.div
            className="syndromez-box p-8 text-center relative sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "#CCFF00" }}
            />
            <p
              className="text-[0.72rem] uppercase tracking-[0.3em] mb-3 font-emphasis"
              style={{ color: "#CCFF00" }}
            >
              FORMAT
            </p>
            <h4
              className="text-xl font-emphasis text-white mb-2"
              style={{
                fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              }}
            >
              팀 빌딩 → 개발 → 데모
            </h4>
            <p className="text-sm text-gray-400">
              현장에서 팀을 짜고, 24시간 동안 제품을 만들고, 마지막에 데모합니다
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
            }}
            type="button"
            className="inline-flex items-center gap-3 px-12 py-5 font-emphasis text-black text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(204,255,0,0.5)]"
            style={{
              background: "#CCFF00",
              fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              boxShadow: "0 0 30px rgba(204,255,0,0.3)",
            }}
          >
            참가 신청하기
          </button>
          <p className="text-sm text-gray-500 mt-4">
            참가비 무료 · 사전 등록 필수
          </p>
        </motion.div>
      </div>
    </section>
  );
}
