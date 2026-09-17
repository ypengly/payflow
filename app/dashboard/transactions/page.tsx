"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, Download } from "lucide-react";
import { Topbar } from "@/components/dashboard/topbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import { TableSkeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { useToast } from "@/components/ui/toast";
import type { Transaction } from "@/types";

const STATUSES = ["All", "Successful", "Pending", "Failed", "Refunded"];

export default function TransactionsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [rows, setRows] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const params = new URLSearchParams({ query, status });
    fetch(`/api/transactions?${params}`, { signal: controller.signal })
      .then((r) => r.json())
      .then((json) => setRows(json.data ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [query, status]);

  function exportCsv() {
    const header = "Transaction ID,Customer,Amount,Status,Method,Date\n";
    const body = rows
      .map((tx) => `${tx.id},${tx.customer},${tx.amount},${tx.status},${tx.method},${tx.date}`)
      .join("\n");
    const blob = new Blob([header + body], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast("Exported " + rows.length + " transactions to CSV.");
  }

  return (
    <>
      <Topbar title="Transactions" />
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-surface flex-1 min-w-[200px]">
            <Search size={15} className="text-faint" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by customer or transaction ID"
            />
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="text-sm px-3 py-2 rounded-md outline-none bg-surface border border-border text-text"
          >
            {STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <Button variant="subtle">
            <SlidersHorizontal size={14} /> Date range
          </Button>
          <Button variant="outline" onClick={exportCsv}>
            <Download size={14} /> Export CSV
          </Button>
        </div>

        <Card>
          {loading ? (
            <TableSkeleton rows={6} cols={6} />
          ) : rows.length === 0 ? (
            <EmptyState
              icon={Search}
              title="No transactions found"
              description="Try adjusting your search or status filter."
            />
          ) : (
            <Table>
              <THead>
                <Tr>
                  <Th>Transaction ID</Th>
                  <Th>Customer</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                  <Th>Method</Th>
                  <Th>Date</Th>
                  <Th />
                </Tr>
              </THead>
              <TBody>
                {rows.map((tx) => (
                  <Tr key={tx.id}>
                    <Td className="font-mono text-muted">{tx.id}</Td>
                    <Td>{tx.customer}</Td>
                    <Td className="font-mono">${tx.amount.toFixed(2)}</Td>
                    <Td>
                      <StatusBadge status={tx.status} />
                    </Td>
                    <Td className="text-faint">{tx.method}</Td>
                    <Td className="text-faint whitespace-nowrap">{tx.date}</Td>
                    <Td className="text-right">
                      <Link href={`/dashboard/transactions/${tx.id}`} className="text-accent2">
                        View
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          )}
        </Card>
      </div>
    </>
  );
}
