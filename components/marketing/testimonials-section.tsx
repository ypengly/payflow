import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Rosa Delgado",
    title: "CFO",
    company: "Meridian Craft Goods",
    quote:
      "PayFlow cut the time our finance team spends reconciling transactions from days to hours. The audit trail alone justified switching.",
    rating: 5,
  },
  {
    name: "Tom Okafor",
    title: "Founder",
    company: "Northloop Studio",
    quote:
      "We moved off three separate tools onto PayFlow's API in a single sprint. Our engineers actually enjoyed the integration.",
    rating: 5,
  },
  {
    name: "Grace Lindqvist",
    title: "Head of Ops",
    company: "Brightfield Logistics",
    quote:
      "The fraud detection flagged a pattern our old processor missed entirely. It paid for itself in the first month.",
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-surface-alt border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-px bg-accent" />
          <span className="text-sm text-muted">Customers</span>
        </div>
        <h2 className="font-serif text-3xl text-text mb-12 max-w-lg">What businesses are saying</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((tm) => (
            <Card className="p-6" key={tm.name}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < tm.rating ? "text-warning fill-warning" : "text-warning"}
                    fill={i < tm.rating ? "currentColor" : "transparent"}
                  />
                ))}
              </div>
              <p className="text-sm text-text leading-relaxed mb-6">&ldquo;{tm.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium shrink-0 bg-accent2-soft text-accent2">
                  {tm.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-text">
                    {tm.name} <span className="text-faint font-normal">(fictional)</span>
                  </div>
                  <div className="text-xs text-faint">
                    {tm.title}, {tm.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
