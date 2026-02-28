"use client";

import { ArrowDown, Send } from "lucide-react";
import DashboardMockup from "./ui/DashboardMockup";
import { FadeIn } from "./ui/AnimatedSection";

const TG_BOT_URL = "https://t.me/distroslot_bot";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <div className="nb-badge bg-primary/20 text-foreground">
                <span className="mr-2 h-2 w-2 rounded-full bg-success animate-pulse inline-block" />
                Специализация на Ozon
              </div>
              <div className="nb-badge bg-card text-foreground">
                <svg width="14" height="14" viewBox="0 0 14 14" className="mr-2 shrink-0">
                  <circle cx="7" cy="7" r="7" className="fill-primary" />
                  <text x="7" y="10" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">O</text>
                </svg>
                Работает с Ozon API
              </div>
            </div>

            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Распредели товары по складам Ozon за{" "}
              <span className="bg-primary px-2 py-1 rounded-lg border-2 border-border text-primary-text">
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
                className="nb-btn nb-btn-lg"
              >
                <Send size={18} />
                Попробуй бесплатно
              </a>
              <a
                href="#how-it-works"
                className="nb-btn-outline"
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
