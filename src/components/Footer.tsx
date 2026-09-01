import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

const explore = [
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Team", to: "/team" },
] as const;

export function Footer() {
  return (
    <footer className="border-border/60 bg-surface/40 relative overflow-hidden border-t">
      <div
        aria-hidden="true"
        className="starfield drift pointer-events-none absolute inset-0 opacity-30"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.24em]">AAC</p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {site.name}
              <br />
              {site.instituteShort}
            </p>
            <p className="font-mono text-accent mt-6 text-xs tracking-[0.2em] uppercase">
              Keep looking up.
            </p>
          </div>

          <nav aria-label="Explore">
            <h2 className="eyebrow mb-4">Explore</h2>
            <ul className="space-y-2.5 text-sm">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-4">Follow AAC</h2>
            <ul className="space-y-2.5 text-sm">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted-foreground hover:text-foreground break-all transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4">Location</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {site.instituteShort}
              <br />
              Nagpur, Maharashtra
              <br />
              India
            </p>
          </div>
        </div>

        <div className="border-border/60 text-muted-foreground mt-14 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AAC — Ashlesha Astronomy Club, VNIT Nagpur.</p>
          <p className="font-mono tracking-[0.16em] uppercase">21°07′N · 79°03′E</p>
        </div>
      </div>
    </footer>
  );
}
