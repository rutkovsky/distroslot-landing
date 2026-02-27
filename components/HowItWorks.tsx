"use client";

import { KeyRound, Download, Cpu, FileOutput, Film } from "lucide-react";
import { AnimatedContainer, AnimatedItem, FadeIn } from "./ui/AnimatedSection";

const steps = [
  {
    icon: KeyRound,
    number: "01",
    title: "Подключите Ozon API",
    description: "Вставьте API-ключ из личного кабинета Ozon. Это займёт 5 минут.",
    time: "5 мин",
  },
  {
    icon: Download,
    number: "02",
    title: "Данные загрузятся",
    description: "Система автоматически подтянет историю продаж, остатки и географию заказов.",
    time: "10 мин",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Получите расчёт",
    description: "Алгоритм рассчитает оптимальное распределение по 26 кластерам Ozon.",
    time: "2 мин",
  },
  {
    icon: FileOutput,
    number: "04",
    title: "Выгрузите файл",
    description: "Скачайте готовый Excel-файл и загрузите его в ЛК Ozon для создания поставки.",
    time: "5 мин",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Как это работает</h2>
            <p className="mx-auto max-w-2xl text-muted">
              От подключения до готового файла — 4 простых шага за ~30 минут
            </p>
          </div>
        </FadeIn>

        <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <AnimatedItem key={step.number}>
              <div className="relative">
                {idx < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-8 translate-x-full bg-gradient-to-r from-border to-transparent lg:block" />
                )}
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card-hover">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex rounded-xl bg-primary/10 p-3">
                      <step.icon size={22} className="text-primary" />
                    </div>
                    <span className="text-3xl font-bold text-border">{step.number}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted">{step.description}</p>
                  <div className="inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                    ~{step.time}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>

        <FadeIn>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-success/20 bg-success/5 px-6 py-3">
              <span className="text-2xl font-bold text-success">~30 мин</span>
              <span className="text-sm text-muted">от регистрации до первого расчёта</span>
            </div>
          </div>

          {/* Video placeholder */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-border bg-card">
              <div className="rounded-full bg-primary/10 p-4">
                <Film size={32} className="text-primary" />
              </div>
              <p className="text-sm text-muted">Видео-демо скоро появится</p>
              <p className="text-xs text-muted/60">Посмотрите, как это работает за 60 секунд</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
