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
    <div ref={ref} className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-danger/60" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <div className="h-3 w-3 rounded-full bg-success/60" />
        <span className="ml-3 text-xs text-muted">Klastr — Расчёт распределения</span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="rounded bg-primary/10 px-3 py-1 text-xs text-primary">Кабинет: Ozon Main</div>
        <div className="rounded bg-card-hover px-3 py-1 text-xs text-muted">Период: 14 дней</div>
        <div className="rounded bg-card-hover px-3 py-1 text-xs text-muted">SKU: 187</div>
        <div className="ml-auto rounded bg-success/10 px-3 py-1 text-xs text-success">Расчёт готов</div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="px-4 py-2.5 font-medium">SKU</th>
              <th className="px-4 py-2.5 font-medium">Товар</th>
              <th className="px-4 py-2.5 font-medium text-right">Хоругвино</th>
              <th className="px-4 py-2.5 font-medium text-right">Шушары</th>
              <th className="px-4 py-2.5 font-medium text-right">Казань</th>
              <th className="px-4 py-2.5 font-medium text-right">Краснодар</th>
              <th className="px-4 py-2.5 font-medium text-right">Итого</th>
              <th className="px-4 py-2.5 font-medium">Заполненность</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <motion.tr
                key={row.sku}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="border-b border-border/50 transition-colors hover:bg-card-hover/50"
              >
                <td className="px-4 py-2.5 font-mono text-muted">{row.sku}</td>
                <td className="px-4 py-2.5 text-foreground">{row.name}</td>
                <td className="px-4 py-2.5 text-right text-foreground">{row.khorugvino}</td>
                <td className="px-4 py-2.5 text-right text-foreground">{row.shushary}</td>
                <td className="px-4 py-2.5 text-right text-foreground">{row.kazan}</td>
                <td className="px-4 py-2.5 text-right text-foreground">{row.krasnodar}</td>
                <td className="px-4 py-2.5 text-right font-medium text-primary">{row.total}</td>
                <td className="px-4 py-2.5">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
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
      <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
        <span className="text-xs text-muted">6 из 187 SKU</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted">Итого к отгрузке:</span>
          <span className="text-sm font-bold text-primary">1,017 шт.</span>
        </div>
      </div>
    </div>
  );
}
