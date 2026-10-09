import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SituationsGrid } from "@/components/sections/SituationsGrid";
import { CTABlock } from "@/components/sections/CTABlock";
import { SITUATIONS } from "@/content/situations";
import {
  breadcrumbSchema,
  itemListSchema,
  jsonLdScript,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Seller Situations We Handle in Philadelphia",
  description:
    "Inherited, probate, divorce, foreclosure, tired landlord, code violations, tax delinquent, vacant — we handle 8 common Philly seller situations with honest guidance.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            itemListSchema(
              SITUATIONS.map((s) => ({
                name: s.name,
                url: `/situations/${s.slug}`,
                description: s.blurb,
              }))
            ),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Situations", path: "/situations" },
            ]),
          ]),
        }}
      />
      <Section>
        <Container width="narrow">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-700)]">
            Situations we handle
          </p>
          <h1 className="mt-2">Whatever&apos;s going on, we&apos;ve seen it.</h1>
          <p className="mt-5 text-lg text-[var(--color-body)] leading-relaxed">
            We buy Philadelphia houses from sellers navigating hard situations.
            Each page below gives you the honest options — including when
            selling to us is NOT the right call.
          </p>
        </Container>
      </Section>
      <SituationsGrid />
      <CTABlock utmCampaign="situations-index" />
    </>
  );
}
