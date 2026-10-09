import Image from "next/image";
import { Kicker } from "@/components/ui/Editorial";

interface Testimonial {
  name: string;
  neighborhood: string;
  address?: string;
  quote: string;
  shortQuote?: string;
  outcome: string;
  photo?: string;
}

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  if (items.length === 0) {
    return (
      <section className="section-editorial bg-[var(--color-surface)]">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <Kicker>Sellers We&rsquo;ve Worked With</Kicker>
            <h2 className="mt-4">
              Real testimonials,{" "}
              <span className="italic text-[var(--color-accent-700)]">
                published as deals close.
              </span>
            </h2>
            <p className="mt-5 text-[17px] text-[var(--color-body)] leading-relaxed">
              We publish only real quotes from real sellers, with written
              permission, as deals close. Check back as the section fills in,
              or call Watson directly and he&rsquo;ll connect you with past
              clients.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const featured = items.slice(0, 2);

  return (
    <section className="section-editorial bg-[var(--color-surface)]">
      <div className="container-editorial">
        <header className="max-w-3xl mb-12">
          <Kicker>Sellers We&rsquo;ve Worked With</Kicker>
          <h2 className="mt-4">
            Real people. <span className="italic text-[var(--color-accent-700)]">Real Philadelphia deals.</span>
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 border-t border-[var(--color-ink)] pt-12">
          {featured.map((t, i) => (
            <figure key={i} className="grid grid-cols-[5rem_1fr] sm:grid-cols-[6rem_1fr] gap-5">
              {/* Photo */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden border border-[var(--color-ink)]">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={`${t.name}, ${t.neighborhood}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--color-surface-alt)] flex items-center justify-center">
                    <span className="font-[var(--font-display)] text-3xl text-[var(--color-accent)]">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Quote */}
              <div className="border-l-2 border-[var(--color-accent)] pl-5">
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-700)]">
                  No. {String(i + 1).padStart(2, "0")}
                </p>
                <blockquote className="mt-3 font-[var(--font-display)] italic text-[1.125rem] leading-snug text-[var(--color-ink)]">
                  &ldquo;{t.shortQuote ?? t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 pt-3 border-t border-[var(--color-border)]">
                  <p className="font-[var(--font-display)] text-lg text-[var(--color-ink)]">
                    {t.name}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {t.neighborhood}
                  </p>
                  <p className="kicker mt-2">{t.outcome}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
