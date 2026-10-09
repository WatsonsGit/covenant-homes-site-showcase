import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Section>
      <Container width="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-700)]">
          404
        </p>
        <h1 className="mt-2">Page not found.</h1>
        <p className="mt-4 text-[var(--color-body)]">
          The link you followed doesn&rsquo;t exist here. Try the homepage.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-[var(--color-primary)] font-medium underline underline-offset-4"
        >
          Back to home →
        </Link>
      </Container>
    </Section>
  );
}
