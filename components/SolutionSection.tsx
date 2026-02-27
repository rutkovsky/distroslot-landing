import { Plug, Calculator, BarChart3, FileSpreadsheet } from "lucide-react";
import CalculatorMockup from "./ui/CalculatorMockup";

const features = [
  {
    icon: Plug,
    title: "Подключение к Ozon API за 5 минут",
    description:
      "Вставьте API-ключ, и данные о товарах, остатках и продажах загрузятся автоматически.",
  },
  {
    icon: Calculator,
    title: "Расчёт по 26 кластерам Ozon",
    description:
      "Алгоритм рассчитывает оптимальное распределение с учётом географии заказов и ёмкости складов.",
  },
  {
    icon: BarChart3,
    title: "Учёт сезонности и трендов",
    description:
      "Анализ динамики продаж, сезонных всплесков и остатков для точного прогноза.",
  },
  {
    icon: FileSpreadsheet,
    title: "Готовый файл для ЛК Ozon",
    description:
      "Выгружайте результат в Excel и загружайте напрямую в личный кабинет Ozon.",
  },
];

export default function SolutionSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Как DistroSlot решает проблему
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Автоматизируем весь процесс расчёта поставок — от загрузки данных до готового файла
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Features */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card-hover"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <feature.icon size={22} className="text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mockup */}
          <div>
            <CalculatorMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
