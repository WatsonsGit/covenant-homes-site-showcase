import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";
import { CTABlock } from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "Seller Testimonials",
  description:
    "Real stories from Philly sellers who worked with Covenant Homes. Names, neighborhoods, and outcomes.",
};

export default function Page() {
  return (
    <>
      <PagePlaceholder
        eyebrow="Testimonials"
        title="What sellers say after closing."
        intro="Real quotes, real names, real neighborhoods. Nothing stock."
        todoNote="Watson to paste 6+ real testimonials into src/content/testimonials.json. Render each with Review schema."
      />
      <CTABlock utmCampaign="testimonials" />
    </>
  );
}
