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
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Тарифы</h2>
            <p className="mx-auto max-w-2xl text-muted">
              Прозрачные цены без скрытых платежей. Выберите подходящий план.
            </p>
          </div>

          {/* Period toggle — neo-brutalism style */}
          <div className="mb-12 flex items-center justify-center gap-3">
            <div className="inline-flex overflow-hidden rounded-xl border-2 border-border nb-shadow">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 text-sm font-bold transition-colors ${
                  !annual
                    ? "bg-primary text-primary-text"
                    : "bg-card text-muted hover:bg-card-hover"
                }`}
              >
                Месяц
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`border-l-2 border-border px-5 py-2 text-sm font-bold transition-colors ${
                  annual
                    ? "bg-primary text-primary-text"
                    : "bg-card text-muted hover:bg-card-hover"
                }`}
              >
                Год
              </button>
            </div>
            {annual && (
              <span className="nb-badge bg-success/10 text-success border-success">
                -20%
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
                  className={`nb-card relative h-full ${
                    plan.highlight
                      ? "border-primary shadow-[6px_6px_0px_var(--color-primary)] scale-[1.02]"
                      : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="nb-badge bg-primary text-primary-text">
                        Лучший выбор
                      </span>
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
                    <p className="mb-4 text-xs font-medium text-success">
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
                      <div className="absolute left-0 top-6 z-10 w-64 rounded-xl border-2 border-border bg-card p-3 text-xs text-muted nb-shadow">
                        Расчёт: экономия ~10,000 ₽/мес (20ч x 500 ₽/ч). Окупаемость = цена /
                        (10,000 ₽ / 30 дней).
                        <button
                          onClick={() => setTooltipOpen(false)}
                          className="mt-1 block font-bold text-primary-text hover:underline"
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
                    className={`flex w-full items-center justify-center gap-2 text-sm ${
                      plan.highlight ? "nb-btn" : "nb-btn-outline"
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
