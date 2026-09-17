import { NextRequest, NextResponse } from "next/server";
import { webhookEvents } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ data: webhookEvents });
}

// POST /api/webhooks  { id: "evt_A804", action: "retry" }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const event = webhookEvents.find((e) => e.id === body.id);
  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }
  return NextResponse.json({ data: { ...event, status: "Delivered", attempts: event.attempts + 1 }, message: "Retry simulated in sandbox mode." });
}
