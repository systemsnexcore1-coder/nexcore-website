"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "../theme/ThemeToggle";

function normalizePathname(path: string) {
  return path === "/" ? path : path.replace(/\/$/, "");
}

export function Header() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
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

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setIsOpen(false);
      menuTriggerRef.current?.focus({ preventScroll: true });
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[1200] border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none",
        isScrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur-xl"
          : "border-border/50 bg-background/80 shadow-none backdrop-blur-md"
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
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
                  "relative py-3 text-sm font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:bg-primary-600 after:transition-transform after:duration-200 hover:text-foreground hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none dark:after:bg-primary-400",
                  isActive ? "text-foreground after:scale-x-0" : "text-muted-foreground after:scale-x-0"
                )}
              >
                {item.label}
                {isActive && <motion.span layoutId="primary-navigation-indicator" className="absolute inset-x-0 bottom-1 h-px bg-primary-600 dark:bg-primary-400" transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 32 }} aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 border-l border-border pl-4 lg:flex xl:gap-4 xl:pl-6">
          <ThemeToggle />
          <Link
            href="/consultation"
            className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            Request consultation
            <ArrowRight className="size-4 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuTriggerRef}
            type="button"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors duration-200 hover:border-primary-500 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none dark:hover:text-primary-400"
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
        hidden={!isOpen}
        className="relative z-[1201] max-h-[calc(100dvh-5rem-1px)] overflow-y-auto overscroll-contain border-t border-border bg-background py-5 shadow-sm lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="section-shell flex flex-col gap-1">
          {siteConfig.nav.map((item) => {
            const itemPath = normalizePathname(item.href);
            const isActive =
              itemPath === "/" ? currentPath === "/" : currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group py-3 text-base font-medium transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "relative inline-block after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-primary-600 after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-reduce:after:transition-none dark:after:bg-primary-400",
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
          <Link
            href="/consultation"
            onClick={() => setIsOpen(false)}
            className="group mt-4 inline-flex min-h-11 shrink-0 items-center justify-between gap-3 rounded-md bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            Request consultation
            <ArrowRight className="size-4 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
