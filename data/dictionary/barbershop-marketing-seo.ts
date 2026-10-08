export type BarbershopMarketingSeoDict = {
  meta: { title: string; description: string };
  navAria: string;
  hero: {
    eyebrow: string;
    h1: string[];
    statement: string[];
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
    uiLabel: string;
    uiQuery: string;
    uiPlace: string;
    uiResult: string;
  };
  intro: {
    lines: string[];
    body: string;
    steps: string[];
  };
  journey: {
    eyebrow: string;
    headline: string;
    stages: Array<{ label: string; body: string }>;
  };
  local: {
    eyebrow: string;
    headline: string[];
    body: string;
    queries: string[];
    purpose: string;
    links: Array<{ label: string; title: string }>;
  };
  presence: {
    eyebrow: string;
    headline: string[];
    body: string;
    elements: string[];
    goals: string[];
    profile: {
      name: string;
      category: string;
      hours: string;
      rating: string;
      reviews: string;
      action: string;
    };
  };
  content: {
    eyebrow: string;
    headline: string[];
    body: string;
    themes: string[];
    imageAlts: string[];
  };
  channels: {
    eyebrow: string;
    headline: string[];
    body: string;
    layers: Array<{ label: string; title: string; body: string }>;
  };
  website: {
    eyebrow: string;
    headline: string[];
    body: string;
    points: string[];
    flow: string[];
    imageAlt: string;
    projectLabel: string;
  };
  trust: {
    eyebrow: string;
    headline: string[];
    body: string;
    signals: string[];
  };
  system: {
    eyebrow: string;
    headline: string;
    body: string;
    pillars: string[];
  };
  measure: {
    eyebrow: string;
    headline: string[];
    body: string;
    note: string;
    metrics: Array<{ label: string; hint: string }>;
  };
  approach: {
    eyebrow: string;
    headline: string;
    steps: Array<{ num: string; title: string; body: string }>;
  };
  vanity: {
    headline: string[];
    body: string;
    focus: string[];
  };
  difference: {
    eyebrow: string;
    headline: string[];
    body: string;
    pillars: string[];
    statement: string;
  };
  audience: {
    eyebrow: string;
    headline: string[];
    items: string[];
  };
  cta: {
    headline: string[];
    body: string;
    primary: string;
    secondary: string;
  };
  related: {
    label: string;
    website: string;
    salonWebsite: string;
    software: string;
    salonSoftware: string;
    services: string;
    work: string;
    about: string;
  };
};

export const barbershopMarketingSeo: BarbershopMarketingSeoDict = {
  meta: {
    title: "Barbershop Marketing & SEO | Fadezy",
    description:
      "Barbershop marketing and SEO by Fadezy — local search, content and digital visibility designed to help modern barbershops get discovered and booked.",
  },
  navAria: "Barbershop marketing and SEO",
  hero: {
    eyebrow: "Fadezy / Barbershop Marketing & SEO",
    h1: ["Barbershop", "Marketing & SEO"],
    statement: [
      "Be discovered by the",
      "people looking for",
      "their next barber.",
    ],
    body: "We help barbershops build visibility across search, local discovery, content and digital channels — turning attention into real customer action.",
    ctaPrimary: "Grow your barbershop →",
    ctaSecondary: "Talk to Fadezy →",
    imageAlt:
      "Premium barbershop interior — craft, atmosphere and warm cinematic light",
    uiLabel: "Nearby",
    uiQuery: "barber near me",
    uiPlace: "Your city",
    uiResult: "Open · Highly rated",
  },
  intro: {
    lines: [
      "Being good at cutting hair",
      "isn't enough if nobody",
      "can find you.",
    ],
    body: "Customers search. They compare. They look at reviews. They check your work. They visit your Instagram. They look at your website. Then they decide who gets the booking. Fadezy's marketing and SEO work is built to place your barbershop where that decision happens.",
    steps: [
      "Search",
      "Compare",
      "Reviews",
      "Work",
      "Instagram",
      "Website",
      "Book",
    ],
  },
  journey: {
    eyebrow: "The journey",
    headline: "Before the booking, there is discovery.",
    stages: [
      {
        label: "Search",
        body: "A customer looks for a barber or service.",
      },
      {
        label: "Discover",
        body: "Your barbershop appears where they are searching.",
      },
      {
        label: "Explore",
        body: "They see your work, services and brand.",
      },
      {
        label: "Trust",
        body: "Your digital presence gives them a reason to choose you.",
      },
      {
        label: "Book",
        body: "The journey leads naturally toward an appointment.",
      },
      {
        label: "Return",
        body: "A strong digital experience helps create repeat customers.",
      },
    ],
  },
  local: {
    eyebrow: "Local search",
    headline: [
      "When someone searches",
      "for a barber near them,",
      "your shop should be there.",
    ],
    body: "Local SEO for barbershops is about showing up when people nearby are already looking — not chasing empty traffic.",
    queries: [
      "barber near me",
      "barbershop near me",
      "best barbershop in your city",
      "fade haircut nearby",
      "men's haircut in your city",
    ],
    purpose: "Show up when local customers are actively looking.",
    links: [
      { label: "Location", title: "Where you are" },
      { label: "Search", title: "How they find you" },
      { label: "Barbershop", title: "What they see" },
      { label: "Booking", title: "What they do next" },
    ],
  },
  presence: {
    eyebrow: "Local presence",
    headline: ["Your Google presence", "is part of your storefront."],
    body: "Photos, reviews, services, hours and your website shape confidence before anyone walks in. We help your local presence look as considered as the shop itself — for better visibility and more qualified discovery.",
    elements: [
      "Business profile",
      "Reviews",
      "Photos",
      "Services",
      "Opening hours",
      "Location",
      "Website",
      "Booking",
    ],
    goals: [
      "Better visibility",
      "Better presentation",
      "More qualified discovery",
    ],
    profile: {
      name: "Your Barbershop",
      category: "Barbershop",
      hours: "Open · Closes 8 PM",
      rating: "4.9",
      reviews: "Based on real reviews",
      action: "Book / Directions / Website",
    },
  },
  content: {
    eyebrow: "Content",
    headline: ["Don't just post.", "Build recognition."],
    body: "Content should reinforce the barber, the craft, the shop, the personality, the results and the experience — so people remember you when they're ready to book.",
    themes: [
      "Haircut transformations",
      "Barber POV",
      "Shop atmosphere",
      "Client experience",
      "Signature styles",
      "Brand storytelling",
    ],
    imageAlts: [
      "Barbershop craft — close work and atmosphere",
      "Premium shop moment — light, tools and chair",
      "Editorial cut detail — texture and finish",
    ],
  },
  channels: {
    eyebrow: "Search & social",
    headline: [
      "Search gets you discovered.",
      "Content gives people a reason to remember you.",
    ],
    body: "High-intent search, brand recognition through content, a website that converts, and a clear path to booking — working as one system.",
    layers: [
      {
        label: "Search",
        title: "High-intent discovery",
        body: "People looking for a barber now.",
      },
      {
        label: "Social",
        title: "Recognition & trust",
        body: "Your craft becomes familiar.",
      },
      {
        label: "Website",
        title: "Conversion",
        body: "The place decisions get made.",
      },
      {
        label: "Booking",
        title: "Action",
        body: "Attention becomes an appointment.",
      },
    ],
  },
  website: {
    eyebrow: "Website",
    headline: [
      "Visibility gets the click.",
      "Your website earns the booking.",
    ],
    body: "Marketing can bring someone to your digital presence. The website has to show the brand, show the work, explain services, build trust and make booking easy.",
    points: [
      "Show the brand",
      "Show the work",
      "Explain services",
      "Build trust",
      "Make booking easy",
    ],
    flow: ["Search", "Website", "Trust", "Booking"],
    imageAlt: "Premium barbershop website presentation by Fadezy",
    projectLabel: "Selected website",
  },
  trust: {
    eyebrow: "Trust",
    headline: [
      "Before they sit in your chair,",
      "they decide whether they trust you.",
    ],
    body: "Reviews, ratings, real photography, brand consistency, clear services and a professional website all shape that decision — long before the first greeting.",
    signals: [
      "Reviews",
      "Ratings",
      "Real photography",
      "Brand consistency",
      "Social proof",
      "Clear services",
      "Professional website",
    ],
  },
  system: {
    eyebrow: "The system",
    headline: "Growth isn't one channel.",
    body: "Fadezy looks at the entire customer journey — local SEO, content, social, website, search and conversion — rather than treating marketing as isolated activity.",
    pillars: [
      "Local SEO",
      "Content",
      "Social",
      "Website",
      "Search",
      "Conversion",
    ],
  },
  measure: {
    eyebrow: "Measurement",
    headline: ["Beautiful isn't enough.", "We measure what happens next."],
    body: "We track the signals that matter to a barbershop — visibility, qualified visits, engagement and booking actions — so the work stays connected to growth.",
    note: "Example signals — not fabricated client results.",
    metrics: [
      { label: "Search visibility", hint: "How often you appear" },
      { label: "Website visits", hint: "Who arrives with intent" },
      { label: "Qualified traffic", hint: "Local, relevant demand" },
      { label: "Booking actions", hint: "What happens next" },
      { label: "Engagement", hint: "Time spent deciding" },
      { label: "Conversion signals", hint: "Path to the chair" },
    ],
  },
  approach: {
    eyebrow: "Approach",
    headline: "Strategy before activity.",
    steps: [
      {
        num: "01",
        title: "Understand",
        body: "Your shop, market and customer journey.",
      },
      {
        num: "02",
        title: "Position",
        body: "How you should be found and remembered.",
      },
      {
        num: "03",
        title: "Optimize",
        body: "Local presence, search and website foundations.",
      },
      {
        num: "04",
        title: "Create",
        body: "Content that builds recognition and trust.",
      },
      {
        num: "05",
        title: "Distribute",
        body: "The right channels, with restraint.",
      },
      {
        num: "06",
        title: "Measure",
        body: "What moved visibility, trust and bookings.",
      },
    ],
  },
  vanity: {
    headline: ["More followers isn't", "the goal."],
    body: "The goal is to be discovered by the right people, trusted quickly and chosen when they're ready to book.",
    focus: [
      "Visibility",
      "Intent",
      "Trust",
      "Bookings",
      "Business growth",
    ],
  },
  difference: {
    eyebrow: "The Fadezy approach",
    headline: [
      "Marketing works better",
      "when everything speaks",
      "the same language.",
    ],
    body: "Website, brand, content, SEO, social and digital systems should feel connected — one presence for the customer, not a pile of disconnected tactics.",
    pillars: [
      "Website",
      "Brand",
      "Content",
      "SEO",
      "Social",
      "Digital systems",
    ],
    statement:
      "Fadezy is the digital partner built exclusively for barbershops and beauty salons.",
  },
  audience: {
    eyebrow: "Who it's for",
    headline: [
      "For barbershops ready",
      "to be known beyond",
      "their chair.",
    ],
    items: [
      "Independent barbershops",
      "Premium barbershops",
      "Growing shops",
      "Multi-barber businesses",
      "Established local shops",
      "Multi-location barbershop brands",
    ],
  },
  cta: {
    headline: ["Let's make your", "barbershop easier to find."],
    body: "Tell us where your barbershop is today. We'll help you build the digital presence that takes it forward.",
    primary: "Start a project →",
    secondary: "Talk to Fadezy →",
  },
  related: {
    label: "Continue",
    website: "Barbershop Website Design",
    salonWebsite: "Salon Website Design",
    software: "Barbershop Software",
    salonSoftware: "Salon Software",
    services: "Services",
    work: "Work",
    about: "About",
  },
};
