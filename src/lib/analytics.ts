/**
 * Lightweight GA4 + Clarity helpers.
 * CLAUDE.md #19: no analytics beyond Vercel Analytics, Speed Insights, GA4 (conversions only), Clarity.
 */

type GtagFn = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: GtagFn;
    clarity?: (cmd: string, ...args: unknown[]) => void;
  }
}

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export type ConversionEvent =
  | "lead_form_submit"
  | "phone_click"
  | "thank_you_view";

export function trackConversion(
  event: ConversionEvent,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
    window.clarity?.("event", event);
  } catch {
    // swallow — analytics must never break user flow
  }
}

export function readUtmFromUrl(): {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
} {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") ?? undefined,
    utm_medium: p.get("utm_medium") ?? undefined,
    utm_campaign: p.get("utm_campaign") ?? undefined,
  };
}
