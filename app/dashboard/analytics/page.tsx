import { Topbar } from "@/components/dashboard/topbar";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card } from "@/components/ui/card";
import { RevenueLineChart } from "@/components/dashboard/revenue-chart";
import { PaymentMethodsChart } from "@/components/dashboard/payment-methods-chart";
import { analyticsStats } from "@/lib/data";

export default function AnalyticsPage() {
  return (
    <>
      <Topbar title="Analytics" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Revenue growth" value={analyticsStats.revenueGrowth} delta="vs last month" />
          <StatCard label="Payment success rate" value={analyticsStats.successRate} delta="0.4pt" />
          <StatCard label="Customer growth" value={analyticsStats.customerGrowth} delta="9.1% this month" />
          <StatCard label="Avg. transaction value" value={analyticsStats.avgTransactionValue} delta="2.3% this month" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 md:col-span-2">
            <div className="text-sm text-muted mb-4">Revenue by month</div>
            <RevenueLineChart />
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted mb-4">Payment methods</div>
            <PaymentMethodsChart />
          </Card>
        </div>
      </div>
    </>
  );
}
