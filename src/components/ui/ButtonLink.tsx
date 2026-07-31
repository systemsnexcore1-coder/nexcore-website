import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-primary-600 text-white shadow-sm hover:bg-primary-700 focus:ring-primary-500",
  secondary:
    "border border-border bg-surface text-foreground shadow-sm hover:border-primary-500 hover:text-primary-700 focus:ring-primary-500 dark:hover:text-white",
  ghost: "text-primary-700 hover:bg-primary-50 focus:ring-primary-500 dark:text-primary-100 dark:hover:bg-white/[0.10]"
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
        variants[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
