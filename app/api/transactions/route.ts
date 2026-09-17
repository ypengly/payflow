import { NextRequest, NextResponse } from "next/server";
import { transactions } from "@/lib/data";

// GET /api/transactions?query=alex&status=Successful
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = (searchParams.get("query") ?? "").toLowerCase();
  const status = searchParams.get("status");

  const results = transactions.filter((tx) => {
    const matchesQuery =
      tx.customer.toLowerCase().includes(query) || tx.id.toLowerCase().includes(query);
    const matchesStatus = !status || status === "All" || tx.status === status;
    return matchesQuery && matchesStatus;
  });

  return NextResponse.json({ data: results, count: results.length });
}
