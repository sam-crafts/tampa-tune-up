import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection } from "@/components/cta-section";
import { IMG, SERVICE_IMAGES } from "@/lib/images";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Landscaping Portfolio in Tampa, FL | Canvas Landscapes" },
      { name: "description", content: "Canvas Landscapes portfolio of landscaping projects across Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today." },
      { property: "og:title", content: "Landscaping Portfolio in Tampa, FL | Canvas Landscapes" },
      { property: "og:description", content: "See real Tampa Bay landscaping, hardscaping, and design projects by Canvas Landscapes." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

type Cat = "All" | "Lawn Care" | "Landscape Design" | "Hardscaping" | "Irrigation" | "Sod" | "Cleanup";

const projects: { cat: Exclude<Cat, "All">; loc: string; desc: string; img: string; ba?: boolean }[] = [
  { cat: "Hardscaping", loc: "South Tampa", desc: "Travertine paver patio with seat wall and fire pit.", img: SERVICE_IMAGES.hardscaping, ba: true },
  { cat: "Landscape Design", loc: "Wesley Chapel", desc: "Full front-yard redesign with Florida natives.", img: SERVICE_IMAGES["landscape-design"], ba: true },
  { cat: "Lawn Care", loc: "Brandon", desc: "Weekly Floratam St. Augustine maintenance program.", img: SERVICE_IMAGES["lawn-care"] },
  { cat: "Irrigation", loc: "Riverview", desc: "8-zone smart sprinkler with Rachio controller.", img: SERVICE_IMAGES.irrigation },
  { cat: "Sod", loc: "Lutz", desc: "1,800 sq ft Empire Zoysia sod replacement.", img: SERVICE_IMAGES["sod-installation"], ba: true },
  { cat: "Cleanup", loc: "Temple Terrace", desc: "Post-storm debris removal and mulch refresh.", img: SERVICE_IMAGES["seasonal-cleanup"] },
  { cat: "Hardscaping", loc: "St. Petersburg", desc: "Curved walkway with low-voltage path lighting.", img: IMG.walkway },
  { cat: "Landscape Design", loc: "Clearwater", desc: "Backyard tropical garden with bird of paradise.", img: SERVICE_IMAGES["landscape-design"] },
  { cat: "Lawn Care", loc: "Land O' Lakes", desc: "Premium plan including fertilization and pest control.", img: SERVICE_IMAGES["lawn-care"] },
  { cat: "Sod", loc: "Plant City", desc: "Bahia sod install across a 3-acre rural property.", img: SERVICE_IMAGES["sod-installation"] },
  { cat: "Irrigation", loc: "South Tampa", desc: "French drain install solving chronic backyard pooling.", img: SERVICE_IMAGES.irrigation },
  { cat: "Landscape Design", loc: "Tampa", desc: "Modern minimalist front entry with crushed shell beds.", img: IMG.modernEntry },
];

const cats: Cat[] = ["All", "Lawn Care", "Landscape Design", "Hardscaping", "Irrigation", "Sod", "Cleanup"];

function PortfolioPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);
  return (
    <>
      <section className="container-prose py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Portfolio</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-6xl">Our Landscaping Work Across Tampa Bay</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">A look at recent Tampa landscaping, hardscaping, and design projects — from South Tampa backyards to Plant City sod installs.</p>

        <div className="mt-10 -mx-5 overflow-x-auto px-5">
          <div className="flex gap-2 whitespace-nowrap">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <article key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
              {p.ba ? <BeforeAfter loc={p.loc} cat={p.cat} /> : (
                <PhotoPlaceholder
                  label={`${p.cat} — ${p.loc}`}
                  alt={`${p.cat.toLowerCase()} project ${p.loc} FL – Canvas Landscapes`}
                  className="aspect-[4/3]"
                  variant={i % 2 === 0 ? "a" : "b"}
                />
              )}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">{p.cat}</span>
                  <span className="text-muted-foreground">{p.loc}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Like What You See? Get a Free Estimate
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function BeforeAfter({ loc, cat }: { loc: string; cat: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/3] select-none">
      <PhotoPlaceholder label={`BEFORE — ${loc}`} alt={`${cat} before ${loc} FL – Canvas Landscapes`} className="absolute inset-0 h-full w-full" variant="b" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <PhotoPlaceholder label={`AFTER — ${loc}`} alt={`${cat} after ${loc} FL – Canvas Landscapes`} className="h-full w-full" variant="a" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Before/after slider"
        className="absolute inset-x-0 bottom-3 mx-auto block w-[85%] accent-accent"
      />
      <div className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-accent" style={{ left: `${pos}%` }} />
    </div>
  );
}
