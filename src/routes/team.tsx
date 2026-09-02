import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import {
  committeeHeads,
  executiveLeadership,
  researchLeadership,
  type CoreMember,
} from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — AAC, VNIT Nagpur" },
      {
        name: "description",
        content: `Meet the Core Committee 2026–27 of ${site.name}, ${site.instituteShort}.`,
      },
      { property: "og:title", content: "Team — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content: `Core Committee 2026–27 of ${site.name}, ${site.instituteShort}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function MemberCard({
  member,
  size = "normal",
}: {
  member: CoreMember;
  size?: "large" | "medium" | "normal";
}) {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

  const isLarge = size === "large";
  const isMedium = size === "medium";

  return (
    <article
      className={`card-lift relative flex flex-col items-center overflow-hidden rounded-2xl text-center backdrop-blur-xl transition-all duration-300 ${
        isLarge
          ? "border-accent/40 bg-card/80 p-8 shadow-lg hover:border-accent/70"
          : isMedium
            ? "border-accent/30 bg-card/70 p-7 hover:border-accent/60"
            : "border-border/70 bg-card/60 p-6 hover:border-accent/50"
      }`}
    >
      {/* Photo / Portrait Placeholder Slot */}
      <div
        className={`relative grid place-items-center rounded-full transition-transform duration-300 group-hover:scale-105 ${
          isLarge
            ? "border-accent/50 bg-secondary/90 text-accent h-28 w-28 border-2 shadow-md"
            : isMedium
              ? "border-accent/40 bg-secondary/80 text-accent h-24 w-24 border-2"
              : "border-border/80 bg-secondary/70 text-muted-foreground h-20 w-20 border"
        }`}
      >
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="font-display font-semibold tracking-wider text-xs sm:text-sm">
              {getInitials(member.name)}
            </span>
            <User className="mt-0.5 h-3.5 w-3.5 opacity-60" aria-hidden="true" />
          </div>
        )}
      </div>

      <h3
        className={`font-display font-semibold tracking-tight ${
          isLarge ? "mt-5 text-2xl" : isMedium ? "mt-4 text-xl" : "mt-4 text-lg"
        }`}
      >
        {member.name}
      </h3>
      <p
        className={`text-accent font-medium ${
          isLarge ? "mt-1.5 text-base sm:text-lg" : "mt-1 text-sm sm:text-base"
        }`}
      >
        {member.role}
      </p>
    </article>
  );
}

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Core Committee 2026–27"
        title="The Core Committee"
        description={`Executive leadership, research leads, and committee heads driving ${site.name} at ${site.instituteShort}.`}
      />

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="starfield drift pointer-events-none absolute inset-0 opacity-25"
        />

        <section className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 space-y-20">
          {/* LEVEL 1 — Executive Leadership (President & Vice-President) */}
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-8 text-center">
                <span className="border-accent/30 bg-accent/10 text-accent rounded-full border px-4 py-1.5 font-mono text-xs tracking-widest uppercase">
                  Executive Leadership
                </span>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {executiveLeadership.map((member, i) => (
                <Reveal key={member.id} delay={i * 80}>
                  <MemberCard member={member} size="large" />
                </Reveal>
              ))}
            </div>
          </div>

          {/* LEVEL 2 — Research Leadership (Heads of Research) */}
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-8 text-center">
                <span className="border-accent/30 bg-accent/10 text-accent rounded-full border px-4 py-1.5 font-mono text-xs tracking-widest uppercase">
                  Research Leadership
                </span>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {researchLeadership.map((member, i) => (
                <Reveal key={member.id} delay={i * 80}>
                  <MemberCard member={member} size="medium" />
                </Reveal>
              ))}
            </div>
          </div>

          {/* LEVEL 3 — Committee Heads */}
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mb-8 text-center">
                <span className="border-border/70 bg-secondary/60 text-muted-foreground rounded-full border px-4 py-1.5 font-mono text-xs tracking-widest uppercase">
                  Committee Heads
                </span>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {committeeHeads.map((member, i) => (
                <Reveal key={member.id} delay={i * 60}>
                  <MemberCard member={member} size="normal" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
