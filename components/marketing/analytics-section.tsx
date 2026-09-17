import { TrendingUp } from "lucide-react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";
import { revenueSeries, analyticsStats } from "@/lib/data";

export function AnalyticsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-px bg-accent" />
        <span className="text-sm text-muted">Analytics</span>
      </div>
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <h2 className="font-serif text-3xl text-text max-w-sm">
          Know exactly where your business stands
        </h2>
        <div className="flex items-center gap-1 text-sm text-accent">
          <TrendingUp size={15} /> {analyticsStats.revenueGrowth} this month
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 md:col-span-2">
          <div className="text-sm text-muted mb-4">Revenue growth</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={revenueSeries}>
              <CartesianGrid stroke="rgb(var(--border))" vertical={false} />
              <XAxis dataKey="m" stroke="rgb(var(--faint))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="rgb(var(--faint))" fontSize={12} tickLine={false} axisLine={false} width={44} />
              <Tooltip
                contentStyle={{
                  background: "rgb(var(--surface))",
                  border: "1px solid rgb(var(--border))",
                  borderRadius: 6,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="v" fill="rgb(var(--accent-2))" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <div className="flex flex-col gap-6">
          {[
            { label: "Payment success rate", value: analyticsStats.successRate },
            { label: "Customer growth", value: analyticsStats.customerGrowth },
            { label: "Avg. transaction value", value: analyticsStats.avgTransactionValue },
          ].map((s) => (
            <Card className="p-5" key={s.label}>
              <div className="text-xs text-faint mb-1">{s.label}</div>
              <div className="font-mono text-2xl text-text">{s.value}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
