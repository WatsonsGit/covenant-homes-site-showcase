import Link from "next/link";
import { Kicker, Rule } from "@/components/ui/Editorial";

export function OfferCalculation() {
  return (
    <section className="section-editorial paper-texture relative overflow-hidden">
      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Narrative column */}
          <div className="max-w-xl">
            <Kicker>The Honest Math</Kicker>
            <h2 className="mt-4">
              Here&rsquo;s how we come up with the number. <span className="italic text-[var(--color-accent-700)]">All of it.</span>
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-[var(--color-body)]">
              <p className="drop-cap">
                Most cash buyers won&rsquo;t tell you how they got to their
                offer. We will. We use the same math every wholesaler uses. The
                only difference is we show you the work.
              </p>
              <p>
                We start with what the house will be worth after it&rsquo;s
                fixed up. We take 70% of that number. We subtract what the
                repairs cost. We subtract our fee. What&rsquo;s left is your
                offer.
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">
                  In plain terms, most of our offers land between 25% and 55%
                  of what the house will be worth fixed up.
                </strong>{" "}
                Houses that need a lot of work sit at the low end. Houses in
                better shape land higher. If your house is in good condition
                and you can wait, list it with an agent &mdash; you&rsquo;ll
                get more.
              </p>
            </div>
            <Link
              href="/our-process"
              className="inline-flex items-center gap-2 mt-8 text-[var(--color-ink)] font-medium border-b-2 border-[var(--color-accent)] pb-0.5 hover:border-[var(--color-ink)] transition-colors"
            >
              See a real deal with real numbers
              <span aria-hidden="true" className="text-[var(--color-accent)]">&rarr;</span>
            </Link>
          </div>

          {/* Ledger card */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-2 -left-2 right-3 bottom-3 bg-[var(--color-ink)]"
            />
            <div className="relative bg-white border border-[var(--color-ink)] p-8 md:p-10">
              {/* Ledger header */}
              <div className="flex items-end justify-between pb-4 border-b-2 border-[var(--color-ink)]">
                <div>
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Standard Offer Worksheet
                  </p>
                  <p className="font-[var(--font-display)] text-2xl mt-1 text-[var(--color-ink)]">
                    The Formula
                  </p>
                </div>
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-700)]">
                  Ledger No. 01
                </p>
              </div>

              {/* Equation */}
              <div className="py-8 border-b border-[var(--color-border)]">
                <div className="font-[var(--font-display)] text-[clamp(1.375rem,2vw+0.5rem,1.875rem)] leading-snug text-[var(--color-ink)] nums-tabular">
                  <span>Offer</span>
                  <span className="text-[var(--color-accent)] mx-2">=</span>
                  <span>(ARV &times; 70%)</span>
                  <span className="text-[var(--color-accent)] mx-2">&minus;</span>
                  <span>Repairs</span>
                  <span className="text-[var(--color-accent)] mx-2">&minus;</span>
                  <span>Fee</span>
                </div>
                <p className="mt-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-accent-700)]">
                  Typical outcome: 25&ndash;55% of ARV
                </p>
              </div>

              {/* Annotations */}
              <dl className="divide-y divide-[var(--color-border)]">
                <AnnotationRow
                  term="ARV"
                  defn="After-Repair Value &mdash; what the house sells for once fixed, based on recent sales within half a mile."
                />
                <AnnotationRow
                  term="70%"
                  defn="Industry standard. Covers 6 months of holding costs, contractor overruns, and the realtor fees when we resell."
                />
                <AnnotationRow
                  term="Repairs"
                  defn="Real contractor numbers. Watson walks you through them on the call so you can see where the money goes."
                />
                <AnnotationRow
                  term="Fee"
                  defn="Our fee, disclosed up front. Typically 8&ndash;12% of the purchase price. Always printed on the offer sheet."
                />
              </dl>

              {/* Ledger footer */}
              <Rule tone="double" className="mt-6" />
              <p className="mt-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] text-right">
                Signed &middot; W.S. &middot; Philadelphia, PA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnnotationRow({ term, defn }: { term: string; defn: string }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-5 py-4">
      <dt className="font-[var(--font-display)] italic text-[var(--color-accent-700)] text-base pt-0.5">
        {term}
      </dt>
      <dd
        className="text-[15px] leading-[1.55] text-[var(--color-body)]"
        dangerouslySetInnerHTML={{ __html: defn }}
      />
    </div>
  );
}
