import Link from "next/link";
import { Kicker } from "@/components/ui/Editorial";
import { SITUATIONS } from "@/content/situations";

export function SituationsGrid() {
  return (
    <section id="situations" className="section-editorial bg-[var(--color-ink)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(186,150,52,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 100%",
          }}
        />
      </div>
      <div className="container-editorial relative">
        <header className="max-w-3xl mb-12">
          <Kicker dark>Situations We Handle</Kicker>
          <h2 className="mt-4 text-white">
            Whatever the circumstance, <span className="italic text-[var(--color-accent)]">we&rsquo;ve seen it before.</span>
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl">
            Each situation below links to an honest page with your real options
            &mdash; including the cases where selling to us isn&rsquo;t the right move.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {SITUATIONS.map((s, idx) => (
            <Link
              key={s.slug}
              href={`/situations/${s.slug}`}
              className="group bg-[var(--color-ink)] p-6 md:p-7 hover:bg-[#161514] transition-colors relative"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  No. {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-[var(--font-display)]"
                >
                  &rarr;
                </span>
              </div>
              <p className="font-[var(--font-display)] text-xl text-white group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                {s.name}
              </p>
              <p className="mt-2.5 text-sm text-white/60 leading-snug">
                {s.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
