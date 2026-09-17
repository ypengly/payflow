"use client";

import { Bell } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileSidebar } from "./sidebar";

export function Topbar({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg">
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <h1 className="font-serif text-xl text-text">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button className="p-2 rounded-md relative text-muted" aria-label="Notifications">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
        </button>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-accent2-soft text-accent2">
          JR
        </div>
      </div>
    </div>
  );
}
