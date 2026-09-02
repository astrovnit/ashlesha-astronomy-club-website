import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AAC — Ashlesha Astronomy Club, VNIT Nagpur" },
      {
        name: "description",
        content: `About ${site.name}, ${site.instituteShort}.`,
      },
      { property: "og:title", content: "About AAC — Ashlesha Astronomy Club" },
      {
        property: "og:description",
        content: `Information and background on ${site.name}, ${site.instituteShort}.`,
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About AAC"
        title="Ashlesha Astronomy Club"
        description={`${site.name} is the student astronomy community of ${site.instituteShort}.`}
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
              About information being updated.
            </h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base leading-relaxed">
              Official club documentation, history, and observatory details for Ashlesha Astronomy
              Club are being prepared for publication.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
