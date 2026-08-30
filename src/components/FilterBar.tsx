import { cn } from "@/lib/utils";

export function FilterBar({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {["All", ...options].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          aria-pressed={value === opt}
          className={cn(
            "rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors",
            value === opt
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border/70 text-muted-foreground hover:border-accent/60 hover:text-foreground",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
