import { Clock, TrendingDown, PackageX } from "lucide-react";

const pains = [
  {
    icon: Clock,
    stat: "4-8 часов",
    title: "в неделю на ручной расчёт",
    description:
      "Сбор остатков, анализ географии заказов, расчёт распределения по размерам и складам — всё вручную в Excel.",
  },
  {
    icon: TrendingDown,
    stat: "+50%",
    title: "расходы на логистику",
    description:
      "Ошибки в распределении приводят к лишним перемещениям товара между складами и переплатам за хранение.",
  },
  {
    icon: PackageX,
    stat: "-30%",
    title: "потеря продаж из-за out-of-stock",
    description:
      "Неточный расчёт обнуляет остатки на складах, карточка падает в выдаче, продажи резко снижаются.",
  },
];

export default function PainSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Знакомо?</h2>
          <p className="mx-auto max-w-2xl text-muted">
            Каждую неделю селлеры на Ozon теряют время и деньги на ручном расчёте поставок
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {pains.map((pain) => (
            <div
              key={pain.stat}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-danger/30 hover:bg-card-hover"
            >
              <div className="mb-4 inline-flex rounded-xl bg-danger/10 p-3">
                <pain.icon size={24} className="text-danger" />
              </div>
              <div className="mb-2 text-3xl font-bold text-danger">{pain.stat}</div>
              <div className="mb-3 text-lg font-medium text-foreground">{pain.title}</div>
              <p className="text-sm leading-relaxed text-muted">{pain.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center">
          <blockquote className="mb-4 text-lg leading-relaxed text-foreground italic">
            &laquo;Теперь на организацию поставок я трачу всего 1 час в неделю вместо целого
            рабочего дня (8 часов)&raquo;
          </blockquote>
          <div className="text-sm text-muted">
            <span className="font-medium text-foreground">Игорь</span> — селлер Ozon, 100+ артикулов, 5-7 складов
          </div>
        </div>
      </div>
    </section>
  );
}
