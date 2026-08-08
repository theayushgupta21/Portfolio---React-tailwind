import type { NextConfig } from "next";

const nextConfig: NextConfig & { eslint?: { ignoreDuringBuilds: boolean } } = {
  devIndicators: false

  /* config options here */
};

export default nextConfig;
