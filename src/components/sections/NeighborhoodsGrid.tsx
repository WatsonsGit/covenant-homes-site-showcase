import Link from "next/link";
import { Kicker, Rule } from "@/components/ui/Editorial";
import { NEIGHBORHOODS } from "@/content/neighborhoods";

export function NeighborhoodsGrid() {
  return (
    <section id="neighborhoods" className="section-editorial bg-[var(--color-surface)]">
      <div className="container-editorial">
        <header className="max-w-3xl mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <Kicker>Where We Buy</Kicker>
            <h2 className="mt-4">Philadelphia neighborhoods, listed by name.</h2>
          </div>
          <Link
            href="/neighborhoods"
            className="kicker text-[var(--color-ink)] hover:text-[var(--color-accent-700)] transition-colors whitespace-nowrap"
          >
            View all &rarr;
          </Link>
        </header>

        <Rule tone="black" />
        <ul className="max-w-5xl">
          {NEIGHBORHOODS.map((n, idx) => (
            <li key={n.slug}>
              <Link
                href={`/neighborhoods/${n.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[3rem_minmax(14rem,1fr)_2fr_auto] items-baseline gap-4 md:gap-8 py-5 md:py-6 border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface-alt)] -mx-4 px-4 md:-mx-6 md:px-6"
              >
                <span className="font-[var(--font-mono)] text-xs text-[var(--color-accent-700)] tabular-nums pt-1">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-accent-700)] transition-colors">
                  {n.name}
                </span>
                <span className="hidden md:block text-sm text-[var(--color-muted)] leading-snug italic font-[var(--font-display)]">
                  {n.blurb}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[var(--color-accent)] text-xl font-[var(--font-display)] pt-1 transform group-hover:translate-x-1 transition-transform"
                >
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
