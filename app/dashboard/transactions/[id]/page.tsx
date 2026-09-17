import { notFound } from "next/navigation";
import { Topbar } from "@/components/dashboard/topbar";
import { getTransactionById } from "@/lib/data";
import { RefundButton } from "./refund-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Card } from "@/components/ui/card";

const TIMELINE = ["Payment created", "Payment processing", "Risk check passed", "Payment successful"];

export default function TransactionDetailPage({ params }: { params: { id: string } }) {
  const tx = getTransactionById(params.id);
  if (!tx) notFound();

  return (
    <>
      <Topbar title="Transaction detail" />
      <div className="flex-1 overflow-y-auto p-6 max-w-2xl">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs text-faint mb-1">Transaction</div>
              <div className="font-mono text-lg text-text">{tx.id}</div>
            </div>
            <StatusBadge status={tx.status} />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            {[
              ["Amount", `$${tx.amount.toFixed(2)}`],
              ["Customer", tx.customer],
              ["Payment method", tx.method],
              ["Risk score", `${tx.riskScore} / 100`],
              ["Created", tx.date],
              ["Currency", tx.currency],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-xs text-faint mb-0.5">{k}</div>
                <div className="text-text">{v}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-5 mb-6">
            <div className="text-xs text-faint mb-4">Timeline</div>
            <div className="space-y-4">
              {TIMELINE.map((step) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <RefundButton id={tx.id} disabled={tx.status === "Refunded"} />
        </Card>
      </div>
    </>
  );
}
