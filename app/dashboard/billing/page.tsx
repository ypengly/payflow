import { Download } from "lucide-react";
import { Topbar } from "@/components/dashboard/topbar";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TBody, Tr, Td } from "@/components/ui/table";
import { invoices } from "@/lib/data";

export default function BillingPage() {
  return (
    <>
      <Topbar title="Billing" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <Card className="p-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs text-faint mb-1">Current plan</div>
            <div className="font-serif text-2xl text-text">Growth</div>
            <div className="text-sm text-faint mt-1">$49/month · renews Oct 2, 2026</div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Change plan</Button>
            <Button variant="ghost">Cancel</Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <StatCard label="Transactions this cycle" value="4,281 / Unlimited" />
          <StatCard label="API calls this cycle" value="128,904" />
          <StatCard label="Payment method" value="Visa •••• 4242" />
        </div>

        <Card>
          <div className="px-4 py-3 text-sm text-muted border-b border-border">Invoices</div>
          <Table>
            <TBody>
              {invoices.map((inv) => (
                <Tr key={inv.id}>
                  <Td className="font-mono text-faint">{inv.id}</Td>
                  <Td>{inv.period}</Td>
                  <Td className="font-mono">{inv.amount}</Td>
                  <Td>
                    <Badge tone="accent">{inv.status}</Badge>
                  </Td>
                  <Td className="text-right">
                    <button className="inline-flex items-center gap-1 text-accent2">
                      <Download size={13} /> Download
                    </button>
                  </Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </Card>
      </div>
    </>
  );
}
