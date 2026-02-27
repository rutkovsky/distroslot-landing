"use client";

import { useState } from "react";
import { Menu, X, Send } from "lucide-react";
import Logo from "./ui/Logo";
import ThemeToggle from "./ThemeToggle";

const TG_BOT_URL = "https://t.me/distroslot_bot";

const navLinks = [
  { label: "Возможности", href: "#features" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={TG_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn text-sm"
          >
            <Send size={14} />
            Попробовать
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-border bg-card text-foreground transition-[transform,box-shadow] nb-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t-2 border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={TG_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn mt-2 w-full justify-center text-sm"
            onClick={() => setMobileOpen(false)}
          >
            <Send size={14} />
            Попробовать бесплатно
          </a>
        </div>
      )}
    </header>
  );
}
