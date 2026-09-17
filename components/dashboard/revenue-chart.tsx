"use client";

import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { revenueSeries } from "@/lib/data";

const tooltipStyle = {
  background: "rgb(var(--surface))",
  border: "1px solid rgb(var(--border))",
  borderRadius: 6,
  fontSize: 12,
};

export function RevenueAreaChart({ height = 240 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={revenueSeries}>
        <defs>
          <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity={0.3} />
            <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgb(var(--border))" vertical={false} />
        <XAxis dataKey="m" stroke="rgb(var(--faint))" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="rgb(var(--faint))" fontSize={12} tickLine={false} axisLine={false} width={48} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="v" stroke="rgb(var(--accent))" strokeWidth={2} fill="url(#revGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function RevenueLineChart({ height = 220 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={revenueSeries}>
        <CartesianGrid stroke="rgb(var(--border))" vertical={false} />
        <XAxis dataKey="m" stroke="rgb(var(--faint))" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="rgb(var(--faint))" fontSize={12} tickLine={false} axisLine={false} width={48} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="v" stroke="rgb(var(--accent))" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
