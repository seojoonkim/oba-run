"use client";

const companies: {
  name: string;
  logo?: string;
  url: string;
  imgClassName?: string;
  story: string;
}[] = [
  {
    name: "Hashed",
    logo: "/logos/hashed-black.png",
    url: "https://hashed.com",
    imgClassName: "h-full w-full object-cover scale-[1.03]",
    story: "열린 생태계에서 포트폴리오 기업들이 더 빠르게 성장합니다",
  },
  {
    name: "Swing",
    logo: "/logos/swing.png",
    url: "https://swingmobility.co",
    imgClassName: "max-w-[82%] max-h-[82%] object-contain scale-[1.02]",
    story: "오픈 API로 파트너 개발사와 새로운 유스케이스를 만들어가고 있습니다",
  },
  {
    name: "Charan",
    logo: "/logos/charan.png",
    url: "https://charan.ai",
    imgClassName: "max-w-[80%] max-h-[80%] object-contain scale-[1.01]",
    story: "AI 모델을 외부 빌더들과 함께 발전시키는 구조를 지향합니다",
  },
  {
    name: "ottto",
    logo: "/logos/ottto.png",
    url: "https://ottto.io",
    imgClassName: "max-w-[84%] max-h-[84%] object-contain scale-[1.06]",
    story: "개발 도구를 공개함으로써 예상 못한 협업이 생겼습니다",
  },
  {
    name: "Delight Labs",
    logo: "/logos/delight-labs.jpg",
    url: "https://delightlabs.io",
    imgClassName: "max-w-[78%] max-h-[78%] object-contain scale-[1.03]",
    story: "SDK를 열었더니 우리가 몰랐던 활용 사례가 나타났습니다",
  },
  {
    name: "GenRank",
    logo: "/logos/genrank.png",
    url: "https://www.genrank.com/",
    imgClassName: "max-w-[54%] max-h-[54%] object-contain scale-[0.98]",
    story: "오픈소스로 시작한 신뢰가 비즈니스 파트너십으로 이어졌습니다",
  },
  {
    name: "ggui",
    logo: "/logos/ggui.png",
    url: "https://ggui.io/",
    imgClassName: "max-w-[58%] max-h-[58%] object-contain scale-[1.0]",
    story: "UI 라이브러리 공개 이후 커뮤니티가 우리 제품을 함께 키워줍니다",
  },
];

export default function CompanyGrid() {
  return (
    <section className="py-32 md:py-40 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="phase-label mb-6">PHASE 6: 초기 참여 흐름, 볼까요?</p>

        <div className="mb-16 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>누가 함께할지</span>{" "}
            <span className="text-white">볼까요?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-bold leading-relaxed">
            아래 로고는 열린 빌더 생태계에 함께하고 있는 기업과 투자사의 예시입니다.{" "}
            <span className="inline-keep" style={{ color: "#CCFF00" }}>
              이 흐름은 이제 시작입니다.
            </span>{" "}
            더 많은 참여를 기다리고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 mb-10 auto-rows-fr company-grid-lines">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${company.name} website`}
              className="block h-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:ring-offset-0"
            >
              <div className="company-card group relative aspect-square h-full p-5 sm:p-6 flex flex-col items-center justify-between overflow-hidden">
                {/* Hover story overlay */}
                <div className="absolute inset-0 bg-black/85 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <p className="text-[0.78rem] md:text-sm text-gray-300 italic text-center leading-relaxed">
                    &ldquo;{company.story}&rdquo;
                  </p>
                </div>

                <div className="flex min-h-0 flex-1 w-full items-center justify-center">
                  {company.logo ? (
                    <div className="company-logo-frame flex aspect-square w-full max-w-[132px] items-center justify-center overflow-hidden rounded-sm">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className={company.imgClassName ?? "max-w-full max-h-full object-contain"}
                      />
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400 text-center font-bold">{company.name}</span>
                  )}
                </div>

                <span className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-gray-400 font-emphasis">
                  {company.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="company-callout p-8 md:p-10 max-w-3xl relative text-center mx-auto flex flex-col items-center">
          <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

          <p className="text-[0.88rem] uppercase tracking-[0.25em] text-gray-500 font-emphasis mb-3">
            FOR EARLY PARTICIPANTS
          </p>
          <p className="text-lg md:text-xl text-white mb-3 leading-relaxed">
            지금 참여하면 <span style={{ color: "#CCFF00" }}>초기 멤버로서 방향을 함께 만드는 대화</span>에 들어올 수 있습니다.
          </p>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
            OBA는 아직 시작 단계입니다. 그래서 오히려 지금 남기는 참여가 더 중요합니다.
            커뮤니티의 첫 프로그램, 운영 방식, 연결 방식에 가장 가까운 거리에서 참여할 수 있습니다.
          </p>

          <a
            href="#join"
            className="inline-flex items-center gap-2 px-10 py-4 font-emphasis text-black uppercase tracking-wider"
            style={{
              background: "#CCFF00",
              fontFamily: "var(--font-do-hyeon), 'Do Hyeon', sans-serif",
              boxShadow: "none",
            }}
          >
            초기 참여자로 등록하기
          </a>
        </div>
      </div>
    </section>
  );
}
