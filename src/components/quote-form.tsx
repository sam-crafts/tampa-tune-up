import { useState } from "react";

export function QuoteForm({ service }: { service?: string }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <h3 className="font-display text-2xl font-semibold">Get a free estimate in Tampa</h3>
      <p className="mt-1 text-sm text-muted-foreground">No pressure. We respond same day.</p>

      {sent ? (
        <div className="mt-6 rounded-md bg-primary/10 p-4 text-sm text-primary">
          Thanks! We'll be in touch shortly. For urgent requests call <a href="tel:+18135550192" className="font-semibold underline">(813) 555-0192</a>.
        </div>
      ) : (
        <div className="mt-5 grid gap-3">
          <input required placeholder="Full name" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
          <div className="grid gap-3 sm:grid-cols-2">
            <input required type="tel" placeholder="Phone" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
            <input required type="email" placeholder="Email" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <input placeholder="Tampa Bay city / neighborhood" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
          <select defaultValue={service ?? ""} className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary">
            <option value="" disabled>Service needed</option>
            <option>Lawn Care & Maintenance</option>
            <option>Landscape Design</option>
            <option>Hardscaping & Patios</option>
            <option>Irrigation & Drainage</option>
            <option>Sod Installation</option>
            <option>Seasonal Cleanup & Mulching</option>
          </select>
          <textarea rows={3} placeholder="Tell us a little about your project" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
          <button className="mt-1 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Request my free estimate
          </button>
          <p className="text-xs text-muted-foreground">Or call directly: <a href="tel:+18135550192" className="font-semibold text-primary">(813) 555-0192</a></p>
        </div>
      )}
    </form>
  );
}
