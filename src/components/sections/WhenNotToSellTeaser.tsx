import Link from "next/link";
import { Kicker, PullQuote } from "@/components/ui/Editorial";

export function WhenNotToSellTeaser() {
  return (
    <section className="section-editorial bg-[var(--color-surface-alt)] relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-8 left-8 font-[var(--font-display)] text-[14rem] leading-none text-[var(--color-accent)] opacity-[0.08] pointer-events-none select-none"
      >
        &ldquo;
      </div>
      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-center">
          <div>
            <Kicker>When Not To Sell To Us</Kicker>
            <p className="mt-5 text-[15px] text-[var(--color-body)] leading-relaxed">
              The single most differentiated page on this site. Written in full,
              without the usual sales hedge.
            </p>
          </div>
          <div>
            <PullQuote attribution="Watson Saintsulne &middot; Director of Sales">
              If your house is in good shape and you have six months, list with
              an agent &mdash; you&rsquo;ll net more. We only win long-term if
              we&rsquo;re honest about when we&rsquo;re not the right answer.
            </PullQuote>
            <Link
              href="/when-not-to-sell-to-us"
              className="inline-flex items-center gap-2 mt-8 text-[var(--color-ink)] font-medium border-b-2 border-[var(--color-accent)] pb-0.5 hover:border-[var(--color-ink)] transition-colors"
            >
              Read the full letter
              <span aria-hidden="true" className="text-[var(--color-accent)]">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
