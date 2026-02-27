"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-xl md:hidden">
      <a
        href="https://t.me/distroslot_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-500 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25"
      >
        <Send size={16} />
        Попробовать бесплатно
      </a>
    </div>
  );
}
