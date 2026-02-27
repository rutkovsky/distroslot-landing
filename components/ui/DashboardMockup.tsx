"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { sku: "ART-1042", name: "Футболка оверсайз M", khorugvino: 120, shushary: 45, kazan: 30, krasnodar: 25, total: 220 },
  { sku: "ART-1043", name: "Футболка оверсайз L", khorugvino: 95, shushary: 38, kazan: 25, krasnodar: 20, total: 178 },
  { sku: "ART-2081", name: "Худи базовое S", khorugvino: 80, shushary: 32, kazan: 18, krasnodar: 15, total: 145 },
  { sku: "ART-2082", name: "Худи базовое M", khorugvino: 150, shushary: 55, kazan: 40, krasnodar: 35, total: 280 },
  { sku: "ART-3015", name: "Джинсы slim 32", khorugvino: 60, shushary: 22, kazan: 15, krasnodar: 12, total: 109 },
  { sku: "ART-3016", name: "Джинсы slim 34", khorugvino: 45, shushary: 18, kazan: 12, krasnodar: 10, total: 85 },
];

const maxTotal = Math.max(...rows.map((r) => r.total));

export default function DashboardMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border-2 border-border bg-card nb-shadow">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b-2 border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full border-2 border-border bg-danger" />
        <div className="h-3 w-3 rounded-full border-2 border-border bg-primary" />
        <div className="h-3 w-3 rounded-full border-2 border-border bg-success" />
        <span className="ml-3 text-xs font-bold text-muted">Klastr — Расчёт распределения</span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 border-b-2 border-border-light px-4 py-2.5">
        <div className="rounded-lg border-2 border-border bg-primary/20 px-3 py-1 text-xs font-bold text-foreground">Кабинет: Ozon Main</div>
        <div className="rounded-lg border-2 border-border-light bg-card px-3 py-1 text-xs text-muted">Период: 14 дней</div>
        <div className="rounded-lg border-2 border-border-light bg-card px-3 py-1 text-xs text-muted">SKU: 187</div>
        <div className="ml-auto rounded-lg border-2 border-success bg-success/10 px-3 py-1 text-xs font-bold text-success">Расчёт готов</div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b-2 border-border-light text-muted">
              <th className="px-4 py-2.5 font-bold">SKU</th>
              <th className="px-4 py-2.5 font-bold">Товар</th>
              <th className="px-4 py-2.5 font-bold text-right">Хоругвино</th>
              <th className="px-4 py-2.5 font-bold text-right">Шушары</th>
              <th className="px-4 py-2.5 font-bold text-right">Казань</th>
              <th className="px-4 py-2.5 font-bold text-right">Краснодар</th>
              <th className="px-4 py-2.5 font-bold text-right">Итого</th>
              <th className="px-4 py-2.5 font-bold">Заполненность</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <motion.tr
                key={row.sku}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="border-b border-border-light transition-colors hover:bg-card-hover"
              >
                <td className="px-4 py-2.5 font-mono text-muted">{row.sku}</td>
                <td className="px-4 py-2.5 font-medium text-foreground">{row.name}</td>
                <td className="px-4 py-2.5 text-right text-foreground">{row.khorugvino}</td>
                <td className="px-4 py-2.5 text-right text-foreground">{row.shushary}</td>
                <td className="px-4 py-2.5 text-right text-foreground">{row.kazan}</td>
                <td className="px-4 py-2.5 text-right text-foreground">{row.krasnodar}</td>
                <td className="px-4 py-2.5 text-right font-bold text-foreground">{row.total}</td>
                <td className="px-4 py-2.5">
                  <div className="h-2 w-full overflow-hidden rounded-full border-2 border-border bg-card">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${(row.total / maxTotal) * 100}%` } : { width: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3, duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t-2 border-border px-4 py-2.5">
        <span className="text-xs font-medium text-muted">6 из 187 SKU</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted">Итого к отгрузке:</span>
          <span className="nb-badge bg-primary text-primary-text text-xs">1,017 шт.</span>
        </div>
      </div>
    </div>
  );
}
