"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Send } from "lucide-react";
import { FadeIn } from "./ui/AnimatedSection";

const TG_BOT_URL = "https://t.me/distroslot_bot";

const avatarColors = [
  "bg-secondary",
  "bg-primary",
  "bg-success",
  "bg-danger",
  "bg-warning",
];

const testimonials = [
  {
    name: "Максим К.",
    role: "Владелец, 150 SKU, Ozon FBO",
    initials: "МК",
    colorIdx: 0,
    quote:
      "Раньше целый день считал в Excel, теперь за 30 минут готово. Индекс локализации вырос с 62% до 78% — логистика подешевела на 40%.",
  },
  {
    name: "Анна Р.",
    role: "Менеджер маркетплейсов, 300 SKU",
    initials: "АР",
    colorIdx: 1,
    quote:
      "Руководитель был в шоке, когда я показала отчёт за 30 минут вместо обычных 2 дней. Теперь трачу время на стратегию, а не на таблицы.",
  },
  {
    name: "Дмитрий С.",
    role: "Начинающий селлер, 80 SKU",
    initials: "ДС",
    colorIdx: 2,
    quote:
      "При обороте 800К каждая ошибка в распределении — это минус 30–50К. Klastr окупился за первую неделю.",
  },
  {
    name: "Елена В.",
    role: "Fashion-селлер, 400 SKU",
    initials: "ЕВ",
    colorIdx: 3,
    quote:
      "С 7 размерами на артикул расчёт был адом. Загрузила API-ключ — и всё автоматически. Экономлю 6 часов в неделю.",
  },
  {
    name: "Артём Н.",
    role: "Селлер Ozon, 200 SKU",
    initials: "АН",
    colorIdx: 4,
    quote:
      "После повышения НДС до 22% каждый процент маржи на счету. Оптимизация по кластерам дала +5% к продажам за счёт быстрой доставки.",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Что говорят селлеры
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              Присоединяйтесь к селлерам, которые экономят 5+ часов в неделю
            </p>
          </div>
        </FadeIn>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-0 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="nb-card h-full">
                  {/* Stars */}
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 text-sm leading-relaxed text-foreground">
                    &laquo;{t.quote}&raquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border text-xs font-bold text-primary-text ${avatarColors[t.colorIdx]}`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-3 w-3 rounded-full border-2 border-border transition-all ${
                i === selectedIndex ? "bg-primary" : "bg-card hover:bg-card-hover"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={TG_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn text-sm"
          >
            <Send size={16} />
            Попробовать бесплатно
          </a>
        </div>
      </div>
    </section>
  );
}
