import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-border/60 relative overflow-hidden border-b pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        aria-hidden="true"
        className="starfield drift pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background:radial-gradient(60%_60%_at_70%_0%,var(--color-accent),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow flex items-center gap-3">
          <span className="bg-accent inline-block h-px w-8" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
