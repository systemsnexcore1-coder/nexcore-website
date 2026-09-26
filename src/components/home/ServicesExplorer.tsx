"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { ServiceVisual } from "@/components/systems/ServiceVisual";
import { cn } from "@/lib/utils";

export function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const reduced = useReducedMotion();
  const service = services[active];

  return (
    <div className="mt-12 grid border-y border-border lg:grid-cols-[1fr_1.15fr]">
      <div className="divide-y divide-border lg:border-r lg:border-border" role="group" aria-label="Explore Nexcore services">
        {services.map((item, index) => (
          <button key={item.slug} type="button" aria-pressed={index === active} aria-controls={`${id}-panel`} onClick={() => setActive(index)} className="service-selector group relative isolate flex min-h-16 w-full items-center gap-4 px-2 py-4 text-left transition-colors hover:bg-surface sm:min-h-20 sm:gap-6 sm:px-5 lg:min-h-24 lg:pr-8">
            {index === active && <motion.span layoutId={`${id}-service-indicator`} className="service-active-indicator" transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 280, damping: 32 }} aria-hidden="true" />}
            <span className={cn("font-mono text-xs", index === active ? "text-primary-600 dark:text-primary-400" : "text-muted-foreground")}>{String(index + 1).padStart(2, "0")}</span>
            <span className="flex-1 font-display text-lg font-medium sm:text-xl">{item.title}</span>
            <ArrowUpRight aria-hidden="true" className={cn("size-5 shrink-0 transition-transform", index === active ? "rotate-45 text-primary-600 dark:text-primary-400" : "text-muted-foreground group-hover:translate-x-1")} />
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} className="service-panel flex min-w-0 flex-col bg-surface px-6 pb-8 pt-6 sm:px-10 sm:pb-10" aria-label={service.title}>
        <div className="service-visual-stage">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={service.slug} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -10 }} transition={{ duration: reduced ? 0 : 0.25 }}><ServiceVisual index={active} /></motion.div>
          </AnimatePresence>
        </div>
        <div className="min-w-0">
          <p className="technical-label mt-3 text-muted-foreground">Connected capability / {String(active + 1).padStart(2, "0")}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold">{service.title}</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{service.summary}</p>
        </div>
        <Link href={`/services#${service.slug}`} className="text-link mt-auto pt-6">Explore service <ArrowRight aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
