"use client";

import { ArrowDown, Send } from "lucide-react";
import DashboardMockup from "./ui/DashboardMockup";
import { FadeIn } from "./ui/AnimatedSection";

const TG_BOT_URL = "https://t.me/distroslot_bot";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Специализация на Ozon
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
                <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0">
                  <circle cx="7" cy="7" r="7" className="fill-primary" />
                  <text x="7" y="10" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">O</text>
                </svg>
                Работает с Ozon API
              </div>
            </div>

            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Распредели товары по складам Ozon за{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                30 минут
              </span>{" "}
              вместо 5 часов
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted sm:text-xl">
              Загрузите данные из Ozon — получите готовый план отгрузок по всем 26 кластерам.
              Экономьте 5+ часов каждую неделю.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={TG_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-500 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <Send size={18} />
                Попробуй бесплатно
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-base font-medium text-muted transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <ArrowDown size={18} />
                Как это работает
              </a>
            </div>

            <p className="mt-4 text-sm text-muted">
              Без привязки карты · 7 дней бесплатно
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto max-w-5xl">
            <DashboardMockup />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
            <span>Данные в РФ</span>
            <span className="hidden sm:inline">·</span>
            <span>Read-only API</span>
            <span className="hidden sm:inline">·</span>
            <span>ИП Павлов Валерий</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
