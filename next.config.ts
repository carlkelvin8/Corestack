import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['mariette-unmutant-epistemologically.ngrok-free.dev'],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
