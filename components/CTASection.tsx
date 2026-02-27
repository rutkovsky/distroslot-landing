import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center sm:p-16">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          </div>

          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Начните экономить 5+ часов в неделю
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted">
            Подключите DistroSlot и получите первый расчёт распределения за 30 минут.
            7 дней бесплатно.
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 rounded-xl border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-500 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
              Начать бесплатно
              <ArrowRight size={16} />
            </button>
          </div>

          <p className="mt-6 text-xs text-muted">
            Без привязки карты. Отмена в любой момент.
          </p>
        </div>
      </div>
    </section>
  );
}
