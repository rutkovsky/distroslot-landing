export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Yellow circle - top left */}
      <div
        className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/15 opacity-60"
        style={{ animation: "float-1 25s ease-in-out infinite" }}
      />
      {/* Purple square - top right */}
      <div
        className="absolute top-32 -right-16 h-48 w-48 rounded-3xl bg-secondary/15 opacity-40"
        style={{ animation: "float-2 30s ease-in-out infinite" }}
      />
      {/* Green circle - mid left */}
      <div
        className="absolute top-1/2 -left-10 h-40 w-40 rounded-full bg-success/15 opacity-40"
        style={{ animation: "float-3 20s ease-in-out infinite" }}
      />
      {/* Yellow square - bottom right */}
      <div
        className="absolute bottom-20 right-20 h-56 w-56 rounded-3xl bg-primary/10 opacity-50"
        style={{ animation: "float-4 28s ease-in-out infinite" }}
      />
      {/* Small accent - center */}
      <div
        className="absolute top-1/3 left-1/2 h-24 w-24 rounded-full bg-danger/10 opacity-30"
        style={{ animation: "float-2 22s ease-in-out infinite" }}
      />
    </div>
  );
}