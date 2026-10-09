/**
 * Typed JSON-LD schema builders (schema.org).
 * CLAUDE.md #14: every page must ship with schema markup. Import what each page needs.
 *
 * Validated 2026-04-05 per strategy/SCHEMA-REPORT.md.
 * Note: FAQ rich results restricted to gov/healthcare since Aug 2023,
 * HowTo rich results removed Sept 2023 — FAQ markup kept for AI search value.
 */

import { BRAND, PHONE_E164, SITE_URL, absoluteUrl, PHILLY_NEIGHBORHOODS } from "./utils";

type JsonLd = Record<string, unknown>;

const COVENANT_ADDRESS: JsonLd = {
  "@type": "PostalAddress",
  streetAddress: BRAND.address.street,
  addressLocality: BRAND.address.city,
  addressRegion: BRAND.address.region,
  postalCode: BRAND.address.postalCode,
  addressCountry: BRAND.address.country,
};

const COVENANT_GEO: JsonLd = {
  "@type": "GeoCoordinates",
  latitude: BRAND.geo.latitude,
  longitude: BRAND.geo.longitude,
};

const COVENANT_HOURS: JsonLd = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [...BRAND.hours.daysOfWeek],
  opens: BRAND.hours.opens,
  closes: BRAND.hours.closes,
};

interface OrgOptions {
  sameAs?: string[];
}

export function organizationSchema(opts: OrgOptions = {}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.legalName,
    alternateName: BRAND.name,
    url: SITE_URL,
    logo: absoluteUrl("/brand/logo.svg"),
    email: BRAND.email,
    telephone: PHONE_E164,
    address: COVENANT_ADDRESS,
    foundingDate: BRAND.foundingDate,
    founder: { "@type": "Person", name: BRAND.founder },
    slogan: BRAND.slogan,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      contactType: "sales",
      areaServed: "US-PA",
      availableLanguage: ["en"],
    },
    // TODO: Watson to provide LinkedIn, Facebook, YouTube, BBB URLs once live
    sameAs: opts.sameAs ?? [],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

interface LocalBusinessOptions {
  areaServed?: string;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}

export function localBusinessSchema(opts: LocalBusinessOptions = {}): JsonLd {
  const base: JsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: SITE_URL,
    image: absoluteUrl("/brand/logo.svg"),
    telephone: PHONE_E164,
    email: BRAND.email,
    address: COVENANT_ADDRESS,
    geo: COVENANT_GEO,
    openingHoursSpecification: [COVENANT_HOURS],
    areaServed: opts.areaServed
      ? { "@type": "Place", name: `${opts.areaServed}, Philadelphia, PA` }
      : [
          { "@type": "City", name: "Philadelphia", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
          ...PHILLY_NEIGHBORHOODS.map((n) => ({ "@type": "Place", name: `${n}, Philadelphia, PA` })),
        ],
    priceRange: "$$",
    knowsAbout: [
      "Cash home buying",
      "Distressed property acquisition",
      "Probate property purchases",
      "Philadelphia real estate",
      "As-is property sales",
      "Wholesale real estate",
    ],
    paymentAccepted: "Cash, Wire Transfer",
    currenciesAccepted: "USD",
  };

  if (opts.aggregateRating) {
    base.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: opts.aggregateRating.ratingValue,
      reviewCount: opts.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return base;
}

/**
 * FAQPage schema. Note: Google restricted FAQ rich results to gov/healthcare
 * authority sites (Aug 2023). Still emit for AI search (ChatGPT, Perplexity,
 * Google AI Overviews, Bing) which consume FAQ markup for content parsing.
 */
export interface FaqItem {
  question: string;
  answer: string;
}
export function faqPageSchema(items: FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export interface ReviewItem {
  author: string;
  body: string;
  rating?: number;
  datePublished?: string;
}
export function reviewSchema(item: ReviewItem): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${SITE_URL}/#localbusiness` },
    author: { "@type": "Person", name: item.author },
    reviewBody: item.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: item.rating ?? 5,
      bestRating: 5,
    },
    datePublished: item.datePublished,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.name,
      item: absoluteUrl(i.path),
    })),
  };
}

export interface ArticleMeta {
  title: string;
  description: string;
  slug: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  category?: string;
  wordCount?: number;
  keywords?: string[];
}
export function articleSchema(a: ArticleMeta): JsonLd {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    author: { "@type": "Person", name: a.author ?? "Watson Saintsulne" },
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    image: a.image ? absoluteUrl(a.image) : absoluteUrl("/og-default.png"),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(a.slug) },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
  if (a.category) schema.articleSection = a.category;
  if (a.wordCount) schema.wordCount = a.wordCount;
  if (a.keywords?.length) schema.keywords = a.keywords.join(", ");
  return schema;
}

export function blogPostingSchema(a: ArticleMeta): JsonLd {
  return { ...articleSchema(a), "@type": "BlogPosting" };
}

interface PersonOptions {
  name: string;
  jobTitle: string;
  bio?: string;
  image?: string;
  sameAs?: string[];
  knowsAbout?: string[];
}
export function personSchema(p: PersonOptions): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.jobTitle,
    description: p.bio,
    image: p.image ? absoluteUrl(p.image) : undefined,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    sameAs: p.sameAs,
    knowsAbout: p.knowsAbout,
  };
}

/** Service schema — emit on each situation page. */
export function serviceSchema(s: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${s.url}#service`,
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: { "@type": "City", name: "Philadelphia" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(s.url),
      servicePhone: { "@type": "ContactPoint", telephone: PHONE_E164 },
    },
  };
}

export function contactPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Covenant Homes Philly",
    url: absoluteUrl("/contact"),
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  };
}

export function aboutPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Covenant Homes Philly",
    url: absoluteUrl("/about"),
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  };
}

/** ItemList — for /neighborhoods and /situations index pages. */
export function itemListSchema(items: {
  name: string;
  url: string;
  description?: string;
}[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.name,
      url: absoluteUrl(i.url),
      description: i.description,
    })),
  };
}

/** Inline a JSON-LD script tag. Use in page components. */
export function jsonLdScript(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
