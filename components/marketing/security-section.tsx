import { Lock, ShieldCheck, KeyRound, Users, Code2, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ITEMS = [
  { icon: Lock, title: "Encryption", desc: "All data encrypted in transit and at rest with rotating keys." },
  { icon: ShieldCheck, title: "Fraud detection", desc: "Automated pattern analysis flags suspicious activity in real time." },
  { icon: KeyRound, title: "Secure authentication", desc: "Multi-factor authentication enforced for every account." },
  { icon: Users, title: "Role-based access", desc: "Granular permissions across your entire team." },
  { icon: Code2, title: "API security", desc: "Signed requests, scoped keys, and IP allow-listing." },
  { icon: FileText, title: "Audit logs", desc: "Every action recorded and retained for compliance review." },
];

const RISK_ROWS = [
  { label: "Transaction risk score", value: 12, suffix: "/100", color: "bg-accent" },
  { label: "Card testing attempts blocked", value: 47, suffix: "", color: "bg-accent2" },
  { label: "Flagged for manual review", value: 3, suffix: "", color: "bg-warning" },
];

export function SecuritySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-px bg-accent" />
          <span className="text-sm text-muted">Security</span>
        </div>
        <h2 className="font-serif text-3xl text-text mb-5 max-w-sm">
          Security built into every transaction.
        </h2>
        <p className="text-muted mb-6 max-w-sm">
          PayFlow is built on infrastructure designed for financial institutions, so trust is never
          an afterthought.
        </p>
        <Badge tone="accent">Enterprise-grade security</Badge>
        <div className="grid grid-cols-2 gap-5 mt-10">
          {ITEMS.map((it) => (
            <div key={it.title} className="flex gap-3">
              <it.icon size={16} className="text-accent mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-medium text-text">{it.title}</div>
                <div className="text-xs text-faint mt-0.5">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm text-muted">Risk monitor</span>
          <Badge tone="accent">Active</Badge>
        </div>
        {RISK_ROWS.map((row) => (
          <div key={row.label} className="mb-5 last:mb-0">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-muted">{row.label}</span>
              <span className="font-mono text-text">
                {row.value}
                {row.suffix}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-surface-alt">
              <div
                className={`h-1.5 rounded-full ${row.color}`}
                style={{ width: `${Math.min(row.value, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}
