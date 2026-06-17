import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICE_IMAGES } from "@/lib/images";

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
          className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={SERVICE_IMAGES[s.slug]}
              alt={`${s.title} in Tampa, FL — Canvas Landscapes`}
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
