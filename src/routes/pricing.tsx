import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";


export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Landscaping Pricing in Tampa, FL | Canvas Landscapes" },
      { name: "description", content: "Transparent landscaping pricing in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today." },
      { property: "og:title", content: "Landscaping Pricing in Tampa, FL | Canvas Landscapes" },
      { property: "og:description", content: "Transparent Tampa Bay landscaping pricing. No hidden fees." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Basic", price: "$89", period: "/mo", bullets: ["Bi-weekly mow & edge", "Blowing & cleanup", "Curbside debris removal", "Service in all 10 Tampa Bay cities"] },
  { name: "Standard", price: "$149", period: "/mo", featured: true, bullets: ["Weekly mow & edge", "Quarterly fertilization", "Spot weed control", "Service summary after each visit"] },
  { name: "Premium", price: "$219", period: "/mo", bullets: ["Weekly mow & edge", "Full fertilization program", "Weed, pest & fungus control", "Shrub trimming included"] },
];

const faq = [
  { q: "Do you charge for estimates?", a: "No. All on-site estimates across Tampa Bay are 100% free, with no obligation to book." },
  { q: "Do you require contracts for lawn care?", a: "No long-term contract required. We offer month-to-month service and discounted annual plans for customers who prefer them." },
  { q: "What payment methods do you accept?", a: "Credit card, ACH bank transfer, Zelle, and check. Most lawn customers set up automatic monthly billing." },
  { q: "Do prices change seasonally in Florida?", a: "No. Your monthly lawn price is the same year-round even though service frequency shifts between Tampa's growing and dormant seasons." },
  { q: "Is there a cancellation fee?", a: "Never. You can cancel anytime with no fee. Annual prepay customers receive a pro-rated refund." },
  { q: "Do you offer financing on larger projects?", a: "Yes. We partner with two financing providers offering 0% intro and long-term options for qualified Tampa Bay homeowners on hardscaping and design projects." },
];

function PricingPage() {
  return (
    <>
      <section className="container-prose py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Pricing</p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">Landscaping Pricing in Tampa, FL</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Transparent pricing for Tampa Bay homeowners. No hidden fees, no surprises. Tampa lawn care plans below — custom project pricing provided after a free on-site estimate.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${t.featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                  Most popular
                </span>
              )}
              <h2 className="font-display text-2xl font-semibold">{t.name}</h2>
              <p className="mt-4">
                <span className="font-display text-5xl font-semibold">{t.price}</span>
                <span className={`text-base ${t.featured ? "opacity-80" : "text-muted-foreground"}`}>{t.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-accent" : "text-primary"}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold ${t.featured ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"}`}
              >
                Get this plan
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 rounded-xl bg-secondary/60 p-4 text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> Custom project pricing (hardscaping, design, irrigation) provided after free on-site estimate. Most Tampa Bay projects range from $1,500–$25,000 depending on scope.
        </p>

        <h2 className="mt-16 font-display text-3xl font-semibold md:text-4xl">Pricing FAQ</h2>
        <div className="mt-6">
          <FAQ items={faq} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
