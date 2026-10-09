import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { CTABlock } from "@/components/sections/CTABlock";
import {
  ContentHeader,
  ContentSection,
  Callout,
  SectionBreak,
} from "@/components/sections/ContentPage";

export const metadata: Metadata = {
  title: "When You Shouldn't Sell Your House to Us",
  description:
    "Honest advice from a Philly cash buyer: four situations where we're the wrong call. Who to talk to instead, and why we'll tell you no when we should.",
};

export default function Page() {
  return (
    <>
      <Section>
        <Container width="wide">
          <ContentHeader
            kicker="When Not To Sell To Us"
            title={<>When we&rsquo;re the wrong buyer for your house.</>}
            lede="We only stay in business long-term if we're straight with people. So here are four situations where we're probably not the right call — and who you should talk to instead."
          />

          <ContentSection heading="1. Your house is in good shape and you can wait">
            <p>
              If your house is clean, the roof is new-ish, the kitchen and
              bathrooms aren&rsquo;t falling apart, and you can wait 3 to 6
              months to sell, list it with a regular real estate agent.
              You&rsquo;ll net more money. Not a little more &mdash; a lot
              more. On a $200,000 Philly rowhome, the difference between
              our offer and a retail sale can be $40,000 to $60,000 in your
              pocket.
            </p>
            <p>
              A good agent will list it, market it, hold open houses, take
              offers, and negotiate. You&rsquo;ll pay about 6% in
              commissions. You&rsquo;ll still walk away with more money
              than we can pay.
            </p>
            <Callout label="Who to call instead">
              Ask your neighbors who they used. Look at recent sold signs
              on your block and call those agents. Interview two or three
              before you pick one. If you want, ask us &mdash; we know
              honest Philly agents who work our same neighborhoods.
            </Callout>
          </ContentSection>

          <ContentSection heading="2. You need maximum dollar and timing is flexible">
            <p>
              Our offers are cash, fast, and as-is. That speed and
              simplicity costs money. If you don&rsquo;t need speed or
              simplicity &mdash; if you can wait for the right buyer and
              sit through showings &mdash; we&rsquo;re not your best bet.
            </p>
            <p>
              If you have the cash to fix up the house before selling,
              that&rsquo;s usually the best play of all. A $30,000
              renovation on the right Philly rowhome can add $60,000 to
              $80,000 to the sale price. The math can work if you have the
              money and the stomach for a 3-month project.
            </p>
          </ContentSection>

          <ContentSection heading="3. You want to stay in the house">
            <p>
              Sometimes people call us because they&rsquo;re behind on the
              mortgage or taxes and they think selling is the only way out.
              Sometimes it is. Sometimes it isn&rsquo;t.
            </p>
            <p>
              If you want to stay, look at these options first:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>HELOC or cash-out refinance</strong> &mdash; pulls
                equity out without selling. Works if you have good credit
                and equity in the house.
              </li>
              <li>
                <strong>Reverse mortgage</strong> &mdash; works if
                you&rsquo;re 62 or older. Lets you stay in the house and
                pull out cash.
              </li>
              <li>
                <strong>Loan modification</strong> &mdash; if you&rsquo;re
                behind on the mortgage, call your lender before you call
                us. Many will work with you.
              </li>
              <li>
                <strong>Philly&rsquo;s Save Your Home Philly Hotline</strong>
                {" "}(215-334-HOME) &mdash; free housing counselors who can
                walk you through options.
              </li>
            </ul>
            <p>
              Sell your house to us only if you&rsquo;ve thought about
              staying and decided selling is actually what you want.
            </p>
          </ContentSection>

          <ContentSection heading="4. You already have an offer from another wholesaler">
            <p>
              If another wholesaler has already sent you an offer and
              you&rsquo;ve shaken hands on it, honor it. Don&rsquo;t shop
              their number against ours.
            </p>
            <p>
              The wholesaler community in Philly is small. We all know each
              other. When sellers shop one wholesaler&rsquo;s offer against
              another, it poisons the well. Wholesalers stop trusting
              sellers, offers get lower across the board, and the whole
              thing turns into a race to the bottom.
            </p>
            <p>
              If the other wholesaler&rsquo;s offer is real and fair, take
              it. If you&rsquo;re worried they&rsquo;re not legit, that&rsquo;s
              a different problem &mdash; ask us about that and we&rsquo;ll
              tell you the red flags to look for.
            </p>
          </ContentSection>

          <SectionBreak />

          <ContentSection heading="When we DO make sense">
            <p>
              We&rsquo;re the right call when:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The house needs real work and you don&rsquo;t want to deal
                with contractors.
              </li>
              <li>
                You need to close in 2 to 8 weeks, not 4 to 6 months.
              </li>
              <li>
                You inherited a house and the family doesn&rsquo;t want the
                ongoing burden of maintenance, taxes, or insurance.
              </li>
              <li>
                You&rsquo;re tired of being a landlord and the tenants are
                a headache you want gone.
              </li>
              <li>
                You&rsquo;re going through a divorce and both parties want
                a clean, fast split.
              </li>
              <li>
                The house has code violations or back taxes you can&rsquo;t
                clear.
              </li>
              <li>
                The house is vacant and you don&rsquo;t want to worry about
                it anymore.
              </li>
            </ul>
          </ContentSection>

          <ContentSection heading="Why we tell people no">
            <p>
              A lot of wholesalers will take any deal they can get. They
              make the offer, sign the contract, and figure it out later.
              If the seller is unhappy, they don&rsquo;t care &mdash; the
              deal&rsquo;s done.
            </p>
            <p>
              We&rsquo;re trying to build something different. Watson has
              closed 55+ houses in Philly since 2021. Most of our deals
              come from referrals from past sellers. That only works if
              those past sellers felt good about the deal and told their
              friends.
            </p>
            <p>
              So if we&rsquo;re the wrong buyer for you, we&rsquo;ll tell
              you. Then maybe you&rsquo;ll tell your cousin or your
              neighbor, and they&rsquo;ll call us when the time&rsquo;s
              right for them.
            </p>
          </ContentSection>
        </Container>
      </Section>
      <CTABlock utmCampaign="when-not-to-sell" />
    </>
  );
}
