import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    features: ["Basic payments", "Basic analytics", "100 transactions/month", "Community support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/month",
    features: ["Unlimited transactions", "Advanced analytics", "API access", "Webhooks", "Team management"],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Advanced security", "Custom limits", "Dedicated support", "Advanced analytics", "Custom integrations"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-px bg-accent" />
        <span className="text-sm text-muted">Pricing</span>
      </div>
      <h2 className="font-serif text-3xl text-text mb-12 max-w-lg">
        Plans that grow with your business
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {PLANS.map((p) => (
          <Card
            key={p.name}
            className={`p-7 flex flex-col ${p.popular ? "border-accent" : ""}`}
          >
            {p.popular && <Badge tone="accent">Most popular</Badge>}
            <h3 className="text-lg text-text mt-3 mb-1">{p.name}</h3>
            <div className="mb-6">
              <span className="font-serif text-3xl text-text">{p.price}</span>
              <span className="text-sm text-faint">{p.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted">
                  <Check size={14} className="text-accent mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button variant={p.popular ? "primary" : "outline"} className="w-full">
              {p.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
