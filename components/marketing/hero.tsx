"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { revenueSeries } from "@/lib/data";

function HeroPreview() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm text-muted">Balance</span>
        <Badge tone="accent">Live</Badge>
      </div>
      <div className="font-mono text-3xl text-text mb-1">$128,430.52</div>
      <div className="flex items-center gap-1 text-sm text-accent mb-6">
        <ArrowUpRight size={14} /> 4.8% from last week
      </div>
      <div className="pt-4 border-t border-border-soft">
        <ResponsiveContainer width="100%" height={110}>
          <AreaChart data={revenueSeries}>
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity={0.35} />
                <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="v"
              stroke="rgb(var(--accent))"
              strokeWidth={2}
              fill="url(#heroGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { label: "Payment received", sub: "Sarah Kim · $1,240.00", icon: CheckCircle2, tone: "text-accent" },
          { label: "Transaction pending", sub: "Michael Chen · $85.00", icon: Clock, tone: "text-warning" },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2 rounded-md px-3 py-2 bg-surface-alt">
            <row.icon size={14} className={row.tone} />
            <div>
              <div className="text-sm text-text">{row.label}</div>
              <div className="text-xs text-faint">{row.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-text mb-6">
          Payments infrastructure built for modern businesses.
        </h1>
        <p className="text-lg text-muted mb-8 max-w-md">
          Accept payments, manage transactions, automate financial workflows, and understand your
          business from one powerful platform.
        </p>
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button>
              Get Started <ArrowRight size={15} />
            </Button>
          </Link>
          <Button variant="outline">View Demo</Button>
        </div>
        <div className="flex items-center gap-6 mt-10 text-sm text-faint">
          <span>99.99% uptime</span>
          <span className="w-1 h-1 rounded-full bg-faint" />
          <span>PCI DSS Level 1</span>
          <span className="w-1 h-1 rounded-full bg-faint" />
          <span>SOC 2 Type II</span>
        </div>
      </div>
      <HeroPreview />
    </section>
  );
}
