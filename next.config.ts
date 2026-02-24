import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['react-hook-form', '@hookform/resolvers'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'usodykqqnbeiohqwkwfy.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
