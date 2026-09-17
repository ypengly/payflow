"use client";

import { useState } from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { revenueSeries, transactions, overviewStats } from "@/lib/data";

const RANGES = ["Daily", "Weekly", "Monthly", "Yearly"];

export function DashboardPreviewSection() {
  const [range, setRange] = useState("Monthly");

  return (
    <section className="py-20 bg-surface-alt border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-px bg-accent" />
          <span className="text-sm text-muted">Dashboard</span>
        </div>
        <h2 className="font-serif text-3xl text-text mb-10 max-w-lg">
          One view of your entire business
        </h2>
        <Card className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {Object.entries({
              Balance: overviewStats.balance,
              Revenue: overviewStats.revenue,
              "Successful payments": overviewStats.successfulPayments,
              Refunds: overviewStats.refunds,
            }).map(([label, value]) => (
              <div key={label}>
                <div className="text-xs text-faint mb-1">{label}</div>
                <div className="font-mono text-xl text-text">{value}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted">Revenue</span>
            <div className="flex gap-1">
              {RANGES.map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`text-xs px-2.5 py-1 rounded ${
                    range === r ? "bg-accent text-on-accent" : "text-faint"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueSeries}>
              <defs>
                <linearGradient id="prevGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Area type="monotone" dataKey="v" stroke="rgb(var(--accent))" strokeWidth={2} fill="url(#prevGrad)" />
            </AreaChart>
          </ResponsiveContainer>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-faint border-b border-border">
                  <th className="text-left font-normal py-2">Customer</th>
                  <th className="text-right font-normal py-2">Amount</th>
                  <th className="text-left font-normal py-2 pl-6">Status</th>
                  <th className="text-left font-normal py-2 pl-6">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.slice(0, 4).map((tx) => (
                  <tr key={tx.id} className="border-b border-border-soft last:border-0">
                    <td className="py-3 text-text">{tx.customer}</td>
                    <td className="py-3 text-right font-mono text-text">${tx.amount.toFixed(2)}</td>
                    <td className="py-3 pl-6">
                      <StatusBadge status={tx.status} />
                    </td>
                    <td className="py-3 pl-6 text-faint">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}
