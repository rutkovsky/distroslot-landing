"use client";

import { Plug, Calculator, BarChart3, FileSpreadsheet } from "lucide-react";
import CalculatorMockup from "./ui/CalculatorMockup";
import { AnimatedContainer, AnimatedItem, FadeIn } from "./ui/AnimatedSection";

const features = [
  {
    icon: Plug,
    title: "Подключение к Ozon API за 5 минут",
    description:
      "Вставьте API-ключ — данные о товарах, остатках и продажах загрузятся автоматически. Без ручного ввода.",
    badge: "5 мин",
  },
  {
    icon: Calculator,
    title: "Расчёт по 26 кластерам Ozon",
    description:
      "Алгоритм рассчитывает оптимальное распределение с учётом географии заказов и ёмкости складов.",
    badge: "+30–40% к ранжированию",
  },
  {
    icon: BarChart3,
    title: "Учёт сезонности и трендов",
    description:
      "Анализ динамики продаж и сезонных всплесков для точного прогноза. Меньше излишков на складах.",
    badge: "–8–12% лишних товаров",
  },
  {
    icon: FileSpreadsheet,
    title: "Готовый файл для ЛК Ozon",
    description:
      "Выгружайте результат в Excel и загружайте в личный кабинет Ozon за 2 минуты.",
    badge: "2 мин",
  },
];

export default function SolutionSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Как Klastr решает проблему
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              Автоматизируем весь процесс расчёта поставок — от загрузки данных до готового файла
            </p>
          </div>
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedContainer className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <AnimatedItem key={feature.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card-hover">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex rounded-xl bg-primary/10 p-3">
                      <feature.icon size={22} className="text-primary" />
                    </div>
                    <span className="rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>

          <FadeIn delay={0.2}>
            <CalculatorMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
