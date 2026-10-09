"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { AddressAutocomplete } from "./AddressAutocomplete";
import { leadSchema, type LeadInput } from "@/lib/validation";
import { formatPhoneInput } from "@/lib/utils";
import { readUtmFromUrl, trackConversion } from "@/lib/analytics";

const TIMELINE_OPTIONS = [
  { value: "ASAP", label: "ASAP" },
  { value: "1-3 months", label: "1–3 months" },
  { value: "3-6 months", label: "3–6 months" },
  { value: "Just exploring", label: "Just exploring" },
];
const SITUATION_OPTIONS = [
  { value: "Inherited", label: "Inherited" },
  { value: "Tired landlord", label: "Tired landlord" },
  { value: "Behind on taxes/payments", label: "Behind on taxes/payments" },
  { value: "Divorce", label: "Divorce" },
  { value: "Vacant", label: "Vacant" },
  { value: "Code violations", label: "Code violations" },
  { value: "Other", label: "Other" },
];

const STEP_FIELDS: Record<1 | 2 | 3, (keyof LeadInput)[]> = {
  1: ["address"],
  2: ["timeline", "situation"],
  3: ["first_name", "last_name", "phone", "email", "consent_sms"],
};

interface Props {
  variant?: "hero" | "inline";
  utmCampaign?: string;
}

export function LeadForm({ variant = "hero", utmCampaign }: Props) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onBlur",
    defaultValues: {
      address: "",
      city: "Philadelphia",
      state: "PA",
      zip: "",
      consent_sms: false,
    },
  });

  const goNext = async () => {
    const valid = await trigger(STEP_FIELDS[step]);
    if (valid && step < 3) setStep((step + 1) as 1 | 2 | 3);
  };

  const onSubmit = async (data: LeadInput) => {
    setSubmitError(null);
    const utm = readUtmFromUrl();
    if (utmCampaign && !utm.utm_campaign) utm.utm_campaign = utmCampaign;

    // Optimistic redirect after 200ms per SITE-SPEC.md §4
    const timeout = setTimeout(() => {
      trackConversion("lead_form_submit", { timeline: data.timeline });
      router.push("/thank-you");
    }, 200);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead: data, utm }),
      });
      if (!res.ok) {
        clearTimeout(timeout);
        const body = await res.json().catch(() => ({}));
        setSubmitError(
          body.error ?? "Something went wrong. Please call us directly."
        );
        return;
      }
      clearTimeout(timeout);
      trackConversion("lead_form_submit", { timeline: data.timeline });
      router.push("/thank-you");
    } catch {
      clearTimeout(timeout);
      setSubmitError(
        "Connection error. Please call us directly so we don't lose you."
      );
    }
  };

  const cardClass =
    variant === "hero"
      ? "relative bg-white p-6 md:p-8 border border-[var(--color-ink)]"
      : "relative bg-white p-6 md:p-8 border border-[var(--color-ink)]";

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit(onSubmit)}
      className={cardClass}
      noValidate
    >
      {/* Filing card header */}
      <div className="flex items-end justify-between mb-6 pb-4 border-b border-[var(--color-ink)]">
        <div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Seller Intake &middot; Form 01
          </p>
          <p className="font-[var(--font-display)] text-lg text-[var(--color-ink)] mt-0.5">
            Part {step} of 3
          </p>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={`h-2 w-6 ${
                n <= step
                  ? "bg-[var(--color-accent)]"
                  : "bg-[var(--color-border)]"
              }`}
            />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-[var(--font-display)] text-[var(--color-ink)]">
            What&apos;s the property address?
          </h3>
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <AddressAutocomplete
                value={field.value}
                onChange={(addr, parts) => {
                  field.onChange(addr);
                  if (parts) {
                    setValue("city", parts.city);
                    setValue("state", parts.state);
                    setValue("zip", parts.zip);
                  }
                }}
                error={errors.address?.message}
              />
            )}
          />
          <Button
            type="button"
            variant="accent"
            size="lg"
            className="w-full"
            onClick={goNext}
          >
            Continue <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-xs text-[var(--color-muted)] text-center">
            Takes 60 seconds. No fees. No obligation.
          </p>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-[var(--font-display)] text-[var(--color-ink)]">
            Tell us a little about your situation.
          </h3>
          <Select
            label="Timeline"
            placeholder="Pick a timeline"
            options={TIMELINE_OPTIONS}
            error={errors.timeline?.message}
            {...register("timeline")}
          />
          <Select
            label="What&rsquo;s going on with the house?"
            placeholder="Pick the closest fit"
            options={SITUATION_OPTIONS}
            error={errors.situation?.message}
            {...register("situation")}
          />
          <div className="flex gap-3">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => setStep(1)}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            <Button type="button" variant="accent" size="lg" className="flex-1" onClick={goNext}>
              Continue <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-xl font-[var(--font-display)] text-[var(--color-ink)]">
            Where should we send the offer?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="First name"
              autoComplete="given-name"
              error={errors.first_name?.message}
              {...register("first_name")}
            />
            <Input
              label="Last name"
              autoComplete="family-name"
              error={errors.last_name?.message}
              {...register("last_name")}
            />
          </div>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <Input
                label="Phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={field.value ?? ""}
                onChange={(e) => field.onChange(formatPhoneInput(e.target.value))}
                onBlur={field.onBlur}
                error={errors.phone?.message}
              />
            )}
          />
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            inputMode="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <label className="flex items-start gap-2 text-xs text-[var(--color-muted)] leading-relaxed cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 w-4 h-4 accent-[var(--color-primary)]"
              {...register("consent_sms")}
            />
            <span>
              I agree to receive texts and calls from Covenant Homes Philly at
              the number provided, including via automated means. Message/data
              rates may apply. Reply STOP to opt out. Consent is not a condition
              of sale.
            </span>
          </label>
          {errors.consent_sms && (
            <p className="text-sm text-[var(--color-error)]" role="alert">
              {errors.consent_sms.message}
            </p>
          )}
          {submitError && (
            <p
              className="text-sm text-[var(--color-error)] bg-red-50 rounded p-3"
              role="alert"
            >
              {submitError}
            </p>
          )}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => setStep(2)}
              disabled={isSubmitting}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
                </>
              ) : (
                "Get My Cash Offer"
              )}
            </Button>
          </div>
          <p className="text-[11px] text-[var(--color-muted)] leading-relaxed">
            We comply with FinCEN beneficial ownership reporting requirements in
            partnership with our title company. Equal Housing Opportunity. We
            don&apos;t discriminate based on protected class.
          </p>
        </div>
      )}
    </form>
  );
}
