import { ShieldCheck, Lock, Activity, Code2 } from "lucide-react";

const COMPANIES = [
  "Meridian Craft",
  "Northloop Studio",
  "Brightfield Logistics",
  "Ortiz & Co",
  "Patel Consulting",
  "Wilson Studio",
];

const FEATURES = [
  { label: "Secure payments", icon: ShieldCheck },
  { label: "Enterprise-grade security", icon: Lock },
  { label: "99.99% uptime", icon: Activity },
  { label: "Developer-first APIs", icon: Code2 },
];

export function TrustSection() {
  return (
    <section className="py-10 border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-sm text-center text-faint mb-6">Trusted by modern businesses</div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-8">
          {COMPANIES.map((c) => (
            <span key={c} className="font-serif text-lg text-faint">
              {c}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {FEATURES.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2">
              <f.icon size={18} className="text-accent" />
              <span className="text-sm text-muted">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
