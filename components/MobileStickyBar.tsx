"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const TG_BOT_URL = "https://t.me/distroslot_bot";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-border bg-background px-4 py-3 md:hidden">
      <a
        href={TG_BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="nb-btn w-full justify-center text-sm"
      >
        <Send size={16} />
        Попробовать бесплатно
      </a>
    </div>
  );
}
