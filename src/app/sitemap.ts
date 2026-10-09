import type { MetadataRoute } from "next";
import { NEIGHBORHOODS } from "@/content/neighborhoods";
import { SITUATIONS } from "@/content/situations";
import { listSlugs } from "@/lib/mdx";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string): string => `${SITE_URL}${path}`;

  const staticPages = [
    "/",
    "/how-it-works",
    "/our-process",
    "/about",
    "/when-not-to-sell-to-us",
    "/faq",
    "/testimonials",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((p) => ({
      url: u(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1.0 : 0.7,
    })),
    ...NEIGHBORHOODS.map((n) => ({
      url: u(`/neighborhoods/${n.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SITUATIONS.map((s) => ({
      url: u(`/situations/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...listSlugs("blog").map((slug) => ({
      url: u(`/blog/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...listSlugs("case-studies").map((slug) => ({
      url: u(`/case-studies/${slug}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];

  return entries;
}
