import { type ReactNode } from "react";

export function PhotoPlaceholder({
  label,
  alt,
  className = "",
  variant = "a",
  children,
}: {
  label: string;
  alt: string;
  className?: string;
  variant?: "a" | "b";
  children?: ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`photo-placeholder ${variant === "b" ? "photo-placeholder-alt" : ""} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="relative z-10 p-4 text-xs font-medium uppercase tracking-wider opacity-90">
        {label}
      </div>
      {children}
    </div>
  );
}
