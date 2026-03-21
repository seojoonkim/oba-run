import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
