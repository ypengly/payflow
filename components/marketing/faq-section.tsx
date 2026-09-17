"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "What is PayFlow?", a: "PayFlow is a payments and financial infrastructure platform that lets businesses accept payments, manage transactions, and understand their finances from one dashboard and API." },
  { q: "How does PayFlow work?", a: "You integrate our API or use the dashboard directly to accept payments, track transaction status in real time, and automate workflows like refunds and payouts." },
  { q: "Is PayFlow secure?", a: "Every transaction is encrypted end to end, processed through PCI-compliant infrastructure, and monitored by automated fraud detection with manual review escalation." },
  { q: "Can developers use the API?", a: "Yes. PayFlow is API-first — every dashboard action has a corresponding endpoint, with SDKs for Node, Python, Ruby, and Go." },
  { q: "Does PayFlow support refunds?", a: "Full and partial refunds are supported from the dashboard or the API, with status changes reflected in real time and reported to webhooks." },
  { q: "Can I upgrade my plan?", a: "You can move between Starter, Growth, and Enterprise at any time from the Billing page — changes apply immediately with prorated billing." },
  { q: "Is there a free plan?", a: "Starter is free for up to 100 transactions a month, with no time limit, so you can build and test before you commit to a paid plan." },
];

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-px bg-accent" />
        <span className="text-sm text-muted">Questions</span>
      </div>
      <h2 className="font-serif text-3xl text-text mb-10">Frequently asked questions</h2>
      <div className="border-t border-border">
        {FAQS.map((f, i) => (
          <div key={f.q} className="border-b border-border">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={open === i}
            >
              <span className="text-text font-medium">{f.q}</span>
              <ChevronDown
                size={18}
                className={`text-faint transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && <p className="text-muted pb-5 text-sm leading-relaxed max-w-xl">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
