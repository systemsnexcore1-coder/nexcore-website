"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Banknote, Factory, FlaskConical, GraduationCap, HeartPulse, Landmark, Truck } from "lucide-react";
import { industries } from "@/lib/data";
import { IndustrySystem } from "./IndustrySystem";
import { cn } from "@/lib/utils";

const icons = [Landmark, HeartPulse, Banknote, GraduationCap, Truck, Factory, FlaskConical];

export function IndustryExplorer({ dark = false, linkToDetails = true }: { dark?: boolean; linkToDetails?: boolean }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const reduced = useReducedMotion();
  const industry = industries[active];
  const Icon = icons[active];

  return (
    <div className={cn("industry-explorer mt-12 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16", dark && "system-dark")}>
      <div className={cn("grid grid-cols-2 gap-x-5 sm:grid-cols-3 lg:block", dark ? "text-white" : "text-foreground")} role="group" aria-label="Select an industry">
        {industries.map((item, index) => (
          <button key={item.title} aria-pressed={index === active} aria-controls={`${id}-industry`} onClick={() => setActive(index)} type="button" className={cn("industry-selector relative isolate flex min-h-14 w-full items-center justify-between gap-2 border-b px-3 py-3 text-left text-sm transition-colors lg:text-base", dark ? "border-white/15 hover:text-primary-400" : "border-border hover:text-primary-600", index === active && (dark ? "text-primary-400" : "font-semibold text-primary-600 dark:text-primary-400"))}>
            {index === active && <motion.span layoutId={`${id}-industry-indicator`} className="industry-active-indicator" transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 30 }} aria-hidden="true" />}
            <span className="min-w-0 break-words">{item.title}</span><ArrowUpRight aria-hidden="true" className={cn("size-4 shrink-0 transition-transform", index === active && "rotate-45")} />
          </button>
        ))}
      </div>
      <div id={`${id}-industry`} className={cn("min-w-0 border-l pl-6 sm:pl-10", dark ? "border-primary-400/30" : "border-primary-500/30")}>
        <div className="flex items-start justify-between gap-4"><Icon className="size-10 text-primary-400" strokeWidth={1.3} aria-hidden="true" /><span className={cn("technical-label", dark ? "text-blue-200" : "text-muted-foreground")}>Sector / {String(active + 1).padStart(2, "0")}</span></div>
        <h3 className="mt-7 font-display text-3xl font-semibold sm:text-4xl">{industry.title}</h3>
        <p className={cn("mt-4 min-h-24 max-w-xl leading-8", dark ? "text-blue-100" : "text-muted-foreground")}>{industry.summary}</p>
        <IndustrySystem index={active} />
        <Link href={linkToDetails ? `/industries#${industry.title.toLowerCase()}` : "/contact"} className={cn("text-link mt-6", dark && "!text-primary-100")}>
          {linkToDetails ? "Explore sector solutions" : "Discuss your sector"}<ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
