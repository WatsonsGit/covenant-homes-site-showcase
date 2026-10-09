import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OfferCalculation } from "@/components/sections/OfferCalculation";
import { NeighborhoodsGrid } from "@/components/sections/NeighborhoodsGrid";
import { SituationsGrid } from "@/components/sections/SituationsGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhenNotToSellTeaser } from "@/components/sections/WhenNotToSellTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { CTABlock } from "@/components/sections/CTABlock";
import { faqPageSchema, jsonLdScript } from "@/lib/schema";
import testimonialsData from "@/content/testimonials.json";

const HOME_FAQ = [
  {
    question: "How fast can you close on my house?",
    answer:
      "Most of our deals close in 30 to 60 days from the day we sign the paperwork. You pick the date that works for you. If you need more time, we'll wait. If you need to close fast, we can usually close in about 2 weeks. All closings happen at Act Land Services, our title company.",
  },
  {
    question: "How do you come up with your offer?",
    answer:
      "We use the same math every cash buyer uses. We figure out what your house will sell for after it's fixed up. We take 70% of that number. We subtract repair costs. We subtract our fee. What's left is your offer. In plain terms, most offers land between 25% and 55% of what the house is worth fixed up. Houses that need a lot of work sit at the low end.",
  },
  {
    question: "Do I have to pay any fees?",
    answer:
      "No. You don't write us a check. No commission, no closing fees charged to you, no inspection fees. The usual seller costs like back taxes or liens get paid out of the sale price at closing, but nothing comes out of your pocket.",
  },
  {
    question: "What if my house needs a lot of work?",
    answer:
      "That's usually who we help. We buy houses as-is, in any condition. You don't have to clean it, fix anything, or even empty it out. Leave behind what you don't want. We'll deal with it.",
  },
  {
    question: "What if there are tenants in the house?",
    answer:
      "We buy houses with tenants in them all the time. Send us the lease and we'll work it into the offer. You don't have to evict anyone. We'll handle the tenant relationship after closing.",
  },
  {
    question: "Are you licensed?",
    answer:
      "We're a Philly-based real estate investment company. We've been buying houses in Philadelphia since 2021. Every closing goes through Act Land Services LLC, a licensed Pennsylvania title company that handles all the paperwork and wires the money.",
  },
  {
    question: "What's the catch?",
    answer:
      "Our offers are below what you'd get on the open market. That's because we're taking on the repairs, the holding costs, and the risk. If your house is in good shape and you have 4 to 6 months, list it with an agent — you'll get more money. We'll tell you that straight on the phone.",
  },
  {
    question: "Can I back out if I change my mind?",
    answer:
      "Yes. Pennsylvania contracts include contingency periods. If you back out inside that window for a real reason, you walk away clean with no penalty. We're not going to chain you to a deal you don't want.",
  },
];

interface Testimonial {
  name: string;
  neighborhood: string;
  quote: string;
  outcome: string;
  photo?: string;
}

export default function HomePage() {
  const testimonials = (testimonialsData.testimonials as Testimonial[]) ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(faqPageSchema(HOME_FAQ)),
        }}
      />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <OfferCalculation />
      <NeighborhoodsGrid />
      <SituationsGrid />
      <TestimonialsSection items={testimonials} />
      <WhenNotToSellTeaser />
      <FAQ items={HOME_FAQ} tone="alt" />
      <CTABlock utmCampaign="home-bottom" />
    </>
  );
}
