"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./ui/AnimatedSection";

const faqs = [
  {
    q: "Как подключить Ozon API?",
    a: "В личном кабинете Ozon перейдите в Настройки \u2192 API-ключи \u2192 Создать ключ. Скопируйте Client ID и API Key, вставьте их в Klastr. Подключение занимает 5 минут.",
  },
  {
    q: "Сколько времени занимает первый расчёт?",
    a: "После подключения API данные загружаются 10-15 минут. Сам расчёт распределения выполняется за 1-3 минуты. Итого: ~30 минут от регистрации до готового файла.",
  },
  {
    q: "Зачем платить, если можно считать в Excel?",
    a: "Excel-расчёт на 100 SKU занимает 5 часов. Klastr \u2014 30 минут. За месяц экономите 20+ часов = 10,000 \u20BD (при стоимости часа 500 \u20BD). Подписка Starter: 1,990 \u20BD. ROI = 5x.",
  },
  {
    q: "Вы новый сервис — почему доверять?",
    a: "7 дней бесплатно без привязки карты. Используем только read-only доступ к Ozon API \u2014 мы не можем изменять ваши данные. Серверы в РФ. Попробуйте и оцените результат.",
  },
  {
    q: "Поддерживаете ли вы Wildberries?",
    a: "Сейчас Klastr специализируется только на Ozon. Это позволяет нам глубоко понимать 26 кластеров Ozon и давать точные рекомендации. Поддержка WB рассматривается на будущее.",
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
    q: "Мои данные в безопасности?",
    a: "Мы используем только read-only доступ к Ozon API \u2014 не можем изменять ваши товары или поставки. Данные хранятся на защищённых серверах в РФ и не передаются третьим лицам.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Частые вопросы</h2>
            <p className="text-muted">
              Не нашли ответ?{" "}
              <a
                href="https://t.me/distroslot_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground underline decoration-primary decoration-2 underline-offset-2 hover:text-primary-text hover:bg-primary/20 transition-colors"
              >
                Напишите нам в Telegram
              </a>
              .
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-xl border-2 border-border bg-card transition-all ${
                  openIdx === idx
                    ? "shadow-none translate-y-[2px]"
                    : "nb-shadow hover:translate-y-[2px] hover:shadow-none"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className="pr-4 text-sm font-bold text-foreground">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIdx === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={18} className="shrink-0 text-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t-2 border-border-light px-6 py-4">
                        <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
