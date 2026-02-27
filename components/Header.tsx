"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Возможности", href: "#features" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-primary">Distro</span>
          <span className="text-foreground">Slot</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover md:inline-block"
        >
          Попробовать бесплатно
        </a>

        <button
          className="text-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="mt-2 block rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            onClick={() => setMobileOpen(false)}
          >
            Попробовать бесплатно
          </a>
        </div>
      )}
    </header>
  );
}
