import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "muted" | "accent" | "accent2" | "danger" | "warning";

const toneClasses: Record<Tone, string> = {
  muted: "text-muted bg-surface-alt",
  accent: "text-accent bg-accent-soft",
  accent2: "text-accent2 bg-accent2-soft",
  danger: "text-danger bg-danger-soft",
  warning: "text-warning bg-warning-soft",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ tone = "muted", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
