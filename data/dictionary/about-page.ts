export type AboutPageDict = {
  meta: { title: string; description: string };
  navAria: string;
  hero: {
    eyebrow: string;
    statement: string[];
    body: string;
    imageAlt: string;
  };
  exists: {
    headline: string[];
    support: string;
    body: string;
    traits: string[];
    close: string;
  };
  specialize: {
    headline: string[];
    body: string;
    worlds: string[];
    understands: string[];
  };
  builds: {
    eyebrow: string;
    headline: string[];
    note: string;
    layers: Array<{ label: string; body: string; flagship?: boolean }>;
  };
  standard: {
    eyebrow: string;
    headline: string[];
    principles: Array<{ num: string; title: string; body: string }>;
  };
  think: {
    headline: string[];
    steps: Array<{ label: string; body: string }>;
  };
  work: {
    eyebrow: string;
    headline: string;
    explore: string;
    projects: Array<{
      title: string;
      location: string;
      image: string;
      alt: string;
      url: string;
    }>;
  };
  entity: {
    statement: string;
    body: string;
  };
  manifesto: {
    lines: string[];
    support: string;
    primary: string;
    secondary: string;
  };
  related: {
    label: string;
    websiteBarbershop: string;
    websiteSalon: string;
    softwareBarbershop: string;
    softwareSalon: string;
    marketingBarbershop: string;
    marketingSalon: string;
    work: string;
    services: string;
  };
};

export const aboutPage: AboutPageDict = {
  meta: {
    title: "About Fadezy | Digital Partner for Barbershops & Salons",
    description:
      "Fadezy is the digital partner built exclusively for barbershops and beauty salons — creating premium websites, digital systems, brands and growth experiences worldwide.",
  },
  navAria: "About Fadezy",
  hero: {
    eyebrow: "About Fadezy",
    statement: [
      "Digital should feel as considered",
      "as the business behind it.",
    ],
    body: "Fadezy is the digital partner built exclusively for barbershops and beauty salons — creating premium websites, digital systems, brands and growth experiences for businesses that refuse to look ordinary.",
    imageAlt:
      "Editorial craft moment — hands, tools and atmosphere from the world Fadezy designs for",
  },
  exists: {
    headline: [
      "Barbershops and salons don't need",
      "another generic agency.",
    ],
    support:
      "They need a digital partner that understands the business behind the brand — how people discover it, how they judge it, why they book, and what brings them back.",
    body: "Fadezy exists because barbershops and beauty salons live at a unique intersection of craft, identity, experience, community, personal service and visual culture — yet their digital presence often fails to reflect that quality.",
    traits: [
      "Craft",
      "Identity",
      "Experience",
      "Community",
      "Personal service",
      "Visual culture",
    ],
    close: "Fadezy exists to close that gap.",
  },
  specialize: {
    headline: ["We chose a world.", "And decided to know it deeply."],
    body: "Fadezy does not try to serve every industry. We work exclusively with barbershops and beauty salons — so we can understand the decisions that actually move the business.",
    worlds: ["Barbershops", "Beauty salons"],
    understands: [
      "How clients discover businesses",
      "How customers choose a barber or stylist",
      "How services are presented",
      "How visual identity influences trust",
      "How booking journeys work",
      "How local visibility matters",
      "How digital systems support operations",
    ],
  },
  builds: {
    eyebrow: "What we build",
    headline: ["One partner.", "The complete digital experience."],
    note: "Different disciplines. One digital experience.",
    layers: [
      {
        label: "Website",
        body: "The first impression.",
        flagship: true,
      },
      { label: "Brand", body: "The identity people remember." },
      { label: "Content", body: "The story people see." },
      {
        label: "Marketing + SEO",
        body: "How they get discovered.",
      },
      {
        label: "Digital systems",
        body: "How the business operates.",
      },
      { label: "Growth", body: "What happens after the click." },
    ],
  },
  standard: {
    eyebrow: "The Fadezy Standard",
    headline: [
      "We don't build for the category.",
      "We build for the business.",
    ],
    principles: [
      {
        num: "01",
        title: "No templates",
        body: "Every digital experience begins with the business, not a pre-built layout.",
      },
      {
        num: "02",
        title: "Brand first",
        body: "Every touchpoint should feel like the same brand.",
      },
      {
        num: "03",
        title: "Experience over decoration",
        body: "Beautiful is not enough. Every interaction should have a reason.",
      },
      {
        num: "04",
        title: "Digital that moves the business",
        body: "The goal is not simply to look premium. It is to help people discover, trust and choose the business.",
      },
    ],
  },
  think: {
    headline: [
      "Start with the business.",
      "Then design the digital world around it.",
    ],
    steps: [
      { label: "Understand", body: "The shop, the craft, the customer." },
      { label: "Position", body: "How the business should be seen." },
      { label: "Design", body: "The experience, not decoration." },
      { label: "Build", body: "A presence that holds up." },
      { label: "Connect", body: "Website, systems and discovery." },
      { label: "Grow", body: "Visibility that leads somewhere." },
    ],
  },
  work: {
    eyebrow: "Selected work",
    headline: "Studios, not templates.",
    explore: "Explore all work →",
    projects: [
      {
        title: "Success Barbershop",
        location: "Dubai, UAE",
        image: "/assets/images/success-barber-hero.png",
        alt: "Success Barbershop — premium barbershop website by Fadezy",
        url: "https://www.successbarbershop.com/",
      },
      {
        title: "Mane Rumor",
        location: "Austin, Texas",
        image: "/assets/images/mane-rumorhero.png",
        alt: "Mane Rumor — beauty salon website by Fadezy",
        url: "https://mane-rumor.vercel.app/",
      },
    ],
  },
  entity: {
    statement:
      "Fadezy is the digital partner built exclusively for barbershops and beauty salons.",
    body: "We create premium websites, digital systems, brands, content and growth experiences for modern barbershops and beauty salons worldwide.",
  },
  manifesto: {
    lines: [
      "Your business already has",
      "a point of view.",
      "Let's make sure the digital world",
      "sees it.",
    ],
    support: "For barbershops and beauty salons worldwide.",
    primary: "Start a project →",
    secondary: "View our work →",
  },
  related: {
    label: "Continue",
    websiteBarbershop: "Barbershop Website Design",
    websiteSalon: "Salon Website Design",
    softwareBarbershop: "Barbershop Software",
    softwareSalon: "Salon Software",
    marketingBarbershop: "Barbershop Marketing & SEO",
    marketingSalon: "Salon Marketing & SEO",
    work: "Work",
    services: "Services",
  },
};
