import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "FOA — Friends of API | What The Fun!",
  description:
    "닫힌 API를 여는 친구들의 모임. 열리지 않으면, 연결되지 않는다. FOA는 한국 API 생태계를 깨부수는 그래피티 크루.",
  openGraph: {
    title: "FOA — Friends of API | What The Fun!",
    description: "닫힌 API를 여는 친구들의 모임. 벽이 있으면 부수고, 문이 있으면 열고.",
    url: "https://foa.wtf",
    siteName: "FOA",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOA — What The Fun!",
    description: "API 안 열면 아무것도 안 돼. 그러니까 일단 열자. 같이.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} antialiased`}>
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
