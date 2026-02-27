"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const TG_BOT_URL = "https://t.me/distroslot_bot";

export default function TelegramFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={TG_BOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden md:flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-border bg-primary text-primary-text nb-shadow transition-[transform,box-shadow] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      title="Напишите нам в Telegram"
    >
      <Send size={22} />
    </a>
  );
}
