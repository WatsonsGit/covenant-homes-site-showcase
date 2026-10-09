/**
 * Email sending via Resend. Tracey Cooper auto-response lives here.
 * Tracey ALWAYS identifies herself as AI (CLAUDE.md hard rule).
 */

import { BRAND, PHONE_DISPLAY } from "./utils";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TRACEY_FROM = process.env.TRACEY_FROM_EMAIL ?? "tracey@covenanthomesphilly.com";

interface SendArgs {
  to: string;
  subject: string;
  html: string;
  text: string;
  fromName?: string;
  fromEmail?: string;
  replyTo?: string;
}

export async function sendEmail(args: SendArgs): Promise<{ ok: boolean; error?: string }> {
  if (!RESEND_API_KEY) {
    console.warn("[email] RESEND_API_KEY not set — skipping send");
    return { ok: false, error: "no_api_key" };
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${args.fromName ?? "Tracey Cooper"} <${args.fromEmail ?? TRACEY_FROM}>`,
        to: args.to,
        subject: args.subject,
        html: args.html,
        text: args.text,
        reply_to: args.replyTo ?? BRAND.email,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      return { ok: false, error: `Resend ${res.status}: ${body}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}

export async function sendTraceyWelcome(args: {
  firstName: string;
  email: string;
  address: string;
}): Promise<{ ok: boolean; error?: string }> {
  const subject = `Hi ${args.firstName} — confirming your cash offer request`;

  const html = `<!doctype html>
<html>
<body style="font-family: Georgia, 'Times New Roman', serif; color: #0A0A0A; max-width: 600px; margin: 0 auto; padding: 40px 24px; line-height: 1.65;">
  <p style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; color: #B8A055; margin: 0 0 8px 0;">
    — Covenant Homes Philly
  </p>
  <h1 style="font-size: 26px; font-weight: 500; margin: 0 0 24px 0; letter-spacing: -0.01em;">
    Hi ${args.firstName} — we got your message.
  </h1>
  <hr style="border: none; border-top: 1px solid #B8A055; max-width: 80px; margin: 0 0 24px 0;" />
  <p style="font-size: 16px; color: #3A3936; margin: 0 0 16px 0;">
    This is Tracey Cooper writing. I'm Covenant Homes Philly's Transactions Coordinator, and I should tell you right upfront: <strong>I'm an AI system, not a human.</strong> I handle scheduling, document prep, and coordination with our title company so Watson can focus on the actual offer and the closing.
  </p>
  <p style="font-size: 16px; color: #3A3936; margin: 0 0 16px 0;">
    Here's what happens next:
  </p>
  <ol style="font-size: 16px; color: #3A3936; margin: 0 0 20px 20px; padding: 0;">
    <li style="margin-bottom: 10px;"><strong>Within 24 hours</strong>, Watson Saintsulne will personally call you about <strong>${args.address}</strong>.</li>
    <li style="margin-bottom: 10px;"><strong>He'll walk you through the numbers</strong> — the after-repair value, the repair estimate, the formula, and the offer amount.</li>
    <li style="margin-bottom: 10px;"><strong>If our offer works for you</strong>, you sign online through DocuSign. You pick the close date.</li>
    <li style="margin-bottom: 10px;"><strong>If we're not the right fit</strong>, Watson will tell you honestly and point you toward someone who is.</li>
  </ol>
  <p style="font-size: 16px; color: #3A3936; margin: 0 0 16px 0;">
    If you'd rather talk before Watson calls, you can reach him at <a href="tel:${BRAND.email}" style="color: #0A0A0A; border-bottom: 2px solid #B8A055; text-decoration: none;">${PHONE_DISPLAY}</a> or reply to this email.
  </p>
  <p style="font-size: 16px; font-style: italic; color: #7B6A30; margin: 24px 0 0 0; font-family: Georgia, serif;">
    — Tracey Cooper (AI)<br>
    <span style="font-style: normal; font-size: 13px; color: #6B6660;">Transactions Coordinator · Covenant Homes Philly</span>
  </p>
  <hr style="border: none; border-top: 1px solid #E8E3D5; margin: 32px 0 16px 0;" />
  <p style="font-family: monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #6B6660; margin: 0;">
    ${BRAND.legalName}<br>
    ${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.region} ${BRAND.address.postalCode}<br>
    Reply STOP to opt out of future messages.
  </p>
</body>
</html>`;

  const text = `Hi ${args.firstName},

This is Tracey Cooper writing. I'm Covenant Homes Philly's Transactions Coordinator, and I should tell you right upfront: I'm an AI system, not a human. I handle scheduling, document prep, and coordination with our title company so Watson can focus on the actual offer and the closing.

Here's what happens next:

1. Within 24 hours, Watson Saintsulne will personally call you about ${args.address}.
2. He'll walk you through the numbers — the after-repair value, the repair estimate, the formula, and the offer amount.
3. If our offer works for you, you sign online through DocuSign. You pick the close date.
4. If we're not the right fit, Watson will tell you honestly and point you toward someone who is.

If you'd rather talk before Watson calls, you can reach him at ${PHONE_DISPLAY} or reply to this email.

— Tracey Cooper (AI)
Transactions Coordinator · Covenant Homes Philly

${BRAND.legalName}
${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.region} ${BRAND.address.postalCode}
Reply STOP to opt out of future messages.`;

  return sendEmail({
    to: args.email,
    subject,
    html,
    text,
    fromName: "Tracey Cooper",
    fromEmail: TRACEY_FROM,
    replyTo: BRAND.email,
  });
}
