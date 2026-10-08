export type BarbershopSoftwareDict = {
  meta: {
    title: string;
    description: string;
  };
  navAria: string;
  hero: {
    eyebrow: string;
    title: string[];
    h1: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
    uiLabel: string;
    uiTime: string;
    uiService: string;
    uiBarber: string;
  };
  intro: {
    lines: string[];
    body: string;
    items: string[];
  };
  chair: {
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
      staff: string;
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
      barber: string;
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
      lastVisit: string;
      notes: string;
      history: Array<{ date: string; service: string; barber: string }>;
    };
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
  custom: {
    headline: string[];
    body: string[];
    around: string;
    items: string[];
  };
  ecosystem: {
    eyebrow: string;
    headline: string[];
    body: string;
    layers: Array<{ label: string; title: string }>;
  };
  audience: {
    eyebrow: string;
    headline: string[];
    items: string[];
  };
  difference: {
    eyebrow: string;
    headline: string;
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
    salonWebsite: string;
    services: string;
    work: string;
    about: string;
  };
};

export const barbershopSoftware: BarbershopSoftwareDict = {
  meta: {
    title: "Barbershop Software & Digital Systems | Fadezy",
    description:
      "Barbershop software and digital systems by Fadezy — booking, client management and operations designed around the way modern barbershops actually work.",
  },
  navAria: "Barbershop software",
  hero: {
    eyebrow: "Fadezy / Barbershop Software",
    title: [
      "Barbershop software,",
      "built around the way",
      "your shop actually works.",
    ],
    h1: "Barbershop Software",
    body: "From bookings and client management to day-to-day operations, we create digital systems designed around the way modern barbershops actually work.",
    ctaPrimary: "Explore the system →",
    ctaSecondary: "Talk to Fadezy →",
    imageAlt:
      "Premium barbershop interior — chair, mirror and warm light in a modern shop",
    uiLabel: "Today",
    uiTime: "14:30",
    uiService: "Skin fade + beard",
    uiBarber: "Marcus",
  },
  intro: {
    lines: [
      "Your barbershop is already",
      "running a system.",
      "The question is whether",
      "your digital tools are helping",
      "or slowing it down.",
    ],
    body: "Every shop already has a rhythm — how clients book, how barbers move, how the day unfolds. Barbershop software should support that rhythm, not fight it.",
    items: [
      "Bookings",
      "Client information",
      "Staff schedules",
      "Services",
      "Payments",
      "Customer relationships",
      "Daily operations",
    ],
  },
  chair: {
    eyebrow: "The shop",
    headline: ["Built around the chair.", "Not around generic software."],
    body: "The system should adapt to how your barbershop operates — the services you run, the way your team works, and the experience clients expect when they sit down.",
    items: [
      "Bookings",
      "Clients",
      "Services",
      "Barbers",
      "Schedules",
      "Payments",
      "Customer history",
      "Operations",
    ],
    imageAlt: "Barber at work in a premium shop — focus on craft and atmosphere",
  },
  system: {
    eyebrow: "The system",
    headline: ["Everything your shop needs.", "Nothing it doesn't."],
    body: "A clear barbershop management software experience — appointments, clients, staff and the daily overview — designed with the same restraint as a well-run shop.",
    areas: [
      "Appointments",
      "Calendar",
      "Clients",
      "Services",
      "Barbers / Staff",
      "Payments",
      "Customer history",
      "Business overview",
    ],
    ui: {
      title: "Shop overview",
      today: "Thursday",
      overview: "Overview",
      appointments: "Appointments",
      clients: "Clients",
      staff: "Staff",
      nextUp: "Next up",
      slots: [
        { time: "10:00", name: "James R.", service: "Classic cut" },
        { time: "11:30", name: "Omar K.", service: "Fade + beard" },
        { time: "13:00", name: "Daniel M.", service: "Hot towel shave" },
        { time: "15:00", name: "Leo A.", service: "Skin fade" },
      ],
      metrics: [
        { label: "Booked today", value: "18" },
        { label: "Open chairs", value: "02" },
        { label: "Returning", value: "71%" },
      ],
    },
  },
  booking: {
    eyebrow: "Booking",
    headline: ["From first click", "to booked chair."],
    body: "Barbershop booking software should feel as considered as the cut — fast for the client, clear for the shop, and connected to everything that happens after confirmation.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "Client finds the shop online.",
      },
      {
        num: "02",
        title: "Choose",
        body: "Selects a service and barber.",
      },
      {
        num: "03",
        title: "Book",
        body: "Picks a time and confirms.",
      },
      {
        num: "04",
        title: "Arrive",
        body: "Receives booking details and shows up ready.",
      },
    ],
    ui: {
      title: "Book an appointment",
      service: "Skin fade",
      barber: "Preferred barber",
      time: "Thu · 14:30",
      confirm: "Confirm booking",
    },
  },
  client: {
    eyebrow: "Clients",
    headline: ["Know the client.", "Remember the experience."],
    body: "Barbershop client management is not about collecting data for its own sake. It is about remembering the person in the chair — so every visit feels considered.",
    ui: {
      name: "James Rivera",
      meta: "Client since 2023",
      preferred: "Marcus",
      visits: "14 visits",
      lastVisit: "12 days ago",
      notes: "Prefers low fade. Beard trim every other visit. Usually books Thursday afternoon.",
      history: [
        { date: "12 Mar", service: "Skin fade + beard", barber: "Marcus" },
        { date: "28 Feb", service: "Classic cut", barber: "Marcus" },
        { date: "04 Feb", service: "Hot towel shave", barber: "Leo" },
      ],
    },
  },
  ops: {
    eyebrow: "Operations",
    headline: ["Less admin.", "More time behind the chair."],
    body: "When appointments, staff, services and payments sit in one clear system, the shop spends less energy managing the day — and more of it delivering the work.",
    items: [
      "Appointments",
      "Staff",
      "Services",
      "Payments",
      "Daily activity",
      "Customer records",
    ],
  },
  brandFit: {
    eyebrow: "Brand & system",
    headline: ["Your software shouldn't feel", "separate from your brand."],
    body: "Fadezy can design the digital experience around your barbershop's identity — so the website, booking flow and management system feel like one continuous presence.",
    qualities: [
      "On-brand",
      "Simple",
      "Premium",
      "Easy to use",
      "Consistent",
      "Designed for the business",
    ],
    stack: [
      "Barbershop",
      "Brand",
      "Website",
      "Booking",
      "Digital system",
      "Customer experience",
    ],
  },
  custom: {
    headline: [
      "Your barbershop isn't generic.",
      "Your software shouldn't be either.",
    ],
    body: [
      "No unnecessary complexity.",
      "No generic dashboards.",
      "No software designed for someone else's business.",
    ],
    around: "Fadezy approaches digital systems around:",
    items: [
      "The shop",
      "The team",
      "The services",
      "The customer journey",
      "The operational workflow",
    ],
  },
  ecosystem: {
    eyebrow: "The full picture",
    headline: [
      "Your website is the front door.",
      "Your software runs what happens behind it.",
    ],
    body: "Fadezy can build the complete digital ecosystem around a barbershop — from discovery to booking to the system that keeps the shop running.",
    layers: [
      { label: "Discover", title: "Website" },
      { label: "Explore", title: "Services" },
      { label: "Book", title: "Booking system" },
      { label: "Manage", title: "Digital system" },
      { label: "Return", title: "Customer relationship" },
    ],
  },
  audience: {
    eyebrow: "Who it's for",
    headline: ["Built for barbershops", "that are ready for more."],
    items: [
      "Independent barbershops",
      "Premium barbershops",
      "Multi-barber shops",
      "Growing shops",
      "Multi-location businesses",
    ],
  },
  difference: {
    eyebrow: "The Fadezy approach",
    headline: "Software is only part of the system.",
    body: "Fadezy doesn't approach digital as disconnected services. Website, brand, content, marketing, SEO, social and digital systems should work together — as one experience for the shop and the client.",
    pillars: [
      "Website",
      "Brand",
      "Content",
      "Marketing",
      "SEO",
      "Social",
      "Digital systems",
    ],
    statement:
      "Fadezy is the digital partner built exclusively for barbershops and beauty salons.",
  },
  cta: {
    headline: ["Let's build the digital", "system behind your shop."],
    body: "Tell us how your barbershop works. We'll help you figure out what should happen digitally.",
    primary: "Start a project →",
    secondary: "Talk to Fadezy →",
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
