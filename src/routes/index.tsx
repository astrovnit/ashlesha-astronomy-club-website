import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { Apod } from "@/components/Apod";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { img } from "@/data/images";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAC | Ashlesha Astronomy Club — VNIT Nagpur" },
      {
        name: "description",
        content:
          "Ashlesha Astronomy Club (AAC) is the astronomy club of VNIT Nagpur — observation, astrophysics, cosmology, astrophotography, rocketry, computation and research.",
      },
      { property: "og:title", content: "AAC | Ashlesha Astronomy Club — VNIT Nagpur" },
      {
        property: "og:description",
        content:
          "Observation, astrophysics, cosmology, astrophotography, rocketry and research at VNIT Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={img.heroMilkyway}
          alt="The Milky Way arching over a hilltop observatory dome at night"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-70 dark:opacity-90"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 lg:px-8">
          <Reveal>
            <p className="eyebrow text-foreground/70">
              Visvesvaraya National Institute of Technology, Nagpur
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[0.98] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Ashlesha
              <br />
              <span className="text-gradient">Astronomy Club</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-relaxed">
              {site.tagline} A student community at VNIT Nagpur exploring the universe through
              observation, curiosity, research, and making.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors"
              >
                Explore AAC <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/projects"
                className="border-border/80 hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium backdrop-blur transition-colors"
              >
                Our Projects
              </Link>
            </div>
          </Reveal>
        </div>
        <a
          href="#intro"
          aria-label="Scroll to introduction"
          className="text-muted-foreground hover:text-foreground absolute inset-x-0 bottom-6 mx-auto grid h-10 w-10 place-items-center transition-colors"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </a>
      </section>

      {/* INTRODUCTION */}
      <section id="intro" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="bg-accent inline-block h-px w-8" aria-hidden="true" />
              Who we are
            </p>
            <h2 className="mt-5 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              A community for everyone curious about the night sky.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-muted-foreground space-y-5 text-base leading-relaxed">
              <p>
                Ashlesha Astronomy Club (AAC) is the student astronomy community of VNIT Nagpur. We
                bring together students across all disciplines to observe the night sky, learn
                astrophysics, explore cosmology, and collaborate on hands-on space technology and
                research projects.
              </p>
              <Link
                to="/about"
                className="text-accent inline-flex items-center gap-1.5 text-sm hover:underline"
              >
                Read more about AAC <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S NEW (EMPTY STATE) */}
      <section className="border-border/60 bg-surface/40 relative overflow-hidden border-y py-24">
        <div
          aria-hidden="true"
          className="starfield drift pointer-events-none absolute inset-0 opacity-25"
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What's happening"
            title="What's New"
            description="Observation session announcements, talks, and club updates."
          />

          <Reveal delay={100} className="mt-12">
            <div className="border-border/70 bg-card/50 relative overflow-hidden rounded-2xl border p-12 text-center sm:p-16">
              {/* Subtle orbital ring visual decoration */}
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

              <h3 className="font-display mt-6 text-2xl font-semibold sm:text-3xl">
                The sky is quiet for now.
              </h3>
              <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base leading-relaxed">
                No events or announcements on the horizon right now. Upcoming observation sessions,
                workshops, and news will appear here soon.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/events"
                  className="border-border/80 text-muted-foreground hover:border-accent hover:text-foreground inline-flex items-center gap-1.5 rounded-full border px-5 py-2 text-xs font-medium transition-colors"
                >
                  Browse Past Events <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NASA APOD */}
      <Apod />

      {/* CTA + SOCIAL */}
      <section className="relative overflow-hidden">
        <img
          src={img.startrails}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-3xl px-5 py-28 text-center lg:px-8">
          <Reveal>
            <h2 className="text-4xl leading-tight font-semibold text-balance sm:text-5xl">
              Explore the universe with us.
            </h2>
            <p className="text-muted-foreground mt-5 text-base leading-relaxed">
              Talks, observation nights, projects and long arguments about cosmology. Follow AAC or
              write to us — everyone starts somewhere.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-border/80 hover:border-accent hover:text-accent rounded-full border px-5 py-2.5 text-sm backdrop-blur transition-colors"
                >
                  {s.label}
                </a>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
              >
                Contact AAC
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
