"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const PLACES_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

type GoogleMaps = {
  places: {
    Autocomplete: new (
      input: HTMLInputElement,
      opts: Record<string, unknown>
    ) => {
      addListener: (event: string, cb: () => void) => void;
      getPlace: () => {
        formatted_address?: string;
        address_components?: Array<{
          long_name: string;
          short_name: string;
          types: string[];
        }>;
      };
    };
  };
};

declare global {
  interface Window {
    google?: { maps: GoogleMaps };
  }
}

interface Props {
  value: string;
  onChange: (address: string, parsed?: {
    street: string; city: string; state: string; zip: string;
  }) => void;
  error?: string;
  placeholder?: string;
  id?: string;
}

export function AddressAutocomplete({
  value,
  onChange,
  error,
  placeholder = "Start typing your address…",
  id = "address",
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!scriptReady || !inputRef.current || !window.google?.maps?.places) return;
    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "us" },
      types: ["address"],
      fields: ["formatted_address", "address_components"],
      // Constrain to Philadelphia metro bounding box
      bounds: {
        north: 40.1379,
        south: 39.8670,
        east: -74.9558,
        west: -75.2803,
      },
      strictBounds: false,
    });
    ac.addListener("place_changed", () => {
      const place = ac.getPlace();
      const addr = place.formatted_address ?? "";
      const parts = {
        street: "",
        city: "Philadelphia",
        state: "PA",
        zip: "",
      };
      let streetNum = "";
      let route = "";
      for (const c of place.address_components ?? []) {
        if (c.types.includes("street_number")) streetNum = c.long_name;
        if (c.types.includes("route")) route = c.long_name;
        if (c.types.includes("locality")) parts.city = c.long_name;
        if (c.types.includes("administrative_area_level_1")) parts.state = c.short_name;
        if (c.types.includes("postal_code")) parts.zip = c.long_name;
      }
      parts.street = `${streetNum} ${route}`.trim();
      onChange(addr, parts);
    });
  }, [scriptReady, onChange]);

  return (
    <>
      {PLACES_KEY && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${PLACES_KEY}&libraries=places&loading=async`}
          strategy="lazyOnload"
          onReady={() => setScriptReady(true)}
        />
      )}
      <div className="space-y-1.5">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-[var(--color-ink)]"
        >
          Property address
        </label>
        <input
          ref={inputRef}
          id={id}
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? "true" : undefined}
          className={cn(
            "w-full h-11 px-3 rounded-md border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-50)] outline-none transition",
            error && "border-[var(--color-error)]"
          )}
        />
        {/* Google Places autocomplete activates when NEXT_PUBLIC_GOOGLE_PLACES_API_KEY is set */}
        {error && (
          <p className="text-sm text-[var(--color-error)]" role="alert">
            {error}
          </p>
        )}
      </div>
    </>
  );
}
