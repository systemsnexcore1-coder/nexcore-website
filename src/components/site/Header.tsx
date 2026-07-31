"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "../theme/ThemeToggle";

function normalizePathname(path: string) {
  return path === "/" ? path : path.replace(/\/$/, "");
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = normalizePathname(pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[1200] border-b transition",
        isScrolled
          ? "border-border bg-background/[0.88] shadow-sm backdrop-blur-xl"
          : "border-transparent bg-background/[0.76] backdrop-blur"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const itemPath = normalizePathname(item.href);
            const isActive =
              itemPath === "/" ? currentPath === "/" : currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-primary-50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:hover:bg-white/[0.08] dark:hover:text-white",
                  isActive && "bg-primary-50 text-primary-700 dark:bg-white/[0.10] dark:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/consultation"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
          >
            Request consultation
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground shadow-sm transition hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "relative z-[1201] border-t border-border bg-background px-4 py-5 shadow-soft lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-2">
          {siteConfig.nav.map((item) => {
            const itemPath = normalizePathname(item.href);
            const isActive =
              itemPath === "/" ? currentPath === "/" : currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-white/[0.08] dark:hover:text-white",
                  isActive && "bg-primary-50 text-primary-700 dark:bg-white/[0.10] dark:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/consultation"
            className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
          >
            Request consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
