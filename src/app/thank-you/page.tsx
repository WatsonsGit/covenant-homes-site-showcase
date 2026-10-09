import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/utils";
import { ThankYouTracking } from "./ThankYouTracking";

export const metadata: Metadata = {
  title: "Thanks — We'll be in touch within 24 hours",
  description:
    "We received your information. Here's what happens next, and how to reach us in the meantime.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <ThankYouTracking />
      <Section>
        <Container width="narrow">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-700)]">
            We got it.
          </p>
          <h1 className="mt-2">Thanks — we&rsquo;ll be in touch within 24 hours.</h1>
          <p className="mt-5 text-lg text-[var(--color-body)] leading-relaxed">
            Watson will call you within 24 hours &mdash; usually sooner.
            If you&apos;d rather talk now, call{" "}
            <a
              href={`tel:${PHONE_E164}`}
              className="text-[var(--color-primary)] font-medium underline underline-offset-4"
            >
              {PHONE_DISPLAY}
            </a>
            .
          </p>

          <h2 className="mt-10">What happens next</h2>
          <ol className="mt-4 space-y-3 list-decimal pl-5 text-[var(--color-body)]">
            <li>We got your info (that just happened).</li>
            <li>
              Watson looks at your house &mdash; recent sales nearby, the
              condition, and what repairs would cost.
            </li>
            <li>
              You get a written offer in 24 hours. If we&rsquo;re not the
              right buyer, we&rsquo;ll tell you that and point you
              somewhere else.
            </li>
            <li>
              If you like the offer, you sign it online through DocuSign.
            </li>
            <li>
              We send it to Act Land Services, our title company. They set
              up the closing and you pick the date.
            </li>
          </ol>

          <div className="mt-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-5">
            <h3 className="text-lg">A note about Tracey Cooper</h3>
            <p className="mt-2 text-[var(--color-body)] leading-relaxed text-sm">
              You&rsquo;ll get a confirmation email from Tracey Cooper.
              Tracey is not a human &mdash; she&rsquo;s an AI that
              handles scheduling and paperwork coordination. She always
              tells you she&rsquo;s an AI. Watson personally makes every
              offer, handles every call, and sits with you at closing.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="text-[var(--color-primary)] font-medium underline underline-offset-4"
            >
              Read the blog →
            </Link>
            <Link
              href="/testimonials"
              className="text-[var(--color-primary)] font-medium underline underline-offset-4"
            >
              See past closings →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
