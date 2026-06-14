import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/reviews", label: "Reviews" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-prose flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">C</span>
          <span className="font-display text-xl font-semibold tracking-tight">Canvas Landscapes</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <a href="tel:+18135550192" className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 md:inline-flex">
          <Phone className="h-4 w-4" /> (813) 555-0192
        </a>

        <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-prose flex flex-col py-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/90">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile sticky tap-to-call */}
      <a href="tel:+18135550192" className="flex items-center justify-center gap-2 bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground md:hidden">
        <Phone className="h-4 w-4" /> Tap to call (813) 555-0192
      </a>
    </header>
  );
}
