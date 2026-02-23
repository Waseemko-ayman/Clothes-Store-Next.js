import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['react-hook-form', '@hookform/resolvers'],
  images: {
    domains: ['usodykqqnbeiohqwkwfy.supabase.co'],
  },
};

export default nextConfig;
