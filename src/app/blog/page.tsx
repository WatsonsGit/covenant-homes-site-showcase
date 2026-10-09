import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { listDocs } from "@/lib/mdx";

interface BlogFrontmatter {
  title: string;
  description: string;
  datePublished: string;
  category?: string;
}

export const metadata: Metadata = {
  title: "Blog — Philly Real Estate Guidance",
  description:
    "Honest guides for Philly sellers: inherited homes, code violations, cash offers, probate, and how wholesalers really price houses.",
};

export default function Page() {
  const posts = listDocs<BlogFrontmatter>("blog").sort(
    (a, b) =>
      new Date(b.frontmatter.datePublished).getTime() -
      new Date(a.frontmatter.datePublished).getTime()
  );

  return (
    <Section>
      <Container width="narrow">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-700)]">
          Blog
        </p>
        <h1 className="mt-2 mb-8">Honest guides for Philly sellers.</h1>
        {posts.length === 0 ? (
          <div className="p-4 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] text-sm text-[var(--color-muted)]">
            <strong className="text-[var(--color-ink)]">TODO (Phase 2):</strong>{" "}
            4 launch posts per SITE-SPEC.md §3.10 written into{" "}
            <code>src/content/blog/*.mdx</code>.
          </div>
        ) : (
          <ul className="space-y-6">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group">
                  <h2 className="text-2xl group-hover:text-[var(--color-primary)] transition-colors">
                    {p.frontmatter.title}
                  </h2>
                  <p className="mt-2 text-[var(--color-body)]">
                    {p.frontmatter.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
}
