import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small-caps monospace kicker label — use above H2 for section eyebrows */
export function Kicker({
  children,
  dark = false,
  withRule = true,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  withRule?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        dark ? "kicker-dark" : "kicker",
        withRule && "eyebrow-rule",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Running margin numeral (01, 02, 03) — editorial article style */
export function RunningNumber({
  n,
  className,
}: {
  n: number | string;
  className?: string;
}) {
  const formatted = typeof n === "number" ? String(n).padStart(2, "0") : n;
  return (
    <span className={cn("running-number nums-tabular", className)}>
      {formatted}
    </span>
  );
}

/** Newspaper-style horizontal rule */
export function Rule({
  tone = "gold",
  className,
}: {
  tone?: "gold" | "double" | "thick-gold" | "black";
  className?: string;
}) {
  const cls =
    tone === "gold"
      ? "rule-gold"
      : tone === "double"
        ? "rule-double"
        : tone === "thick-gold"
          ? "rule-thick-gold"
          : "border-0 border-t border-[var(--color-ink)]";
  return <hr className={cn(cls, "w-full", className)} aria-hidden="true" />;
}

/** Large editorial pull quote */
export function PullQuote({
  children,
  attribution,
  className,
}: {
  children: ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure className={cn("max-w-3xl", className)}>
      <Rule tone="thick-gold" className="mb-6" />
      <blockquote className="pull-quote">&ldquo;{children}&rdquo;</blockquote>
      {attribution && (
        <figcaption className="mt-5 kicker text-[var(--color-muted)]">
          {attribution}
        </figcaption>
      )}
      <Rule tone="gold" className="mt-6" />
    </figure>
  );
}

/** Editorial section wrapper with kicker + title */
export function EditorialHeading({
  kicker,
  title,
  lede,
  align = "left",
  darkMode = false,
}: {
  kicker?: string;
  title: string | ReactNode;
  lede?: string | ReactNode;
  align?: "left" | "center";
  darkMode?: boolean;
}) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {kicker && (
        <Kicker dark={darkMode} withRule={align === "left"}>
          {kicker}
        </Kicker>
      )}
      <h2
        className={cn(
          "mt-4",
          darkMode ? "text-white" : "text-[var(--color-ink)]"
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            darkMode ? "text-white/85" : "text-[var(--color-body)]"
          )}
        >
          {lede}
        </p>
      )}
    </header>
  );
}

/** Ornamental fleuron / section mark */
export function Fleuron({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 text-[var(--color-accent)]",
        className
      )}
      aria-hidden="true"
    >
      <span className="block w-8 h-px bg-[var(--color-accent)]" />
      <span className="font-[var(--font-display)] text-xl leading-none">§</span>
      <span className="block w-8 h-px bg-[var(--color-accent)]" />
    </div>
  );
}
