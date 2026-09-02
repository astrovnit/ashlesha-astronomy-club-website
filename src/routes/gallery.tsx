import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — AAC, VNIT Nagpur" },
      {
        name: "description",
        content:
          "Astrophotography, observation sessions, projects and events archive from Ashlesha Astronomy Club, VNIT Nagpur.",
      },
      { property: "og:title", content: "Gallery — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content:
          "Visual archive of astrophotography, stargazing nights and club activities at VNIT Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Frames from the sky and the ground."
        description="Astrophotography, observation sessions, project documentation and club archives."
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
              Gallery clear for now.
            </h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base leading-relaxed">
              Astrophotography, night sky captures, and stargazing session photos will be uploaded
              here soon.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
