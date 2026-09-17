"use client";

import { useState } from "react";
import { Topbar } from "@/components/dashboard/topbar";
import { Card } from "@/components/ui/card";

const PROFILE_FIELDS: [string, string][] = [
  ["Business name", "Meridian Craft Goods"],
  ["Support email", "support@meridiancraft.com"],
  ["Default currency", "USD"],
];

function ToggleRow({ label, defaultOn = true }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border-soft last:border-0">
      <span className="text-sm text-text">{label}</span>
      <button
        onClick={() => setOn(!on)}
        className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors ${
          on ? "bg-accent justify-end" : "bg-surface-alt justify-start border border-border"
        }`}
        aria-pressed={on}
        aria-label={`Toggle ${label}`}
      >
        <div className="w-4 h-4 rounded-full bg-on-accent" />
      </button>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <>
      <Topbar title="Settings" />
      <div className="flex-1 overflow-y-auto p-6 max-w-lg space-y-6">
        <Card className="p-5">
          <div className="text-sm text-muted mb-4">Business profile</div>
          {PROFILE_FIELDS.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-2.5 border-b border-border-soft last:border-0">
              <span className="text-sm text-faint">{k}</span>
              <span className="text-sm text-text">{v}</span>
            </div>
          ))}
        </Card>
        <Card className="p-5">
          <div className="text-sm text-muted mb-4">Notifications</div>
          <ToggleRow label="Payment received" />
          <ToggleRow label="Payment failed" />
          <ToggleRow label="Weekly summary" defaultOn={false} />
        </Card>
      </div>
    </>
  );
}
