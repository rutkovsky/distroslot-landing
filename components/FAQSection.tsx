"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Как подключить Ozon API?",
    a: "В личном кабинете Ozon перейдите в Настройки → API-ключи → Создать ключ. Скопируйте Client ID и API Key, вставьте их в DistroSlot. Подключение занимает 5 минут.",
  },
  {
    q: "Сколько времени занимает первый расчёт?",
    a: "После подключения API данные загружаются 10-15 минут. Сам расчёт распределения выполняется за 1-3 минуты. Итого: ~30 минут от регистрации до готового файла.",
  },
  {
    q: "Поддерживаете ли вы Wildberries?",
    a: "Сейчас DistroSlot специализируется только на Ozon. Это позволяет нам глубоко понимать 26 кластеров Ozon и давать точные рекомендации. Поддержка WB рассматривается на будущее.",
  },
  {
    q: "Какие данные нужны для расчёта?",
    a: "Всё автоматически: через Ozon API мы загружаем историю продаж, текущие остатки на складах, географию заказов и данные о товарах. Вам не нужно ничего заполнять вручную.",
  },
  {
    q: "Могу ли я попробовать бесплатно?",
    a: "Да! Мы предоставляем 7 дней бесплатно на любом тарифе. Карта для регистрации не требуется. Попробуйте и оцените экономию времени.",
  },
  {
    q: "Как работает расчёт по кластерам?",
    a: "Алгоритм анализирует географию ваших заказов, текущие остатки на каждом складе, скорость продаж и ёмкость кластеров. На основе этих данных рассчитывается оптимальное распределение, минимизирующее время доставки и расходы на хранение.",
  },
  {
    q: "Чем DistroSlot отличается от Поставлено!?",
    a: "DistroSlot специализируется только на Ozon, стоит на 60% дешевле (от 1,990 ₽ vs 5,495 ₽), предлагает полный self-service онбординг без обязательных консультаций, и вы получаете первый результат за 30 минут вместо 1-2 часов.",
  },
  {
    q: "Мои данные в безопасности?",
    a: "Мы используем только read-only доступ к Ozon API — не можем изменять ваши товары или поставки. Данные хранятся на защищённых серверах в РФ и не передаются третьим лицам.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Частые вопросы
          </h2>
          <p className="text-muted">
            Не нашли ответ? Напишите нам в Telegram.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-card transition-all hover:border-primary/20"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="pr-4 text-sm font-medium text-foreground">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition-transform ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
