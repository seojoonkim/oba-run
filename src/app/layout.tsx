import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OAF — Open API Friends, What The Fun!",
  description:
    "닫힌 API를 여는 친구들의 모임. 열리지 않으면, 연결되지 않는다.",
  openGraph: {
    title: "OAF — Open API Friends, What The Fun!",
    description: "닫힌 API를 여는 친구들의 모임",
    url: "https://oaf.wtf",
    siteName: "OAF",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OAF — Open API Friends, What The Fun!",
    description: "닫힌 API를 여는 친구들의 모임",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
