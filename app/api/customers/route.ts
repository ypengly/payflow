import { NextRequest, NextResponse } from "next/server";
import { customers } from "@/lib/data";

// GET /api/customers?query=alex
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = (searchParams.get("query") ?? "").toLowerCase();

  const results = customers.filter((c) => c.name.toLowerCase().includes(query));
  return NextResponse.json({ data: results, count: results.length });
}
