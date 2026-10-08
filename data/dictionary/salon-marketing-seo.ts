export type SalonMarketingSeoDict = {
  meta: { title: string; description: string };
  navAria: string;
  hero: {
    eyebrow: string;
    h1: string[];
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    headline: string;
    body: string;
    items: Array<{ num: string; title: string; body: string }>;
  };
  local: {
    eyebrow: string;
    headline: string[];
    body: string;
    flow: string[];
    points: string[];
  };
  content: {
    eyebrow: string;
    headline: string[];
    body: string;
    pillars: Array<{ num: string; title: string; body: string }>;
  };
  booking: {
    eyebrow: string;
    headline: string;
    body: string;
    flow: string[];
    note: string;
    websiteLink: string;
  };
  measure: {
    eyebrow: string;
    headline: string[];
    items: Array<{ title: string; body: string }>;
  };
  faq: {
    eyebrow: string;
    headline: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    headline: string[];
    body: string;
    primary: string;
    imageAlt: string;
  };
  related: {
    label: string;
    website: string;
    software: string;
    barbershopMarketing: string;
    about: string;
  };
};

export const salonMarketingSeo: SalonMarketingSeoDict = {
  meta: {
    title: "Salon Marketing & SEO | Fadezy",
    description:
      "Salon marketing and SEO by Fadezy — local SEO, Google Business Profile, content, reviews and website conversion for beauty salons that want to be found and booked.",
  },
  navAria: "Salon marketing and SEO",
  hero: {
    eyebrow: "Fadezy / Salon Marketing & SEO",
    h1: ["Salon", "Marketing & SEO"],
    body: "Get discovered by the right clients, build trust before the first appointment, and turn your digital presence into a stronger path to booking.",
    ctaPrimary: "Talk to Fadezy ↗",
    ctaSecondary: "See what we do",
    imageAlt:
      "Salon owner reviewing her business digital presence on a phone inside a sophisticated beauty salon",
  },
  services: {
    eyebrow: "What Fadezy does",
    headline: "Marketing that has a job to do.",
    body: "We help salons get discovered, look credible online and turn digital attention into real appointment opportunities.",
    items: [
      {
        num: "01",
        title: "Local SEO",
        body: "Improve how your salon appears when nearby clients search for the services you offer.",
      },
      {
        num: "02",
        title: "Google Business Profile",
        body: "Strengthen your local presence, services, information, photos and customer journey.",
      },
      {
        num: "03",
        title: "Website conversion",
        body: "Make sure people who discover your salon have a clear path from your website to enquiry or booking.",
      },
      {
        num: "04",
        title: "Content & social",
        body: "Build content around your work, brand, expertise and the experience you offer.",
      },
      {
        num: "05",
        title: "Reviews & reputation",
        body: "Turn strong client experiences into social proof and stronger local trust.",
      },
      {
        num: "06",
        title: "Tracking & improvement",
        body: "Measure what is attracting attention and what is creating genuine appointment intent.",
      },
    ],
  },
  local: {
    eyebrow: "Local search",
    headline: [
      "When someone searches for your service,",
      "your salon should be easy to find.",
    ],
    body: "We work on the parts of your local search presence that help potential clients discover, evaluate and choose your salon.",
    flow: ["Search", "Discover", "Explore", "Trust", "Book"],
    points: [
      "Google Business Profile",
      "Local relevance",
      "Service visibility",
      "Location signals",
      "Reviews",
      "Website experience",
    ],
  },
  content: {
    eyebrow: "Content + social",
    headline: ["Don't just post.", "Make the salon memorable."],
    body: "Your content should communicate the work, atmosphere and identity that make someone want to book.",
    pillars: [
      {
        num: "01",
        title: "Work",
        body: "Show the transformations, results and details clients care about.",
      },
      {
        num: "02",
        title: "Brand",
        body: "Make the salon recognisable beyond its logo.",
      },
      {
        num: "03",
        title: "Experience",
        body: "Show the atmosphere, people and details behind the appointment.",
      },
      {
        num: "04",
        title: "Proof",
        body: "Use reviews, real clients and genuine results where appropriate.",
      },
    ],
  },
  booking: {
    eyebrow: "Discovery to appointment",
    headline: "Getting discovered isn't the finish line.",
    body: "A client can find your salon, like what they see and still leave without booking.",
    flow: ["Search", "Social", "Website", "Trust", "Appointment"],
    note: "Your search presence, content and website should work together rather than operate as separate marketing channels.",
    websiteLink: "Explore salon website design ↗",
  },
  measure: {
    eyebrow: "What we measure",
    headline: ["No vanity metrics.", "Look at what matters."],
    items: [
      {
        title: "Local discovery",
        body: "How often the salon appears for relevant local searches.",
      },
      {
        title: "Website visibility",
        body: "Which pages and search terms are attracting relevant visitors.",
      },
      {
        title: "Engagement",
        body: "What visitors actually do after discovering the salon.",
      },
      {
        title: "Appointment intent",
        body: "Clicks, enquiries and actions that indicate genuine customer interest.",
      },
      {
        title: "Content performance",
        body: "Which content attracts attention from the right audience.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Straight answers.",
    items: [
      {
        q: "What does salon SEO include?",
        a: "Local search foundations, Google Business Profile work, service and location visibility, and the website experience that helps discovery turn into enquiry or booking interest.",
      },
      {
        q: "Can you improve our Google Business Profile?",
        a: "Yes. We strengthen the profile information, services, photos and customer journey that help nearby clients evaluate your salon.",
      },
      {
        q: "Can you help our salon appear in local searches?",
        a: "Yes. We work on salon local SEO and presence so you can appear for relevant nearby searches — without promising rankings or guaranteed outcomes.",
      },
      {
        q: "Do you manage social media and content too?",
        a: "Yes. We can build content around your work, brand and salon experience so your digital presence feels consistent and recognisable.",
      },
      {
        q: "How long does salon SEO take to show results?",
        a: "It varies by market, competition and starting point. Some improvements show sooner; stronger local visibility usually builds over time. We set expectations honestly rather than promising instant results.",
      },
    ],
  },
  cta: {
    headline: [
      "Your salon should be",
      "easy to find.",
      "Easy to trust.",
      "Easy to book.",
    ],
    body: "Tell us where your salon is today and what you want to improve.",
    primary: "Talk to Fadezy ↗",
    imageAlt:
      "Sophisticated beauty salon interior with soft light, mirrors and refined materials",
  },
  related: {
    label: "Related",
    website: "Salon Website Design",
    software: "Salon Software",
    barbershopMarketing: "Barbershop Marketing & SEO",
    about: "About Fadezy",
  },
};
