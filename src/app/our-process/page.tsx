import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { CTABlock } from "@/components/sections/CTABlock";
import { OfferCalculation } from "@/components/sections/OfferCalculation";
import {
  ContentHeader,
  ContentSection,
  Callout,
  SectionBreak,
} from "@/components/sections/ContentPage";

export const metadata: Metadata = {
  title: "Our Process — How We Calculate Your Cash Offer",
  description:
    "We show the whole formula. (ARV × 70%) − Repairs − Fee. Most offers land at 25–55% of what your house is worth fixed up. Real Philly deal examples with real numbers.",
};

export default function Page() {
  return (
    <>
      <Section>
        <Container width="wide">
          <ContentHeader
            kicker="The Offer Formula"
            title={<>How we come up with the number.</>}
            lede="We use the same math every cash buyer uses. The only difference is we show you the work. No mystery, no tricks, no 'trust us, this is our offer.' Here's exactly how the number gets built."
          />

          <ContentSection heading="The formula, line by line">
            <p>
              <strong className="text-[var(--color-ink)]">
                Offer = (ARV &times; 70%) &minus; Repairs &minus; Fee
              </strong>
            </p>
            <p>
              That&rsquo;s the whole thing. Every piece of it has a reason.
              Let&rsquo;s go through it.
            </p>
          </ContentSection>

          <ContentSection heading="ARV — what your house will sell for fixed up">
            <p>
              ARV stands for After-Repair Value. That&rsquo;s what your
              house will sell for on the open market once it&rsquo;s been
              fixed up, painted, and staged.
            </p>
            <p>
              We figure out ARV by pulling recent sales of similar houses
              within half a mile of yours. Same size, same bedroom count,
              same general condition after fix-up. If your block has 5
              houses that sold in the last 6 months for around $220,000
              each after renovation, that&rsquo;s your ARV.
            </p>
            <p>
              We don&rsquo;t guess this number. We don&rsquo;t lowball it
              to pad our margin. If we&rsquo;re wrong about ARV, we&rsquo;re
              the ones who lose money on the resale. So we&rsquo;re careful.
            </p>
          </ContentSection>

          <ContentSection heading="The 70% — why that number">
            <p>
              The 70% multiplier is standard across the real estate
              investment world. It covers the costs we eat on the back end
              of the deal:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Holding costs</strong> &mdash; taxes, insurance,
                utilities, and debt service while we own the house (usually
                4 to 6 months).
              </li>
              <li>
                <strong>Resale agent commissions</strong> &mdash; about 6%
                when we sell the fixed-up house.
              </li>
              <li>
                <strong>Closing costs</strong> &mdash; title, transfer tax,
                recording, and other fees on both ends of the deal.
              </li>
              <li>
                <strong>Contractor overruns</strong> &mdash; repair budgets
                always go over. 70% builds in a cushion.
              </li>
              <li>
                <strong>Profit</strong> &mdash; we need to make something
                for taking on the risk. Otherwise we don&rsquo;t stay open.
              </li>
            </ul>
            <p>
              Why not 75%? Or 65%? Because 70% is where the math has worked
              for wholesalers in Philly markets for years. We didn&rsquo;t
              invent it and we can&rsquo;t bend it much.
            </p>
          </ContentSection>

          <ContentSection heading="Repairs — the real number">
            <p>
              This is where most sellers get surprised. If a house needs a
              new roof, a new HVAC system, kitchen and bath gut, plumbing
              work, and electrical updates, the repair bill can run
              $40,000 to $80,000 on a Philly rowhome.
            </p>
            <p>
              We use real contractor estimates, not made-up numbers. Watson
              walks through the repair list with you on the phone so you
              can see where every dollar goes. If you think our repair
              number is too high, tell us. Sometimes we adjust. Sometimes
              the number is the number.
            </p>
          </ContentSection>

          <ContentSection heading="Fee — ours, and disclosed">
            <p>
              Our fee is typically 8% to 12% of the purchase price. It goes
              on the offer sheet. You see it before you sign anything.
            </p>
            <p>
              The fee covers our work: researching the house, making the
              offer, coordinating with the title company, showing up to
              closing, and handling problems that come up during the deal.
            </p>
          </ContentSection>

          <SectionBreak />

          <ContentSection heading="A real deal from West Philly">
            <p>
              Here&rsquo;s what the math looked like on a recent house we
              closed on in West Philly. Details anonymized to protect the
              seller&rsquo;s privacy.
            </p>
            <Callout label="Ledger No. 02 · West Philly Rowhome · Summer 2025">
              <dl className="space-y-2 font-[var(--font-mono)] text-[14px] nums-tabular">
                <div className="flex justify-between">
                  <dt>ARV (fixed-up value)</dt>
                  <dd>$195,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt>&times; 70%</dt>
                  <dd>$136,500</dd>
                </div>
                <div className="flex justify-between">
                  <dt>&minus; Repairs</dt>
                  <dd>&minus;$52,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt>&minus; Fee</dt>
                  <dd>&minus;$7,000</dd>
                </div>
                <div className="flex justify-between pt-2 border-t border-[var(--color-border)] font-semibold text-[var(--color-ink)]">
                  <dt>Offer to seller</dt>
                  <dd>$77,500</dd>
                </div>
                <div className="flex justify-between text-[var(--color-muted)] text-[12px] pt-1">
                  <dt>As % of ARV</dt>
                  <dd>~40%</dd>
                </div>
              </dl>
            </Callout>
            <p>
              The seller in that deal was an estate executor. She had
              inherited the house, it was empty, and she lived out of state.
              She could&rsquo;ve listed it with a real estate agent and
              probably gotten $120,000 to $140,000 after paying to clean it
              out, fix the roof, and sit through 4 months of showings. She
              took our $77,500 cash offer because the speed was worth more
              to her than the extra $40,000. That&rsquo;s her call, not
              ours.
            </p>
          </ContentSection>

          <ContentSection heading="When our offers land higher">
            <p>
              If a house only needs $10,000 of work, not $50,000, the
              repair subtraction is much smaller. So the offer lands higher
              &mdash; sometimes 50% to 55% of ARV. Good-condition houses
              with nothing more than paint and cleanout work get offers in
              that range.
            </p>
            <p>
              If the house is clean, updated, and move-in ready, though,
              we&rsquo;re not the right buyer. List it with an agent.
              You&rsquo;ll clear 10% to 20% more than what we can offer.
            </p>
          </ContentSection>

          <ContentSection heading="What we don't do">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We don&rsquo;t pad repair numbers to drop the offer. Every
                repair line is real contractor pricing.
              </li>
              <li>
                We don&rsquo;t sandbag ARV. Lowballing ARV costs us money
                on the resale, so we don&rsquo;t.
              </li>
              <li>
                We don&rsquo;t hide the fee. It&rsquo;s on the offer sheet
                in black and white.
              </li>
              <li>
                We don&rsquo;t change the offer after you&rsquo;ve signed
                unless we find something material we didn&rsquo;t know about
                (like the house is condemned or the roof caved in since our
                walkthrough).
              </li>
            </ul>
          </ContentSection>

          <ContentSection heading="FinCEN and title company disclosure">
            <p>
              Every real estate cash transaction in Philly has to comply
              with FinCEN (the Financial Crimes Enforcement Network) rules
              on reporting beneficial ownership. Act Land Services, our
              title partner, handles that paperwork for us.
            </p>
            <p>
              You don&rsquo;t have to do anything different. We just have
              to say it, and Act Land has to file it. No extra cost to you.
            </p>
          </ContentSection>
        </Container>
      </Section>
      <OfferCalculation />
      <CTABlock utmCampaign="our-process" />
    </>
  );
}
