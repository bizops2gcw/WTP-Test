import type { MetadataRoute } from "next";
import { getAllSlugs } from "./lib/pages";
import { SITE } from "./site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return getAllSlugs().map((slug) => {
    const path = slug === "" ? "" : `/${slug}`;
    const isHome = slug === "";
    const isService = slug.startsWith("dich-vu");
    return {
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : isService ? 0.8 : 0.6,
    };
  });
}
