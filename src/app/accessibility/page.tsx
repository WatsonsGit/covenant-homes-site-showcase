import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Covenant Homes Philly is committed to WCAG 2.1 AA accessibility.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Accessibility Statement"
      intro="We're committed to making this site usable for everyone, and to meeting WCAG 2.1 AA standards."
      todoNote="Draft full accessibility statement with conformance level, contact method for a11y issues, ongoing review commitment."
    />
  );
}
