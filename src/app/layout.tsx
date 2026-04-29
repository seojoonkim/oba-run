import type { Metadata } from "next";
import { Inter, Black_Han_Sans, Do_Hyeon } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: "400",
});

const doHyeon = Do_Hyeon({
  variable: "--font-do-hyeon",
  subsets: ["latin"],
  weight: "400",
});

const ogImage = "/og-image-v2.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://oba.run"),
  title: "OBA — 국내 오픈 API·오픈소스 빌더 해커톤+밋업 (연 2회)",
  description:
    "OBA(Open Builders Alliance)는 국내 오픈 API·오픈소스 빌더들이 1년에 두 차례 모이는 해커톤 겸 밋업입니다. API를 여는 기업과 그 위에서 붙어 만드는 써드파티 빌더들이 한 자리에 모여, 제품을 만들고 경험을 나눕니다.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "OBA — 국내 오픈 API·오픈소스 빌더 해커톤+밋업 (연 2회)",
    description: "OBA는 국내 오픈 API·오픈소스 빌더들이 1년에 두 차례 모이는 해커톤 겸 밋업입니다. 기업과 빌더가 한 자리에서 만들고 연결됩니다.",
    url: "https://oba.run",
    siteName: "OBA",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "OBA — Open Builders Alliance OG 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBA — 국내 오픈 API·오픈소스 빌더 해커톤+밋업",
    description: "1년에 두 차례, 국내 오픈 API·오픈소스 빌더들이 모입니다. 첫 시즌 소식을 받아보세요.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${blackHanSans.variable} ${doHyeon.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen bg-black text-white" style={{ fontFamily: 'Pretendard Variable, Pretendard, Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
