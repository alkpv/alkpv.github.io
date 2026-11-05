import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site for GitHub Pages: no server, so no built-in image optimization.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
