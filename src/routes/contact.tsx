import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Mail, MapPin, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Join — AAC, VNIT Nagpur" },
      {
        name: "description",
        content: `Contact Ashlesha Astronomy Club (AAC) at ${site.instituteShort}. Official email, campus location, social channels and membership details.`,
      },
      { property: "og:title", content: "Contact & Join — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content: `Official communication channels and joining information for ${site.name}, ${site.instituteShort}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & Join"
        title="Connect with Ashlesha Astronomy Club"
        description={`Whether you want to attend observation nights, collaborate on projects, or join as an ${site.memberNickname.slice(0, -1)}, here is how to reach us.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <Reveal delay={0}>
            <div className="border-border/70 bg-card/60 flex h-full flex-col rounded-xl border p-8">
              <div className="border-accent/40 bg-secondary grid h-12 w-12 place-items-center rounded-xl border">
                <Mail className="text-accent h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-6 text-xl font-semibold">Email Us</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                For official inquiries, session requests, collaborations, or invitations.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href={`mailto:${site.email}`}
                  className="text-accent hover:text-accent/80 inline-flex items-center gap-1.5 text-sm font-medium break-all hover:underline"
                >
                  {site.email}
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Join AAC */}
          <Reveal delay={80}>
            <div className="border-border/70 bg-card/60 flex h-full flex-col rounded-xl border p-8">
              <div className="border-accent/40 bg-secondary grid h-12 w-12 place-items-center rounded-xl border">
                <Sparkles className="text-accent h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-6 text-xl font-semibold">Join the Club</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                AAC opens student recruitments and orientation calls across semesters. Event
                registrations and announcements are posted on our Linktree.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="https://linktr.ee/aac_vnit"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-medium tracking-wide uppercase transition-colors"
                >
                  AAC Linktree
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Campus Location */}
          <Reveal delay={160}>
            <div className="border-border/70 bg-card/60 flex h-full flex-col rounded-xl border p-8">
              <div className="border-accent/40 bg-secondary grid h-12 w-12 place-items-center rounded-xl border">
                <MapPin className="text-accent h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-6 text-xl font-semibold">Campus Location</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {site.name}
                <br />
                {site.location}
              </p>
              <p className="text-muted-foreground mt-4 font-mono text-xs">
                Observation venues are confirmed prior to each session.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Social channels */}
        <Reveal delay={240}>
          <div className="border-border/70 bg-card/40 mt-12 rounded-xl border p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Globe className="text-accent h-4 w-4" aria-hidden="true" />
                  <h2 className="font-display text-lg font-semibold">Social & Online Channels</h2>
                </div>
                <p className="text-muted-foreground mt-1 text-sm">
                  Stay updated with observation night schedules, event photos and astronomy updates.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border-border/70 hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
