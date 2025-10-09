import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚡ Ici tu mets tes options valides
  reactStrictMode: true,
  turbopack: {
    root: './frontend'
  },
};
export default nextConfig;
