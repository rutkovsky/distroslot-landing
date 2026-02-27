import { ArrowRight, Play } from "lucide-react";
import DashboardMockup from "./ui/DashboardMockup";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            Специализация на Ozon
          </div>

          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Распредели товары по складам Ozon за{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              30 минут
            </span>{" "}
            вместо 5 часов
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted sm:text-xl">
            Автоматический расчёт поставок по 26 кластерам Ozon.
            Экономь 5+ часов в неделю.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-500 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Начать бесплатно
              <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-base font-medium text-muted transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Play size={18} />
              Смотреть демо
            </a>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="mx-auto max-w-5xl">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
