import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface NotifyBody {
  lead: {
    first_name: string;
    last_name: string;
    address: string;
    phone: string;
    email: string;
    timeline: string;
    situation: string;
  };
  ids: { contact_id?: string; deal_id?: string };
}

const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(req: Request) {
  const body = (await req.json()) as NotifyBody;
  const { lead, ids } = body;
  const line = `New lead: ${lead.first_name} ${lead.last_name} — ${lead.address} — ${lead.situation} / ${lead.timeline} — ${lead.phone}`;

  const tasks: Promise<unknown>[] = [];

  if (SLACK_WEBHOOK) {
    tasks.push(
      fetch(SLACK_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🏠 ${line}\nReplica deal: ${ids.deal_id ?? "—"}`,
        }),
      }).catch((e) => console.error("[slack] failed:", e))
    );
  }

  if (RESEND_API_KEY && NOTIFICATION_EMAIL) {
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "leads@covenanthomesphilly.com",
          to: NOTIFICATION_EMAIL,
          subject: `New lead: ${lead.first_name} ${lead.last_name} — ${lead.situation}`,
          text: `${line}\n\nEmail: ${lead.email}\nReplica deal: ${ids.deal_id ?? "—"}`,
        }),
      }).catch((e) => console.error("[resend] failed:", e))
    );
  }

  await Promise.allSettled(tasks);
  return NextResponse.json({ ok: true });
}
