import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/lib/data";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/projects",
  "/industries",
  "/contact",
  "/consultation",
  "/privacy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const projectEntries = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticEntries, ...projectEntries];
}
