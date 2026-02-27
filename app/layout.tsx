import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Klastr — Калькулятор распределения товаров для Ozon",
  description:
    "Автоматический расчёт поставок по 26 кластерам Ozon. Экономьте 5+ часов в неделю. От 1,990 ₽/мес. 7 дней бесплатно.",
  metadataBase: new URL("https://klastr.ru"),
  openGraph: {
    title: "Klastr — Калькулятор распределения товаров для Ozon",
    description:
      "Распредели товары по складам Ozon за 30 минут вместо 5 часов. Автоматический расчёт по 26 кластерам.",
    type: "website",
    locale: "ru_RU",
    siteName: "Klastr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klastr — Калькулятор распределения товаров для Ozon",
    description: "Распредели товары по складам Ozon за 30 минут вместо 5 часов.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
