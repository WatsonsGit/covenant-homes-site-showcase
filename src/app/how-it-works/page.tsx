import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTABlock } from "@/components/sections/CTABlock";
import {
  ContentHeader,
  ContentSection,
  Callout,
  SectionBreak,
} from "@/components/sections/ContentPage";

export const metadata: Metadata = {
  title: "How It Works — Selling Your Philly House to Covenant",
  description:
    "Three simple steps. Tell us about your house, get a written cash offer in 24 hours, pick your close date. No fees, no pressure, no surprises.",
};

export default function Page() {
  return (
    <>
      <Section>
        <Container width="wide">
          <ContentHeader
            kicker="How It Works"
            title={<>Three steps. No surprises.</>}
            lede="From the first time you fill out the form to the day the money hits your account, here's exactly what happens and what we need from you at each step."
          />

          <ContentSection heading="Step 1: Tell us about the house">
            <p>
              You send us the address. You tell us what&rsquo;s going on.
              That&rsquo;s it. It takes about a minute.
            </p>
            <p>
              You don&rsquo;t have to tell us every detail. You don&rsquo;t
              have to clean anything up or let us in. You don&rsquo;t even
              have to commit to selling. This first step is just so we know
              the house exists and what you&rsquo;re dealing with.
            </p>
            <p>
              After you submit, Watson gets a notification. Tracey Cooper,
              our AI transactions coordinator, sends you a short email that
              confirms we got your message. Tracey always tells you
              she&rsquo;s an AI. Watson takes it from there himself.
            </p>
            <Callout label="What happens in your inbox">
              You&rsquo;ll get one confirmation email right away. That email
              comes from Tracey. She tells you what to expect next and who
              will call you. No spam, no follow-up drip, no selling you
              something else.
            </Callout>
          </ContentSection>

          <ContentSection heading="Step 2: We send you a cash offer">
            <p>
              Within 24 hours, you get a written offer from Watson. Most of
              the time it comes faster than that.
            </p>
            <p>
              Before we send it, we do our homework. We look at what similar
              houses sold for nearby. We estimate what it would cost a
              contractor to fix the place up. We work our formula and we
              come up with a number. We put all of that on the offer sheet
              so you can see exactly where the number came from.
            </p>
            <p>
              If our number doesn&rsquo;t make sense for your situation, we
              tell you straight. Sometimes listing with a regular real
              estate agent will get you more money. Sometimes another
              wholesaler can pay more than we can. We&rsquo;ll say so.
              That&rsquo;s the only way we stay in business long-term in
              Philly.
            </p>
          </ContentSection>

          <ContentSection heading="Step 3: You pick the close date">
            <p>
              If you like the offer, you sign it online through DocuSign. No
              printing, no faxing, no meeting at an office. Just click and
              sign on your phone.
            </p>
            <p>
              After you sign, we send everything to Act Land Services LLC.
              That&rsquo;s our title company. They pull the title report,
              get payoffs for any mortgage or liens, set up the closing,
              and handle all the paperwork.
            </p>
            <p>
              You pick the close date. Most closings happen 2 to 8 weeks
              after you sign. If you need more time to move out, we&rsquo;ll
              wait. If you need the money fast, we can close in about 2
              weeks. On close day, you show up (usually at Act Land Services
              in South Philly), you sign the final paperwork, and the money
              gets wired to your account that day or the next.
            </p>
            <Callout label="Costs at closing">
              You don&rsquo;t write us a check. Normal seller costs like
              back property taxes, water bills, or old liens get paid out
              of the sale price at closing. The rest goes to you. We&rsquo;ll
              walk you through those numbers before close day so
              there&rsquo;s nothing surprising on the wire.
            </Callout>
          </ContentSection>

          <SectionBreak />

          <ContentSection heading="What happens if you back out">
            <p>
              Pennsylvania contracts include contingency periods &mdash;
              windows of time where either side can walk away for a real
              reason without penalty. If you sign with us and then change
              your mind inside that window, you walk away clean.
            </p>
            <p>
              We won&rsquo;t sue you. We won&rsquo;t send you threatening
              letters. We&rsquo;d rather have you feel good about the deal
              than drag an unhappy seller through a closing.
            </p>
          </ContentSection>

          <ContentSection heading="The people you'll deal with">
            <p>
              <strong className="text-[var(--color-ink)]">Watson Saintsulne</strong> is
              the only person who makes offers, negotiates, and sits with
              you at closing. He owns Covenant Homes Philly.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Tracey Cooper</strong> is an
              AI system that schedules, sends reminders, and coordinates
              with the title company. Tracey is not a human. She always
              tells you she&rsquo;s an AI.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Act Land Services LLC</strong>
              {" "}is a licensed Pennsylvania title company at 2901 South
              19th Street. They handle closings for us. You&rsquo;ll meet
              Jaime, Karen, or Cindy on close day.
            </p>
          </ContentSection>
        </Container>
      </Section>
      <HowItWorks />
      <CTABlock utmCampaign="how-it-works" />
    </>
  );
}
