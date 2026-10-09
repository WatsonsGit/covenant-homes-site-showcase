import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";
import { submitLead, toReplicaPayload } from "@/lib/replica";
import { sendTraceyWelcome } from "@/lib/email";

export const runtime = "nodejs";

interface RequestBody {
  lead: unknown;
  utm?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  };
}

export async function POST(req: Request) {
  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body.lead);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please double-check the form",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // TODO: rate limit by IP, honeypot field
  const lead = parsed.data;
  const payload = toReplicaPayload(lead, body.utm ?? {});
  const result = await submitLead(payload);

  if (!result.ok) {
    // TODO: push to retry queue (Vercel KV) per SITE-SPEC.md §4
    console.error("[lead] Replica webhook failed:", result.error);
    return NextResponse.json(
      { error: "We couldn't submit right now. Please call us." },
      { status: 502 }
    );
  }

  // Fire Tracey welcome + notify in parallel (non-blocking to user)
  const origin = new URL(req.url).origin;
  Promise.all([
    sendTraceyWelcome({
      firstName: lead.first_name,
      email: lead.email,
      address: lead.address,
    }).catch((e) => console.error("[tracey] failed:", e)),
    fetch(`${origin}/api/notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lead, ids: result }),
    }).catch((e) => console.error("[notify] failed:", e)),
  ]);

  return NextResponse.json(
    {
      ok: true,
      contact_id: result.contact_id,
      deal_id: result.deal_id,
    },
    { status: 201 }
  );
}
