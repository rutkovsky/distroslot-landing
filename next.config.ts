import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/distroslot-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
