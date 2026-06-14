import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const SERVICES = [
  { slug: "lawn-care", title: "Lawn Care & Maintenance", short: "Weekly mowing, edging & treatments tuned to Tampa grass.", keyword: "Tampa lawn care" },
  { slug: "landscape-design", title: "Landscape Design", short: "Custom outdoor designs built for the Florida climate.", keyword: "landscape design Tampa Bay" },
  { slug: "hardscaping", title: "Hardscaping & Patios", short: "Paver patios, walkways, walls & outdoor kitchens.", keyword: "Tampa hardscaping" },
  { slug: "irrigation", title: "Irrigation & Drainage", short: "Smart sprinklers & drainage for Tampa's rainy season.", keyword: "irrigation system Tampa FL" },
  { slug: "sod-installation", title: "Sod Installation", short: "Fresh St. Augustine, Zoysia & Bahia — installed right.", keyword: "sod installation Tampa FL" },
  { slug: "seasonal-cleanup", title: "Seasonal Cleanup & Mulching", short: "Dry & wet season refreshes — beds, mulch & haul-away.", keyword: "yard cleanup Tampa FL" },
] as const;

export type ServiceSlug = typeof SERVICES[number]["slug"];

export function ServiceGrid({ limit }: { limit?: number }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <Link
          key={s.slug}
          to="/services/$slug"
          params={{ slug: s.slug }}
          className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
        >
          <div className="h-32 photo-placeholder rounded-xl" aria-label={`${s.title} in Tampa FL — Canvas Landscapes`}>
            <span className="relative z-10 p-3 text-[10px] uppercase tracking-wider opacity-80">{s.title} · Tampa, FL</span>
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">
            Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
