import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { BRAND, PHONE_DISPLAY, PHONE_E164 } from "@/lib/utils";
import { contactPageSchema, jsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Covenant Homes Philly",
  description:
    "Call, text, or email. We respond within 24 hours. Office at 1700 Market St Suite 1005, Philadelphia PA 19103.",
};

export default function Page() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(contactPageSchema()) }}
    />
    <Section>
      <Container width="narrow">
        <h1 className="mb-6">Get in touch.</h1>
        <p className="text-lg text-[var(--color-body)] leading-relaxed mb-8">
          The fastest way to reach us is the phone. We answer during business
          hours and return voicemails within a few hours. If you&apos;d rather
          type, email works too.
        </p>
        <div className="rounded-xl border border-[var(--color-border)] bg-white p-6 space-y-4">
          <div>
            <p className="text-sm text-[var(--color-muted)]">Phone</p>
            <a
              href={`tel:${PHONE_E164}`}
              className="text-2xl font-[var(--font-display)] text-[var(--color-primary)]"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="text-sm text-[var(--color-muted)]">Email</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-lg text-[var(--color-primary)]"
            >
              {BRAND.email}
            </a>
          </div>
          <div>
            <p className="text-sm text-[var(--color-muted)]">Office</p>
            <address className="not-italic text-[var(--color-body)]">
              {BRAND.address.street}
              <br />
              {BRAND.address.city}, {BRAND.address.region}{" "}
              {BRAND.address.postalCode}
            </address>
          </div>
          <div>
            <p className="text-sm text-[var(--color-muted)]">Hours</p>
            <p className="text-[var(--color-body)]">
              Monday–Friday, 9am–6pm ET. We return weekend messages Monday morning.
            </p>
          </div>
          {/* TODO: embedded Google Map + short contact form (name, email, message) */}
        </div>
      </Container>
    </Section>
    </>
  );
}
