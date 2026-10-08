export type SalonMarketingSeoDict = {
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
  brand: {
    eyebrow: string;
    headline: string[];
    body: string;
    signals: string[];
  };
  reviews: {
    eyebrow: string;
    headline: string[];
    body: string;
    signals: string[];
  };
  system: {
    eyebrow: string;
    headline: string[];
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
    barbershopWebsite: string;
    software: string;
    barbershopSoftware: string;
    barbershopMarketing: string;
    services: string;
    work: string;
    about: string;
  };
};

export const salonMarketingSeo: SalonMarketingSeoDict = {
  meta: {
    title: "Salon Marketing & SEO | Fadezy",
    description:
      "Salon marketing and SEO by Fadezy — local search, content and digital visibility designed to help modern beauty salons get discovered and booked.",
  },
  navAria: "Salon marketing and SEO",
  hero: {
    eyebrow: "Fadezy / Salon Marketing & SEO",
    h1: ["Salon", "Marketing & SEO"],
    statement: [
      "Be discovered by the",
      "people already looking",
      "for their next salon.",
    ],
    body: "We help salons build meaningful visibility across search, local discovery, content and digital channels — creating a digital presence that turns attention into appointments.",
    ctaPrimary: "Grow your salon →",
    ctaSecondary: "Talk to Fadezy →",
    imageAlt:
      "Luxury beauty salon — stylist working with a client in soft cinematic light",
    uiLabel: "Nearby",
    uiQuery: "salon near me",
    uiPlace: "Your city",
    uiResult: "Open · Highly rated",
  },
  intro: {
    lines: [
      "Your salon can be exceptional.",
      "But first, people have to find it.",
    ],
    body: "They search. They discover. They compare. They look at the work. They check reviews. They explore services. They visit Instagram. They look at the website. Then they decide where to book. Fadezy's marketing and SEO work is built to make your salon visible and compelling throughout that journey.",
    steps: [
      "Search",
      "Discover",
      "Compare",
      "Work",
      "Reviews",
      "Services",
      "Instagram",
      "Website",
      "Book",
    ],
  },
  journey: {
    eyebrow: "The journey",
    headline: "Before the appointment, there is discovery.",
    stages: [
      {
        label: "Search",
        body: "A potential client starts looking for a salon or service.",
      },
      {
        label: "Discover",
        body: "Your salon appears where they are searching.",
      },
      {
        label: "Explore",
        body: "They see your work, services and identity.",
      },
      {
        label: "Trust",
        body: "Your digital presence makes the salon feel credible.",
      },
      {
        label: "Book",
        body: "The experience makes taking action simple.",
      },
      {
        label: "Return",
        body: "A strong digital relationship encourages repeat visits.",
      },
    ],
  },
  local: {
    eyebrow: "Local search",
    headline: [
      "When someone searches",
      "for a salon near them,",
      "your salon should be there.",
    ],
    body: "Local SEO for salons is about showing up when people nearby are already looking — not chasing empty traffic.",
    queries: [
      "salon near me",
      "beauty salon near me",
      "best salon in your city",
      "hair salon nearby",
      "hair color in your city",
      "beauty treatments nearby",
    ],
    purpose: "Be visible when high-intent local customers are actively searching.",
    links: [
      { label: "Search", title: "How they find you" },
      { label: "Local result", title: "Where you appear" },
      { label: "Salon profile", title: "What they judge" },
      { label: "Website", title: "Where trust builds" },
      { label: "Booking", title: "What they do next" },
    ],
  },
  presence: {
    eyebrow: "Local presence",
    headline: [
      "Your Google presence",
      "is part of your salon's storefront.",
    ],
    body: "Photos, reviews, services, hours and your website help potential clients understand the salon before they ever walk through the door. We help that presence feel as considered as the floor itself.",
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
    goals: ["Visibility", "Accuracy", "Presentation", "Trust", "Action"],
    profile: {
      name: "Your Salon",
      category: "Beauty salon",
      hours: "Open · Closes 7 PM",
      rating: "4.9",
      reviews: "Based on real reviews",
      action: "Book / Directions / Website",
    },
  },
  content: {
    eyebrow: "Content",
    headline: ["Don't just create content.", "Create desire."],
    body: "Salon content should communicate the work, the transformation, the stylist, the atmosphere, the expertise, the personality, the experience and the result — so people remember you when they're ready to book.",
    themes: [
      "Hair transformation",
      "Color work",
      "Styling",
      "Salon interiors",
      "Stylist at work",
      "Client experience",
      "Signature services",
    ],
    imageAlts: [
      "Salon craft — color and finish in soft light",
      "Premium salon atmosphere — chair, mirror and detail",
      "Editorial beauty moment — texture and presence",
    ],
  },
  channels: {
    eyebrow: "Search & social",
    headline: [
      "Search makes you discoverable.",
      "Content makes you memorable.",
    ],
    body: "High-intent search, brand recognition through content, a website that builds trust, a clear path to booking, and a relationship that brings people back.",
    layers: [
      {
        label: "Search",
        title: "High-intent discovery",
        body: "People looking for a salon now.",
      },
      {
        label: "Social",
        title: "Brand recognition",
        body: "Your craft becomes familiar.",
      },
      {
        label: "Website",
        title: "Trust + information",
        body: "Where decisions get made.",
      },
      {
        label: "Booking",
        title: "Action",
        body: "Attention becomes an appointment.",
      },
      {
        label: "Return",
        title: "Relationship",
        body: "The experience continues.",
      },
    ],
  },
  website: {
    eyebrow: "Website",
    headline: [
      "Visibility earns the click.",
      "Your website earns the appointment.",
    ],
    body: "Marketing brings potential clients into the digital experience. The website then needs to show the salon identity, present services beautifully, show the work, build trust, answer questions and make booking simple.",
    points: [
      "Show the salon identity",
      "Present services beautifully",
      "Show the work",
      "Build trust",
      "Answer questions",
      "Make booking simple",
    ],
    flow: ["Search", "Website", "Trust", "Booking"],
    imageAlt: "Premium salon website presentation by Fadezy",
    projectLabel: "Selected website",
  },
  brand: {
    eyebrow: "Brand & trust",
    headline: [
      "Before they book,",
      "they decide how your salon feels.",
    ],
    body: "Digital perception is shaped by brand identity, photography, website, reviews, content, social presence, services and search presence. The salon should feel consistent from the first search to the final booking.",
    signals: [
      "Brand identity",
      "Photography",
      "Website",
      "Reviews",
      "Content",
      "Social presence",
      "Services",
      "Search presence",
    ],
  },
  reviews: {
    eyebrow: "Social proof",
    headline: [
      "Clients don't just compare salons.",
      "They compare confidence.",
    ],
    body: "Reviews, ratings, real photography, client results, social proof, a professional website, clear services and a consistent brand all shape that confidence — long before anyone arrives.",
    signals: [
      "Reviews",
      "Ratings",
      "Real photography",
      "Client results",
      "Social proof",
      "Professional website",
      "Clear services",
      "Consistent brand",
    ],
  },
  system: {
    eyebrow: "The system",
    headline: ["Growth doesn't happen", "in one channel."],
    body: "Every part should support the next — local SEO, content, social, website, search and booking working as one connected system rather than isolated activity.",
    pillars: [
      "Local SEO",
      "Content",
      "Social",
      "Website",
      "Search",
      "Booking",
    ],
  },
  measure: {
    eyebrow: "Measurement",
    headline: [
      "Beautiful is only the beginning.",
      "We measure what happens next.",
    ],
    body: "We track the signals that matter to a salon — visibility, qualified visits, engagement, service discovery and booking actions — so the work stays connected to growth.",
    note: "Example signals — not fabricated client results.",
    metrics: [
      { label: "Search visibility", hint: "How often you appear" },
      { label: "Qualified traffic", hint: "Local, relevant demand" },
      { label: "Website engagement", hint: "Time spent deciding" },
      { label: "Service discovery", hint: "What they explore" },
      { label: "Booking actions", hint: "What happens next" },
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
        body: "Your salon, market and client journey.",
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
        body: "Content that builds desire and trust.",
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
    headline: ["More followers aren't", "the finish line."],
    body: "The goal is to be discovered by the right clients, trusted quickly and chosen when they're ready to book.",
    focus: [
      "Visibility",
      "Intent",
      "Trust",
      "Appointments",
      "Repeat clients",
      "Business growth",
    ],
  },
  difference: {
    eyebrow: "The Fadezy approach",
    headline: [
      "Marketing works better",
      "when the entire experience",
      "speaks the same language.",
    ],
    body: "Website, brand, content, SEO, social, marketing and digital systems should work together — one presence for the client, not a pile of disconnected tactics.",
    pillars: [
      "Website",
      "Brand",
      "Content",
      "SEO",
      "Social",
      "Marketing",
      "Digital systems",
    ],
    statement:
      "Fadezy is the digital partner built exclusively for barbershops and beauty salons.",
  },
  audience: {
    eyebrow: "Who it's for",
    headline: [
      "For salons ready",
      "to be discovered",
      "beyond their neighborhood.",
    ],
    items: [
      "Independent salons",
      "Premium beauty salons",
      "Hair salons",
      "Growing salons",
      "Multi-stylist businesses",
      "Multi-location salon brands",
    ],
  },
  cta: {
    headline: ["Let's make your", "salon easier to find."],
    body: "Tell us where your salon is today. We'll help build the digital presence that moves it forward.",
    primary: "Start a project →",
    secondary: "Talk to Fadezy →",
  },
  related: {
    label: "Continue",
    website: "Salon Website Design",
    barbershopWebsite: "Barbershop Website Design",
    software: "Salon Software",
    barbershopSoftware: "Barbershop Software",
    barbershopMarketing: "Barbershop Marketing & SEO",
    services: "Services",
    work: "Work",
    about: "About",
  },
};
