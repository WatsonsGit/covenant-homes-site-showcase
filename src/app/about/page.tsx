import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { CTABlock } from "@/components/sections/CTABlock";
import {
  ContentHeader,
  ContentSection,
  Callout,
  SectionBreak,
} from "@/components/sections/ContentPage";
import { aboutPageSchema, personSchema, jsonLdScript } from "@/lib/schema";
import { CLOSED_DEALS_STATS } from "@/content/closed-deals";

export const metadata: Metadata = {
  title: "About Watson & Covenant Homes Philly",
  description:
    "Watson Saintsulne runs Covenant Homes Philly. Real person, real Philly office, 55+ closed deals since 2021. Here's our story and how we work.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            aboutPageSchema(),
            personSchema({
              name: "Watson Saintsulne",
              jobTitle: "Director of Sales",
              bio: "Founder and Director of Sales at The Covenant Real Estate Investment Group LLC. Philadelphia-based real estate investor focused on honest, transparent cash home purchases.",
              knowsAbout: [
                "Philadelphia real estate",
                "Wholesale real estate",
                "Distressed property acquisition",
                "Cash home buying",
              ],
            }),
          ]),
        }}
      />
      <Section>
        <Container width="wide">
          <ContentHeader
            kicker="About Covenant"
            title={<>Real people, real Philly business.</>}
            lede="Covenant Homes Philly is run by Watson Saintsulne. It's a small operation in Center City, not a national franchise. Every offer, every negotiation, and every closing goes through Watson personally."
          />

          <ContentSection heading="The numbers, as of today">
            <Callout label="Covenant by the numbers">
              <dl className="space-y-2.5 font-[var(--font-mono)] text-[14px] nums-tabular">
                <div className="flex justify-between">
                  <dt>Houses closed since 2021</dt>
                  <dd>{CLOSED_DEALS_STATS.totalClosed}+</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Probate deals handled</dt>
                  <dd>{CLOSED_DEALS_STATS.probateInvolved}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Typical close time</dt>
                  <dd>30&ndash;60 days</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Years buying in Philly</dt>
                  <dd>{CLOSED_DEALS_STATS.yearsInBusiness}</dd>
                </div>
              </dl>
            </Callout>
          </ContentSection>

          <ContentSection heading="Watson's story">
            <p>
              Watson started Covenant in 2021. He grew up in the
              Philadelphia area. He knows the neighborhoods, the
              rowhomes, and the people who live in them.
            </p>
            <p>
              He started buying houses because he saw too many Philly
              families get taken advantage of by out-of-town investors
              who didn&rsquo;t know the neighborhoods and didn&rsquo;t
              care about the sellers. Watson wanted to build something
              different &mdash; a local cash buyer who pays fair, closes
              fast, and tells sellers the truth about their options.
            </p>
            <p>
              Four and a half years later, Covenant has closed on 55+
              Philly houses. Most of those deals came from referrals.
              That tells you something about how past sellers felt about
              working with us.
            </p>
          </ContentSection>

          <ContentSection heading="The Covenant name">
            <p>
              A covenant is a promise. Not a contract &mdash; a promise.
              The name reflects how Watson wants to do this business:
              with his word, not just his signature.
            </p>
            <p>
              When we make you an offer, we keep it. When we say
              we&rsquo;re going to close on a specific date, we close on
              that date. When we tell you we&rsquo;re not the right buyer,
              we mean it, and we tell you who is.
            </p>
          </ContentSection>

          <SectionBreak />

          <ContentSection heading="Tracey Cooper — our AI disclosure">
            <p>
              Tracey Cooper is our Transactions Coordinator. Tracey is not
              a human. Tracey is an AI system that handles scheduling,
              document preparation, reminder emails, and coordination with
              Act Land Services (our title company).
            </p>
            <p>
              Tracey always tells you she&rsquo;s an AI in every email and
              message she sends. If you want to talk to a real person,
              you&rsquo;ll always get Watson.
            </p>
            <p>
              Why are we telling you this? Because a lot of companies are
              using AI to talk to customers without saying so. We think
              that&rsquo;s wrong. If a computer is sending you messages,
              you deserve to know. That&rsquo;s how we earn your trust.
            </p>
          </ContentSection>

          <ContentSection heading="Act Land Services — our title partner">
            <p>
              Every closing we do runs through{" "}
              <strong className="text-[var(--color-ink)]">
                Act Land Services LLC
              </strong>
              , a licensed Pennsylvania title company based at 2901 South
              19th Street, Philadelphia. They&rsquo;ve handled all 55+ of
              our closings.
            </p>
            <p>
              You&rsquo;ll work with Jaime, Karen, or Cindy on close day.
              They pull the title report, clear any liens or back taxes,
              prepare the final documents, and wire the money to your
              account. They&rsquo;re the professionals who make sure
              nothing goes sideways at the closing table.
            </p>
          </ContentSection>

          <ContentSection heading="Our office">
            <p>
              We work out of a small office at{" "}
              <strong className="text-[var(--color-ink)]">
                1700 Market Street, Suite 1005, Philadelphia PA 19103
              </strong>
              . Center City, a couple blocks from City Hall.
            </p>
            <p>
              You&rsquo;re welcome to come in and meet Watson in person if
              you&rsquo;d rather talk face-to-face than on the phone. Just
              call ahead &mdash; we&rsquo;re a small team and not always
              at the desk.
            </p>
          </ContentSection>

          <ContentSection heading="Community">
            <p>
              Watson is active in the Philly real estate investor
              community. He attends Philly REIA meetings, speaks on local
              panels about distressed property, and occasionally posts on
              BiggerPockets about Philly market conditions.
            </p>
            <p>
              Covenant donates a percentage of each closed deal to Philly
              housing nonprofits, including Rebuilding Together
              Philadelphia and Habitat for Humanity Philadelphia. The
              amount and specific recipients are published quarterly.
            </p>
          </ContentSection>
        </Container>
      </Section>
      <CTABlock utmCampaign="about" />
    </>
  );
}
