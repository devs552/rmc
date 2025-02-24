import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {

    OPENAI_SECRET_KEY: process.env.OPENAI_SECRET_KEY,
  },
};

export default nextConfig;
