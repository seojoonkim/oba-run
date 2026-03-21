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
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "oba.wtf",
          },
        ],
        destination: "https://oba.run/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
