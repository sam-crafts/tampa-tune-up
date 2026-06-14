import { Link } from "@tanstack/react-router";

export function CTASection({
  headline = "Ready to Transform Your Tampa Yard?",
  subline = "Free on-site estimates. No obligation. We serve all of Tampa Bay.",
}: { headline?: string; subline?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-prose py-16 text-center md:py-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base opacity-85 md:text-lg">{subline}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
            Get My Free Estimate
          </Link>
          <a href="tel:+18135550192" className="rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10">
            Or call (813) 555-0192
          </a>
        </div>
      </div>
    </section>
  );
}
