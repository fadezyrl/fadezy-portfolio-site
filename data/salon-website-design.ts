export const SWD_ASSETS = {
  heroPreview: "/assets/beauty-salon/salon-hero.jpg",
  beautyHero: "/assets/images/beauty-n-blend-hero.png",
  beautyFull: "/assets/images/full-page-beautynblend.png",
  maneHero: "/assets/images/mane-rumorhero.png",
  maneFull: "/assets/images/full-page-mane-rumor.png",
  workPath: "/#work",
  homePath: "/",
  aboutPath: "/about",
  contactPath: "/start-a-project",
  barbershopPath: "/barbershop-web-design",
} as const;

export const SWD_PATH = "/salon-website-design";

export const SWD_CANONICAL = "https://www.fadezyrl.com/salon-website-design";

export type SwdProjectStatus = "live" | "concept";

export type SwdProjectComposition = "wide" | "editorial" | "focus" | "offset" | "lounge";

export type SwdProject = {
  id: string;
  status: SwdProjectStatus;
  image: string;
  mobileImage?: string;
  url: string;
  href: string;
  composition: SwdProjectComposition;
};

/** Salon & beauty portfolio only. */
export const SWD_PROJECTS: SwdProject[] = [
  {
    id: "beauty-n-blendz",
    status: "concept",
    image: "/assets/salon/work/beauty-n-blendz.jpg",
    mobileImage: "/assets/salon/work/beauty-n-blendz-mobile.jpg",
    url: "https://beautynblend.vercel.app/",
    href: "/salon-website-design/work/beauty-n-blendz",
    composition: "wide",
  },
  {
    id: "mane-rumor",
    status: "concept",
    image: "/assets/salon/work/mane-rumor.jpg",
    mobileImage: "/assets/salon/work/mane-rumor-mobile.jpg",
    url: "https://mane-rumor.vercel.app/",
    href: "/salon-website-design/work/mane-rumor",
    composition: "editorial",
  },
  {
    id: "beauty-by-kelsey",
    status: "concept",
    image: "/assets/salon/work/beauty-by-kelsey.jpg",
    mobileImage: "/assets/salon/work/beauty-by-kelsey-mobile.jpg",
    url: "https://khill-beauty.vercel.app/",
    href: "/salon-website-design/work/beauty-by-kelsey",
    composition: "focus",
  },
  {
    id: "vegan-boujee",
    status: "concept",
    image: "/assets/salon/work/vegan-boujee.jpg",
    mobileImage: "/assets/salon/work/vegan-boujee-mobile.jpg",
    url: "https://vegan-boujee.vercel.app/",
    href: "/salon-website-design/work/vegan-boujee",
    composition: "offset",
  },
  {
    id: "mokhtar-safadi",
    status: "concept",
    image: "/assets/salon/work/mokhtar-safadi.jpg",
    mobileImage: "/assets/salon/work/mokhtar-safadi-mobile.jpg",
    url: "https://mokhtar-safadi-beauty-lounge.vercel.app/",
    href: "/salon-website-design/work/mokhtar-safadi",
    composition: "lounge",
  },
];

export const getSwdProject = (id: string): SwdProject | undefined =>
  SWD_PROJECTS.find((project) => project.id === id);
