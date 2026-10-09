import { Kicker, Rule, RunningNumber } from "@/components/ui/Editorial";

const STEPS = [
  {
    n: 1,
    title: "Tell us about the house",
    body: "Send us the address and what&rsquo;s going on. Takes about a minute. No fees, no pressure, no one shows up at your door.",
    meta: "About 60 seconds",
  },
  {
    n: 2,
    title: "We send you a cash offer",
    body: "We look at recent sales, figure out what repairs will cost, and send you a written offer in 24 hours. If we&rsquo;re not the right buyer, we&rsquo;ll say so and tell you who to call.",
    meta: "Within 24 hours",
  },
  {
    n: 3,
    title: "You pick the close date",
    body: "If you like the offer, you sign it online. We send it to Act Land Services, our title company, and they handle the rest. You pick when you want to close &mdash; usually somewhere between 2 and 8 weeks.",
    meta: "30\u201360 days, typical",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-editorial bg-[var(--color-surface)]">
      <div className="container-editorial">
        <header className="max-w-3xl mb-14">
          <Kicker>The Process</Kicker>
          <h2 className="mt-4">
            Three steps, written out{" "}
            <span className="italic text-[var(--color-accent-700)]">plainly</span>.
          </h2>
        </header>

        <div className="max-w-5xl">
          <Rule tone="black" />
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[8rem_1fr_auto] gap-5 md:gap-10 py-10 md:py-12 border-b border-[var(--color-border)]"
            >
              <RunningNumber n={s.n} className="mt-1" />
              <div className="max-w-2xl">
                <h3 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)]">
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-[17px] text-[var(--color-body)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
              <p className="kicker text-[var(--color-muted)] col-start-2 md:col-start-auto md:text-right md:self-start md:pt-2 whitespace-nowrap">
                {s.meta}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
