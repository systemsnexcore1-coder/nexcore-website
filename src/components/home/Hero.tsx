"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroArchitecture } from "./HeroArchitecture";

const practices = [
  { label: "Web platforms", slug: "web-development" },
  { label: "CRM systems", slug: "crm-solutions" },
  { label: "ERP solutions", slug: "erp-solutions" },
  { label: "IT consulting", slug: "it-support" },
  { label: "UI/UX design", slug: "ui-ux-design" }
];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 70, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 70, damping: 24 });
  const backgroundX = useTransform(x, value => value * -0.35);
  const backgroundY = useTransform(y, value => value * -0.35);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== "mouse" || !window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
  }

  return (
    <section className="home-hero system-dark relative isolate overflow-hidden bg-navy-950 text-white" onPointerMove={handlePointerMove} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      <motion.div style={{ x: backgroundX, y: backgroundY }} className="hero-motion absolute -inset-3 -z-20" aria-hidden="true">
        <Image src="/images/nexcore-enterprise-platform.png" alt="" fill priority sizes="100vw" className="hero-image object-cover" />
      </motion.div>
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="section-shell relative">
        <div className="hero-content relative z-10 max-w-[650px] pb-14 pt-14 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
          <p className="eyebrow hero-enter">Enterprise technology consulting</p>
          <h1 className="hero-enter mt-7 font-display text-6xl font-semibold leading-none sm:text-7xl lg:text-8xl" style={{ animationDelay: "70ms" }}>Nexcore<span className="text-primary-400">.</span></h1>
          <p className="hero-enter mt-6 font-display text-3xl font-medium leading-tight sm:text-4xl" style={{ animationDelay: "140ms" }}>Connected systems.<br />Confident operations.</p>
          <p className="hero-enter mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg" style={{ animationDelay: "210ms" }}>Secure digital platforms, CRM systems, ERP workflows, and support programs for organizations that need dependable technology at operational scale.</p>
          <div className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "280ms" }}>
            <ButtonLink href="/consultation" className="h-12">Request consultation</ButtonLink>
            <ButtonLink href="/projects" variant="onDark" className="h-12">View case studies</ButtonLink>
          </div>
        </div>
        <motion.div className="hero-ecosystem hero-motion" style={{ x, y }}><HeroArchitecture /></motion.div>
        <div className="border-t border-white/20 py-5 sm:py-6">
          <div className="flex items-center gap-3 text-xs text-blue-200"><ArrowDownRight className="size-4 text-primary-400" aria-hidden="true" /><span>One connected approach. Five core capabilities.</span></div>
          <nav aria-label="Core capabilities" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:justify-between">
            {practices.map((practice) => <Link key={practice.slug} href={`/services#${practice.slug}`} className="group flex items-center gap-3 text-xs text-white/90 transition-colors hover:text-primary-400 sm:text-sm">{practice.label}<ArrowUpRight className="size-3.5 text-primary-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></Link>)}
          </nav>
        </div>
      </div>
      <div className="hero-backbone-drop" aria-hidden="true"><span /></div>
    </section>
  );
}
