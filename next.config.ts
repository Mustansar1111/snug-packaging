import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Pages renamed to US spelling: keep old links and Google rankings working.
  async redirects() {
    return [
      { source: "/packaging/jewellery-boxes", destination: "/packaging/jewelry-boxes", permanent: true },
      { source: "/packaging/favour-boxes", destination: "/packaging/favor-boxes", permanent: true },
    ];
  },
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
