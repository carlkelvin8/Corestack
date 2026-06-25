import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['mariette-unmutant-epistemologically.ngrok-free.dev'],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
