import type { MetadataRoute } from "next";
import { ABOUT_CANONICAL } from "@/data/about";
import { BMS_CANONICAL } from "@/data/barbershop-marketing-seo";
import { BSW_CANONICAL } from "@/data/barbershop-software";
import { BWD_CANONICAL } from "@/data/barbershop-web-design";
import { SMS_CANONICAL } from "@/data/salon-marketing-seo";
import { SSW_CANONICAL } from "@/data/salon-software";
import { SWD_CANONICAL } from "@/data/salon-website-design";
import { SITE_URL } from "@/data/site";
import { START_PROJECT_CANONICAL } from "@/data/start-project";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: `${SITE_URL}/`,
    lastModified: new Date("2026-10-07"),
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
  {
    url: BSW_CANONICAL,
    lastModified: new Date("2026-10-07"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: SSW_CANONICAL,
    lastModified: new Date("2026-10-07"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: BMS_CANONICAL,
    lastModified: new Date("2026-10-07"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: SMS_CANONICAL,
    lastModified: new Date("2026-10-07"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: ABOUT_CANONICAL,
    lastModified: new Date("2026-10-08"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: START_PROJECT_CANONICAL,
    lastModified: new Date("2026-10-08"),
    changeFrequency: "monthly",
    priority: 0.95,
  },
];

export default sitemap;
