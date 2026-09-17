import { CreditCard, Activity, Users, BarChart3, ShieldCheck, Code2 } from "lucide-react";

const FEATURES = [
  { icon: CreditCard, title: "Payments", desc: "Accept and manage customer payments across cards, bank transfers, and wallets." },
  { icon: Activity, title: "Transactions", desc: "Track every transaction in real time, from authorization to settlement." },
  { icon: Users, title: "Customers", desc: "Manage customers and their full payment history in one place." },
  { icon: BarChart3, title: "Analytics", desc: "Understand revenue, growth, and business performance at a glance." },
  { icon: ShieldCheck, title: "Fraud Protection", desc: "Identify suspicious transaction patterns before they become losses." },
  { icon: Code2, title: "Developer API", desc: "Build custom payment experiences using powerful, well-documented APIs." },
];

export function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-px bg-accent" />
        <span className="text-sm text-muted">Platform</span>
      </div>
      <h2 className="font-serif text-3xl text-text mb-12 max-w-lg">
        Everything you need to manage payments
      </h2>
      <div className="grid md:grid-cols-3 gap-px bg-border">
        {FEATURES.map((f) => (
          <div key={f.title} className="p-7 bg-bg hover:bg-surface-alt transition-colors">
            <f.icon size={20} className="text-accent mb-4" />
            <h3 className="text-text font-medium mb-2">{f.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
