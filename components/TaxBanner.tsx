"use client";

import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";

export default function TaxBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="border-b border-warning-border bg-warning-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-start gap-2 sm:items-center">
          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-warning sm:mt-0" />
          <p className="min-w-0 text-xs leading-relaxed text-warning sm:text-sm">
            НДС 22% и отчётность в ФНС с апреля 2026. Маржа сжимается до 3–5%.
            Оптимизируйте логистику — это единственный рычаг.{" "}
            <a
              href="#features"
              className="whitespace-nowrap font-medium underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              Подробнее
            </a>
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded-md p-1 text-warning transition-opacity hover:opacity-70"
          aria-label="Закрыть баннер"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
