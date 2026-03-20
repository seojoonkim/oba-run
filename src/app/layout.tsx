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

const ogImage = "/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://foa.wtf"),
  title: "FOA — Friends of API | Open API Community",
  description:
    "FOA(Friends of API)는 열린 API 생태계를 만들고 싶은 사람들의 커뮤니티입니다. 밋업, 해커톤, 네트워킹과 초기 참여 신청을 안내합니다.",
  openGraph: {
    title: "FOA — Friends of API | Open API Community",
    description: "열린 API 생태계를 만들고 싶은 사람들의 커뮤니티. 밋업, 해커톤, 네트워킹과 초기 참여 신청 안내.",
    url: "https://foa.wtf",
    siteName: "FOA",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "어두운 그래피티 배경 위에 foa.wtf 로고타입이 크게 배치된 FOA OG 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FOA — Friends of API",
    description: "열린 API 생태계를 만들고 싶은 사람들의 커뮤니티. 첫 밋업과 해커톤 소식을 받아보세요.",
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
