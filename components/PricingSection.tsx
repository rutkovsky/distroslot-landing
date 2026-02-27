"use client";

import { useState } from "react";
import { Check, Send, Info } from "lucide-react";
import { AnimatedContainer, AnimatedItem, FadeIn } from "./ui/AnimatedSection";

const TG_BOT_URL = "https://t.me/distroslot_bot";

const plans = [
  {
    name: "Starter",
    monthly: 1990,
    yearly: 1590,
    description: "Для начинающих селлеров",
    features: [
      "До 100 SKU",
      "1 кабинет Ozon",
      "Расчёт по кластерам",
      "Выгрузка в Excel",
      "Self-service онбординг",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    monthly: 3990,
    yearly: 3190,
    description: "Для растущего бизнеса",
    features: [
      "До 500 SKU",
      "3 кабинета Ozon",
      "Учёт сезонности и трендов",
      "Приоритетная поддержка",
      "Все функции Starter",
    ],
    highlight: true,
  },
  {
    name: "Business",
    monthly: 7990,
    yearly: 6390,
    description: "Для крупных селлеров",
    features: [
      "До 2,000 SKU",
      "Безлимитные кабинеты",
      "API доступ",
      "Мультипользователи",
      "Персональный менеджер",
      "Все функции Pro",
    ],
    highlight: false,
  },
];

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU");
}

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Тарифы</h2>
            <p className="mx-auto max-w-2xl text-muted">
              Прозрачные цены без скрытых платежей. Выберите подходящий план.
            </p>
          </div>

          {/* Period toggle */}
          <div className="mb-12 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted"}`}>
              Месяц
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative h-7 w-12 rounded-full transition-colors ${
                annual ? "bg-primary" : "bg-border"
              }`}
            >
              <div
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                  annual ? "translate-x-5.5" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted"}`}>
              Год
            </span>
            {annual && (
              <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
                −20%
              </span>
            )}
          </div>
        </FadeIn>

        <AnimatedContainer className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = annual ? plan.yearly : plan.monthly;
            const yearlySaving = annual ? (plan.monthly - plan.yearly) * 12 : 0;
            const paybackDays = Math.ceil(price / (10000 / 30));

            return (
              <AnimatedItem key={plan.name}>
                <div
                  className={`relative h-full rounded-2xl border p-8 transition-all ${
                    plan.highlight
                      ? "border-primary bg-card shadow-xl shadow-primary/10 scale-[1.02]"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-xs font-medium text-white">
                      Лучший выбор
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="mb-1 text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted">{plan.description}</p>
                  </div>

                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">{formatPrice(price)}</span>
                    <span className="text-muted"> ₽/мес</span>
                  </div>

                  {annual && yearlySaving > 0 && (
                    <p className="mb-4 text-xs text-success">
                      Экономия {formatPrice(yearlySaving)} ₽/год
                    </p>
                  )}

                  {/* Payback info */}
                  <div className="relative mb-6">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-muted">
                        Окупается за {paybackDays} дней
                      </span>
                      <button
                        onClick={() => setTooltipOpen(tooltipOpen ? false : true)}
                        className="text-muted/60 hover:text-muted"
                      >
                        <Info size={13} />
                      </button>
                    </div>
                    {tooltipOpen && (
                      <div className="absolute left-0 top-6 z-10 w-64 rounded-lg border border-border bg-card p-3 text-xs text-muted shadow-lg">
                        Расчёт: экономия ~10,000 ₽/мес (20ч × 500 ₽/ч). Окупаемость = цена ÷
                        (10,000 ₽ ÷ 30 дней).
                        <button
                          onClick={() => setTooltipOpen(false)}
                          className="mt-1 block text-primary hover:underline"
                        >
                          Закрыть
                        </button>
                      </div>
                    )}
                  </div>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={18} className="mt-0.5 shrink-0 text-success" />
                        <span className="text-sm text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={TG_BOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-center text-sm font-medium transition-all ${
                      plan.highlight
                        ? "bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                        : "border border-border bg-card-hover text-foreground hover:border-primary/50"
                    }`}
                  >
                    <Send size={16} />
                    Попробовать бесплатно
                  </a>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>

        <FadeIn>
          <p className="mt-8 text-center text-sm text-muted">
            7 дней бесплатно на любом тарифе. Без привязки карты. Отмена в один клик.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
