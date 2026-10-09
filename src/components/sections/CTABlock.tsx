import { LeadForm } from "./LeadForm";
import { Kicker, Fleuron } from "@/components/ui/Editorial";

export function CTABlock({ utmCampaign }: { utmCampaign?: string }) {
  return (
    <section id="second-cta" className="section-editorial bg-[var(--color-surface-cream)] relative overflow-hidden">
      <div className="container-editorial relative">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <Fleuron className="mb-5" />
          <Kicker className="justify-center" withRule={false}>
            A Direct Offer, Delivered in 24 Hours
          </Kicker>
          <h2 className="mt-4">
            When you&rsquo;re ready, <span className="italic text-[var(--color-accent-700)]">send the address.</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--color-body)] leading-relaxed">
            Sixty seconds of information. No fees, no pressure, no high-volume sales script.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-2 -left-2 right-2 bottom-2 bg-[var(--color-accent)]"
            />
            <LeadForm variant="inline" utmCampaign={utmCampaign} />
          </div>
        </div>
      </div>
    </section>
  );
}
