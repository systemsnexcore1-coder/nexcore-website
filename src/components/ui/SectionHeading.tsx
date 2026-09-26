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
        <p className={cn("eyebrow", align === "center" && "justify-center", tone === "dark" && "!text-primary-100")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-4 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl", tone === "dark" ? "text-white" : "text-foreground")}>
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
