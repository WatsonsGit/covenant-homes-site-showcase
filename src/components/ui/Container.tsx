import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  width = "prose",
}: {
  children: ReactNode;
  className?: string;
  width?: "prose" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        width === "prose" && "container-prose",
        width === "narrow" && "container-narrow",
        width === "wide" && "max-w-[84rem] mx-auto px-5",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "alt" | "primary";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        tone === "alt" && "bg-[var(--color-surface-alt)]",
        tone === "primary" && "bg-[var(--color-primary)] text-white",
        className
      )}
    >
      {children}
    </section>
  );
}
