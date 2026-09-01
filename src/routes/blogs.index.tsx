import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/cards";
import { FilterBar } from "@/components/FilterBar";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { blogCategories, blogs } from "@/data/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blogs — AAC, VNIT Nagpur" },
      {
        name: "description",
        content:
          "Astronomy explainers, beginner guides, research notes and club writing from Ashlesha Astronomy Club, VNIT Nagpur.",
      },
      { property: "og:title", content: "Blogs — AAC, VNIT Nagpur" },
      {
        property: "og:description",
        content: "Astronomy, astrophysics and cosmology writing by AAC members.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const [category, setCategory] = useState("All");
  const filtered = useMemo(
    () => (category === "All" ? blogs : blogs.filter((b) => b.category === category)),
    [category],
  );

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes from people working things out."
        description="A scientific-magazine style archive of explainers, guides and research notes. Placeholder articles for now."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <FilterBar
          options={blogCategories}
          value={category}
          onChange={setCategory}
          label="Filter articles by category"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b, i) => (
            <Reveal key={b.slug} delay={i * 60}>
              <BlogCard post={b} />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="text-muted-foreground mt-16 text-sm">No articles in this category yet.</p>
        ) : null}
      </section>
    </>
  );
}
