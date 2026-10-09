import Image from "next/image";
import { LeadForm } from "./LeadForm";
import { Rule } from "@/components/ui/Editorial";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-primary-800)] text-white overflow-hidden">
      {/* Rowhome photo background */}
      <Image
        src="/hero/philly-rowhomes.jpg"
        alt="Philadelphia rowhomes on a tree-lined street"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />
      {/* Dark gradient overlay for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.92)_0%,rgba(10,10,10,0.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(10,10,10,0.85)_45%,rgba(10,10,10,0.55)_75%,rgba(10,10,10,0.35)_100%)]"
      />
      {/* Subtle gold gradient sweep */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,160,85,0.6) 0%, transparent 70%)",
        }}
      />
      {/* Top gold rule + dateline */}
      <div className="relative border-b border-white/10">
        <div className="container-editorial">
          <div className="flex items-center justify-between py-4 text-[11px] uppercase tracking-[0.18em] text-white/55 font-[var(--font-mono)]">
            <span className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 bg-[var(--color-accent)]" aria-hidden="true" />
              Philadelphia, Pennsylvania
            </span>
            <span className="hidden sm:inline">Est. 2021 · Vol. V</span>
            <span>No. {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="container-editorial py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
            {/* Editorial column */}
            <div className="max-w-2xl">
              <p className="kicker-dark mb-6 eyebrow-rule">
                A Note to Philly Home Sellers
              </p>
              <h1 className="text-white font-[var(--font-display)]">
                Selling a Philly house{" "}
                <span className="italic text-[var(--color-accent)]">the hard way?</span>
                <br className="hidden md:block" /> We&rsquo;ll make it simple.
              </h1>

              <Rule tone="gold" className="my-8 max-w-[10rem]" />

              <div className="space-y-5 text-[17px] leading-[1.65] text-white/85 max-w-xl">
                <p className="drop-cap">
                  We buy Philly houses for cash. Any condition. You
                  inherited it. You&rsquo;re behind on taxes. Tenants
                  won&rsquo;t leave. The house needs work you can&rsquo;t
                  afford. Whatever the reason, we&rsquo;ve probably seen it
                  before.
                </p>
                <p>
                  You won&rsquo;t pay a cent. No fees. No agent commissions.
                  No repairs. And if we&rsquo;re not the right buyer for
                  your house, we&rsquo;ll tell you straight and point you to
                  someone who is.
                </p>
              </div>

              {/* Signature block */}
              <div className="mt-10 pt-6 border-t border-white/15 max-w-xs">
                <p className="font-[var(--font-display)] italic text-lg text-[var(--color-accent)]">
                  Watson Saintsulne
                </p>
                <p className="kicker-dark mt-1">
                  Director of Sales &middot; Covenant REI
                </p>
              </div>
            </div>

            {/* Form as "filing card" */}
            <div className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0 lg:sticky lg:top-24">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-2 -left-2 right-2 bottom-2 bg-[var(--color-accent)]"
                />
                <LeadForm variant="hero" utmCampaign="home-hero" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom torn-edge / double rule */}
      <div className="relative">
        <div className="h-px bg-[var(--color-accent)]" />
        <div className="h-px bg-[var(--color-accent)] mt-[3px]" />
      </div>
    </section>
  );
}
