"use client";

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { dailyVolume } from "@/lib/data";

export function VolumeBarChart({ height = 180 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={dailyVolume}>
        <CartesianGrid stroke="rgb(var(--border))" vertical={false} />
        <XAxis dataKey="d" stroke="rgb(var(--faint))" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="rgb(var(--faint))" fontSize={12} tickLine={false} axisLine={false} width={40} />
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
  );
}
