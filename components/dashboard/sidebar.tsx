"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  Activity,
  Users,
  BarChart3,
  Code2,
  Webhook,
  FileText,
  Settings,
  Wallet,
  ChevronRight,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/transactions", label: "Transactions", icon: Activity },
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/developers", label: "Developers", icon: Code2 },
  { href: "/dashboard/api-keys", label: "API Keys", icon: Code2 },
  { href: "/dashboard/webhooks", label: "Webhooks", icon: Webhook },
  { href: "/dashboard/audit-logs", label: "Audit Logs", icon: FileText },
  { href: "/dashboard/team", label: "Team", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/billing", label: "Billing", icon: Wallet },
];

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname.startsWith(href);
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className="hidden md:flex flex-col shrink-0 transition-all bg-surface border-r border-border"
      style={{ width: collapsed ? 68 : 224 }}
    >
      <div className="flex items-center gap-2 px-4 py-4 border-b border-border">
        <div className="w-6 h-6 rounded flex items-center justify-center shrink-0 bg-accent">
          <Wallet size={13} className="text-on-accent" />
        </div>
        {!collapsed && <span className="font-serif text-text">PayFlow</span>}
      </div>

      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                active ? "bg-accent-soft text-accent" : "text-muted hover:text-text"
              }`}
            >
              <item.icon size={16} className="shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 space-y-0.5 border-t border-border">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-faint"
        >
          <ChevronRight size={16} className={collapsed ? "" : "rotate-180"} />
          {!collapsed && <span>Collapse</span>}
        </button>
        <Link href="/" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-faint">
          <LogOut size={16} />
          {!collapsed && <span>Exit demo</span>}
        </Link>
      </div>
    </aside>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button className="md:hidden text-text" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={20} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden bg-bg">
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <span className="font-serif text-text">PayFlow</span>
            <button onClick={() => setOpen(false)} className="text-text" aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="p-2 space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm ${
                    active ? "bg-accent-soft text-accent" : "text-muted"
                  }`}
                >
                  <item.icon size={16} /> {item.label}
                </Link>
              );
            })}
            <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-faint">
              <LogOut size={16} /> Exit demo
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
