import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "maps.googleapis.com" },
      { protocol: "https", hostname: "**.covenanthomesphilly.com" },
    ],
  },
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    // Carrot URL → new site 301s (add more as the old sitemap is scraped)
    return [];
  },
};

export default config;
