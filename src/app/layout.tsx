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
  title: "OBA — Open Builders Alliance | Open Builders Community",
  description:
    "OBA(Open Builders Alliance)는 열린 빌더 생태계를 만들고 싶은 사람들의 커뮤니티입니다. 오픈소스, 오픈 API, 밋업, 해커톤, 네트워킹과 초기 참여 신청을 안내합니다.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "OBA — Open Builders Alliance | Open Builders Community",
    description: "열린 빌더 생태계를 만들고 싶은 사람들의 커뮤니티. 오픈소스, 오픈 API, 밋업, 해커톤, 네트워킹과 초기 참여 신청 안내.",
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
    title: "OBA — Open Builders Alliance",
    description: "열린 빌더 생태계를 만들고 싶은 사람들의 커뮤니티. 첫 밋업과 해커톤 소식을 받아보세요.",
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
        {/* Favicon — explicit rendering for Next.js 16 */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%23CCFF00'/><text x='50' y='70' text-anchor='middle' font-size='80' font-weight='bold' font-family='Arial' fill='%23000000'>O</text></svg>" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
