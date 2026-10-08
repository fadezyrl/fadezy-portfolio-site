export const BWD_ASSETS = {
  heroPreview: "/assets/barbershop/bwd-hero-editorial.jpg",
  ctaImage: "/assets/barbershop/bwd-cta-editorial.jpg",
  workPath: "/#work",
  homePath: "/",
  aboutPath: "/about",
  contactPath: "/start-a-project",
  salonPath: "/salon-website-design",
} as const;

export const BWD_PATH = "/barbershop-web-design";

export const BWD_CANONICAL = "https://www.fadezyrl.com/barbershop-web-design";

export type BwdProjectStatus = "live" | "concept";

export type BwdProject = {
  id: string;
  status: BwdProjectStatus;
  image: string;
  url: string;
  size: "lg" | "md";
};

/** Barbershop-only portfolio. Salons (Alepa, Bugatee, Nazih Gents) excluded. */
export const BWD_PROJECTS: BwdProject[] = [
  {
    id: "scotha-barber",
    status: "concept",
    image: "/assets/barbershop/work/scotha-barber.jpg",
    url: "https://scothabarber.vercel.app/",
    size: "lg",
  },
  {
    id: "the-mens-room",
    status: "concept",
    image: "/assets/barbershop/work/the-mens-room.jpg",
    url: "https://themensroom-three.vercel.app/",
    size: "md",
  },
  {
    id: "fade-town",
    status: "concept",
    image: "/assets/barbershop/work/fade-town.jpg",
    url: "https://fade-town.vercel.app/",
    size: "lg",
  },
  {
    id: "prime-fade",
    status: "concept",
    image: "/assets/barbershop/work/prime-fade.jpg",
    url: "https://prime-fade.vercel.app/",
    size: "md",
  },
  {
    id: "ian-o-reilly",
    status: "concept",
    image: "/assets/barbershop/work/ian-o-reilly.jpg",
    url: "https://ian-o-reilly.vercel.app/",
    size: "lg",
  },
  {
    id: "moss-barber-studio",
    status: "concept",
    image: "/assets/barbershop/work/moss-barber-studio.jpg",
    url: "https://moss-barber-studio.vercel.app/",
    size: "md",
  },
];
