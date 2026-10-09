import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://covenanthomesphilly.com";

export const PHONE_E164 = process.env.NEXT_PUBLIC_PHONE ?? "215-703-8050";
export const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(215) 703-8050";

export const BRAND = {
  legalName: "The Covenant Real Estate Investment Group LLC",
  name: "Covenant Homes Philly",
  email: "watson@covenanthomesphilly.com",
  foundingDate: "2021",
  founder: "Watson Saintsulne",
  address: {
    street: "1700 Market St Suite 1005",
    city: "Philadelphia",
    region: "PA",
    postalCode: "19103",
    country: "US",
  },
  geo: { latitude: 39.95265, longitude: -75.16894 },
  hours: {
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "09:00",
    closes: "18:00",
    display: "Monday\u2013Friday, 9am\u20136pm ET",
  },
  titlePartner: "Act Land Services LLC",
  slogan: "The honest Philly cash home buyer",
} as const;

export const PHILLY_NEIGHBORHOODS = [
  "Kensington",
  "Fishtown",
  "Frankford",
  "Northeast Philadelphia",
  "Center City",
  "West Philadelphia",
  "South Philadelphia",
  "Germantown",
  "North Philadelphia",
  "Olney",
] as const;

export function formatPhoneInput(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
