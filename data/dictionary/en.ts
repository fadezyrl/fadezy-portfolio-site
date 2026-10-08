import { aboutPage, type AboutPageDict } from "./about-page";
import {
  barbershopMarketingSeo,
  type BarbershopMarketingSeoDict,
} from "./barbershop-marketing-seo";
import { startProject, type StartProjectDict } from "./start-project";
import {
  barbershopSoftware,
  type BarbershopSoftwareDict,
} from "./barbershop-software";
import {
  barbershopWebDesign,
  type BarbershopWebDesignDict,
} from "./barbershop-web-design";
import {
  salonMarketingSeo,
  type SalonMarketingSeoDict,
} from "./salon-marketing-seo";
import {
  salonSoftware,
  type SalonSoftwareDict,
} from "./salon-software";
import {
  salonWebsiteDesign,
  type SalonWebsiteDesignDict,
} from "./salon-website-design";

export type LocaleCode = "EN" | "UR";

export type Dictionary = {
  brand: string;
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    startProject: string;
    menu: string;
    close: string;
    worldwide: string;
    barbershopWebDesign: string;
    salonWebsiteDesign: string;
    barbershopSoftware: string;
    salonSoftware: string;
    barbershopMarketingSeo: string;
    salonMarketingSeo: string;
    barbershops: string;
    beautySalons: string;
    servicesMenu: {
      barbershops: string;
      salons: string;
    };
  };
  hero: {
    greeting: string;
    greetingEm: string;
    statement: string[];
    sub: string;
    ctaProject: string;
    metaSecondary: string;
    edgeMeta: string;
    imageAlt: string;
  };
  clients: {
    ariaLabel: string;
    label: string;
  };
  services: {
    eyebrow: string;
    headline: string;
    count: string;
    items: Array<{ num: string; title: string; desc: string }>;
  };
  work: {
    eyebrow: string;
    headline: string;
    sub: string;
    viewProject: string;
    placeholderHint: string;
    indexLabel: string;
    projects: Array<{
      id: string;
      index: string;
      title: string;
      location: string;
      visualClass: string;
      frameLabel: string;
      heroAlt: string;
      fullPageAlt: string;
      services: string[];
      desc: string;
      url?: string;
    }>;
  };
  testimonials: {
    eyebrow: string;
    prev: string;
    next: string;
    items: Array<{ quote: string; name: string; meta: string }>;
  };
  about: {
    eyebrow: string;
    statement: string[];
    p1: string;
    p2: string;
    cta: string;
    imageAlt: string;
    imageMeta: string;
  };
  finalCta: {
    lines: string[];
    ctaPrimary: string;
    meta: string;
  };
  footer: {
    tagline: string;
    work: string;
    services: string;
    about: string;
    contact: string;
    barbershopWebDesign: string;
    salonWebsiteDesign: string;
    barbershopSoftware: string;
    salonSoftware: string;
    barbershopMarketingSeo: string;
    salonMarketingSeo: string;
    instagram: string;
    whatsapp: string;
    linkedin: string;
    facebook: string;
    worldwide: string;
    copyright: string;
  };
  barbershopWebDesign: BarbershopWebDesignDict;
  salonWebsiteDesign: SalonWebsiteDesignDict;
  barbershopSoftware: BarbershopSoftwareDict;
  salonSoftware: SalonSoftwareDict;
  barbershopMarketingSeo: BarbershopMarketingSeoDict;
  salonMarketingSeo: SalonMarketingSeoDict;
  aboutPage: AboutPageDict;
  startProject: StartProjectDict;
};

export const en: Dictionary = {
  brand: "Fadezy",
  nav: {
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    startProject: "Start a project",
    menu: "Menu",
    close: "Close",
    worldwide: "Worldwide / Remote-First",
    barbershopWebDesign: "Barbershop Web Design",
    salonWebsiteDesign: "Salon Website Design",
    barbershopSoftware: "Barbershop Software",
    salonSoftware: "Salon Software",
    barbershopMarketingSeo: "Barbershop Marketing & SEO",
    salonMarketingSeo: "Salon Marketing & SEO",
    barbershops: "Barbershops",
    beautySalons: "Beauty salons",
    servicesMenu: {
      barbershops: "Barbershops",
      salons: "Salons",
    },
  },
  hero: {
    greeting: "Welcome to ",
    greetingEm: "Fadezy.",
    statement: [
      "Premium",
      "websites for",
      "barbershops &",
      "beauty salons.",
    ],
    sub: "Websites, brand and growth for shops that already take their craft seriously.",
    ctaProject: "Start a project",
    metaSecondary: "Fadezy  /  Digital House",
    edgeMeta: "Web / Brand / Content / Growth",
    imageAlt:
      "Luxury beauty salon — a stylist shaping hair in soft natural light",
  },
  clients: {
    ariaLabel: "Selected work",
    label: "Selected Work",
  },
  services: {
    eyebrow: "Expertise",
    headline: "Websites, systems & growth.",
    count: "01 — 06",
    items: [
      {
        num: "01",
        title: "Barbershop web design",
        desc: "Premium barbershop websites built around brand, craft and booking — not a template with your logo dropped in.",
      },
      {
        num: "02",
        title: "Salon website design",
        desc: "Beauty salon website design built around atmosphere, services and the way clients discover and book.",
      },
      {
        num: "03",
        title: "Barbershop software",
        desc: "Digital systems for bookings, clients and operations — designed around how modern barbershops actually work.",
      },
      {
        num: "04",
        title: "Salon software",
        desc: "Salon management and booking systems designed around stylists, services and the client experience.",
      },
      {
        num: "05",
        title: "Barbershop marketing & SEO",
        desc: "Local search, content and digital visibility so the right people discover your shop and book.",
      },
      {
        num: "06",
        title: "Salon marketing & SEO",
        desc: "Search, content and digital growth that help salons get discovered, trusted and chosen.",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    headline: "Studios, not templates.",
    sub: "Two real businesses. Built as campaigns.",
    viewProject: "View project",
    placeholderHint: "(replace with real screenshot)",
    indexLabel: "Project",
    projects: [
      {
        id: "success-barbershop",
        index: "01",
        title: "Success Barbershop",
        location: "Dubai, UAE",
        visualClass: "sb",
        frameLabel: "Site capture — Success Barbershop",
        heroAlt: "Success Barbershop website design homepage in Dubai",
        fullPageAlt:
          "Full Success Barbershop website design homepage in Dubai",
        services: ["Barbershop website design", "Development", "Brand"],
        desc: "A great barbershop shouldn’t look average online. For Success Barbershop, we built a premium digital presence that reflects the quality of their work and gives new clients a reason to book.",
        url: "https://www.successbarbershop.com/",
      },
      {
        id: "mane-rumor",
        index: "02",
        title: "Mane Rumor",
        location: "Austin, Texas",
        visualClass: "mr",
        frameLabel: "Site capture — Mane Rumor",
        heroAlt: "Mane Rumor beauty salon website design homepage in Austin",
        fullPageAlt:
          "Full Mane Rumor beauty salon website design homepage in Austin",
        services: ["Salon website design", "Development", "Design system"],
        desc: "A one-woman hair studio, built as a custom system — locked palette, three-font hierarchy, and a stitched motif through every scroll.",
        url: "https://mane-rumor.vercel.app/",
      },
    ],
  },
  testimonials: {
    eyebrow: "From the chair",
    prev: "Prev",
    next: "Next",
    items: [
      {
        quote:
          "Fadezy did an amazing job with our website. They understood our brand, were easy to work with, and brought everything together in a way that feels premium and professional.",
        name: "Jawani",
        meta: "Success Barbershop",
      },
      {
        quote:
          "It looks great. I loved the verbiage and everything. I’m really happy with how it all came together.",
        name: "Mane Rumor",
        meta: "Austin, Texas",
      },
      {
        quote:
          "Absolutely love my website. Fadezy understood my brand so well and made everything feel so much more professional while still feeling like me.",
        name: "Kelsey",
        meta: "Khill Beauty",
      },
      {
        quote:
          "Fadezy really captured the vision I had for Vegan & Boujee. I loved seeing my brand brought to life in a completely new way.",
        name: "Chantel Justene",
        meta: "Vegan & Boujee",
      },
    ],
  },
  about: {
    eyebrow: "About Fadezy",
    statement: [
      "Fadezy is the digital partner",
      "built exclusively for",
      "barbershops & beauty salons.",
    ],
    p1: "We build premium websites, shape digital brands, create content and help modern barbershops and beauty salons get discovered, trusted and booked.",
    p2: "If you care about the cut, the space, and the person in the chair, your digital presence should feel just as considered.",
    cta: "Explore Fadezy",
    imageAlt:
      "Editorial study of craft — barbershop and beauty salon atmosphere",
    imageMeta: "Fadezy / Field notes",
  },
  finalCta: {
    lines: [
      "Your business",
      "deserves a digital",
      "presence that feels",
      "as good as the work.",
    ],
    ctaPrimary: "Start a project →",
    meta: "Website / Brand / Content / Growth",
  },
  footer: {
    tagline:
      "The digital partner built exclusively for barbershops and beauty salons.",
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    barbershopWebDesign: "Barbershop Web Design",
    salonWebsiteDesign: "Salon Website Design",
    barbershopSoftware: "Barbershop Software",
    salonSoftware: "Salon Software",
    barbershopMarketingSeo: "Barbershop Marketing & SEO",
    salonMarketingSeo: "Salon Marketing & SEO",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    worldwide: "Worldwide / Remote-First",
    copyright: "© 2026 Fadezy",
  },
  barbershopWebDesign,
  salonWebsiteDesign,
  barbershopSoftware,
  salonSoftware,
  barbershopMarketingSeo,
  salonMarketingSeo,
  aboutPage,
  startProject,
};
