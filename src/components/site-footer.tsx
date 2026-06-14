import { Link } from "@tanstack/react-router";

export const SERVICE_AREAS = [
  "Tampa", "St. Petersburg", "Clearwater", "Brandon", "Riverview",
  "Lutz", "Wesley Chapel", "Land O' Lakes", "Temple Terrace", "Plant City",
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground font-display text-lg">C</span>
            <span className="font-display text-xl font-semibold">Canvas Landscapes</span>
          </div>
          <p className="mt-3 text-sm opacity-80">Tampa Bay's Premier Landscaping Company.</p>
          <p className="mt-4 text-sm opacity-70">Licensed & Insured<br/>Florida Contractor License #CGC-XXXXXX</p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
            <li><Link to="/reviews" className="hover:text-accent">Reviews</Link></li>
            <li><Link to="/pricing" className="hover:text-accent">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><a href="tel:+18135550192" className="hover:text-accent">(813) 555-0192</a></li>
            <li><a href="mailto:hello@canvaslandscapes.com" className="hover:text-accent">hello@canvaslandscapes.com</a></li>
            <li>Tampa, FL</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Service Areas</h3>
          <p className="mt-3 text-sm opacity-90 leading-relaxed">
            {SERVICE_AREAS.join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-5 text-xs opacity-70 md:flex-row md:items-center">
          <p>© 2025 Canvas Landscapes. All rights reserved.</p>
          <p>Tampa landscaping · Tampa lawn care · Tampa hardscaping</p>
        </div>
      </div>
    </footer>
  );
}
