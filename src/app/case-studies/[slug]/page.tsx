import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Container";
import { listDocs, getDoc } from "@/lib/mdx";
import {
  articleSchema,
  breadcrumbSchema,
  jsonLdScript,
} from "@/lib/schema";
import { MDXContent } from "@/components/MDXContent";
import { ContentHeader } from "@/components/sections/ContentPage";
import { CTABlock } from "@/components/sections/CTABlock";

interface CaseStudyFrontmatter {
  title: string;
  description: string;
  address?: string;
  neighborhood?: string;
  datePublished: string;
  purchasePrice?: string;
  closeTime?: string;
}

export function generateStaticParams() {
  return listDocs<CaseStudyFrontmatter>("case-studies").map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc<CaseStudyFrontmatter>("case-studies", slug);
  if (!doc) return {};
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc<CaseStudyFrontmatter>("case-studies", slug);
  if (!doc) return notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            articleSchema({
              title: doc.frontmatter.title,
              description: doc.frontmatter.description,
              slug: `/case-studies/${slug}`,
              datePublished: doc.frontmatter.datePublished,
            }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Case Studies", path: `/case-studies/${slug}` },
              { name: doc.frontmatter.title, path: `/case-studies/${slug}` },
            ]),
          ]),
        }}
      />
      <Section>
        <Container width="narrow">
          <ContentHeader
            kicker={`Case Study · ${doc.frontmatter.neighborhood ?? "Philadelphia"}`}
            title={doc.frontmatter.title}
            lede={doc.frontmatter.description}
          />
          <p className="mt-6 text-[var(--color-muted)] text-sm font-[var(--font-mono)] uppercase tracking-[0.1em]">
            Closed{" "}
            <time dateTime={doc.frontmatter.datePublished}>
              {new Date(doc.frontmatter.datePublished).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long" }
              )}
            </time>
          </p>
          <article className="mt-10">
            <MDXContent source={doc.content} />
          </article>
        </Container>
      </Section>
      <CTABlock utmCampaign={`case-study-${slug}`} />
    </>
  );
}
