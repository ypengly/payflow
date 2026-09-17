import { NextRequest, NextResponse } from "next/server";
import { getTransactionById } from "@/lib/data";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const tx = getTransactionById(params.id);
  if (!tx) {
    return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
  }
  return NextResponse.json({ data: tx });
}

// POST /api/transactions/[id]  { action: "refund" }
// Sandbox mode: does not move real money, only simulates a status change.
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const tx = getTransactionById(params.id);
  if (!tx) {
    return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
  }
  const body = await req.json().catch(() => ({}));
  if (body.action === "refund") {
    return NextResponse.json({ data: { ...tx, status: "Refunded" }, message: "Refund simulated in sandbox mode." });
  }
  return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
}
