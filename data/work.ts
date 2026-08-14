export type WorkVisual = {
  hero: string;
  fullPage?: string;
};

export const WORK_VISUALS: Record<string, WorkVisual> = {
  "success-barbershop": {
    hero: "/assets/images/success-barber-hero.png",
  },
  "mane-rumor": {
    hero: "/assets/images/mane-rumorhero.png",
    fullPage: "/assets/images/full-page-mane-rumor.png",
  },
};
