"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { paymentMethodSplit } from "@/lib/data";

const COLORS = ["rgb(var(--accent))", "rgb(var(--accent-2))", "rgb(var(--warning))"];

export function PaymentMethodsChart({ height = 180 }: { height?: number }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie data={paymentMethodSplit} dataKey="value" nameKey="name" innerRadius={45} outerRadius={70} paddingAngle={2}>
            {paymentMethodSplit.map((entry, i) => (
              <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "rgb(var(--surface))",
              border: "1px solid rgb(var(--border))",
              borderRadius: 6,
              fontSize: 12,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 mt-2">
        {paymentMethodSplit.map((d, i) => (
          <div key={d.name} className="flex items-center gap-1.5 text-xs text-muted">
            <span className="w-2 h-2 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
            {d.name}
          </div>
        ))}
      </div>
    </>
  );
}
