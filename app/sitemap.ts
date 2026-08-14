import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: `${SITE_URL}/`,
    lastModified: new Date("2026-08-14"),
    changeFrequency: "monthly",
    priority: 1,
  },
];

export default sitemap;
