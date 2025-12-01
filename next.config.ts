import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // 타입 체크는 하되, 빌드 실패는 하지 않음 (개발 중)
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/core": path.resolve(__dirname, "./core"),
    };
    return config;
  },
};

export default nextConfig;

