export type BarbershopMarketingSeoDict = {
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
    pillars: Array<{ title: string; body: string }>;
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
    salonMarketing: string;
    about: string;
  };
};

export const barbershopMarketingSeo: BarbershopMarketingSeoDict = {
  meta: {
    title: "Barbershop Marketing & SEO | Fadezy",
    description:
      "Barbershop marketing and SEO by Fadezy — local SEO, Google Business Profile, content, reviews and website conversion for barbershops that want to be found and booked.",
  },
  navAria: "Barbershop marketing and SEO",
  hero: {
    eyebrow: "Fadezy / Marketing & SEO",
    h1: ["Barbershop", "Marketing & SEO"],
    body: "Get discovered by more local clients, turn attention into bookings, and build a digital presence that keeps working for your barbershop.",
    ctaPrimary: "Talk to Fadezy ↗",
    ctaSecondary: "See what we do",
    imageAlt:
      "Barber reviewing his shop's digital presence on a phone inside a premium modern barbershop",
  },
  services: {
    eyebrow: "What Fadezy does",
    headline: "Marketing that has a job to do.",
    body: "We help barbershops get discovered, look credible online and turn that attention into real appointments.",
    items: [
      {
        num: "01",
        title: "Local SEO",
        body: "Improve how your barbershop appears when nearby clients search for services you offer.",
      },
      {
        num: "02",
        title: "Google Business Profile",
        body: "Strengthen your local presence, services, photos, information and customer journey.",
      },
      {
        num: "03",
        title: "Website conversion",
        body: "Make sure the people who find you have a clear path from your website to booking.",
      },
      {
        num: "04",
        title: "Social & content",
        body: "Build content around your work, brand and the reasons clients should choose you.",
      },
      {
        num: "05",
        title: "Reviews & reputation",
        body: "Help turn great client experiences into stronger social proof and local trust.",
      },
      {
        num: "06",
        title: "Tracking & improvement",
        body: "Measure what is bringing attention, visits and booking opportunities — then improve it.",
      },
    ],
  },
  local: {
    eyebrow: "Local search",
    headline: [
      "When someone searches for a barber,",
      "your shop should be there.",
    ],
    body: "We work on the parts of your local search presence that help potential clients discover, evaluate and choose your barbershop.",
    flow: ["Search", "Discover", "Visit", "Trust", "Book"],
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
    headline: ["Don't just post.", "Build recognition."],
    body: "Your content should make people remember the shop before they need the next haircut.",
    pillars: [
      {
        title: "Work",
        body: "Show the cuts and results.",
      },
      {
        title: "Brand",
        body: "Show what makes the barbershop different.",
      },
      {
        title: "Experience",
        body: "Show the atmosphere, people and details.",
      },
      {
        title: "Proof",
        body: "Show real clients, reviews and results where appropriate.",
      },
    ],
  },
  booking: {
    eyebrow: "Website to booking",
    headline: "Getting discovered isn't the finish line.",
    body: "A client can find your barbershop and still leave without booking.",
    flow: ["Search", "Social", "Website", "Trust", "Booking"],
    note: "The website, content and local presence should work together rather than operate as separate marketing channels.",
    websiteLink: "Explore barbershop web design ↗",
  },
  measure: {
    eyebrow: "What we measure",
    headline: ["No vanity metrics.", "Look at what matters."],
    items: [
      {
        title: "Local discovery",
        body: "How often your business is appearing for relevant local searches.",
      },
      {
        title: "Website visibility",
        body: "Where relevant pages are being discovered and what people search for.",
      },
      {
        title: "Engagement",
        body: "What visitors actually do after finding you.",
      },
      {
        title: "Booking intent",
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
        q: "What does barbershop SEO include?",
        a: "Local search foundations, Google Business Profile work, service and location visibility, and the website experience that helps discovery turn into booking interest.",
      },
      {
        q: "Can you improve my Google Business Profile?",
        a: "Yes. We strengthen the profile information, services, visuals and customer journey that help nearby clients evaluate your barbershop.",
      },
      {
        q: "Can you help my barbershop get found in local searches?",
        a: "Yes. We work on local SEO and presence so your shop can appear for relevant nearby searches — without promising rankings or guaranteed outcomes.",
      },
      {
        q: "Do you manage social media and content too?",
        a: "Yes. We can build content around your work, brand and shop experience so your digital presence feels consistent and recognisable.",
      },
      {
        q: "Can you work on my existing website?",
        a: "Yes. Marketing and SEO often connect to website conversion — so we can improve the path from discovery to booking on the site you already have, or through Fadezy's website work.",
      },
    ],
  },
  cta: {
    headline: [
      "Your barbershop should be",
      "easy to find.",
      "Easy to trust.",
      "Easy to book.",
    ],
    body: "Tell us where your barbershop is today and what you want to improve.",
    primary: "Talk to Fadezy ↗",
    imageAlt:
      "Premium barbershop interior — leather chair, mirror and warm materials",
  },
  related: {
    label: "Related",
    website: "Barbershop Web Design",
    software: "Barbershop Software",
    salonMarketing: "Salon Marketing & SEO",
    about: "About Fadezy",
  },
};
