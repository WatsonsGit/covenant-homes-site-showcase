"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/utils";
import { trackConversion } from "@/lib/analytics";

const NAV_LINKS = [
  { href: "/how-it-works", label: "Process" },
  { href: "/our-process", label: "Offer Formula" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/when-not-to-sell-to-us", label: "When Not" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/96 backdrop-blur border-b border-[var(--color-ink)]">
      {/* Top meta bar */}
      <div className="hidden md:block border-b border-[var(--color-border)]">
        <div className="container-editorial">
          <div className="flex items-center justify-between py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)] font-[var(--font-mono)]">
            <span>Philadelphia, PA &middot; Est. 2021</span>
            <span className="flex items-center gap-4">
              <span>Mon&ndash;Fri 9&ndash;6 ET</span>
              <span className="h-3 w-px bg-[var(--color-border)]" />
              <a
                href={`tel:${PHONE_E164}`}
                onClick={() => trackConversion("phone_click", { location: "header-top" })}
                className="text-[var(--color-ink)] hover:text-[var(--color-accent-700)]"
              >
                {PHONE_DISPLAY}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Covenant Homes Philly home"
          >
            <Image
              src="/brand/logo.png"
              alt="The Covenant Real Estate Investment Group"
              width={600}
              height={252}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.1em] text-[var(--color-body)] hover:text-[var(--color-accent-700)] font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/#lead-form" className="hidden md:block">
              <Button size="sm" variant="primary">
                Get Cash Offer
              </Button>
            </Link>
            <button
              className="lg:hidden p-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          className="lg:hidden border-t border-[var(--color-border)] bg-white"
          aria-label="Mobile"
        >
          <div className="container-editorial py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-[var(--color-border)] text-[var(--color-body)] uppercase tracking-[0.1em] text-sm"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_E164}`}
              onClick={() => {
                setOpen(false);
                trackConversion("phone_click", { location: "mobile_nav" });
              }}
              className="py-3 text-[var(--color-accent-700)] font-[var(--font-display)] text-lg"
            >
              {PHONE_DISPLAY}
            </a>
            <Link href="/#lead-form" onClick={() => setOpen(false)} className="pt-2">
              <Button size="md" variant="primary" className="w-full">
                Get Cash Offer
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
