"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clusters = [
  { name: "Москва (Хоругвино)", qty: 340, pct: 38 },
  { name: "СПб (Шушары)", qty: 155, pct: 17 },
  { name: "Казань", qty: 110, pct: 12 },
  { name: "Краснодар", qty: 95, pct: 11 },
  { name: "Екатеринбург", qty: 85, pct: 10 },
  { name: "Новосибирск", qty: 65, pct: 7 },
  { name: "Тула + 3 кластера", qty: 45, pct: 5 },
];

export default function CalculatorMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border-2 border-border bg-card nb-shadow">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b-2 border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full border-2 border-border bg-danger" />
        <div className="h-3 w-3 rounded-full border-2 border-border bg-primary" />
        <div className="h-3 w-3 rounded-full border-2 border-border bg-success" />
        <span className="ml-3 text-xs font-bold text-muted">Klastr — Результат расчёта</span>
      </div>

      {/* Config */}
      <div className="grid grid-cols-3 gap-3 border-b-2 border-border-light p-4">
        <div>
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted">Кабинет</div>
          <div className="rounded-xl border-2 border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
            Ozon Main Store
          </div>
        </div>
        <div>
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted">Период анализа</div>
          <div className="rounded-xl border-2 border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
            14 дней
          </div>
        </div>
        <div>
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted">Оборачиваемость</div>
          <div className="rounded-xl border-2 border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
            21 день
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-foreground">Распределение по кластерам</span>
          <span className="nb-badge bg-success/10 text-success border-success text-xs">895 шт. к отгрузке</span>
        </div>

        <div className="space-y-2">
          {clusters.map((c, idx) => (
            <motion.div
              key={c.name}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
            >
              <span className="w-36 shrink-0 truncate text-xs font-medium text-muted">{c.name}</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full border-2 border-border bg-card">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${c.pct}%` } : { width: 0 }}
                  transition={{ delay: idx * 0.08 + 0.2, duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <span className="w-12 text-right text-xs font-bold text-foreground">{c.qty}</span>
              <span className="w-8 text-right text-xs text-muted">{c.pct}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 border-t-2 border-border px-4 py-3">
        <button className="nb-btn py-2 text-xs">
          Выгрузить в Excel
        </button>
        <button className="nb-btn-outline py-2 text-xs">
          Пересчитать
        </button>
      </div>
    </div>
  );
}
