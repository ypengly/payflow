import { CheckCircle2, Clock, RefreshCw, XCircle, Circle } from "lucide-react";
import { Badge } from "./badge";

const STATUS_MAP: Record<string, { tone: "accent" | "warning" | "accent2" | "danger" | "muted"; icon: typeof CheckCircle2 }> = {
  Successful: { tone: "accent", icon: CheckCircle2 },
  Delivered: { tone: "accent", icon: CheckCircle2 },
  Paid: { tone: "accent", icon: CheckCircle2 },
  Active: { tone: "accent", icon: CheckCircle2 },
  Pending: { tone: "warning", icon: Clock },
  Retrying: { tone: "warning", icon: Clock },
  "At risk": { tone: "warning", icon: Clock },
  Refunded: { tone: "accent2", icon: RefreshCw },
  Failed: { tone: "danger", icon: XCircle },
  Disputed: { tone: "danger", icon: XCircle },
};

export function StatusBadge({ status }: { status: string }) {
  const entry = STATUS_MAP[status] ?? { tone: "muted" as const, icon: Circle };
  const Icon = entry.icon;
  return (
    <Badge tone={entry.tone}>
      <Icon size={12} /> {status}
    </Badge>
  );
}
