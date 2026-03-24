"use client";

const investors = [
  {
    name: "Hashed",
    logo: "/logos/hashed-black.png",
    url: "https://hashed.com",
    imgClassName: "w-full h-full object-cover",
    story: "열린 생태계에서 포트폴리오 기업들이 더 빠르게 성장합니다",
  },
  {
    name: "Kakao Ventures",
    logo: "/logos/kakao-vc.png",
    url: "https://www.kakao.vc",
    imgClassName: "w-full h-full object-cover",
    story: "오픈 생태계에 투자하며 빌더 커뮤니티의 성장을 함께 만들어갑니다",
  },
];

const companies = [
  {
    name: "Swing",
    logo: "/logos/swing.png",
    url: "https://swingmobility.co",
    imgClassName: "w-full h-full object-cover",
    story: "오픈 API로 파트너 개발사와 새로운 유스케이스를 만들어가고 있습니다",
  },
  {
    name: "Charan",
    logo: "/logos/charan.png",
    url: "https://charan.ai",
    imgClassName: "w-full h-full object-cover",
    story: "AI 모델을 외부 빌더들과 함께 발전시키는 구조를 지향합니다",
  },
  {
    name: "ottto",
    logo: "/logos/ottto.png",
    url: "https://ottto.io",
    imgClassName: "w-full h-full object-cover",
    story: "개발 도구를 공개함으로써 예상 못한 협업이 생겼습니다",
  },
  {
    name: "Delight Labs",
    logo: "/logos/delight-labs.jpg",
    url: "https://delightlabs.io",
    imgClassName: "w-full h-full object-cover",
    story: "SDK를 열었더니 우리가 몰랐던 활용 사례가 나타났습니다",
  },
  {
    name: "GenRank",
    logo: "/logos/genrank.png",
    url: "https://www.genrank.com/",
    imgClassName: "w-full h-full object-cover",
    story: "오픈소스로 시작한 신뢰가 비즈니스 파트너십으로 이어졌습니다",
  },
  {
    name: "ggui",
    logo: "/logos/ggui.png",
    url: "https://ggui.ai",
    imgClassName: "w-full h-full object-cover",
    story: "UI 라이브러리 공개 이후 커뮤니티가 우리 제품을 함께 키워줍니다",
  },
  {
    name: "CryptoQuant",
    logo: "/logos/cryptoquant.jpg",
    url: "https://cryptoquant.com/",
    imgClassName: "w-full h-full object-cover",
    story: "온체인 데이터를 외부 빌더들과 함께 활용하며 생태계를 확장합니다",
  },
  {
    name: "Rocketpunch",
    logo: "/logos/rocketpunch.jpg",
    url: "https://rocketpunch.com/",
    imgClassName: "w-full h-full object-cover",
    story: "스타트업 생태계 데이터를 개방해 더 많은 빌더들과 함께 성장합니다",
  },
  {
    name: "Collaborative Councils",
    logo: "/logos/collaborative-councils.png",
    url: "https://cocoun.org",
    imgClassName: "w-full h-full object-cover",
    story: "협력적 거버넌스와 오픈 네트워크를 통해 생태계를 구축합니다",
  },
  {
    name: "Moat AI",
    logo: "/logos/moat-ai.png",
    url: "https://www.moatai.io/",
    imgClassName: "w-full h-full object-cover",
    story: "AI 에이전트의 경쟁력을 높이는 개방형 플랫폼으로 생태계를 확장합니다",
  },
];

const openSourceProjects = [
  {
    name: "Sisyphus Labs",
    logo: "/logos/sisyphus-labs.jpg",
    url: "https://github.com/code-yeongyu/oh-my-openagent",
    imgClassName: "w-full h-full object-cover",
    story: "오픈 에이전트 기술을 공개하며 AI 빌더 생태계의 기반을 다집니다",
  },
];

const mediaPartners = [
  {
    name: "BZCF",
    logo: "/logos/bzcf.png",
    url: "https://www.instagram.com/bizucafe",
    imgClassName: "w-full h-full object-cover",
    story: "빌더들의 이야기를 콘텐츠로 기록하고 확산합니다",
  },
];

const renderGrid = (items: typeof companies) => (
  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10 company-grid-lines">
    {items.map((item) => (
      <a
        key={item.name}
        href={item.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.name} website`}
        className="flex flex-col items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:ring-offset-0"
      >
        <div className="company-card group relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-sm mb-2">
          {item.logo ? (
            <img
              src={item.logo}
              alt={item.name}
              className={item.imgClassName ?? "max-w-[90%] max-h-[90%] object-contain"}
            />
          ) : (
            <span className="text-xs text-gray-400 text-center font-bold px-2">{item.name}</span>
          )}
        </div>

        <span className="text-center text-[10px] uppercase tracking-[0.18em] text-gray-400 font-emphasis line-clamp-1">
          {item.name}
        </span>
      </a>
    ))}
  </div>
);

export default function CompanyGrid() {
  return (
    <section className="py-32 md:py-40 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="phase-label mb-6">PHASE 3: 함께하는 기업과 투자사</p>

        <div className="mb-16 max-w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-4 whitespace-nowrap" style={{ letterSpacing: "-0.02em" }}>
            <span style={{ color: "#FF2D78" }}>오픈 API·오픈 소스</span> <span className="text-white">문화에 동참 조직들</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-bold inline whitespace-normal">
            아래는 <span className="highlight-block">API를 열고, 코드를 공개하는</span> 움직임에 동참한 기업과 프로젝트, 미디어와 투자사입니다. <span style={{ color: "#CCFF00" }}>지금도 합류가 이어지고 있습니다.</span>
          </p>
        </div>

        {/* 기업 섹션 */}
        <div className="mb-20">
          <div className="mb-8 max-w-full">
            <p className="text-sm md:text-base text-gray-300 inline">
              한국에서 <span style={{ color: "#CCFF00" }}>API를 열어놓은 기업들은 거의 없습니다.</span> 그래서 아래 기업들의 결정이 더욱 의미 있습니다. 이들은 폐쇄를 넘어 개방으로 가는 길을 보여줍니다.
            </p>
          </div>
          <p className="text-xl md:text-2xl font-emphasis uppercase mb-6" style={{ color: "#CCFF00", letterSpacing: "0.1em" }}>기업</p>
          {renderGrid(companies)}
        </div>

        {/* 오픈소스 프로젝트 섹션 */}
        <div className="mb-20">
          <p className="text-xl md:text-2xl font-emphasis uppercase mb-6" style={{ color: "#CCFF00", letterSpacing: "0.1em" }}>오픈소스 프로젝트</p>
          {renderGrid(openSourceProjects)}
        </div>

        {/* 미디어 파트너 섹션 */}
        <div className="mb-20">
          <p className="text-xl md:text-2xl font-emphasis uppercase mb-6" style={{ color: "#CCFF00", letterSpacing: "0.1em" }}>미디어 파트너</p>
          {renderGrid(mediaPartners)}
        </div>

        {/* 투자사 섹션 */}
        <div className="mb-20">
          <p className="text-xl md:text-2xl font-emphasis uppercase mb-6" style={{ color: "#CCFF00", letterSpacing: "0.1em" }}>투자사</p>
          {renderGrid(investors)}
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
