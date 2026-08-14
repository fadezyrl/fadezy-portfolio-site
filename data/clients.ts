export type ClientLogo = {
  src: string;
  name: string;
};

const BASE = "/assets/brands-logos/processed";

export const CLIENT_LOGOS: ClientLogo[] = [
  { src: `${BASE}/success-logo.png`, name: "Success Barber Shop" },
  { src: `${BASE}/HOUSE_OF_ROWAN_logo_identity.png`, name: "House of Rowan" },
  { src: `${BASE}/Minimal_barbershop_logo_design.png`, name: "Common Ground" },
  {
    src: `${BASE}/Barbershop_logo_identity_design.png`,
    name: "The Gentlemen's Club",
  },
  { src: `${BASE}/Creating_barbershop_brand_logo.png`, name: "North & Crown" },
  {
    src: `${BASE}/Design_contemporary_men_s_groomi_.png`,
    name: "West & Wilde",
  },
  { src: `${BASE}/Design_luxury_hair_salon_logo.png`, name: "Mane Rumor" },
  { src: `${BASE}/Create_beauty_salon_brand_identity.png`, name: "Muse House" },
  {
    src: `${BASE}/Creating_luxury_beauty_salon_logo.png`,
    name: "Élan Beauty",
  },
  { src: `${BASE}/Create_luxury_beauty_salon_logo.png`, name: "Arc & Ivy" },
  {
    src: `${BASE}/Minimalist_beauty_studio_logo_de_.png`,
    name: "Vera Studio",
  },
];
