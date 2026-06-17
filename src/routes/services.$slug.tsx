import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { SERVICE_DETAILS, type ServiceDetail } from "@/lib/service-details";
import { IMG, SERVICE_IMAGES } from "@/lib/images";
import { QuoteForm } from "@/components/quote-form";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const detail = SERVICE_DETAILS[params.slug];
    if (!detail) throw notFound();
    return detail;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: loaderData.title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:url", content: `/services/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${loaderData.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-prose py-24 text-center">
      <h1 className="font-display text-4xl">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary underline">Browse all services</Link>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const d: ServiceDetail = Route.useLoaderData();
  return (
    <>
      <section className="container-prose py-14 md:py-20">
        <Link to="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.1] md:text-6xl">{d.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{d.intro}</p>
      </section>

      <section className="container-prose grid gap-4 sm:grid-cols-3">
        {[
          SERVICE_IMAGES[d.slug] ?? IMG.modernEntry,
          IMG.walkway,
          IMG.after,
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${d.keyword} – Canvas Landscapes Tampa FL #${i + 1}`}
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        ))}
      </section>

      <section className="container-prose grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">What's included</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {d.inclusions.map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm md:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display text-3xl font-semibold md:text-4xl">Pricing</h2>
          <div className={`mt-6 grid gap-4 ${d.pricing.length > 1 ? "md:grid-cols-3" : ""}`}>
            {d.pricing.map((p, i) => (
              <div key={p.label} className={`rounded-2xl border p-6 ${i === 1 ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                <p className="text-sm font-medium text-muted-foreground">{p.label}</p>
                <p className="mt-1 font-display text-3xl font-semibold">{p.value}</p>
                {p.bullets && (
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {d.pricingNote && <p className="mt-4 text-sm text-muted-foreground">{d.pricingNote}</p>}

          <h2 className="mt-14 font-display text-3xl font-semibold md:text-4xl">Frequently asked questions</h2>
          <div className="mt-6">
            <FAQ items={d.faq} />
          </div>
        </div>

        <aside className="md:sticky md:top-28 md:self-start">
          <QuoteForm service={d.h1.split(" in ")[0]} />
        </aside>
      </section>

      <CTASection headline={d.cta} subline="Free estimates across Tampa Bay. We respond same day." />
    </>
  );
}
