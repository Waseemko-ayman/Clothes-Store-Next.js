import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    esmExternals: 'loose',
  },
  transpilePackages: ['react-hook-form', '@hookform/resolvers'],
};

export default nextConfig;
