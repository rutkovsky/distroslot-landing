import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "1,990",
    description: "Для начинающих селлеров",
    features: [
      "До 100 SKU",
      "1 кабинет Ozon",
      "Расчёт по кластерам",
      "Выгрузка в Excel",
      "Self-service онбординг",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "3,990",
    description: "Для растущего бизнеса",
    features: [
      "До 500 SKU",
      "3 кабинета Ozon",
      "Учёт сезонности и трендов",
      "Приоритетная поддержка",
      "Все функции Starter",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "7,990",
    description: "Для крупных селлеров",
    features: [
      "До 2,000 SKU",
      "Безлимитные кабинеты",
      "API доступ",
      "Мультипользователи",
      "Персональный менеджер",
      "Все функции Pro",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Тарифы</h2>
          <p className="mx-auto max-w-2xl text-muted">
            Прозрачные цены без скрытых платежей. Выберите подходящий план.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all ${
                plan.popular
                  ? "border-primary bg-card shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-xs font-medium text-white">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-1 text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted"> ₽/мес</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-success" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block w-full rounded-xl py-3 text-center text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                    : "border border-border bg-card-hover text-foreground hover:border-primary/50"
                }`}
              >
                Начать бесплатно
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          7 дней бесплатно на любом тарифе. Отмена в один клик.
        </p>
      </div>
    </section>
  );
}
