"use client";

import { Send } from "lucide-react";
import { FadeIn } from "./ui/AnimatedSection";

const TG_BOT_URL = "https://t.me/distroslot_bot";

export default function CTASection() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center sm:p-16">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Начните экономить 5+ часов в неделю
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-muted">
              Подключите Klastr и получите первый расчёт распределения за 30 минут.
              7 дней бесплатно.
            </p>

            <a
              href={TG_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-blue-500 px-10 py-4.5 text-lg font-medium text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
            >
              <Send size={22} />
              Попробовать бесплатно в Telegram
            </a>

            <p className="mt-6 text-sm text-muted">
              Без привязки карты · 7 дней бесплатно · Отмена в 1 клик
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
