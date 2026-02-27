"use client";

import { Clock, TrendingDown, PackageX, Receipt, Check } from "lucide-react";
import { AnimatedContainer, AnimatedItem, FadeIn } from "./ui/AnimatedSection";

const pains = [
  {
    icon: Clock,
    stat: "4–8 часов",
    title: "в неделю на ручной расчёт",
    description:
      "Сбор остатков, анализ географии заказов, расчёт распределения по размерам и складам — всё вручную в Excel.",
  },
  {
    icon: TrendingDown,
    stat: "+50%",
    title: "расходы на логистику",
    description:
      "Ошибки в распределении приводят к лишним перемещениям между складами. Индекс локализации ниже 65% = переплата 50%.",
  },
  {
    icon: PackageX,
    stat: "–30%",
    title: "потеря продаж из-за out-of-stock",
    description:
      "Неточный расчёт обнуляет остатки — карточка падает в выдаче, продажи резко снижаются.",
  },
  {
    icon: Receipt,
    stat: "3–5%",
    title: "маржа при НДС 22%",
    description:
      "С 2026 года НДС повышен до 22%, порог УСН снижен до 20 млн. Маржа сжимается — оптимизация логистики единственный рычаг.",
  },
];

const targetChecks = [
  "Вы продаёте на Ozon (FBO)",
  "У вас 50–500+ SKU",
  "Тратите 4+ часов в неделю на расчёт поставок",
  "Используете Excel для распределения по складам",
];

const competitorPains = [
  { quote: "Ничего не понял, начал беситься", source: "Пользователь сложной ERP-системы" },
  { quote: "Обороты выросли — тариф стал дороже в 3 раза", source: "Селлер о сервисе с привязкой к обороту" },
  { quote: "Оплатил 100К за внедрение, поддержка не наладила", source: "О платном онбординге" },
  { quote: "Невозможно узнать цену без созвона", source: "О непрозрачных ценах" },
];

export default function PainSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Знакомо?</h2>
            <p className="mx-auto max-w-2xl text-muted">
              Каждую неделю селлеры на Ozon теряют время и деньги на ручном расчёте поставок.
              А с НДС 22% — каждый процент маржи на счету.
            </p>
          </div>
        </FadeIn>

        <AnimatedContainer className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain) => (
            <AnimatedItem key={pain.stat}>
              <div className="nb-card nb-card-hover h-full">
                <div className="mb-4 inline-flex rounded-xl border-2 border-danger bg-danger/10 p-3">
                  <pain.icon size={24} className="text-danger" />
                </div>
                <div className="mb-2 text-3xl font-bold text-danger">{pain.stat}</div>
                <div className="mb-3 text-base font-medium text-foreground">{pain.title}</div>
                <p className="text-sm leading-relaxed text-muted">{pain.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>

        <FadeIn>
          <div className="nb-card mx-auto mb-16 max-w-2xl !bg-primary/10">
            <h3 className="mb-4 text-lg font-bold text-foreground">Klastr для вас, если:</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {targetChecks.map((check) => (
                <div key={check} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-md border-2 border-border bg-primary">
                    <Check size={12} className="text-primary-text" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-6 text-center text-lg font-bold text-foreground">Устали от?</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {competitorPains.map((p, i) => (
                <div key={i} className="nb-card border-l-4 !border-l-danger">
                  <p className="mb-2 text-sm italic text-foreground">&laquo;{p.quote}&raquo;</p>
                  <p className="text-xs font-medium text-muted">— {p.source}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
