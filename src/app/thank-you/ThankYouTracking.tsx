"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/analytics";

export function ThankYouTracking() {
  useEffect(() => {
    trackConversion("thank_you_view");
  }, []);
  return null;
}
