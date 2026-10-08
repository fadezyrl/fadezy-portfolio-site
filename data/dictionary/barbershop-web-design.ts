export type BarbershopWebDesignDict = {
  meta: {
    title: string;
    description: string;
  };
  navAria: string;
  hero: {
    label: string;
    title: string[];
    statement: string;
    ctaPrimary: string;
    ctaSecondary: string;
    previewAlt: string;
  };
  statement: {
    line1: string;
    line2: string;
  };
  work: {
    label: string;
    headline: string[];
    support: string;
    viewProject: string;
    typeLabel: string;
    conceptLabel: string;
    dragHint: string;
    prev: string;
    next: string;
    projects: Array<{
      id: string;
      title: string;
      location: string;
      imageAlt: string;
    }>;
  };
  principles: {
    label: string;
    headline: string;
    items: Array<{ num: string; title: string; body: string }>;
  };
  process: {
    label: string;
    headline: string;
    steps: Array<{ num: string; title: string; body: string }>;
  };
  faq: {
    label: string;
    headline: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    headline: string;
    body: string;
    button: string;
    imageAlt: string;
  };
};

export const barbershopWebDesign: BarbershopWebDesignDict = {
  meta: {
    title: "Barbershop Web Design | Premium Websites — Fadezy",
    description:
      "Premium barbershop web design by Fadezy. Custom websites built around your brand, craft, mobile discovery and booking — not templates.",
  },
  navAria: "Barbershop web design",
  hero: {
    label: "Fadezy / 01",
    title: ["Barbershop", "Web Design"],
    statement:
      "Premium websites built around your barbershop, your brand and the way your clients discover and book.",
    ctaPrimary: "View barbershop work ↗",
    ctaSecondary: "Start a project ↗",
    previewAlt:
      "Editorial photograph inside a premium modern barbershop — barber cutting a client's hair beside the chair and mirror",
  },
  statement: {
    line1: "Your barbershop already has a personality.",
    line2: "Your website should feel like it.",
  },
  work: {
    label: "Barbershop websites",
    headline: ["Built for barbershops.", "Designed to feel different."],
    support:
      "A collection of barbershop website experiences created by Fadezy for businesses across different markets.",
    viewProject: "View project ↗",
    typeLabel: "Barbershop website",
    conceptLabel: "Concept project",
    dragHint: "Drag to explore",
    prev: "Previous project",
    next: "Next project",
    projects: [
      {
        id: "scotha-barber",
        title: "Scotha Barber",
        location: "Dallas, Texas, USA",
        imageAlt:
          "Scotha Barber website — barbershop web design by Fadezy for Dallas",
      },
      {
        id: "the-mens-room",
        title: "The Men's Room",
        location: "Brick Township, New Jersey, USA",
        imageAlt:
          "The Men's Room Barber Lounge website — barbershop web design by Fadezy",
      },
      {
        id: "fade-town",
        title: "Fade Town",
        location: "Riyadh, Saudi Arabia",
        imageAlt:
          "Fade Town website — barbershop web design by Fadezy for Riyadh",
      },
      {
        id: "prime-fade",
        title: "Prime Fade",
        location: "Frankston, Victoria, Australia",
        imageAlt:
          "Prime Fade Barbers website — barbershop web design by Fadezy for Frankston",
      },
      {
        id: "ian-o-reilly",
        title: "Ian O'Reilly",
        location: "Wexford Town, Ireland",
        imageAlt:
          "Ian O'Reilly Cuts website — barbershop web design by Fadezy for Wexford",
      },
      {
        id: "moss-barber-studio",
        title: "Moss Barber Studio",
        location: "Llantrisant, United Kingdom",
        imageAlt:
          "Moss Barber Studio website — barbershop web design by Fadezy for Llantrisant",
      },
    ],
  },
  principles: {
    label: "The experience",
    headline: "Built around the barbershop experience.",
    items: [
      {
        num: "01",
        title: "Brand",
        body: "Your website should look unmistakably like your barbershop.",
      },
      {
        num: "02",
        title: "Work",
        body: "Your cuts, atmosphere and results should do the selling.",
      },
      {
        num: "03",
        title: "Booking",
        body: "Make the path from interest to appointment feel effortless.",
      },
      {
        num: "04",
        title: "Mobile",
        body: "Because most clients discover your barbershop from their phone.",
      },
    ],
  },
  process: {
    label: "Process",
    headline: "From barbershop to digital experience.",
    steps: [
      {
        num: "01",
        title: "Understand",
        body: "Your brand, clientele, services and how people currently book.",
      },
      {
        num: "02",
        title: "Define",
        body: "The visual direction, structure and experience the website needs.",
      },
      {
        num: "03",
        title: "Build",
        body: "A responsive website designed around your business — not a template.",
      },
      {
        num: "04",
        title: "Launch",
        body: "Tested, refined and ready for real clients.",
      },
    ],
  },
  faq: {
    label: "FAQ",
    headline: "Questions from barbershop owners.",
    items: [
      {
        q: "What does a barbershop website need?",
        a: "A clear sense of your brand, strong presentation of your work, mobile-first design, and an obvious path to book. Everything else supports those four.",
      },
      {
        q: "Can you build a website around our existing brand?",
        a: "Yes. We start from your atmosphere and identity, then extend that into a custom barbershop website that feels unmistakably yours.",
      },
      {
        q: "Can the website connect with our booking system?",
        a: "Yes. We design the experience first, then connect the booking tools you already use — or set a clean path for online booking.",
      },
      {
        q: "Will the website work on mobile?",
        a: "Yes. Most clients discover a barbershop from their phone, so mobile is designed as the primary experience — not an afterthought.",
      },
      {
        q: "Can Fadezy work with barbershops worldwide?",
        a: "Yes. Fadezy works remotely with barbershops around the world.",
      },
      {
        q: "Do you build custom websites or use templates?",
        a: "Custom. Every Fadezy barbershop website is designed around the business — not adapted from a generic theme.",
      },
    ],
  },
  cta: {
    headline: "Your barbershop deserves more than a template.",
    body: "Build a digital experience that feels like the business behind it.",
    button: "Start your project ↗",
    imageAlt:
      "Premium modern barbershop interior — leather chair, mirror and warm materials",
  },
};
