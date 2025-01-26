import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/a/*', // You can use a wildcard pattern to allow any image path under this domain
      },
    ],
  },
};

export default nextConfig;