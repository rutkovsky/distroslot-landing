"use client";

import { Check, X } from "lucide-react";
import { FadeIn } from "./ui/AnimatedSection";

const rows = [
  { label: "Цена от", klastr: "1,990 ₽/мес", postavleno: "5,495 ₽/мес", selsup: "1,800 ₽/мес" },
  { label: "Ozon-специализация", klastr: true, postavleno: false, selsup: false },
  { label: "Специализация", klastr: "Ozon", postavleno: "WB + Ozon", selsup: "5+ маркетплейсов" },
  { label: "Фокус", klastr: "Распределение", postavleno: "Распределение", selsup: "ERP-система" },
  { label: "Self-service онбординг", klastr: true, postavleno: "Консультация", selsup: "Платное (50K+ ₽)" },
  { label: "Стоимость онбординга", klastr: "0 ₽", postavleno: "Бесплатно", selsup: "от 50,000 ₽", highlight: true },
  { label: "Время до результата", klastr: "~30 мин", postavleno: "1–2 часа", selsup: "3–8 часов", highlight: true },
  { label: "Расчёт по кластерам", klastr: true, postavleno: true, selsup: true },
  { label: "Выгрузка в Excel", klastr: true, postavleno: true, selsup: true },
  { label: "Прозрачные цены", klastr: true, postavleno: true, selsup: true },
  { label: "Без привязки к обороту", klastr: true, postavleno: true, selsup: false },
];

type CellVal = string | boolean;

function CellValue({ value }: { value: CellVal }) {
  if (value === true) return <Check size={18} className="mx-auto text-success" />;
  if (value === false) return <X size={18} className="mx-auto text-danger/60" />;
  return <span>{value}</span>;
}

// Mobile card for a single competitor
function CompetitorCard({
  name,
  highlight,
  data,
}: {
  name: string;
  highlight?: boolean;
  data: { label: string; value: CellVal }[];
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        highlight ? "border-primary bg-primary/5" : "border-border bg-card"
      }`}
    >
      <h4
        className={`mb-4 text-center text-sm font-bold ${
          highlight ? "text-primary" : "text-foreground"
        }`}
      >
        {name}
      </h4>
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.label} className="flex items-center justify-between gap-2 text-sm">
            <span className="text-muted">{d.label}</span>
            <span className={`font-medium ${highlight ? "text-primary" : "text-foreground"}`}>
              {d.value === true ? (
                <Check size={16} className="text-success" />
              ) : d.value === false ? (
                <X size={16} className="text-danger/60" />
              ) : (
                d.value
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Почему Klastr</h2>
            <p className="mx-auto max-w-2xl text-muted">
              Сравнение с основными инструментами на рынке для селлеров
            </p>
          </div>
        </FadeIn>

        {/* Desktop table */}
        <FadeIn>
          <div className="hidden overflow-x-auto rounded-2xl border border-border md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="px-6 py-4 text-left font-medium text-muted" />
                  <th className="px-6 py-4 text-center">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      Klastr
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-muted">Поставлено!</th>
                  <th className="px-6 py-4 text-center font-medium text-muted">SelSup</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-border/50 transition-colors hover:bg-card-hover/30"
                  >
                    <td className="px-6 py-3.5 font-medium text-foreground">{row.label}</td>
                    <td
                      className={`px-6 py-3.5 text-center font-medium ${
                        row.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      <CellValue value={row.klastr} />
                    </td>
                    <td className="px-6 py-3.5 text-center text-muted">
                      <CellValue value={row.postavleno} />
                    </td>
                    <td className="px-6 py-3.5 text-center text-muted">
                      <CellValue value={row.selsup} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="grid gap-4 md:hidden">
            <CompetitorCard
              name="Klastr"
              highlight
              data={rows.map((r) => ({ label: r.label, value: r.klastr }))}
            />
            <CompetitorCard
              name="Поставлено!"
              data={rows.map((r) => ({ label: r.label, value: r.postavleno }))}
            />
            <CompetitorCard
              name="SelSup"
              data={rows.map((r) => ({ label: r.label, value: r.selsup }))}
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-success">30 мин</span>
              <span>до результата</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-secondary">0 ₽</span>
              <span>за онбординг</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">Ozon</span>
              <span>= глубже</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
