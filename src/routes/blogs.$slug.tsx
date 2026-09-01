import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { formatDate, PlaceholderTag, Tag } from "@/components/cards";
import { blogs, getBlog } from "@/data/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getBlog(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — AAC" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — AAC Blogs` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blogs/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blogs/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Ashlesha Astronomy Club, VNIT Nagpur" },
          }),
        },
      ],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);
  const shareUrl = `https://astro-aac.example/blogs/${post.slug}`;

  return (
    <article className="pt-28">
      <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
        <Link to="/blogs" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All articles
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Tag>{post.category}</Tag>
          {post.placeholder ? <PlaceholderTag /> : null}
        </div>

        <h1 className="mt-5 text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-muted-foreground mt-5 font-mono text-xs tracking-wide uppercase">
          {post.author} · {formatDate(post.date)} · {post.readingTime}
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <img
          src={post.image}
          alt={`Cover image for ${post.title}`}
          loading="lazy"
          width={1280}
          height={853}
          className="border-border/70 aspect-16/9 w-full rounded-xl border object-cover"
        />
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <div className="space-y-10">
          {post.body.map((section, i) => (
            <section key={section.heading ?? i}>
              {section.heading ? (
                <h2 className="font-display mt-2 text-2xl font-semibold">{section.heading}</h2>
              ) : null}
              <div className="mt-4 space-y-5">
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-muted-foreground text-[1.0625rem] leading-8">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="border-border/60 mt-14 flex flex-wrap items-center gap-3 border-t pt-8 text-sm">
          <span className="text-muted-foreground">Share:</span>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="border-border/70 hover:border-accent hover:text-accent rounded-full border px-3.5 py-1.5 text-xs transition-colors"
          >
            X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="border-border/70 hover:border-accent hover:text-accent rounded-full border px-3.5 py-1.5 text-xs transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`}
            className="border-border/70 hover:border-accent hover:text-accent rounded-full border px-3.5 py-1.5 text-xs transition-colors"
          >
            Email
          </a>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-xl font-semibold">Related articles</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {related.map((b) => (
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
        </section>
      </div>
    </article>
  );
}
