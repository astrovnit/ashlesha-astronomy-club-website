import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className="border-border/70 bg-surface/60 text-foreground hover:border-accent/60 hover:text-accent relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border transition-colors"
    >
      <Sun
        aria-hidden="true"
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "translate-y-5 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
        }`}
      />
      <Moon
        aria-hidden="true"
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-5 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
