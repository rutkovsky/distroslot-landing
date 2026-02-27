import { Send, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="mb-4 inline-block text-xl font-bold">
              <span className="text-primary">Distro</span>
              <span className="text-foreground">Slot</span>
            </a>
            <p className="mb-4 max-w-sm text-sm text-muted">
              Калькулятор распределения товаров для Ozon.
              Автоматический расчёт поставок по 26 кластерам.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
              >
                <Send size={16} />
                Telegram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
              >
                <Mail size={16} />
                support@distroslot.ru
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Продукт</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-muted transition-colors hover:text-foreground">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted transition-colors hover:text-foreground">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted transition-colors hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Ресурсы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                  Документация Ozon API
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} DistroSlot. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
