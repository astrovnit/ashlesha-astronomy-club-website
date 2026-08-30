import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { img } from "@/data/images";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AAC — Ashlesha Astronomy Club, VNIT Nagpur" },
      {
        name: "description",
        content:
          "Who we are, what we believe and how astronomy works at AAC: observation, astrophysics, cosmology, projects, research and community at VNIT Nagpur.",
      },
      { property: "og:title", content: "About AAC — Ashlesha Astronomy Club" },
      {
        property: "og:description",
        content: "The story, philosophy and principles behind the astronomy club of VNIT Nagpur.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const beliefs = [
  { title: "Curiosity", body: "Question the universe — and then question the answer." },
  { title: "Observation", body: "Look carefully before drawing conclusions." },
  { title: "Learning", body: "Make complex ideas accessible to anyone willing to sit with them." },
  { title: "Experimentation", body: "Turn ideas into projects you can actually test." },
  { title: "Research", body: "Go beyond textbooks and into open problems." },
  { title: "Community", body: "Explore together; nobody figures out the sky alone." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A club for people who refuse to stop asking what that is."
        description={`${site.name} is the astronomy club of ${site.instituteShort}.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">Who we are</h2>
            <div className="text-muted-foreground mt-6 space-y-5 text-base leading-relaxed">
              <p>
                AAC brings together students across every branch of {site.instituteShort} who share
                one thing: they want to understand what is above them. The club runs overnight
                stargazing sessions, discussions in astronomy, astrophysics and cosmology, and
                hands-on project work spanning observation, computation and engineering.
              </p>
              <p>
                Along the way, members pick up the practical skills a technical club demands —
                planning sessions, leading teams, documenting work, and communicating science to
                people who do not already agree that it is interesting.
              </p>
              <p>
                We are deliberately open. No entrance test, no prerequisite coursework, no
                expectation that you already own a telescope.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={img.nebula}
              alt="A colourful emission nebula with dark dust structures against a dense starfield"
              loading="lazy"
              width={1280}
              height={853}
              className="border-border/70 w-full rounded-xl border object-cover"
            />
            <p className="text-muted-foreground mt-3 text-xs">
              Illustrative astronomical imagery — to be replaced with AAC member astrophotography.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-border/60 bg-surface/40 border-y py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow">Our philosophy</p>
            <blockquote className="font-display mt-6 text-2xl leading-snug font-medium text-balance sm:text-3xl">
              Astronomy begins with curiosity. It becomes meaningful when we observe, question,
              calculate, build and investigate.
            </blockquote>
            <p className="text-muted-foreground mt-8 leading-relaxed">
              A club that only organises events teaches you to attend things. We would rather help
              members move along a path: from “I just like looking at the stars,” to “I want to
              understand the universe,” to “I want to build, observe, code and conduct research.”
              Every activity we run is meant to move somebody one step along that line.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="What we believe" title="Six principles" />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 60}>
              <div className="border-accent/40 border-l pl-5">
                <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={160}>
          <div className="border-border/70 bg-card/50 mt-16 rounded-xl border p-8">
            <p className="eyebrow">Identity assets</p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Placeholder notice: the official AAC logo and the VNIT institute logo are not yet
              placed on this site. Slots are reserved in the navigation bar and footer so official
              assets can be added without any redesign.
            </p>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <Link
            to="/team"
            className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground mt-10 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors"
          >
            Meet the team <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
