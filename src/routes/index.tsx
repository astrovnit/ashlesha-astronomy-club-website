import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Apod } from "@/components/Apod";
import { BlogCard, EventCard, ProjectCard } from "@/components/cards";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { blogs } from "@/data/blogs";
import { events } from "@/data/events";
import { gallery } from "@/data/gallery";
import { img } from "@/data/images";
import { projects } from "@/data/projects";
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

const pillars = [
  {
    key: "01",
    title: "Observe",
    body: "Telescope sessions, sky navigation and long observation nights.",
  },
  {
    key: "02",
    title: "Explore",
    body: "Astrophysics, cosmology and the phenomena behind what we see.",
  },
  {
    key: "03",
    title: "Build",
    body: "Amateur rocketry, instrumentation and space-technology projects.",
  },
  {
    key: "04",
    title: "Research",
    body: "Computational astronomy and project work that goes past the syllabus.",
  },
  {
    key: "05",
    title: "Create",
    body: "Astrophotography, writing and visual explanation of hard ideas.",
  },
  {
    key: "06",
    title: "Connect",
    body: "Talks, workshops, outreach and a community that keeps asking why.",
  },
];

const reasons = [
  { title: "Learn", body: "Astronomy from fundamentals to advanced topics, at your own pace." },
  { title: "Observe", body: "Handle telescopes and learn to actually find things in the sky." },
  { title: "Build", body: "Work on rocketry and space-tech projects with people who finish them." },
  { title: "Research", body: "Explore computational astronomy, astrophysics and cosmology." },
  { title: "Create", body: "Develop astrophotography and scientific communication skills." },
  { title: "Meet", body: "Find people who are as fascinated by the universe as you are." },
];

function Home() {
  const upcoming = events.filter((e) => e.status !== "past").slice(0, 3);
  const featured = projects.slice(0, 3);
  const posts = blogs.slice(0, 3);
  const shots = gallery.slice(0, 6);

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
              {site.tagline} A student community at VNIT Nagpur that observes, questions, computes
              and builds its way towards understanding the universe.
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
              Astronomy at VNIT is not a spectator sport.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-muted-foreground space-y-5 text-base leading-relaxed">
              <p>
                AAC is the astronomy club of VNIT Nagpur — a place for anyone curious about the
                night sky, regardless of branch, year or prior experience. Overnight stargazing,
                astrophysics discussions, cosmology reading groups, project work and space
                exploration all sit under the same roof.
              </p>
              <p>
                We think curiosity only becomes meaningful when you act on it. So members move from
                looking up, to asking why, to observing carefully, to computing, building and
                investigating. Some arrive knowing the constellations. Most arrive knowing nothing
                at all. Both are the right starting point.
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

      {/* WHAT WE DO */}
      <section className="border-border/60 bg-surface/40 border-y py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="What we do" title="Six ways into the universe" />
          <ul className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.key} delay={i * 60}>
                <div className="group border-border/60 hover:bg-background/70 h-full border p-8 transition-colors">
                  <span className="text-muted-foreground group-hover:text-accent font-mono text-xs tracking-[0.2em] transition-colors">
                    {p.key}
                  </span>
                  <h3 className="font-display mt-6 text-2xl font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* APOD */}
      <Apod />

      {/* EVENTS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="What's next"
          title="Upcoming events"
          description="Observation nights, workshops and talks. Placeholder listings until the semester calendar is confirmed."
          action={
            <Link
              to="/events"
              className="text-accent inline-flex items-center gap-1.5 text-sm hover:underline"
            >
              View all events <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e, i) => (
            <Reveal key={e.slug} delay={i * 80}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-border/60 bg-surface/40 border-y py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Build & research"
            title="Featured projects"
            description="Astronomy here includes code, hardware and data — not only eyepieces."
            action={
              <Link
                to="/projects"
                className="text-accent inline-flex items-center gap-1.5 text-sm hover:underline"
              >
                Explore all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Archive"
          title="From the gallery"
          action={
            <Link
              to="/gallery"
              className="text-accent inline-flex items-center gap-1.5 text-sm hover:underline"
            >
              Open the gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4">
          {shots.map((g, i) => (
            <Reveal
              key={g.id}
              delay={i * 60}
              className={i === 0 ? "col-span-2 row-span-2" : i === 3 ? "lg:col-span-2" : ""}
            >
              <Link
                to="/gallery"
                className="group border-border/70 block h-full w-full overflow-hidden rounded-lg border"
              >
                <img
                  src={g.image}
                  alt={g.description}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BLOGS */}
      <section className="border-border/60 bg-surface/40 border-y py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Writing"
            title="From the notebook"
            description="Explainers, guides and research notes written by members."
            action={
              <Link
                to="/blogs"
                className="text-accent inline-flex items-center gap-1.5 text-sm hover:underline"
              >
                All articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((b, i) => (
              <Reveal key={b.slug} delay={i * 80}>
                <BlogCard post={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Why join"
          title={`Six reasons to become an ${site.memberNickname.slice(0, -1)}`}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="border-accent/40 border-l pl-5">
                <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Link
            to="/contact"
            className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground mt-12 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors"
          >
            Join the {site.memberNickname} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

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
