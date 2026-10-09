import { NextResponse } from "next/server";
import { verifyCronAuth } from "../_auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!verifyCronAuth(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  // TODO: pull recent leads from Replica, validate, retry webhook failures
  return NextResponse.json({ ok: true, status: "stub" });
}
