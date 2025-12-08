import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['react-hook-form', '@hookform/resolvers'],
};

export default nextConfig;
