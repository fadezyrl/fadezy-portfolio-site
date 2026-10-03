import type { MetadataRoute } from "next";
import { BWD_CANONICAL } from "@/data/barbershop-web-design";
import { SWD_CANONICAL } from "@/data/salon-website-design";
import { SITE_URL } from "@/data/site";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: `${SITE_URL}/`,
    lastModified: new Date("2026-09-15"),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: BWD_CANONICAL,
    lastModified: new Date("2026-09-15"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: SWD_CANONICAL,
    lastModified: new Date("2026-09-15"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

export default sitemap;
