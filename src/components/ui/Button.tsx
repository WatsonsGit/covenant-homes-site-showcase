import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-600)]",
  accent:
    "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[var(--color-accent-600)]",
  secondary:
    "bg-white text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary-50)]",
  ghost:
    "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary-50)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-14 px-7 text-lg",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  )
);
Button.displayName = "Button";

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
}
