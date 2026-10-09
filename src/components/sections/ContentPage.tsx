import type { ReactNode } from "react";
import { Kicker, Rule, Fleuron } from "@/components/ui/Editorial";

export function ContentHeader({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string | ReactNode;
  lede?: string | ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      {kicker && <Kicker>{kicker}</Kicker>}
      <h1 className="mt-4">{title}</h1>
      <Rule tone="gold" className="my-8 !max-w-[10rem]" />
      {lede && (
        <p className="text-[19px] text-[var(--color-body)] leading-[1.65]">
          {lede}
        </p>
      )}
    </header>
  );
}

export function ContentSection({
  heading,
  kicker,
  children,
  className = "",
}: {
  heading?: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-3xl mt-14 ${className}`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      {heading && (
        <h2 className="mt-3 font-[var(--font-display)]">{heading}</h2>
      )}
      <div className="mt-5 space-y-5 text-[17px] leading-[1.7] text-[var(--color-body)]">
        {children}
      </div>
    </section>
  );
}

export function Callout({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 border-l-2 border-[var(--color-accent)] bg-[var(--color-surface-alt)] p-5">
      {label && <p className="kicker mb-2">{label}</p>}
      <div className="text-[16px] leading-[1.6] text-[var(--color-body)]">
        {children}
      </div>
    </aside>
  );
}

export function SectionBreak() {
  return <Fleuron className="my-14" />;
}
