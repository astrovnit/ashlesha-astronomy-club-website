import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/cards";
import { FilterBar } from "@/components/FilterBar";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { projectCategories, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — AAC, VNIT Nagpur" },
      {
        name: "description",
        content:
          "Computational astronomy, astrophysics, cosmology, observational work, astrophotography and amateur rocketry projects at Ashlesha Astronomy Club, VNIT Nagpur.",
      },
      { property: "og:title", content: "Projects — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content: "The project archive of the astronomy club of VNIT Nagpur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (q === "" ||
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tools.some((t) => t.toLowerCase().includes(q))),
    );
  }, [category, query]);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Code, hardware, data and long nights of debugging."
        description="Placeholder project records demonstrating the archive structure. Real AAC projects will replace them."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <FilterBar
            options={projectCategories}
            value={category}
            onChange={setCategory}
            label="Filter projects by category"
          />
          <div className="lg:w-72">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tools…"
              className="border-border/70 bg-card/50 placeholder:text-muted-foreground w-full rounded-full border px-4 py-2.5 text-sm"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted-foreground mt-16 text-sm">No projects match that search yet.</p>
        ) : null}
      </section>
    </>
  );
}
