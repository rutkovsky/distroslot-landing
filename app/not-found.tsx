import Logo from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
      <Logo size="large" />
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-bold text-muted">404</h1>
        <p className="mb-6 text-lg text-muted">Страница не найдена</p>
        <a href="/" className="nb-btn">
          На главную
        </a>
      </div>
    </div>
  );
}
