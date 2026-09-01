import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { TeamCard } from "@/components/cards";
import { FilterBar } from "@/components/FilterBar";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { domains, team } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — AAC, VNIT Nagpur" },
      {
        name: "description",
        content:
          "Meet the core coordinators, domain leads and members of Ashlesha Astronomy Club, VNIT Nagpur.",
      },
      { property: "og:title", content: "Team — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content: `Core team and domain leads of ${site.name}, ${site.instituteShort}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const filterOptions = ["Core Team", ...domains] as const;

function TeamPage() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return team;
    if (filter === "Core Team") return team.filter((m) => m.group === "core");
    return team.filter((m) => m.domain === filter);
  }, [filter]);

  const coreMembers = useMemo(() => team.filter((m) => m.group === "core"), []);
  const domainMembers = useMemo(() => team.filter((m) => m.group === "domain"), []);

  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The people behind the telescopes."
        description={`The student coordinators and domain leads driving astronomy, astrophysics, projects and observation sessions at ${site.instituteShort}.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <FilterBar
          options={filterOptions}
          value={filter}
          onChange={setFilter}
          label="Filter team by domain or role"
        />

        {filter !== "All" ? (
          <div className="mt-12">
            <h2 className="font-display border-border/60 border-b pb-4 text-2xl font-semibold">
              {filter}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((member, i) => (
                <Reveal key={member.id} delay={i * 50}>
                  <TeamCard member={member} />
                </Reveal>
              ))}
            </div>
            {filtered.length === 0 ? (
              <p className="text-muted-foreground mt-12 text-sm">
                No team records found for this selection.
              </p>
            ) : null}
          </div>
        ) : (
          <div className="space-y-16">
            <section className="mt-12">
              <h2 className="font-display border-border/60 border-b pb-4 text-2xl font-semibold">
                Core Coordinators
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {coreMembers.map((member, i) => (
                  <Reveal key={member.id} delay={i * 60}>
                    <TeamCard member={member} />
                  </Reveal>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display border-border/60 border-b pb-4 text-2xl font-semibold">
                Domain Leads
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {domainMembers.map((member, i) => (
                  <Reveal key={member.id} delay={i * 50}>
                    <TeamCard member={member} />
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        )}
      </section>
    </>
  );
}
