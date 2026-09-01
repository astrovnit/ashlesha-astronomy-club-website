import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PlaceholderTag, Tag } from "@/components/cards";
import { blogs } from "@/data/blogs";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — AAC" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — AAC Projects` },
        { name: "description", content: project.excerpt },
        { property: "og:title", content: `${project.title} — AAC Projects` },
        { property: "og:description", content: project.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const relatedBlogs = blogs.slice(0, 2);

  return (
    <article className="pt-28">
      <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8">
        <Link to="/projects" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Tag>{project.category}</Tag>
          <Tag>{project.year}</Tag>
          {project.placeholder ? <PlaceholderTag /> : null}
        </div>

        <h1 className="mt-5 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-relaxed">{project.excerpt}</p>

        <img
          src={project.image}
          alt={`Visual for the project ${project.title}`}
          loading="lazy"
          width={1280}
          height={853}
          className="border-border/70 mt-12 aspect-16/9 w-full rounded-xl border object-cover"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-xl font-semibold">Objective</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">{project.objective}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold">Methodology</h2>
              <ol className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
                {project.methodology.map((m, i) => (
                  <li key={m} className="flex gap-4">
                    <span className="text-accent font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold">Results</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">{project.results}</p>
            </section>
          </div>

          <aside className="border-border/70 bg-card/50 space-y-6 rounded-xl border p-6 text-sm">
            <div>
              <h2 className="eyebrow mb-2">Tools & topics</h2>
              <ul className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <li key={t} className="bg-secondary text-secondary-foreground rounded px-2 py-0.5 text-[11px]">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {project.members?.length ? (
              <div>
                <h2 className="eyebrow mb-2">Team</h2>
                <ul className="text-muted-foreground space-y-1">
                  {project.members.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project.mentor ? (
              <div>
                <h2 className="eyebrow mb-2">Mentor</h2>
                <p className="text-muted-foreground">{project.mentor}</p>
              </div>
            ) : null}
            <div className="space-y-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent inline-flex items-center gap-1.5 hover:underline"
                >
                  Repository <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
              {project.reportUrl ? (
                <a
                  href={project.reportUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent flex items-center gap-1.5 hover:underline"
                >
                  Report (PDF) <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </aside>
        </div>

        <section className="border-border/60 mt-20 grid gap-12 border-t pt-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold">Other projects</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold">Related reading</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {relatedBlogs.map((b) => (
                <li key={b.slug}>
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: b.slug }}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}
