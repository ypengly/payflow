import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  delta,
  positive = true,
}: {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
}) {
  return (
    <Card className="p-5">
      <div className="text-xs text-faint mb-2">{label}</div>
      <div className="font-mono text-2xl text-text mb-1">{value}</div>
      {delta && (
        <div className={`flex items-center gap-1 text-xs ${positive ? "text-accent" : "text-danger"}`}>
          {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />} {delta}
        </div>
      )}
    </Card>
  );
}
