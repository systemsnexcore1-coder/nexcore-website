import type { ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, tone = "light", children }: PageIntroProps) {
  return (
    <section className={cn("page-intro relative overflow-hidden border-b", tone === "dark" ? "system-dark border-white/10 bg-navy-950 text-white" : "border-border bg-surface")}>
      <div className="page-intro-paths" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="section-shell relative py-16 sm:py-20 lg:py-24">
        <AnimatedSection>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className={cn("mt-6 max-w-2xl text-base leading-8 sm:text-lg", tone === "dark" ? "text-blue-100" : "text-muted-foreground")}>{description}</p>
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
}
