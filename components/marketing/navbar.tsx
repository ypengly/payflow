"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const LINKS = ["Products", "Solutions", "Developers", "Pricing", "Resources"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded flex items-center justify-center bg-accent">
            <Wallet size={16} className="text-on-accent" />
          </div>
          <span className="font-serif text-lg text-text">PayFlow</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l} href="#" className="text-sm text-muted hover:opacity-70">
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/dashboard" className="text-sm px-3 py-2 text-text">
            Log in
          </Link>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>

        <button className="md:hidden text-text" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 border-t border-border">
          {LINKS.map((l) => (
            <a key={l} href="#" className="text-sm text-muted pt-3">
              {l}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <Link href="/dashboard" className="flex-1">
              <Button className="w-full">Get Started</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
