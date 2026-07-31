import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "default", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("text-sm font-semibold uppercase", tone === "dark" ? "text-primary-100" : "text-primary-600")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-3 font-display text-3xl font-semibold sm:text-4xl", tone === "dark" ? "text-white" : "text-foreground")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-8 sm:text-lg", tone === "dark" ? "text-blue-100" : "text-muted-foreground")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
