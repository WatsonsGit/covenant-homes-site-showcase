import { NextResponse } from "next/server";
import { verifyCronAuth } from "../_auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!verifyCronAuth(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  // TODO: draft blog post from content/blog-backlog.json → write MDX → open PR
  return NextResponse.json({ ok: true, status: "stub" });
}
