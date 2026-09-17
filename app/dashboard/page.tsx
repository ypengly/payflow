import { Topbar } from "@/components/dashboard/topbar";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { RevenueAreaChart } from "@/components/dashboard/revenue-chart";
import { VolumeBarChart } from "@/components/dashboard/volume-chart";
import { transactions, overviewStats } from "@/lib/data";

export default function OverviewPage() {
  return (
    <>
      <Topbar title="Overview" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Balance" value={overviewStats.balance} delta="4.8% this week" />
          <StatCard label="Revenue" value={overviewStats.revenue} delta="24.8% this month" />
          <StatCard label="Successful payments" value={overviewStats.successfulPayments} delta="6.1% this month" />
          <StatCard label="Refunds" value={overviewStats.refunds} delta="1.2% this month" positive={false} />
        </div>

        <Card className="p-6">
          <div className="text-sm text-muted mb-4">Revenue</div>
          <RevenueAreaChart />
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="text-sm text-muted mb-4">Payment volume this week</div>
            <VolumeBarChart />
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted mb-4">Recent transactions</div>
            <div className="space-y-1">
              {transactions.slice(0, 5).map((tx) => (
                <div key={tx.id} className="flex items-center justify-between py-2 border-b border-border-soft last:border-0">
                  <div>
                    <div className="text-sm text-text">{tx.customer}</div>
                    <div className="text-xs text-faint">{tx.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm text-text">${tx.amount.toFixed(2)}</div>
                    <StatusBadge status={tx.status} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
