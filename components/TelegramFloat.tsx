"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";

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
      href="https://t.me/distroslot_bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-500 text-white shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-primary/40"
      title="Напишите нам в Telegram"
    >
      <Send size={22} />
    </a>
  );
}
