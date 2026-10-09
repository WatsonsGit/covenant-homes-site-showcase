import { Kicker, Rule } from "@/components/ui/Editorial";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  todoNote?: string;
}

export function PagePlaceholder({ eyebrow, title, intro, todoNote }: Props) {
  return (
    <section className="section-editorial bg-[var(--color-surface)]">
      <div className="container-editorial">
        <div className="max-w-3xl">
          {eyebrow && <Kicker>{eyebrow}</Kicker>}
          <h1 className="mt-4">{title}</h1>
          <Rule tone="gold" className="my-8 !max-w-[10rem]" />
          {intro && (
            <p className="text-[19px] text-[var(--color-body)] leading-[1.65]">
              {intro}
            </p>
          )}
          {todoNote && (
            <div className="mt-10 border-l-2 border-[var(--color-accent)] bg-[var(--color-surface-alt)] p-5 text-sm text-[var(--color-body)]">
              <p className="kicker mb-2">Phase 2 Content</p>
              <p>{todoNote}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
