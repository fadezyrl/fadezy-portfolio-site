export type BarbershopSoftwareDict = {
  meta: {
    title: string;
    description: string;
  };
  navAria: string;
  hero: {
    label: string;
    h1: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  problem: {
    headline: string[];
    body: string;
  };
  capabilities: {
    label: string;
    headline: string[];
    items: Array<{ num: string; title: string; body: string }>;
  };
  connected: {
    label: string;
    headline: string[];
    body: string;
    steps: string[];
  };
  shops: {
    label: string;
    headline: string[];
    items: Array<{ title: string; body: string }>;
  };
  why: {
    headline: string;
    body: string[];
  };
  faq: {
    label: string;
    headline: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    headline: string[];
    body: string;
    primary: string;
    secondary: string;
    imageAlt: string;
  };
  related: {
    label: string;
    website: string;
    salonWebsite: string;
    services: string;
    work: string;
    about: string;
  };
};

export const barbershopSoftware: BarbershopSoftwareDict = {
  meta: {
    title: "Barbershop Software & POS Systems | Fadezy",
    description:
      "Barbershop software by Fadezy — booking, POS, payments, client management, staff schedules and shop operations built around how your barbershop actually works.",
  },
  navAria: "Barbershop software",
  hero: {
    label: "Fadezy / Software",
    h1: "Barbershop Software",
    body: "Run bookings, payments, clients and daily shop operations from one connected system.",
    ctaPrimary: "Talk to us ↗",
    ctaSecondary: "See what's possible",
    imageAlt:
      "Barbershop owner using a POS tablet at a premium reception desk",
  },
  problem: {
    headline: [
      "Your barbershop is already running a system.",
      "The question is whether your digital tools are helping it run better.",
    ],
    body: "Bookings, payments, clients, staff and daily operations should work together — not live in disconnected tools.",
  },
  capabilities: {
    label: "Capabilities",
    headline: ["Everything your shop needs.", "Nothing it doesn't."],
    items: [
      {
        num: "01",
        title: "POS & payments",
        body: "Take payments, manage transactions and keep checkout simple.",
      },
      {
        num: "02",
        title: "Online booking",
        body: "Let clients book services and appointments without back-and-forth.",
      },
      {
        num: "03",
        title: "Client management",
        body: "Keep client profiles, visit history, preferences and notes organised.",
      },
      {
        num: "04",
        title: "Staff & schedules",
        body: "Manage barbers, working hours, availability and appointments.",
      },
      {
        num: "05",
        title: "Services & pricing",
        body: "Manage services, durations, pricing and changes from one place.",
      },
      {
        num: "06",
        title: "Inventory",
        body: "Track retail products, stock levels and what is moving.",
      },
      {
        num: "07",
        title: "Reporting",
        body: "See appointments, sales and business activity in one place.",
      },
      {
        num: "08",
        title: "Memberships / loyalty",
        body: "Support memberships, packages or loyalty programs where needed.",
      },
    ],
  },
  connected: {
    label: "Connected system",
    headline: [
      "Your website is the front door.",
      "Your software runs what happens behind it.",
    ],
    body: "Connect the customer-facing experience with the systems running your barbershop.",
    steps: [
      "Website",
      "Booking",
      "Client",
      "Appointment",
      "Payment",
      "Shop operations",
    ],
  },
  shops: {
    label: "Built for your shop",
    headline: ["One system.", "Built around how your shop actually works."],
    items: [
      {
        title: "Independent barbers",
        body: "Simple systems for a single shop and small team.",
      },
      {
        title: "Multi-barber shops",
        body: "Manage staff, schedules, services and clients together.",
      },
      {
        title: "Multi-location shops",
        body: "Keep operations connected across locations.",
      },
      {
        title: "Growing barbershops",
        body: "Build a system that can evolve as the business grows.",
      },
    ],
  },
  why: {
    headline: "Software should feel like part of your brand.",
    body: [
      "Your booking, POS and digital systems should not feel disconnected from the experience your barbershop has built.",
      "Fadezy designs digital systems around the business, the customer journey and the way the shop actually operates.",
    ],
  },
  faq: {
    label: "FAQ",
    headline: "Practical questions from shop owners.",
    items: [
      {
        q: "What software does a barbershop actually need?",
        a: "Most shops need booking, payments, client records, staff schedules and a clear daily overview. The right system is the one that matches how your shop already runs.",
      },
      {
        q: "Can Fadezy build or integrate a POS system?",
        a: "Yes. We can design around POS and payment flows, or connect with platforms you already use — depending on what fits the shop.",
      },
      {
        q: "Can the software connect with my existing website?",
        a: "Yes. Booking and systems can connect to your current site, or sit inside a new barbershop website built with Fadezy.",
      },
      {
        q: "Can clients book appointments online?",
        a: "Yes. Online booking can let clients choose services, times and barbers without calls or message threads.",
      },
      {
        q: "Can the system support multiple barbers or locations?",
        a: "Yes. We can structure systems for multi-barber teams and multi-location shops so schedules, services and clients stay connected.",
      },
    ],
  },
  cta: {
    headline: [
      "Your barbershop isn't generic.",
      "Your software shouldn't be either.",
    ],
    body: "Tell us how your shop works and what you need the system to handle.",
    primary: "Build your system ↗",
    secondary: "Talk to Fadezy ↗",
    imageAlt:
      "Premium barbershop reception workstation with POS tablet and grooming products",
  },
  related: {
    label: "Continue",
    website: "Barbershop Website Design",
    salonWebsite: "Salon Website Design",
    services: "Services",
    work: "Work",
    about: "About",
  },
};
