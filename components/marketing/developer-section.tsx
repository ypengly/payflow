import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DeveloperSection() {
  return (
    <section className="py-20 bg-surface-alt border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-px bg-accent" />
            <span className="text-sm text-muted">Developers</span>
          </div>
          <h2 className="font-serif text-3xl text-text mb-5 max-w-sm">
            Payments built for developers.
          </h2>
          <p className="text-muted mb-8 max-w-sm">
            Every dashboard feature is available as an API. Integrate in minutes with SDKs for the
            languages you already use.
          </p>
          <div className="flex gap-3">
            <Button variant="outline">Read Documentation</Button>
            <Button>
              Explore API <ArrowRight size={15} />
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-danger" />
            <span className="w-2.5 h-2.5 rounded-full bg-warning" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="text-xs ml-2 font-mono text-faint">create-payment.js</span>
          </div>
          <pre className="p-5 text-sm overflow-x-auto font-mono text-text leading-relaxed">
{`const payment = await payflow.payments.create({
  amount: 2500,
  currency: "USD",
  customer: "cus_123"
});`}
          </pre>
          <div className="p-5 text-sm border-t border-border bg-bg">
            <div className="flex items-center gap-2 mb-2 text-accent">
              <CheckCircle2 size={14} /> 200 OK
            </div>
            <pre className="font-mono text-faint leading-relaxed">
{`{
  "id": "pay_4f21A8",
  "status": "succeeded",
  "amount": 2500
}`}
            </pre>
          </div>
        </Card>
      </div>
    </section>
  );
}
