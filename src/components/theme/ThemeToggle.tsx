"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-transparent bg-transparent text-muted-foreground transition-colors duration-200 hover:border-border hover:bg-surface hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none dark:hover:text-primary-400"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="size-[18px] transition-transform duration-300 motion-safe:group-hover:rotate-45 motion-reduce:transition-none" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px] transition-transform duration-300 motion-safe:group-hover:-rotate-12 motion-reduce:transition-none" aria-hidden="true" />
      )}
    </button>
  );
}
