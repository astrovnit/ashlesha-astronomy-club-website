import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-border/60 bg-background/80 border-b backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 lg:px-8",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* Placeholder mark — replace with the official AAC logo asset. */}
          <span
            aria-hidden="true"
            className="border-accent/50 group-hover:border-accent relative grid h-9 w-9 place-items-center rounded-full border transition-colors"
          >
            <span className="bg-accent h-1.5 w-1.5 rounded-full" />
            <span className="border-accent/30 absolute inset-1 rounded-full border border-dashed" />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-sm font-semibold tracking-[0.28em]">AAC</span>
            <span className="text-muted-foreground block text-[10px] tracking-[0.18em] uppercase">
              {site.instituteShort}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground hidden rounded-full border px-4 py-2 text-xs font-medium tracking-[0.14em] uppercase transition-colors sm:inline-flex"
          >
            Join AAC
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-border/70 grid h-9 w-9 place-items-center rounded-full border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "bg-background/95 overflow-hidden backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto max-w-7xl px-5 pb-8">
          {navLinks.map((l, i) => (
            <li key={l.to} className="border-border/50 border-b last:border-0">
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent" }}
                style={{ transitionDelay: `${i * 30}ms` }}
                className="font-display block py-4 text-lg"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground block rounded-full px-5 py-3 text-center text-sm font-medium"
            >
              Join AAC
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
