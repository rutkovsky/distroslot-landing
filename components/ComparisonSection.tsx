import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    label: "Цена от",
    distroslot: "1,990 ₽/мес",
    postavleno: "5,495 ₽/мес",
    selsup: "1,800 ₽/мес",
    highlight: true,
  },
  {
    label: "Специализация",
    distroslot: "Ozon",
    postavleno: "WB + Ozon",
    selsup: "5+ маркетплейсов",
  },
  {
    label: "Фокус",
    distroslot: "Распределение",
    postavleno: "Распределение",
    selsup: "ERP-система",
  },
  {
    label: "Self-service онбординг",
    distroslot: true,
    postavleno: "Консультация",
    selsup: "Платное (50K+ ₽)",
  },
  {
    label: "Время до результата",
    distroslot: "~30 мин",
    postavleno: "1-2 часа",
    selsup: "3-8 часов",
    highlight: true,
  },
  {
    label: "Расчёт по кластерам",
    distroslot: true,
    postavleno: true,
    selsup: true,
  },
  {
    label: "Выгрузка в Excel",
    distroslot: true,
    postavleno: true,
    selsup: true,
  },
  {
    label: "Прозрачные цены на сайте",
    distroslot: true,
    postavleno: true,
    selsup: true,
  },
  {
    label: "Без привязки к обороту",
    distroslot: true,
    postavleno: true,
    selsup: false,
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check size={18} className="mx-auto text-success" />;
  if (value === false) return <X size={18} className="mx-auto text-danger/60" />;
  return <span>{value}</span>;
}

export default function ComparisonSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Почему DistroSlot
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Сравнение с основными конкурентами на рынке инструментов для селлеров
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-6 py-4 text-left font-medium text-muted" />
                <th className="px-6 py-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      DistroSlot
                    </span>
                  </div>
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
                    <CellValue value={row.distroslot} />
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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">-60%</span>
            <span>дешевле Поставлено!</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-success">30 мин</span>
            <span>до первого результата</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-secondary">0 ₽</span>
            <span>за онбординг</span>
          </div>
        </div>
      </div>
    </section>
  );
}
