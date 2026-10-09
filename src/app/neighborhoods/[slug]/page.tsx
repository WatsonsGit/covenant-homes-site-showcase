import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Container";
import { CTABlock } from "@/components/sections/CTABlock";
import {
  ContentHeader,
  ContentSection,
  Callout,
  SectionBreak,
} from "@/components/sections/ContentPage";
import { FAQ } from "@/components/sections/FAQ";
import { NEIGHBORHOODS } from "@/content/neighborhoods";
import { SITUATIONS } from "@/content/situations";
import {
  breadcrumbSchema,
  localBusinessSchema,
  faqPageSchema,
  jsonLdScript,
} from "@/lib/schema";

export function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = NEIGHBORHOODS.find((x) => x.slug === slug);
  if (!n) return {};
  return {
    title: n.metaTitle,
    description: n.metaDescription,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = NEIGHBORHOODS.find((x) => x.slug === slug);
  if (!n) return notFound();

  const relatedSituations = n.relatedSituations
    .map((s) => SITUATIONS.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => !!x);

  const adjacent = n.adjacentNeighborhoods
    .map((s) => NEIGHBORHOODS.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => !!x);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            localBusinessSchema({ areaServed: n.name }),
            faqPageSchema(n.faqs),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Neighborhoods", path: "/neighborhoods" },
              { name: n.name, path: `/neighborhoods/${slug}` },
            ]),
          ]),
        }}
      />
      <Section>
        <Container width="wide">
          <ContentHeader
            kicker={`Neighborhood · ${n.zipCodes.join(" · ")}`}
            title={n.h1}
            lede={n.lede}
          />

          <ContentSection kicker="Where & What" heading={`About ${n.name}`}>
            {n.localIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Callout label="Area boundaries">
              {n.boundaries}
            </Callout>
          </ContentSection>

          <ContentSection kicker="Housing Stock" heading="What the houses look like">
            {n.housingStock.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ContentSection>

          <ContentSection
            kicker="Who Calls Us"
            heading={`Common seller situations in ${n.name}`}
          >
            {n.sellerPatterns.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ContentSection>

          <ContentSection
            kicker="Offer Math"
            heading={`What we pay in ${n.name}`}
          >
            <Callout label="Typical ARV range for this area">
              <p className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                {n.offerContext.arvRange}
              </p>
            </Callout>
            {n.offerContext.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ContentSection>

          <SectionBreak />

          {relatedSituations.length > 0 && (
            <ContentSection
              kicker="Related"
              heading={`Common situations in ${n.name}`}
            >
              <ul className="list-none pl-0 space-y-3 !mt-0">
                {relatedSituations.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/situations/${s.slug}`}
                      className="inline-flex items-baseline gap-3 text-[var(--color-ink)] hover:text-[var(--color-accent-700)] transition-colors"
                    >
                      <span className="font-[var(--font-display)] text-lg italic text-[var(--color-accent)]">
                        &rarr;
                      </span>
                      <span>
                        <span className="font-[var(--font-display)] text-lg">
                          {s.name}
                        </span>
                        <span className="block text-[15px] text-[var(--color-muted)]">
                          {s.blurb}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ContentSection>
          )}

          {adjacent.length > 0 && (
            <ContentSection kicker="Nearby" heading="Adjacent neighborhoods">
              <ul className="list-none pl-0 flex flex-wrap gap-x-5 gap-y-2 !mt-0">
                {adjacent.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/neighborhoods/${a.slug}`}
                      className="font-[var(--font-display)] text-lg text-[var(--color-ink)] border-b border-[var(--color-accent)] hover:border-[var(--color-ink)] transition-colors"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ContentSection>
          )}
        </Container>
      </Section>

      <FAQ
        items={n.faqs}
        kicker={`${n.name} Questions`}
        title={`Questions we get about ${n.name}`}
        tone="alt"
      />

      <CTABlock utmCampaign={`neighborhood-${slug}`} />
    </>
  );
}
