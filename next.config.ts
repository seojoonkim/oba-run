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
        destination: "https://oba.wtf/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
