export type LocaleCode = "EN" | "UR";

export type Dictionary = {
  brand: string;
  nav: {
    work: string;
    services: string;
    about: string;
    startProject: string;
    menu: string;
    close: string;
    worldwide: string;
  };
  hero: {
    greeting: string;
    greetingEm: string;
    statement: string[];
    statementOverlap: string;
    sub: string;
    ctaProject: string;
    metaPrimary: string;
    metaSecondary: string;
    edgeMeta: string;
    imageAlt: string;
  };
  clients: {
    ariaLabel: string;
  };
  services: {
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
    projects: Array<{
      id: string;
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
  transformation: {
    eyebrow: string;
    headline: string;
    sub: string;
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
    labels: string[];
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    prev: string;
    next: string;
    items: Array<{ quote: string; name: string; meta: string }>;
  };
  about: {
    issueId: string;
    spineMeta: string;
    imageMeta: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineEm: string;
    p1: string;
    p2: string;
    cta: string;
    imageAlt: string;
  };
  finalCta: {
    headlineBefore: string;
    headlineEm: string;
    sub: string;
    ctaPrimary: string;
    servicesLine: string;
  };
  footer: {
    tagline: string;
    work: string;
    services: string;
    about: string;
    contact: string;
    instagram: string;
    whatsapp: string;
    linkedin: string;
    facebook: string;
    worldwide: string;
    copyright: string;
  };
};

export const en: Dictionary = {
  brand: "Fadezy",
  nav: {
    work: "Work",
    services: "Services",
    about: "About",
    startProject: "Start a Project",
    menu: "Menu",
    close: "Close",
    worldwide: "Worldwide / Remote-First",
  },
  hero: {
    greeting: "Welcome to ",
    greetingEm: "Fadezy.",
    statement: ["Digital", "presence", "for premium"],
    statementOverlap: "barbershops.",
    sub: "Websites, brand and growth for shops that already take their craft seriously.",
    ctaProject: "Start a project →",
    metaPrimary: "Fadezy / 001",
    metaSecondary: "The digital studio",
    edgeMeta: "Web / Brand / Content / Growth",
    imageAlt:
      "Fadezy studio still — a barber at work, the world we build for",
  },
  clients: {
    ariaLabel: "Selected work",
  },
  services: {
    headline: "Everything your shop needs online. Nothing it doesn't.",
    count: "01 — 04",
    items: [
      {
        num: "01",
        title: "The website",
        desc: "Built around how people actually book you — not a template with your logo dropped in.",
      },
      {
        num: "02",
        title: "The brand",
        desc: "The same feeling from Instagram to the site to the chair.",
      },
      {
        num: "03",
        title: "The content",
        desc: "Photos and stories that look like your work. Not stock.",
      },
      {
        num: "04",
        title: "The growth",
        desc: "Show up when someone nearby searches for a cut, a color, a chair.",
      },
    ],
  },
  work: {
    eyebrow: "Selected Work",
    headline: "Sites that belong next to the chair — not in a template gallery.",
    sub: "Two real studios. No mockups.",
    viewProject: "View Project",
    placeholderHint: "(replace with real screenshot)",
    projects: [
      {
        id: "success-barbershop",
        title: "Success Barbershop",
        location: "Dubai, UAE",
        visualClass: "sb",
        frameLabel: "Site capture — Success Barbershop",
        heroAlt:
          "Success Barbershop homepage hero with studio interior and headline",
        fullPageAlt: "Full Success Barbershop homepage",
        services: ["Web Design", "Development", "Brand"],
        desc: "A great barbershop shouldn’t look average online. For Success Barbershop, we built a premium digital presence that reflects the quality of their work and gives new clients a reason to book.",
        url: "https://www.successbarbershop.com/",
      },
      {
        id: "mane-rumor",
        title: "Mane Rumor",
        location: "Austin, Texas",
        visualClass: "mr",
        frameLabel: "Site capture — Mane Rumor",
        heroAlt: "Mane Rumor homepage hero with salon photography and headline",
        fullPageAlt: "Full Mane Rumor homepage from hero through footer",
        services: ["Web Design", "Development", "Design System"],
        desc: "A one-woman hair studio, built as a custom system — locked palette, three-font hierarchy, and a stitched motif through every scroll.",
        url: "https://mane-rumor.vercel.app/",
      },
    ],
  },
  transformation: {
    eyebrow: "The first impression",
    headline: "Same shop. Different first click.",
    sub: "Drag to compare a typical salon site with a Fadezy-built presence.",
    before: "Before",
    after: "After",
    beforeAlt: "Typical salon website before a Fadezy redesign",
    afterAlt: "Salon website after a Fadezy redesign",
    labels: [
      "How it feels",
      "How they book",
      "How it looks on a phone",
      "How fast it loads",
    ],
  },
  testimonials: {
    eyebrow: "From the chair",
    headline: "What owners say once the site feels like the shop.",
    prev: "← Prev",
    next: "Next →",
    items: [
      {
        quote:
          '"Fadezy did an amazing job with our website. They understood our brand, were easy to work with, and brought everything together in a way that feels premium and professional. Really happy with the final result."',
        name: "— Jawani",
        meta: "Success Barbershop",
      },
      {
        quote:
          '"It looks great! I loved the verbiage and everything. I’m really happy with how it all came together."',
        name: "— Mane Rumor",
        meta: "Austin, Texas",
      },
      {
        quote:
          '"Absolutely love my website! Fadezy understood my brand so well and made everything feel so much more professional while still feeling like me. The whole process was so easy and I’m obsessed with how it turned out!"',
        name: "— Kelsey",
        meta: "Khill Beauty",
      },
      {
        quote:
          '"Fadezy really captured the vision I had for Vegan & Boujee. I loved seeing my brand brought to life in a completely new way, and they were so open to my feedback throughout the process."',
        name: "— Chantel Justene",
        meta: "Vegan & Boujee",
      },
    ],
  },
  about: {
    issueId: "Why Fadezy",
    spineMeta: "Barbers / Beauty / Grooming",
    imageMeta: "Fadezy / Field Notes",
    headlineLine1: "We only work",
    headlineLine2: "with this industry.",
    headlineEm: "That's the point.",
    p1: "If you care about the cut, the space, and the person in the chair, your site shouldn't look like everyone else's.",
    p2: "Fadezy is a remote studio for barbershops, salons and grooming brands — anywhere the craft is taken seriously.",
    cta: "Tell us about your shop",
    imageAlt:
      "Mood board of barbershop interiors, grooming portraits, typography samples, and fabric swatches on a stone table",
  },
  finalCta: {
    headlineBefore: "Your shop deserves to be ",
    headlineEm: "remembered.",
    sub: "Tell us about the chair. We'll take care of the rest.",
    ctaPrimary: "Start a project →",
    servicesLine: "Websites / Brand / Content / Growth",
  },
  footer: {
    tagline:
      "A digital studio for barbershops, beauty salons and grooming brands.",
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    worldwide: "Worldwide / Remote-First",
    copyright: "© 2026 Fadezy",
  },
};
