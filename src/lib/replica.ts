import type { LeadInput, ReplicaPayload } from "./validation";

const REPLICA_WEBHOOK_URL = process.env.REPLICA_WEBHOOK_URL;
const MOCK_REPLICA = process.env.MOCK_REPLICA === "true";

export interface ReplicaResponse {
  ok: boolean;
  contact_id?: string;
  property_id?: string;
  deal_id?: string;
  error?: string;
}

interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

/** Build the canonical Replica payload from a validated lead. */
export function toReplicaPayload(
  lead: LeadInput,
  utm: UtmParams = {}
): ReplicaPayload {
  return {
    name: `${lead.first_name} ${lead.last_name}`.trim(),
    first_name: lead.first_name,
    phone: lead.phone,
    email: lead.email,
    address: lead.address,
    city: lead.city || "Philadelphia",
    state: lead.state || "PA",
    zip: lead.zip || undefined,
    timeline: lead.timeline,
    situation: lead.situation,
    source: "covenanthomesphilly.com",
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
  };
}

/**
 * POST a lead to Replica's webhook. In dev with MOCK_REPLICA=true, returns
 * a simulated success response and never hits the network.
 *
 * HARD RULE (CLAUDE.md #7): never submit test leads to the live endpoint.
 */
export async function submitLead(
  payload: ReplicaPayload
): Promise<ReplicaResponse> {
  if (MOCK_REPLICA || !REPLICA_WEBHOOK_URL) {
    return {
      ok: true,
      contact_id: "mock-contact-" + Date.now(),
      property_id: "mock-property-" + Date.now(),
      deal_id: "mock-deal-" + Date.now(),
    };
  }

  try {
    const res = await fetch(REPLICA_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Webhook should respond fast; cap at 8s
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      return { ok: false, error: `Replica responded ${res.status}` };
    }

    const json = (await res.json()) as {
      data?: { contact_id?: string; property_id?: string; deal_id?: string };
    };
    return {
      ok: true,
      contact_id: json.data?.contact_id,
      property_id: json.data?.property_id,
      deal_id: json.data?.deal_id,
    };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown webhook error",
    };
  }
}
