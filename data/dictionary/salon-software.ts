export type SalonSoftwareDict = {
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
  salons: {
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
    barbershopWebsite: string;
    barbershopSoftware: string;
    services: string;
    work: string;
    about: string;
  };
};

export const salonSoftware: SalonSoftwareDict = {
  meta: {
    title: "Salon Software, POS & Booking Systems | Fadezy",
    description:
      "Salon software by Fadezy — POS, online booking, client management, stylist schedules, payments, inventory and salon management systems built around how beauty salons actually work.",
  },
  navAria: "Salon software",
  hero: {
    label: "Fadezy / Salon Systems",
    h1: "Salon Software",
    body: "Manage bookings, clients, stylists, payments and daily salon operations from one connected system.",
    ctaPrimary: "Talk to us ↗",
    ctaSecondary: "See what's possible",
    imageAlt:
      "Salon receptionist using a POS tablet at a luxury beauty salon reception desk",
  },
  problem: {
    headline: [
      "Your salon is already running a system.",
      "The question is whether your digital tools are helping it run better.",
    ],
    body: "Appointments, clients, staff, payments and daily operations should work together — not live in disconnected tools.",
  },
  capabilities: {
    label: "Salon capabilities",
    headline: ["Everything your salon needs.", "Nothing it doesn't."],
    items: [
      {
        num: "01",
        title: "POS & payments",
        body: "Take payments, manage transactions and keep checkout simple.",
      },
      {
        num: "02",
        title: "Online booking",
        body: "Let clients book services and appointments without unnecessary back-and-forth.",
      },
      {
        num: "03",
        title: "Client management",
        body: "Keep client profiles, visit history, preferences and notes organised.",
      },
      {
        num: "04",
        title: "Stylist & staff schedules",
        body: "Manage stylists, working hours, availability and appointments.",
      },
      {
        num: "05",
        title: "Services & pricing",
        body: "Manage services, durations, pricing and updates from one place.",
      },
      {
        num: "06",
        title: "Inventory",
        body: "Track retail products, stock levels and product movement.",
      },
      {
        num: "07",
        title: "Reporting",
        body: "Understand appointments, sales and business activity.",
      },
      {
        num: "08",
        title: "Memberships & loyalty",
        body: "Support memberships, packages, loyalty programs or recurring client relationships where required.",
      },
    ],
  },
  connected: {
    label: "Connected experience",
    headline: [
      "Your website is where the relationship begins.",
      "Your software is where it continues.",
    ],
    body: "Connect the customer-facing experience with the systems running your salon.",
    steps: [
      "Website",
      "Booking",
      "Client",
      "Appointment",
      "Stylist",
      "Payment",
      "Salon operations",
    ],
  },
  salons: {
    label: "Built around your salon",
    headline: [
      "One system.",
      "Built around how your salon actually works.",
    ],
    items: [
      {
        title: "Independent salons",
        body: "Simple digital systems for a single salon and small team.",
      },
      {
        title: "Premium beauty studios",
        body: "Create a polished client journey from discovery to appointment and payment.",
      },
      {
        title: "Growing salons",
        body: "Connect staff, services, bookings and clients as the business grows.",
      },
      {
        title: "Multi-location salons",
        body: "Keep operations connected across multiple locations.",
      },
    ],
  },
  why: {
    headline: "Software should feel like part of your salon.",
    body: [
      "Your booking, POS and digital systems should feel connected to the experience your salon has built — not like separate tools stitched together.",
      "Fadezy designs digital systems around your business, your clients and the way your salon actually operates.",
    ],
  },
  faq: {
    label: "FAQ",
    headline: "Practical questions from salon owners.",
    items: [
      {
        q: "What software does a salon actually need?",
        a: "Most salons need online booking, payments or POS, client records, stylist schedules and a clear daily overview. The right salon management software matches how your floor already runs — not a generic template.",
      },
      {
        q: "Can Fadezy build or integrate a salon POS system?",
        a: "Yes. We can design around salon POS and payment flows, or connect with platforms you already use — depending on what fits the business.",
      },
      {
        q: "Can the software connect with my existing salon website?",
        a: "Yes. Booking and salon systems can connect to your current site, or sit inside a new salon website built with Fadezy.",
      },
      {
        q: "Can clients book appointments online?",
        a: "Yes. Salon booking software can let clients choose services, times and stylists without calls or message threads.",
      },
      {
        q: "Can Fadezy work with an existing booking or POS platform?",
        a: "Often yes. If a booking or POS platform already works for part of the salon, we can integrate around it rather than forcing a full replacement.",
      },
    ],
  },
  cta: {
    headline: [
      "Your salon isn't generic.",
      "Your software shouldn't be either.",
    ],
    body: "Tell us how your salon works and what you need your system to handle.",
    primary: "Build your system ↗",
    secondary: "Talk to Fadezy ↗",
    imageAlt:
      "Stylist reviewing a schedule on a tablet at a luxury salon workstation",
  },
  related: {
    label: "Continue",
    website: "Salon Website Design",
    barbershopWebsite: "Barbershop Website Design",
    barbershopSoftware: "Barbershop Software",
    services: "Services",
    work: "Work",
    about: "About",
  },
};
