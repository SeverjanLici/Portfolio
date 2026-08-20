import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 93],
  },
  experimental: {
    serverActions: {},
  },
};



export default nextConfig;
