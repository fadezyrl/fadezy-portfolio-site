export type SalonSoftwareDict = {
  meta: {
    title: string;
    description: string;
  };
  navAria: string;
  hero: {
    eyebrow: string;
    h1: string;
    title: string[];
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
    uiLabel: string;
    uiTime: string;
    uiService: string;
    uiStylist: string;
  };
  intro: {
    lines: string[];
    body: string;
    journey: string[];
  };
  clientFocus: {
    eyebrow: string;
    headline: string[];
    body: string;
    items: string[];
    imageAlt: string;
  };
  system: {
    eyebrow: string;
    headline: string[];
    body: string;
    areas: string[];
    ui: {
      title: string;
      today: string;
      overview: string;
      appointments: string;
      clients: string;
      stylists: string;
      nextUp: string;
      slots: Array<{ time: string; name: string; service: string }>;
      metrics: Array<{ label: string; value: string }>;
    };
  };
  booking: {
    eyebrow: string;
    headline: string[];
    body: string;
    steps: Array<{ num: string; title: string; body: string }>;
    ui: {
      title: string;
      service: string;
      stylist: string;
      time: string;
      confirm: string;
    };
  };
  client: {
    eyebrow: string;
    headline: string[];
    body: string;
    ui: {
      name: string;
      meta: string;
      preferred: string;
      visits: string;
      next: string;
      notes: string;
      history: Array<{ date: string; service: string; stylist: string }>;
    };
  };
  services: {
    eyebrow: string;
    headline: string[];
    body: string;
    rows: Array<{
      service: string;
      duration: string;
      price: string;
      stylist: string;
    }>;
  };
  ops: {
    eyebrow: string;
    headline: string[];
    body: string;
    items: string[];
  };
  brandFit: {
    eyebrow: string;
    headline: string[];
    body: string;
    qualities: string[];
    stack: string[];
  };
  ecosystem: {
    eyebrow: string;
    headline: string[];
    body: string;
    layers: Array<{ label: string; title: string }>;
  };
  custom: {
    headline: string[];
    body: string[];
    around: string;
    items: string[];
  };
  audience: {
    eyebrow: string;
    headline: string[];
    items: string[];
  };
  difference: {
    eyebrow: string;
    headline: string[];
    body: string;
    pillars: string[];
    statement: string;
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
    barbershopSoftware: string;
    services: string;
    work: string;
    about: string;
  };
};

export const salonSoftware: SalonSoftwareDict = {
  meta: {
    title: "Salon Software & Digital Systems | Fadezy",
    description:
      "Salon software and digital systems by Fadezy — booking, client management and operations designed around how modern beauty salons actually work.",
  },
  navAria: "Salon software",
  hero: {
    eyebrow: "Fadezy / Salon Software",
    h1: "Salon Software",
    title: [
      "Digital systems for",
      "salons that care about",
      "every detail.",
    ],
    body: "From appointments and client relationships to staff schedules and daily operations, Fadezy creates digital systems designed around how modern salons actually work.",
    ctaPrimary: "Explore the system →",
    ctaSecondary: "Talk to Fadezy →",
    imageAlt:
      "Luxury beauty salon — stylist working with a client in soft natural light",
    uiLabel: "Next guest",
    uiTime: "11:00",
    uiService: "Cut + gloss",
    uiStylist: "Amelia",
  },
  intro: {
    lines: [
      "Your salon is more than",
      "appointments on a calendar.",
    ],
    body: "A client discovers the salon. They explore services. They choose a stylist. They book. They return. They build a relationship with the brand. Salon software should support that entire journey — not interrupt it.",
    journey: [
      "Discover",
      "Explore services",
      "Choose a stylist",
      "Book",
      "Return",
      "Build a relationship",
    ],
  },
  clientFocus: {
    eyebrow: "The salon",
    headline: ["Built around the client.", "Not around generic software."],
    body: "The system should adapt to how your salon operates — the services you offer, the way your stylists work, and the experience guests expect when they sit down.",
    items: [
      "Appointments",
      "Services",
      "Stylists",
      "Clients",
      "Payments",
      "Schedules",
      "Customer history",
    ],
    imageAlt:
      "Editorial salon atmosphere — craft, light and a considered guest experience",
  },
  system: {
    eyebrow: "The system",
    headline: ["Everything your salon needs.", "Designed beautifully."],
    body: "A clear salon management software experience — appointments, clients, stylists and the daily overview — designed with the same restraint as a well-run floor.",
    areas: [
      "Appointments",
      "Calendar",
      "Clients",
      "Services",
      "Stylists",
      "Payments",
      "Client history",
      "Business overview",
    ],
    ui: {
      title: "Salon overview",
      today: "Friday",
      overview: "Overview",
      appointments: "Appointments",
      clients: "Clients",
      stylists: "Stylists",
      nextUp: "Next up",
      slots: [
        { time: "09:30", name: "Sofia M.", service: "Blowout" },
        { time: "11:00", name: "Elena R.", service: "Cut + gloss" },
        { time: "13:30", name: "Maya L.", service: "Balayage" },
        { time: "16:00", name: "Nora K.", service: "Treatment" },
      ],
      metrics: [
        { label: "Booked today", value: "22" },
        { label: "Open chairs", value: "03" },
        { label: "Returning", value: "68%" },
      ],
    },
  },
  booking: {
    eyebrow: "Booking",
    headline: ["From discovery", "to appointment."],
    body: "Salon booking software should feel as considered as the service itself — simple for the guest, clear for the team, and connected to everything that happens after confirmation.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "Guest finds the salon online.",
      },
      {
        num: "02",
        title: "Explore",
        body: "Browses services and stylists.",
      },
      {
        num: "03",
        title: "Choose",
        body: "Selects a stylist and time.",
      },
      {
        num: "04",
        title: "Book",
        body: "Confirms and receives details.",
      },
    ],
    ui: {
      title: "Book an appointment",
      service: "Cut + gloss",
      stylist: "Preferred stylist",
      time: "Fri · 11:00",
      confirm: "Confirm booking",
    },
  },
  client: {
    eyebrow: "Clients",
    headline: ["Remember the client.", "Not just the appointment."],
    body: "Salon client management is about knowing the person in the chair — preferences, history, and the relationship — so every visit feels personal rather than transactional.",
    ui: {
      name: "Elena Rivera",
      meta: "Guest since 2022",
      preferred: "Amelia",
      visits: "19 visits",
      next: "Fri · 11:00",
      notes:
        "Prefers soft layers. Gloss every other visit. Sensitive to strong fragrance. Usually books Friday mornings.",
      history: [
        { date: "14 Mar", service: "Cut + gloss", stylist: "Amelia" },
        { date: "21 Feb", service: "Blowout", stylist: "Amelia" },
        { date: "08 Jan", service: "Treatment", stylist: "Maya" },
      ],
    },
  },
  services: {
    eyebrow: "Services & stylists",
    headline: ["Every service.", "Every stylist.", "One clear system."],
    body: "Services, pricing, duration, stylists and availability in one calm view — so the floor stays clear and the guest journey stays effortless.",
    rows: [
      {
        service: "Cut + finish",
        duration: "60 min",
        price: "from 85",
        stylist: "Amelia · Maya",
      },
      {
        service: "Cut + gloss",
        duration: "90 min",
        price: "from 120",
        stylist: "Amelia",
      },
      {
        service: "Balayage",
        duration: "180 min",
        price: "from 220",
        stylist: "Maya · Nora",
      },
      {
        service: "Treatment",
        duration: "45 min",
        price: "from 65",
        stylist: "Nora",
      },
    ],
  },
  ops: {
    eyebrow: "Operations",
    headline: ["Less administration.", "More time creating."],
    body: "When appointments, schedules, client records and payments sit in one clear system, the salon spends less energy managing the day — and more of it creating the work.",
    items: [
      "Appointments",
      "Staff schedules",
      "Client records",
      "Services",
      "Payments",
      "Daily activity",
    ],
  },
  brandFit: {
    eyebrow: "Brand & system",
    headline: ["Your software should feel", "like your salon."],
    body: "Fadezy can design the digital experience around your salon's identity — so the website, booking flow and management system feel like one continuous presence.",
    qualities: [
      "Refined",
      "Simple",
      "On-brand",
      "Easy to use",
      "Consistent",
      "Human",
    ],
    stack: [
      "Salon identity",
      "Website",
      "Booking experience",
      "Digital system",
      "Client experience",
    ],
  },
  ecosystem: {
    eyebrow: "The full picture",
    headline: [
      "Your website is where",
      "the relationship begins.",
      "Your software is where",
      "it continues.",
    ],
    body: "Fadezy can build the complete digital experience around a salon — from discovery to booking to the system that keeps the floor running.",
    layers: [
      { label: "Discover", title: "Website" },
      { label: "Explore", title: "Services" },
      { label: "Choose", title: "Stylist" },
      { label: "Book", title: "Appointment" },
      { label: "Manage", title: "Digital system" },
      { label: "Return", title: "Client relationship" },
    ],
  },
  custom: {
    headline: [
      "Your salon isn't generic.",
      "Your software shouldn't be either.",
    ],
    body: [
      "No unnecessary complexity.",
      "No generic dashboards.",
      "No software designed around someone else's workflow.",
    ],
    around: "Fadezy approaches digital systems around:",
    items: [
      "The salon",
      "The team",
      "The services",
      "The client",
      "The booking journey",
      "The operational workflow",
    ],
  },
  audience: {
    eyebrow: "Who it's for",
    headline: ["Built for salons", "ready to operate beautifully."],
    items: [
      "Independent salons",
      "Premium beauty salons",
      "Hair salons",
      "Growing salons",
      "Multi-stylist salons",
      "Multi-location salon businesses",
    ],
  },
  difference: {
    eyebrow: "The Fadezy approach",
    headline: ["Software is only one part", "of the digital experience."],
    body: "Fadezy doesn't approach digital as disconnected services. Website, brand, content, SEO, social, marketing and digital systems should work together — as one experience for the salon and the guest.",
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
  cta: {
    headline: ["Let's build the digital", "system behind your salon."],
    body: "Tell us how your salon works. We'll help you shape the digital experience around it.",
    primary: "Start a project →",
    secondary: "Talk to Fadezy →",
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
