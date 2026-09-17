import { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center mb-4">
        <Icon size={18} className="text-faint" />
      </div>
      <h3 className="text-sm font-medium text-text mb-1">{title}</h3>
      <p className="text-sm text-faint max-w-xs mb-4">{description}</p>
      {action}
    </div>
  );
}
