import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ShieldCheck, Trophy, Sprout, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { ServiceGrid } from "@/components/service-grid";
import { CTASection } from "@/components/cta-section";
import { IMG, SERVICE_IMAGES } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Landscaping in Tampa, FL | Canvas Landscapes" },
      { name: "description", content: "Canvas Landscapes offers premium landscaping in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today." },
      { property: "og:title", content: "Landscaping in Tampa, FL | Canvas Landscapes" },
      { property: "og:description", content: "Tampa's most trusted landscaping company since 2009. Free estimates. Call (813) 555-0192." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const portfolio = [
  { tag: "Backyard Patio — South Tampa", alt: "backyard patio installation South Tampa FL – Canvas Landscapes", img: SERVICE_IMAGES.hardscaping },
  { tag: "Lawn Renovation — Wesley Chapel", alt: "lawn renovation Wesley Chapel FL – Canvas Landscapes", img: SERVICE_IMAGES["lawn-care"] },
  { tag: "Garden Design — St. Petersburg", alt: "garden design St. Petersburg FL – Canvas Landscapes", img: SERVICE_IMAGES["landscape-design"] },
  { tag: "Irrigation Install — Brandon", alt: "irrigation install Brandon FL – Canvas Landscapes", img: SERVICE_IMAGES.irrigation },
  { tag: "Modern Entry — Lutz", alt: "modern entry landscaping Lutz FL – Canvas Landscapes", img: IMG.modernEntry },
  { tag: "Path Lighting — Riverview", alt: "landscape path lighting Riverview FL – Canvas Landscapes", img: IMG.walkway },
];

const reviews = [
  { name: "Jennifer M.", area: "South Tampa", svc: "Landscape Design", text: "Canvas Landscapes completely transformed our backyard. Marco's team was on time, professional, and the results were beyond what we imagined." },
  { name: "David R.", area: "Wesley Chapel", svc: "Lawn Care", text: "Best lawn care company in Tampa. We've tried three other services — nobody comes close. Reliable every single week." },
  { name: "Sarah & Tom K.", area: "Brandon", svc: "Hardscaping", text: "They installed a beautiful paver patio and retaining wall for us in Brandon. Finished on time, on budget. Highly recommend." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={IMG.hero}
          alt="Tampa backyard landscaping transformation – Canvas Landscapes"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/55 to-ink/80" />
        <div className="container-prose relative z-10 grid min-h-[640px] place-items-center py-24 text-center text-primary-foreground md:min-h-[760px] md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium tracking-wide uppercase">Tampa Bay · Est. 2009</span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Tampa's Most Trusted<br/><em className="not-italic text-accent">Landscaping</em> Company
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base opacity-90 md:text-lg">
              Serving Tampa Bay since 2009 — licensed, insured, and obsessed with results. Free estimates, no pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="w-full rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90 sm:w-auto">
                Get My Free Estimate
              </Link>
              <Link to="/portfolio" className="w-full rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 sm:w-auto">
                See Our Work
              </Link>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4.9 · 220 Google Reviews · Tampa, FL
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/60">
        <div className="container-prose grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:py-10">
          {[
            { Icon: ShieldCheck, label: "Licensed & Insured in Florida" },
            { Icon: Trophy, label: "15+ Years Serving Tampa Bay" },
            { Icon: Sprout, label: "600+ Projects Completed" },
            { Icon: Star, label: "4.9-Star Google Rated" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-6 w-6 shrink-0 text-primary" />
              <span className="text-sm font-medium leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container-prose py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">What we do</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">Tampa landscaping, done right.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10">
          <ServiceGrid limit={4} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container-prose">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">Three simple steps to a better yard.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Get a free on-site estimate in Tampa",
              "We design, plan, and schedule around you",
              "Sit back and enjoy your transformed yard",
            ].map((step, i) => (
              <div key={step} className="rounded-2xl border border-border bg-card p-8">
                <span className="font-display text-5xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNER */}
      <section className="container-prose grid gap-10 py-20 md:grid-cols-2 md:py-28">
        <img
          src={IMG.owner}
          alt="Marco Rivera, founder of Canvas Landscapes Tampa FL"
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">The Founder</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">Built on Tampa Bay Values.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Hi, I'm Marco Rivera, founder of Canvas Landscapes. I started this company in Tampa in 2009 because I saw too many homeowners get let down by crews that didn't show up. We do things differently — every yard we touch gets treated like our own.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {["On-time, every time", "One crew, one project lead", "Tampa-native plant expertise"].map((p) => (
              <li key={p} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container-prose">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Recent work</p>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">Tampa Bay yards we love.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
              <div key={p.tag} className="overflow-hidden rounded-2xl">
                <PhotoPlaceholder label={p.tag} alt={p.alt} className="aspect-[4/3]" variant={Math.random() > 0.5 ? "a" : "b"} />
                <div className="bg-card px-4 py-3 text-sm font-medium">{p.tag}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container-prose py-20 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Reviews</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">What Tampa Homeowners Are Saying</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed">"{r.text}"</p>
              <div className="mt-6 border-t border-border pt-4 text-sm">
                <p className="font-semibold">{r.name}</p>
                <p className="text-muted-foreground">{r.area} · {r.svc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/reviews" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
            Read All 220 Reviews
          </Link>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="bg-accent/95 text-accent-foreground">
        <div className="container-prose flex flex-col items-center gap-3 py-6 text-center md:flex-row md:justify-center md:py-5">
          <span className="text-2xl">📅</span>
          <p className="text-sm font-semibold md:text-base">Now booking July in Tampa Bay — only 8 spots remaining. Reserve yours today.</p>
          <Link to="/contact" className="inline-flex items-center gap-1 rounded-full bg-accent-foreground/10 px-4 py-2 text-sm font-semibold underline">
            Reserve <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection />

      {/* phone fallback */}
      <div className="container-prose -mt-4 mb-12 text-center">
        <a href="tel:+18135550192" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <Phone className="h-4 w-4" /> Or call us directly: (813) 555-0192
        </a>
      </div>
    </>
  );
}
