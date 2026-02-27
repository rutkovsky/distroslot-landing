import { Send, Mail, Shield } from "lucide-react";
import Logo from "./ui/Logo";

const TG_BOT_URL = "https://t.me/distroslot_bot";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-4 max-w-sm text-sm text-muted">
              Калькулятор распределения товаров для Ozon.
              Автоматический расчёт поставок по 26 кластерам.
            </p>
            <div className="mb-4 flex items-center gap-4">
              <a
                href={TG_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
              >
                <Send size={16} />
                Telegram
              </a>
              <a
                href="mailto:support@klastr.ru"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
              >
                <Mail size={16} />
                support@klastr.ru
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted/70">
              <Shield size={14} />
              <span>Данные на серверах в РФ · Read-only API · ИП Павлов Валерий</span>
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
                <a
                  href="https://docs.ozon.ru/api/seller/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Документация Ozon API
                </a>
              </li>
              <li>
                <span className="text-sm text-muted/50">Блог — скоро</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Klastr. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
