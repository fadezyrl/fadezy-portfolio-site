import { CONTACT } from "@/data/contact";

export const START_PROJECT_ASSETS = {
  hero: "/assets/start-project/sp-hero-studio.jpg",
  homePath: "/",
  aboutPath: "/about",
  instagram: CONTACT.instagram,
} as const;

export const START_PROJECT_PATH = "/start-a-project";
export const START_PROJECT_CANONICAL =
  "https://www.fadezyrl.com/start-a-project";

export const PROJECT_NEED_IDS = [
  "website",
  "branding",
  "marketingSeo",
  "socialContent",
  "software",
  "multiple",
  "other",
] as const;

export type ProjectNeedId = (typeof PROJECT_NEED_IDS)[number];

/** Curated Fadezy feed visuals — real Fadezy work, linked to Instagram. */
export const FADEZY_INSTAGRAM_FEED = [
  {
    id: "ig-01",
    image: "/assets/barbershop/work/scotha-barber.jpg",
    alt: "Fadezy Instagram — Scotha Barber website work",
    href: CONTACT.instagram,
  },
  {
    id: "ig-02",
    image: "/assets/salon/work/beauty-n-blendz.jpg",
    alt: "Fadezy Instagram — Beauty N Blendz salon website",
    href: CONTACT.instagram,
  },
  {
    id: "ig-03",
    image: "/assets/barbershop/work/fade-town.jpg",
    alt: "Fadezy Instagram — Fade Town website work",
    href: CONTACT.instagram,
  },
  {
    id: "ig-04",
    image: "/assets/salon/work/mane-rumor.jpg",
    alt: "Fadezy Instagram — Mane Rumor salon website",
    href: CONTACT.instagram,
  },
  {
    id: "ig-05",
    image: "/assets/barbershop/work/prime-fade.jpg",
    alt: "Fadezy Instagram — Prime Fade website work",
    href: CONTACT.instagram,
  },
  {
    id: "ig-06",
    image: "/assets/salon/work/vegan-boujee.jpg",
    alt: "Fadezy Instagram — Vegan Boujee salon website",
    href: CONTACT.instagram,
  },
  {
    id: "ig-07",
    image: "/assets/barbershop/work/moss-barber-studio.jpg",
    alt: "Fadezy Instagram — Moss Barber Studio website work",
    href: CONTACT.instagram,
  },
  {
    id: "ig-08",
    image: "/assets/salon/work/beauty-by-kelsey.jpg",
    alt: "Fadezy Instagram — Beauty by Kelsey salon website",
    href: CONTACT.instagram,
  },
] as const;
