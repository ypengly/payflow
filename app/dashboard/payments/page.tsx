import { Topbar } from "@/components/dashboard/topbar";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import { transactions } from "@/lib/data";

export default function PaymentsPage() {
  return (
    <>
      <Topbar title="Payments" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Successful payments" value="12,482" delta="6.1% this month" />
          <StatCard label="Pending" value="184" />
          <StatCard label="Failed" value="62" delta="0.9%" positive={false} />
          <StatCard label="Refunded" value="$4,230.10" positive={false} />
        </div>

        <Card>
          <div className="px-4 py-3 text-sm text-muted border-b border-border">All payments</div>
          <Table>
            <THead>
              <Tr>
                <Th>Customer</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Method</Th>
                <Th>Date</Th>
              </Tr>
            </THead>
            <TBody>
              {transactions.map((tx) => (
                <Tr key={tx.id}>
                  <Td>{tx.customer}</Td>
                  <Td className="font-mono">${tx.amount.toFixed(2)}</Td>
                  <Td>
                    <StatusBadge status={tx.status} />
                  </Td>
                  <Td className="text-faint">{tx.method}</Td>
                  <Td className="text-faint whitespace-nowrap">{tx.date}</Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </Card>
      </div>
    </>
  );
}
