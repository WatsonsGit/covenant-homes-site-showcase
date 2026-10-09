import { Container } from "@/components/ui/Container";
import { CLOSED_DEALS_STATS } from "@/content/closed-deals";

interface TrustItem {
  label: string;
  value: string;
}

export function TrustStrip() {
  const items: TrustItem[] = [
    { label: "Philly Houses Closed", value: `${CLOSED_DEALS_STATS.totalClosed}+` },
    { label: "Buying Since", value: String(CLOSED_DEALS_STATS.yearStarted) },
    { label: "Title Partner", value: "Act Land Services" },
    { label: "Service Area", value: "Philadelphia" },
  ];

  return (
    <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <Container width="wide" className="!max-w-[84rem]">
        <div className="hidden md:grid grid-cols-4 divide-x divide-[var(--color-border)] py-5">
          {items.map((i) => (
            <div key={i.label} className="px-6 text-center first:pl-0 last:pr-0">
              <p className="kicker text-[var(--color-muted)]">{i.label}</p>
              <p className="mt-1.5 font-[var(--font-display)] text-lg text-[var(--color-ink)]">
                {i.value}
              </p>
            </div>
          ))}
        </div>
        <div className="md:hidden flex gap-6 overflow-x-auto py-4 text-sm">
          {items.map((i) => (
            <div key={i.label} className="flex-shrink-0 text-center min-w-[110px]">
              <p className="kicker text-[var(--color-muted)]">{i.label}</p>
              <p className="mt-1 font-[var(--font-display)] text-[var(--color-ink)]">
                {i.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
