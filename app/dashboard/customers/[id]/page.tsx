import { notFound } from "next/navigation";
import { Topbar } from "@/components/dashboard/topbar";
import { getCustomerById, transactions } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import type { CustomerStatus } from "@/types";

const STATUS_TONE: Record<CustomerStatus, "accent" | "danger" | "warning"> = {
  Active: "accent",
  Disputed: "danger",
  "At risk": "warning",
};

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  const customer = getCustomerById(params.id);
  if (!customer) notFound();

  const customerTransactions = transactions.filter((tx) => tx.customer === customer.name);

  return (
    <>
      <Topbar title="Customer detail" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-3xl">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs text-faint mb-1">Customer</div>
              <div className="text-lg text-text">{customer.name}</div>
              <div className="text-sm text-faint">{customer.email}</div>
            </div>
            <Badge tone={STATUS_TONE[customer.status]}>{customer.status}</Badge>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-xs text-faint mb-0.5">Total spent</div>
              <div className="font-mono text-text">${customer.spent.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-xs text-faint mb-0.5">Transactions</div>
              <div className="text-text">{customer.txns}</div>
            </div>
            <div>
              <div className="text-xs text-faint mb-0.5">Last payment</div>
              <div className="text-text">{customer.last}</div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="px-4 py-3 text-sm text-muted border-b border-border">Payment history</div>
          <Table>
            <THead>
              <Tr>
                <Th>Transaction ID</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Date</Th>
              </Tr>
            </THead>
            <TBody>
              {customerTransactions.length === 0 ? (
                <Tr>
                  <Td colSpan={4} className="text-center text-faint py-8">
                    No transactions on record for this customer.
                  </Td>
                </Tr>
              ) : (
                customerTransactions.map((tx) => (
                  <Tr key={tx.id}>
                    <Td className="font-mono text-muted">{tx.id}</Td>
                    <Td className="font-mono">${tx.amount.toFixed(2)}</Td>
                    <Td>
                      <StatusBadge status={tx.status} />
                    </Td>
                    <Td className="text-faint">{tx.date}</Td>
                  </Tr>
                ))
              )}
            </TBody>
          </Table>
        </Card>
      </div>
    </>
  );
}
