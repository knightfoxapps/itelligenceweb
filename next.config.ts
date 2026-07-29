import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "54.236.105.26",
      },
      {
        protocol: "https",
        hostname: "cms.itelligencecx.com",
      },
    ],
  },
};

export default nextConfig;
