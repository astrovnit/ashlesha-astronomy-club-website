import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — AAC, VNIT Nagpur" },
      {
        name: "description",
        content:
          "Stargazing nights, workshops, talks, competitions and outreach run by Ashlesha Astronomy Club at VNIT Nagpur.",
      },
      { property: "og:title", content: "Events — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content: "Upcoming, ongoing and past events from the astronomy club of VNIT Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events & Schedule"
        title="Observation nights, talks & workshops."
        description="Stay tuned for upcoming observation sessions, astrophysics lectures, and hands-on workshops."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <div className="border-border/70 bg-card/50 relative overflow-hidden rounded-2xl border p-12 text-center sm:p-16">
            <div
              aria-hidden="true"
              className="border-accent/20 absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed opacity-60"
            />
            <div
              aria-hidden="true"
              className="border-accent/10 absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-40"
            />

            <div className="border-accent/40 bg-secondary/80 text-accent mx-auto grid h-12 w-12 place-items-center rounded-full border shadow-sm">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>

            <h2 className="font-display mt-6 text-2xl font-semibold sm:text-3xl">
              No events scheduled on the horizon yet.
            </h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base leading-relaxed">
              The event calendar for the upcoming session is currently being finalized. Observation
              nights, workshops, and guest talks will be posted here soon.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
