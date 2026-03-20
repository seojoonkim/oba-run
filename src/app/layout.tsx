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

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "FOA — Friends of API",
    description: "열린 API 생태계를 만들고 싶은 사람들의 커뮤니티. 첫 밋업과 해커톤 소식을 받아보세요.",
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
