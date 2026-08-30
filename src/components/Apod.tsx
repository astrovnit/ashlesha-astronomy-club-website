import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { useState } from "react";
import { apodQueryOptions, randomApodDate, shiftDate, toIsoDate, APOD_START } from "@/lib/apod";
import { SectionHeading } from "./SectionHeading";

function formatDate(date: string) {
  const d = new Date(`${date}T12:00:00Z`);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export function Apod() {
  const today = toIsoDate(new Date());
  const [date, setDate] = useState<string | undefined>(undefined);
  const active = date ?? today;
  const { data, isPending, isError, error, refetch } = useQuery(apodQueryOptions(date));

  const canGoBack = active > APOD_START;
  const canGoForward = active < today;

  return (
    <section
      aria-labelledby="apod-heading"
      className="border-border/60 bg-surface/40 relative overflow-hidden border-y py-20 sm:py-28"
    >
      <div aria-hidden="true" className="grid-overlay pointer-events-none absolute inset-0 opacity-[0.18]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Live from NASA"
          title={<span id="apod-heading">Astronomy Picture of the Day</span>}
          description="Fetched each day from NASA's public APOD service — the same image astronomers around the world wake up to."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="border-border/70 bg-background/60 relative overflow-hidden rounded-xl border">
            <div className="aspect-16/10 w-full">
              {isPending ? (
                <div className="bg-muted h-full w-full animate-pulse" aria-busy="true" aria-label="Loading NASA image" />
              ) : isError ? (
                <div className="text-muted-foreground flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center text-sm">
                  <p>{(error as Error).message}</p>
                  <button
                    type="button"
                    onClick={() => void refetch()}
                    className="border-border hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors"
                  >
                    Retry
                  </button>
                </div>
              ) : data?.media_type === "video" && data.url ? (
                <iframe
                  src={data.url}
                  title={data.title}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : data?.url || data?.thumbnail_url ? (
                <img
                  src={data.hdurl ?? data.url ?? data.thumbnail_url}
                  alt={data.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-muted-foreground flex h-full items-center justify-center p-8 text-center text-sm">
                  NASA did not provide media for this date.
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
              {isPending ? "Loading…" : formatDate(active)}
            </p>
            <h3 className="font-display mt-3 text-2xl leading-snug font-semibold sm:text-3xl">
              {isPending ? (
                <span className="bg-muted block h-8 w-2/3 animate-pulse rounded" />
              ) : (
                (data?.title ?? "Unavailable")
              )}
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Credit: {data?.copyright?.trim() ? data.copyright.trim() : "NASA / Public Domain"}
            </p>

            <p className="text-muted-foreground mt-6 max-h-56 overflow-y-auto text-sm leading-relaxed">
              {isPending
                ? "…"
                : (data?.explanation ?? "No explanation was returned for this date.")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled={!canGoBack}
                onClick={() => setDate(shiftDate(active, -1))}
                className="border-border/70 hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs transition-colors disabled:opacity-40"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" /> Previous
              </button>
              <button
                type="button"
                onClick={() => setDate(undefined)}
                className="border-border/70 hover:border-accent hover:text-accent rounded-full border px-3.5 py-2 text-xs transition-colors"
              >
                Today
              </button>
              <button
                type="button"
                disabled={!canGoForward}
                onClick={() => setDate(shiftDate(active, 1))}
                className="border-border/70 hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs transition-colors disabled:opacity-40"
              >
                Next <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setDate(randomApodDate())}
                className="border-border/70 hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs transition-colors"
              >
                <Shuffle className="h-3.5 w-3.5" aria-hidden="true" /> Random
              </button>
            </div>

            <a
              href={`https://apod.nasa.gov/apod/ap${active.slice(2).replace(/-/g, "")}.html`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent mt-6 inline-flex items-center gap-1.5 text-sm hover:underline"
            >
              Learn more on NASA APOD
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <p className="text-muted-foreground mt-6 text-xs">
              Source: NASA Astronomy Picture of the Day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
