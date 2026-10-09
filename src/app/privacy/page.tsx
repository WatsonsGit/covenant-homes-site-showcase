import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Covenant Homes Philly collects, uses, and protects your information.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we collect, use, and protect your information."
      todoNote="Draft full CCPA + GDPR compliant privacy policy. Include SMS consent / TCPA language, cookie notice, Replica data flow."
    />
  );
}
