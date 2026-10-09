import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { NeighborhoodsGrid } from "@/components/sections/NeighborhoodsGrid";
import { CTABlock } from "@/components/sections/CTABlock";
import { NEIGHBORHOODS } from "@/content/neighborhoods";
import {
  breadcrumbSchema,
  itemListSchema,
  jsonLdScript,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Philadelphia Neighborhoods We Buy Houses In",
  description:
    "We buy houses across 10 Philadelphia neighborhoods: Kensington, Fishtown, Frankford, Northeast Philly, Center City, West Philly, South Philly, Germantown, North Philly, Olney.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            itemListSchema(
              NEIGHBORHOODS.map((n) => ({
                name: n.name,
                url: `/neighborhoods/${n.slug}`,
                description: n.blurb,
              }))
            ),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Neighborhoods", path: "/neighborhoods" },
            ]),
          ]),
        }}
      />
      <Section>
        <Container width="narrow">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-700)]">
            Neighborhoods we buy in
          </p>
          <h1 className="mt-2">Philadelphia neighborhoods we know.</h1>
          <p className="mt-5 text-lg text-[var(--color-body)] leading-relaxed">
            We&apos;re Philadelphia locals. Each neighborhood below has its own
            housing stock, its own typical seller situations, and its own
            market dynamics. Click through to the one that fits your property.
          </p>
        </Container>
      </Section>
      <NeighborhoodsGrid />
      <CTABlock utmCampaign="neighborhoods-index" />
    </>
  );
}
