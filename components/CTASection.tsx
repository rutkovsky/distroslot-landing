"use client";

import { Send } from "lucide-react";
import { FadeIn } from "./ui/AnimatedSection";

const TG_BOT_URL = "https://t.me/distroslot_bot";

export default function CTASection() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-2xl border-2 border-border bg-primary/5 p-12 text-center nb-shadow sm:p-16">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
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
              className="nb-btn nb-btn-lg text-lg"
            >
              <Send size={22} />
              Попробовать бесплатно в Telegram
            </a>

            <p className="mt-6 text-sm text-muted">
              Без привязки карты &middot; 7 дней бесплатно &middot; Отмена в 1 клик
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
