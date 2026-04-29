export default function Manifesto() {
  return (
    <section className="py-32 md:py-40 px-6 relative bg-black border-y border-[rgba(204,255,0,0.2)]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="phase-label mb-8">THE OBA MANIFESTO</p>
        <div className="space-y-6 text-base md:text-xl text-gray-300 leading-relaxed font-normal">
          <p>우리는 믿는다.</p>
          <p className="text-white">열린다는 건, 존재를 인정하는 일이다.</p>
          <p>허가를 기다리는 동안, 세상은 이미 다음으로 넘어간다.</p>
          <p className="text-white">아이디어는 제안서가 아니라 실행에서 증명된다.</p>
          <p>닫힌 문 뒤에서, 가능성은 조용히 소멸한다.</p>
          <p className="text-white">같은 프로토콜을 쓴다는 건, 같은 세계에 속한다는 뜻이다.</p>
          <p className="text-[#CCFF00] text-2xl md:text-3xl mt-8">이것이 우리가 여기 모인 이유다.</p>
          <p className="text-gray-500 text-base">— Open Builders Alliance</p>
          <p className="text-gray-400 text-sm md:text-base mt-6 pt-6 border-t border-white/10">
            OBA는 국내 오픈 API·오픈소스 빌더들이{" "}
            <span className="text-[#CCFF00] font-bold">1년에 두 차례 — 상반기·하반기</span>로 모이는 해커톤 겸 밋업입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
