import Link from "next/link";
import { KeyRound, Webhook, FileText, Code2, ArrowRight } from "lucide-react";
import { Topbar } from "@/components/dashboard/topbar";
import { Card } from "@/components/ui/card";

const LINKS = [
  { href: "/dashboard/api-keys", label: "API Keys", desc: "Create and manage live and test keys.", icon: KeyRound },
  { href: "/dashboard/webhooks", label: "Webhooks", desc: "Monitor event delivery and retries.", icon: Webhook },
  { href: "/dashboard/audit-logs", label: "Audit Logs", desc: "Review every account action.", icon: FileText },
];

export default function DevelopersPage() {
  return (
    <>
      <Topbar title="Developers" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <Card className="p-5 h-full hover:border-accent transition-colors">
                <l.icon size={18} className="text-accent mb-3" />
                <div className="text-text font-medium mb-1">{l.label}</div>
                <div className="text-xs text-faint">{l.desc}</div>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Code2 size={15} /> Quickstart
            </div>
            <span className="text-xs text-faint font-mono">node.js</span>
          </div>
          <pre className="p-5 text-sm overflow-x-auto font-mono text-text leading-relaxed">
{`import PayFlow from "payflow-node";

const payflow = new PayFlow(process.env.PAYFLOW_SECRET_KEY);

const payment = await payflow.payments.create({
  amount: 2500,
  currency: "USD",
  customer: "cus_123",
});`}
          </pre>
        </Card>

        <Link href="#" className="inline-flex items-center gap-1 text-sm text-accent2">
          Read the full documentation <ArrowRight size={14} />
        </Link>
      </div>
    </>
  );
}
