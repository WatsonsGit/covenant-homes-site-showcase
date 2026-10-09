import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-[var(--font-display)] mt-12 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-[var(--font-display)] mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[17px] leading-[1.7] text-[var(--color-body)] my-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 space-y-2 my-5 text-[17px] leading-[1.7] text-[var(--color-body)]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 space-y-2 my-5 text-[17px] leading-[1.7] text-[var(--color-body)]" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-[var(--color-ink)] border-b-2 border-[var(--color-accent)] hover:border-[var(--color-ink)] transition-colors"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 border-[var(--color-accent)] bg-[var(--color-surface-alt)] p-5 my-6 font-[var(--font-display)] italic text-lg text-[var(--color-ink)]"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[var(--color-ink)]" {...props} />
  ),
  hr: () => (
    <hr className="border-0 border-t border-[var(--color-accent)] my-10 max-w-[6rem] mx-auto" />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
