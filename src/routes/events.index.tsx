import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { EventCard } from "@/components/cards";
import { FilterBar } from "@/components/FilterBar";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { eventCategories, events } from "@/data/events";
import type { EventStatus } from "@/data/types";

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

const groups: { key: EventStatus; label: string }[] = [
  { key: "upcoming", label: "Upcoming" },
  { key: "ongoing", label: "Ongoing" },
  { key: "past", label: "Past" },
];

function EventsPage() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? events : events.filter((e) => e.category === category)),
    [category],
  );

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Nights out, talks in, and everything between."
        description="Placeholder listings for now — real AAC events will replace them as the calendar is confirmed."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <FilterBar
          options={eventCategories}
          value={category}
          onChange={setCategory}
          label="Filter events by category"
        />

        {groups.map((g) => {
          const items = filtered.filter((e) => e.status === g.key);
          if (items.length === 0) return null;
          return (
            <div key={g.key} className="mt-16">
              <h2 className="font-display border-border/60 border-b pb-4 text-2xl font-semibold">
                {g.label}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((e, i) => (
                  <Reveal key={e.slug} delay={i * 60}>
                    <EventCard event={e} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 ? (
          <p className="text-muted-foreground mt-16 text-sm">No events in this category yet.</p>
        ) : null}
      </section>
    </>
  );
}
