import { Kicker, Rule } from "@/components/ui/Editorial";
import type { FaqItem } from "@/lib/schema";

interface Props {
  items: FaqItem[];
  title?: string;
  kicker?: string;
  tone?: "default" | "alt";
}

export function FAQ({
  items,
  title = "Common questions, answered plainly.",
  kicker = "Frequently Asked",
  tone = "default",
}: Props) {
  return (
    <section
      className={`section-editorial ${tone === "alt" ? "bg-[var(--color-surface-alt)]" : "bg-[var(--color-surface)]"}`}
    >
      <div className="container-editorial">
        {(kicker || title) && (
          <header className="max-w-3xl mb-12">
            {kicker && <Kicker>{kicker}</Kicker>}
            {title && <h2 className="mt-4">{title}</h2>}
          </header>
        )}

        <div className="max-w-4xl">
          <Rule tone="black" />
          {items.map((item, idx) => (
            <article
              key={idx}
              className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-4 md:gap-8 py-8 border-b border-[var(--color-border)]"
            >
              <span className="font-[var(--font-mono)] text-xs text-[var(--color-accent-700)] tabular-nums pt-2">
                Q.{String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[var(--font-display)] text-xl md:text-[1.625rem] leading-snug text-[var(--color-ink)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-[16px] text-[var(--color-body)] leading-[1.7]">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
