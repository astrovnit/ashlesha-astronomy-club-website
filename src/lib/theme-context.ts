import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

export const STORAGE_KEY = "aac-theme";

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

/** Inlined in <head> so the theme is applied before first paint (no flash). */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var m=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';var t=s==='light'||s==='dark'?s:m;document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;

export const useTheme = () => useContext(ThemeContext);
