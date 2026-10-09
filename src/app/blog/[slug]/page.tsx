import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Container";
import { getDoc, listDocs } from "@/lib/mdx";
import { blogPostingSchema, jsonLdScript } from "@/lib/schema";
import { MDXContent } from "@/components/MDXContent";
import { ContentHeader } from "@/components/sections/ContentPage";
import { CTABlock } from "@/components/sections/CTABlock";

interface BlogFrontmatter {
  title: string;
  description: string;
  datePublished: string;
  author?: string;
  category?: string;
  keywords?: string[];
}

export function generateStaticParams() {
  return listDocs<BlogFrontmatter>("blog").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc<BlogFrontmatter>("blog", slug);
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
  const doc = getDoc<BlogFrontmatter>("blog", slug);
  if (!doc) return notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            blogPostingSchema({
              title: doc.frontmatter.title,
              description: doc.frontmatter.description,
              slug: `/blog/${slug}`,
              datePublished: doc.frontmatter.datePublished,
              author: doc.frontmatter.author,
            })
          ),
        }}
      />
      <Section>
        <Container width="narrow">
          <ContentHeader
            kicker={
              doc.frontmatter.category ? String(doc.frontmatter.category) : "Philly Seller Guide"
            }
            title={doc.frontmatter.title}
            lede={doc.frontmatter.description}
          />
          <p className="mt-6 text-[var(--color-muted)] text-sm font-[var(--font-mono)] uppercase tracking-[0.1em]">
            <time dateTime={doc.frontmatter.datePublished}>
              {new Date(doc.frontmatter.datePublished).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
            {" · "}Watson Saintsulne
          </p>
          <article className="mt-10">
            <MDXContent source={doc.content} />
          </article>
        </Container>
      </Section>
      <CTABlock utmCampaign={`blog-${slug}`} />
    </>
  );
}
