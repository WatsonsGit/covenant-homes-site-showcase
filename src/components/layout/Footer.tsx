import Link from "next/link";
import Image from "next/image";
import { BRAND, PHONE_DISPLAY, PHONE_E164 } from "@/lib/utils";
import { Rule } from "@/components/ui/Editorial";

const FOOTER_NAV = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/our-process", label: "Offer Formula" },
      { href: "/when-not-to-sell-to-us", label: "When Not To Sell" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/blog", label: "Blog" },
      { href: "/neighborhoods", label: "Neighborhoods" },
      { href: "/situations", label: "Situations" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white/85 mt-0">
      {/* Masthead strip */}
      <div className="border-b border-white/10">
        <div className="container-editorial py-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/50 font-[var(--font-mono)]">
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 bg-[var(--color-accent)]"
            />
            Philadelphia Office
          </span>
          <span className="hidden sm:inline">
            Est. {BRAND.foundingDate} &middot; Vol. V
          </span>
        </div>
      </div>

      <div className="container-editorial py-14 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Image
            src="/brand/logo.png"
            alt="The Covenant Real Estate Investment Group"
            width={600}
            height={252}
            className="h-14 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <address className="not-italic text-sm leading-[1.7] text-white/75">
            {BRAND.legalName}
            <br />
            {BRAND.address.street}
            <br />
            {BRAND.address.city}, {BRAND.address.region}{" "}
            {BRAND.address.postalCode}
          </address>
          <div className="space-y-1 pt-2">
            <a
              href={`tel:${PHONE_E164}`}
              className="block font-[var(--font-display)] text-xl text-[var(--color-accent)] hover:text-white transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="block text-sm text-white/75 hover:text-white transition-colors"
            >
              {BRAND.email}
            </a>
          </div>
          <p className="kicker-dark pt-3">{BRAND.hours.display}</p>
          <p className="kicker-dark">Title Partner &middot; {BRAND.titlePartner}</p>
        </div>

        {FOOTER_NAV.map((col) => (
          <div key={col.heading}>
            <p className="kicker-dark mb-4">{col.heading}</p>
            <ul className="space-y-2.5 text-[15px]">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/75 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-editorial py-6">
          <Rule tone="gold" className="mb-5 !max-w-[5rem] !border-[var(--color-accent-600)]" />
          <div className="grid md:grid-cols-2 gap-4 text-xs text-white/50 leading-relaxed">
            <p>
              Equal Housing Opportunity. We comply with the Fair Housing Act
              and do not discriminate based on race, color, national origin,
              religion, sex, familial status, or disability.
            </p>
            <p className="md:text-right">
              &copy; {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
              {/* TODO: Watson — add BBB, PA real estate license numbers */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
