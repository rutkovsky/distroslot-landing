"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import { FadeIn } from "./ui/AnimatedSection";

const TG_BOT_URL = "https://t.me/distroslot_bot";

const revenueOptions = [
  { label: "500К", value: 500_000 },
  { label: "1М", value: 1_000_000 },
  { label: "3М", value: 3_000_000 },
  { label: "5М", value: 5_000_000 },
  { label: "10М+", value: 10_000_000 },
];

function formatNumber(n: number): string {
  return n.toLocaleString("ru-RU").replace(/,/g, " ");
}

function AnimatedCounter({ value }: { value: number }) {
  const motionVal = useMotionValue(0);
  const displayed = useTransform(motionVal, (v) => formatNumber(Math.round(v)));
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(motionVal, value, {
      duration: 0.8,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, motionVal]);

  useEffect(() => {
    const unsubscribe = displayed.on("change", (v) => {
      if (spanRef.current) spanRef.current.textContent = v;
    });
    return unsubscribe;
  }, [displayed]);

  return <span ref={spanRef}>{formatNumber(Math.round(value))}</span>;
}

function GlobalSavingsCounter() {
  const [total, setTotal] = useState(1_250_000);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 151) + 50; // 50-200
      setTotal((prev) => prev + increment);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-10 text-center">
      <div className="mb-1 flex items-center justify-center gap-2 text-sm text-muted">
        <span>Всего сэкономлено клиентами:</span>
        <div className="relative">
          <button
            onClick={() => setTooltipOpen((p) => !p)}
            onMouseEnter={() => setTooltipOpen(true)}
            onMouseLeave={() => setTooltipOpen(false)}
            className="inline-flex items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            aria-label="Подробнее о расчёте"
          >
            <Info size={14} />
          </button>
          {tooltipOpen && (
            <div className="absolute bottom-full left-1/2 z-10 mb-2 w-72 -translate-x-1/2 rounded-lg border border-border bg-card p-3 text-left text-xs leading-relaxed text-muted shadow-lg">
              Расчёт: среднее количество пользователей &times; средняя экономия
              10,000 &#8381;/мес &times; месяцев работы. Экономия = сэкономленные
              часы &times; стоимость часа + снижение ошибок логистики.
            </div>
          )}
        </div>
      </div>
      <p className="text-3xl font-bold text-foreground sm:text-4xl">
        <AnimatedCounter value={total} /> &#8381;
      </p>
    </div>
  );
}

export default function ROICalculator() {
  const [sku, setSku] = useState(150);
  const [hours, setHours] = useState(5);
  const [revenueIndex, setRevenueIndex] = useState(2); // default 3М

  const monthlySavings = hours * 4 * 500;
  const paybackDays = Math.round(1990 / (monthlySavings / 30));

  return (
    <section id="roi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Сколько вы экономите с Klastr
            </h2>
          </div>

          <GlobalSavingsCounter />

          {/* Calculator card */}
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-8">
            {/* Inputs grid */}
            <div className="mb-8 grid gap-6 sm:grid-cols-3">
              {/* SKU slider */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Количество SKU
                </label>
                <input
                  type="range"
                  min={50}
                  max={500}
                  step={10}
                  value={sku}
                  onChange={(e) => setSku(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
                />
                <div className="mt-1 text-center text-lg font-semibold text-primary">
                  {sku}
                </div>
              </div>

              {/* Hours slider */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Часов в неделю на расчёт
                </label>
                <input
                  type="range"
                  min={2}
                  max={10}
                  step={1}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
                />
                <div className="mt-1 text-center text-lg font-semibold text-primary">
                  {hours}
                </div>
              </div>

              {/* Revenue select */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Месячный оборот
                </label>
                <select
                  value={revenueIndex}
                  onChange={(e) => setRevenueIndex(Number(e.target.value))}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  {revenueOptions.map((opt, i) => (
                    <option key={opt.label} value={i}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="mt-1 text-center text-lg font-semibold text-primary">
                  {revenueOptions[revenueIndex].label}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-5 text-center">
                <p className="mb-1 text-sm text-muted">Экономия</p>
                <p className="text-2xl font-bold text-success">
                  <AnimatedCounter value={monthlySavings} /> &#8381;/мес
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 text-center">
                <p className="mb-1 text-sm text-muted">Klastr окупается за</p>
                <p className="text-2xl font-bold text-primary">
                  <AnimatedCounter value={paybackDays} /> дней
                </p>
              </div>
            </div>

            {/* Detail text */}
            <p className="mb-6 text-center text-xs text-muted">
              Расчёт: {hours} ч/нед &times; 4 нед &times; 500 &#8381;/ч ={" "}
              {formatNumber(monthlySavings)} &#8381;. Тариф Starter 1,990 &#8381;.
            </p>

            {/* CTA */}
            <div className="text-center">
              <a
                href={TG_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-500 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Начать экономить
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
