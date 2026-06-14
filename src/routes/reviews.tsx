import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews in Tampa, FL | Canvas Landscapes" },
      { name: "description", content: "Read Canvas Landscapes reviews from Tampa, FL homeowners. 4.9-star rated. Licensed & insured. Call (813) 555-0192 today." },
      { property: "og:title", content: "Canvas Landscapes Reviews — Tampa, FL" },
      { property: "og:description", content: "4.9 out of 5 across 220+ Google reviews from Tampa Bay homeowners." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const REVIEWS = [
  { name: "Jennifer M.", area: "South Tampa", svc: "Landscape Design", date: "June 2025", text: "Canvas Landscapes completely transformed our backyard. Marco's team was on time, professional, and the results were beyond what we imagined. Our neighbors stop by every week to ask about it." },
  { name: "David R.", area: "Wesley Chapel", svc: "Lawn Care", date: "May 2025", text: "Best lawn care company in Tampa. We've tried three other services — nobody comes close. Reliable every single week and the lawn has never looked better." },
  { name: "Sarah & Tom K.", area: "Brandon", svc: "Hardscaping", date: "May 2025", text: "They installed a beautiful paver patio and retaining wall for us in Brandon. Finished on time, on budget, and the crew cleaned up like they were never there. Highly recommend." },
  { name: "Lauren P.", area: "St. Petersburg", svc: "Sod Installation", date: "April 2025", text: "New Empire Zoysia sod from Canvas — fully rooted in 4 weeks. Their watering plan was super clear. The yard looks like a golf course now." },
  { name: "Mike B.", area: "Lutz", svc: "Irrigation", date: "April 2025", text: "Smart sprinkler install with a Rachio controller. The team explained everything and the system pays for itself in water savings. Already recommended to two neighbors." },
  { name: "Priya S.", area: "Riverview", svc: "Seasonal Cleanup", date: "March 2025", text: "Did a full storm cleanup after a bad April thunderstorm. They were out within 48 hours and hauled away everything. So thankful." },
  { name: "Chris & Erin H.", area: "Clearwater", svc: "Landscape Design", date: "March 2025", text: "Front yard redesign with Florida natives. Marco walked us through every plant choice and why. Three months later everything is thriving." },
  { name: "Tony G.", area: "Plant City", svc: "Sod Installation", date: "February 2025", text: "Bahia sod across a 3-acre property. Fair pricing, no surprises, and the crew was respectful of our older trees. Will use again." },
  { name: "Megan T.", area: "Land O' Lakes", svc: "Lawn Care", date: "February 2025", text: "Premium lawn plan. They actually catch issues before they become problems — caught chinch bugs early in our Floratam." },
  { name: "Rob & Diane W.", area: "Temple Terrace", svc: "Hardscaping", date: "January 2025", text: "Pool deck paver resurface. Looks brand new. The pricing was reasonable and the work passed inspection without any issues." },
  { name: "Alex N.", area: "South Tampa", svc: "Irrigation", date: "December 2024", text: "French drain solved a flooding issue we'd had for years in our backyard. They knew exactly what to do. Wish we'd called them sooner." },
  { name: "Bianca L.", area: "Tampa", svc: "Landscape Design", date: "November 2024", text: "Modern minimalist front entry with crushed shell beds — exactly what I asked for. The lighting they added makes the house look stunning at night." },
];

function ReviewsPage() {
  return (
    <>
      <section className="container-prose py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Reviews</p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">Canvas Landscapes Reviews — Tampa, FL</h1>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3">
          <div className="flex text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <span className="text-sm font-semibold">4.9 out of 5</span>
          <span className="text-sm text-muted-foreground">· 220 Google Reviews</span>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name + r.date} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed">"{r.text}"</p>
              <div className="mt-5 border-t border-border pt-4 text-sm">
                <p className="font-semibold">{r.name}</p>
                <p className="text-muted-foreground">{r.area} · {r.svc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid place-items-center rounded-3xl border-2 border-dashed border-border bg-card/50 px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Google Business Reviews Widget — embed here</p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Join 220+ Happy Tampa Homeowners</h2>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Get My Free Estimate
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
