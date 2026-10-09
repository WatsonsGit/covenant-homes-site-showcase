/**
 * Aggregate stats from Covenant's closed-deal database (2021-2025).
 * Source: internal deals tracker spreadsheet through Aug 2025.
 * Watson confirms these numbers before launch.
 */

export const CLOSED_DEALS_STATS = {
  totalClosed: 55,
  averageDaysUnderContract: 54,
  yearsInBusiness: 2026 - 2021,
  yearStarted: 2021,
  byYear: {
    2021: 13,
    2022: 6,
    2023: 20,
    2024: 10,
    2025: 6,
  },
  byMotivation: {
    tiredLandlord: 21,
    death: 17,
    financialBurden: 8,
    relocation: 6,
    downsize: 1,
  },
  byLeadSource: {
    referral: 18,
    coldCall: 22,
    googlePpc: 6,
    heselMedia: 6,
    jvAgent: 3,
  },
  probateInvolved: 14,
  marketAreas: [
    "West Philadelphia",
    "North Philadelphia",
    "Kensington",
    "Fishtown",
    "Frankford",
    "South Philadelphia",
    "Germantown",
    "Olney",
    "Upper Darby",
    "Darby",
    "Chester",
    "Norristown",
  ],
} as const;

/** Display string used on trust strips and home-page callouts. */
export const DEALS_SUMMARY_DISPLAY = {
  headline: `${CLOSED_DEALS_STATS.totalClosed}+ Philly houses closed since ${CLOSED_DEALS_STATS.yearStarted}`,
  averageClose: "Typical close: 30-60 days",
  years: `${CLOSED_DEALS_STATS.yearsInBusiness} years buying in Philly`,
};
