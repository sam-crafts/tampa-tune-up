import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { SERVICE_AREAS } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact in Tampa, FL | Canvas Landscapes" },
      { name: "description", content: "Contact Canvas Landscapes in Tampa, FL. Licensed & insured. Free estimates. Call (813) 555-0192 today." },
      { property: "og:title", content: "Contact Canvas Landscapes — Tampa, FL" },
      { property: "og:description", content: "Free estimates across Tampa Bay. Call (813) 555-0192 or email hello@canvaslandscapes.com." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-prose py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-6xl">Get Your Free Estimate in Tampa, FL</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Call, email, or send us a note below. We respond same day and serve all of Tampa Bay — Tampa landscaping, lawn care, hardscaping, and more.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <a href="tel:+18135550192" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
            <Phone className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Call</p>
              <p className="mt-1 font-display text-2xl font-semibold">(813) 555-0192</p>
            </div>
          </a>
          <a href="mailto:hello@canvaslandscapes.com" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
            <Mail className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="mt-1 font-display text-xl font-semibold break-all">hello@canvaslandscapes.com</p>
            </div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <Clock className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Hours</p>
              <p className="mt-1 text-sm">Mon–Fri · 7:00am – 6:00pm</p>
              <p className="text-sm">Saturday · 8:00am – 2:00pm</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Service Areas</p>
                <p className="mt-2 text-sm leading-relaxed">{SERVICE_AREAS.join(" · ")}</p>
              </div>
            </div>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
