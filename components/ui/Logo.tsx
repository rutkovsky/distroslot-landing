export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const h = size === "large" ? 40 : 32;
  const iconSize = size === "large" ? 28 : 22;
  const textClass = size === "large" ? "text-2xl" : "text-xl";

  return (
    <a href="#" className="inline-flex items-center gap-2">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* K letter stylized with cluster dots */}
        <rect width="32" height="32" rx="8" className="fill-primary" />
        {/* K shape */}
        <path
          d="M10 8v16M10 16l8-8M10 16l8 8"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cluster dots */}
        <circle cx="24" cy="8" r="2.5" fill="white" opacity="0.9" />
        <circle cx="24" cy="16" r="2.5" fill="white" opacity="0.7" />
        <circle cx="24" cy="24" r="2.5" fill="white" opacity="0.5" />
      </svg>
      <span className={`${textClass} font-bold tracking-tight`}>
        <span className="text-primary">klastr</span>
      </span>
    </a>
  );
}