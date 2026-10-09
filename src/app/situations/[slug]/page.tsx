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
import { SITUATIONS } from "@/content/situations";
import { NEIGHBORHOODS } from "@/content/neighborhoods";
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
  jsonLdScript,
} from "@/lib/schema";

export function generateStaticParams() {
  return SITUATIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = SITUATIONS.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = SITUATIONS.find((x) => x.slug === slug);
  if (!s) return notFound();

  const relatedNeighborhoods = s.relatedNeighborhoods
    .map((n) => NEIGHBORHOODS.find((x) => x.slug === n))
    .filter((x): x is NonNullable<typeof x> => !!x);

  const relatedSituations = s.relatedSituations
    .map((sg) => SITUATIONS.find((x) => x.slug === sg))
    .filter((x): x is NonNullable<typeof x> => !!x);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            serviceSchema({
              name: s.headline,
              description: s.blurb,
              serviceType: `Cash home purchase — ${s.name}`,
              url: `/situations/${slug}`,
            }),
            faqPageSchema(s.faqs),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Situations", path: "/situations" },
              { name: s.name, path: `/situations/${slug}` },
            ]),
          ]),
        }}
      />
      <Section>
        <Container width="wide">
          <ContentHeader
            kicker="Seller Situation"
            title={s.h1}
            lede={s.lede}
          />

          <ContentSection kicker="What You're Dealing With">
            {s.empathyIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ContentSection>

          <ContentSection kicker="Your Real Options" heading="Three honest paths">
            <div className="space-y-6 !mt-2">
              <div className="border-l-2 border-[var(--color-border)] pl-5">
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                  Option 1 &middot; {s.threeOptions.listWithAgent.title}
                </h3>
                <p className="mt-2">{s.threeOptions.listWithAgent.body}</p>
              </div>
              <div className="border-l-2 border-[var(--color-border)] pl-5">
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                  Option 2 &middot; {s.threeOptions.fsbo.title}
                </h3>
                <p className="mt-2">{s.threeOptions.fsbo.body}</p>
              </div>
              <div className="border-l-2 border-[var(--color-accent)] pl-5 bg-[var(--color-surface-alt)] -ml-5 p-5">
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                  Option 3 &middot; {s.threeOptions.sellToCovenant.title}
                </h3>
                <p className="mt-2">{s.threeOptions.sellToCovenant.body}</p>
              </div>
            </div>
          </ContentSection>

          <ContentSection kicker="When Covenant Fits" heading="When we make sense">
            <ul className="list-disc pl-6 space-y-2 !mt-0">
              {s.whenWeFit.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </ContentSection>

          <ContentSection kicker="Philly Specifics" heading={s.phillySpecifics.heading}>
            {s.phillySpecifics.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {s.phillySpecifics.checklist && (
              <Callout label="What you'll need">
                <ul className="list-disc pl-5 space-y-1">
                  {s.phillySpecifics.checklist.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Callout>
            )}
          </ContentSection>

          <SectionBreak />

          {relatedNeighborhoods.length > 0 && (
            <ContentSection kicker="Where" heading="Neighborhoods where we see this most">
              <ul className="list-none pl-0 flex flex-wrap gap-x-5 gap-y-2 !mt-0">
                {relatedNeighborhoods.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/neighborhoods/${n.slug}`}
                      className="font-[var(--font-display)] text-lg text-[var(--color-ink)] border-b border-[var(--color-accent)] hover:border-[var(--color-ink)] transition-colors"
                    >
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ContentSection>
          )}

          {relatedSituations.length > 0 && (
            <ContentSection kicker="Related" heading="Situations that often overlap">
              <ul className="list-none pl-0 space-y-3 !mt-0">
                {relatedSituations.map((sg) => (
                  <li key={sg.slug}>
                    <Link
                      href={`/situations/${sg.slug}`}
                      className="inline-flex items-baseline gap-3 text-[var(--color-ink)] hover:text-[var(--color-accent-700)] transition-colors"
                    >
                      <span className="font-[var(--font-display)] text-lg italic text-[var(--color-accent)]">
                        &rarr;
                      </span>
                      <span>
                        <span className="font-[var(--font-display)] text-lg">
                          {sg.name}
                        </span>
                        <span className="block text-[15px] text-[var(--color-muted)]">
                          {sg.blurb}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ContentSection>
          )}
        </Container>
      </Section>

      <FAQ
        items={s.faqs}
        kicker="Situation Questions"
        title={`Questions about ${s.name.toLowerCase()} sales`}
        tone="alt"
      />

      <CTABlock utmCampaign={`situation-${slug}`} />
    </>
  );
}
