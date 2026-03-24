import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache busting timestamp: 2026-03-24T19:21:00Z
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "foa.wtf",
          },
        ],
        destination: "https://oba.run/:path*",
        permanent: true,
      },
      // Removed oba.wtf redirect so it can natively serve the site and show its own OG preview card
    ];
  },
};

export default nextConfig;
