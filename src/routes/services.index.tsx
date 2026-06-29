import { createFileRoute } from "@tanstack/react-router";
import { ServiceGrid } from "@/components/service-grid";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Landscaping Services in Tampa, FL | Canvas Landscapes" },
      { name: "description", content: "Canvas Landscapes offers full-service landscaping in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today." },
      { property: "og:title", content: "Landscaping Services in Tampa, FL | Canvas Landscapes" },
      { property: "og:description", content: "Lawn care, design, hardscaping, irrigation, sod & cleanup across Tampa Bay." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <section className="container-prose py-20 md:py-28">
        <Reveal variant="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-6xl">
            Landscaping Services in Tampa, FL
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Canvas Landscapes offers full-service landscaping across Tampa Bay. From weekly lawn care to complete outdoor transformations — we do it all. Trusted Tampa landscaping, Tampa lawn care, and Tampa hardscaping for over 15 years.
          </p>
        </Reveal>
        <div className="mt-12">
          <ServiceGrid />
        </div>
      </section>
      <Reveal variant="scale" duration={800}><CTASection /></Reveal>
    </>
  );
}

