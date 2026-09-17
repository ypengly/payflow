import { Wallet } from "lucide-react";

const COLUMNS = [
  { title: "Product", links: ["Payments", "Analytics", "Customers", "Pricing"] },
  { title: "Developers", links: ["Documentation", "API Reference", "SDKs", "Webhooks"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded flex items-center justify-center bg-accent">
                <Wallet size={13} className="text-on-accent" />
              </div>
              <span className="font-serif text-text">PayFlow</span>
            </div>
            <p className="text-sm text-faint max-w-xs">
              Payments infrastructure for modern businesses.
            </p>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-medium text-text mb-3">{c.title}</div>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-faint hover:opacity-70">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 text-sm text-faint border-t border-border">
          © 2026 PayFlow. All rights reserved. Demo product — not a real payment processor.
        </div>
      </div>
    </footer>
  );
}
