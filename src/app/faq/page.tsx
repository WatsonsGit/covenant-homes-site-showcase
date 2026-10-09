import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { CTABlock } from "@/components/sections/CTABlock";
import { FAQ } from "@/components/sections/FAQ";
import { ContentHeader } from "@/components/sections/ContentPage";
import { faqPageSchema, jsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ — Selling a Philly House for Cash",
  description:
    "25 real questions from Philly home sellers, answered straight. How we calculate offers, how fast we close, fees, tenants, probate, code violations, and more.",
};

const ALL_FAQS = [
  // Process & Timing
  {
    question: "How fast can you close on my house?",
    answer:
      "Most closings happen 30 to 60 days after you sign the offer. You pick the date. If you need to close faster, we can usually do it in about 2 weeks. If you need more time to move out, we'll wait.",
  },
  {
    question: "How long does the whole thing take, from first call to money?",
    answer:
      "About 5 to 9 weeks total. We call you the day you submit your address. You get a written offer in 24 hours. If you accept, you sign online within a day or two. Then 30 to 60 days to close. On close day, the money is wired to your account.",
  },
  {
    question: "Do I have to meet you in person?",
    answer:
      "Only at closing, and even that can sometimes be handled by mail. Watson prefers to walk through the house with you before sending the offer, but if you're out of state or don't want a walkthrough, we can work with photos and video.",
  },
  {
    question: "Do I need to clean the house or move stuff out first?",
    answer:
      "No. Leave behind anything you don't want. We'll deal with it after closing. Clothes, furniture, trash, junk in the basement — none of it's a problem.",
  },
  // Offers
  {
    question: "How do you come up with your offer?",
    answer:
      "We take what your house will sell for fixed up, multiply by 70%, subtract the repair cost, and subtract our fee. What's left is the offer. Most offers land at 25% to 55% of the fixed-up value. The more work a house needs, the lower the offer.",
  },
  {
    question: "Why so much lower than what Zillow says?",
    answer:
      "Zillow shows the retail price — what a house sells for in move-in condition on the open market. Our offer is the cash, as-is, fast-close price. That's a different number. It's always lower than retail. If your house is move-in ready and you can wait, list it with an agent instead.",
  },
  {
    question: "Can I negotiate the offer?",
    answer:
      "You can try, and sometimes we adjust. If we missed something about the house, we'll move the number. If you think our repair estimate is too high, we'll go through it with you. But the 70% multiplier is fixed — that's not a negotiation point.",
  },
  {
    question: "What if I have a second offer from another buyer?",
    answer:
      "Tell us. We'll be honest about whether we can match. Usually, if another legitimate wholesaler beat our offer, their number is real and we can't match it. We'll tell you to take their deal.",
  },
  // Fees & Money
  {
    question: "Do I pay any fees?",
    answer:
      "No. You don't write us a check. No commission, no closing fees charged to you, no inspection fees. Normal seller costs like back taxes or water bills get paid out of the sale price at closing — nothing comes out of your pocket.",
  },
  {
    question: "Who pays for the title search, recording, transfer tax?",
    answer:
      "Covenant and Act Land Services handle the title-related costs on our side. You're responsible for normal seller costs — realty transfer tax (1% state, 3.278% city in Philly), which gets deducted from your proceeds at closing.",
  },
  {
    question: "What if I owe more on the mortgage than you're offering?",
    answer:
      "That's called being 'underwater.' If the mortgage is higher than our offer, the deal usually can't close with us — there's not enough money in the sale to pay off the mortgage. You'd need a short sale, which is a different process. We can point you to people who handle those.",
  },
  // Condition & Situation
  {
    question: "What if my house needs a lot of work?",
    answer:
      "That's usually who we buy from. We buy as-is. Holes in walls, old heating systems, basement water, code violations, no kitchen, squirrels in the attic — we've seen all of it. You don't fix anything. We deal with it after we buy.",
  },
  {
    question: "What if there are tenants in the house?",
    answer:
      "We buy houses with tenants in them. Send us the lease. We buy the house subject to the existing lease and handle the tenant relationship after closing. You don't have to evict anyone.",
  },
  {
    question: "What if the house is in probate?",
    answer:
      "We handle probate deals all the time — 14 of our 55+ closed deals involved probate. You'll need Letters of Administration or Letters Testamentary from the Philadelphia Register of Wills. Once the court names you executor or administrator, you can sell. We work with your probate lawyer directly.",
  },
  {
    question: "What if I'm behind on property taxes?",
    answer:
      "Not a problem for us. We buy houses with back taxes all the time. The unpaid taxes get paid off at closing from the sale price. Same goes for water bills, L&I violations, or any liens on the house.",
  },
  {
    question: "What if there are code violations from L&I?",
    answer:
      "We buy houses with L&I code violations. We've closed on houses with 20+ open violations. The violations transfer with the house, and we take responsibility for clearing them. You walk away clean.",
  },
  {
    question: "What if I'm in foreclosure?",
    answer:
      "If there's still time before the sheriff sale, we might be able to help. We need to know the sale date and the payoff amount on your mortgage. If the numbers work, we can close fast. If they don't, we'll tell you other options — including calling the Save Your Home Philly Hotline at 215-334-HOME.",
  },
  // About Us
  {
    question: "Are you licensed?",
    answer:
      "We're a Pennsylvania-registered real estate investment company. We've been buying in Philly since 2021. Every closing runs through Act Land Services LLC, a licensed Pennsylvania title company at 2901 South 19th Street.",
  },
  {
    question: "Who actually buys the house — you, or someone else?",
    answer:
      "Most of the time, Covenant Homes Philly buys it directly. Sometimes we partner with another investor we trust to close the deal. Either way, the seller signs with us, closes at Act Land Services, and gets paid. The mechanism doesn't change your experience.",
  },
  {
    question: "What's the catch?",
    answer:
      "Our offer is lower than retail. That's the catch. We're paying for speed, certainty, and taking on the repairs. If your house is in good shape and you have 4 to 6 months, you'll net more with an agent. We'll tell you that straight.",
  },
  {
    question: "How do I know you're legit?",
    answer:
      "Look us up. We've closed 55+ houses in Philly since 2021. Act Land Services has handled every closing — you can verify with them at 215-595-2220. Watson is in Center City and meets with sellers in person. And we have a whole page on this site (When Not To Sell To Us) explaining when we're the wrong buyer.",
  },
  {
    question: "Can I back out after I sign?",
    answer:
      "Yes, inside the contingency period. Pennsylvania contracts include windows where either side can walk away for a real reason without penalty. We won't sue you or chase you. We'd rather not close than close with someone who doesn't want to sell.",
  },
  // FinCEN & Compliance
  {
    question: "What's FinCEN and why do you mention it?",
    answer:
      "FinCEN is the Financial Crimes Enforcement Network. It's a federal rule that requires title companies to report who ultimately owns a company that's buying real estate for cash. Act Land Services files that paperwork for us. It's no extra work for you — we just have to say it.",
  },
  {
    question: "Is this Fair Housing compliant?",
    answer:
      "Yes. We comply with the Fair Housing Act and don't discriminate based on race, color, national origin, religion, sex, familial status, or disability. We buy from anyone who owns a house in Philadelphia and wants to sell for cash.",
  },
  {
    question: "Do I have to sign up for text messages?",
    answer:
      "No. We ask for your permission to text you on the form, but you can say no. If you say yes, you can reply STOP anytime and we stop texting. We never sell your phone number.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(faqPageSchema(ALL_FAQS)),
        }}
      />
      <Section>
        <Container width="wide">
          <ContentHeader
            kicker="Frequently Asked"
            title={<>25 real questions, answered straight.</>}
            lede="Every question on this page has been asked by a real Philly home seller on the phone with Watson. No marketing-speak, no legalese. If your question isn't here, call us."
          />
        </Container>
      </Section>
      <FAQ items={ALL_FAQS} kicker="Answered" title="" tone="alt" />
      <CTABlock utmCampaign="faq" />
    </>
  );
}
