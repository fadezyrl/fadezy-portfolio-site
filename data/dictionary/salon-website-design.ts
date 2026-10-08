export type SalonWebsiteDesignDict = {
  meta: {
    title: string;
    description: string;
  };
  navAria: string;
  nav: {
    work: string;
    about: string;
    start: string;
    menu: string;
    close: string;
    home: string;
  };
  hero: {
    label: string;
    title: string;
    statement: string;
    ctaPrimary: string;
    ctaSecondary: string;
    previewAlt: string;
  };
  statement: {
    line1: string;
    line2: string;
    body: string;
  };
  work: {
    label: string;
    headline: string[];
    support: string;
    markets: string;
    viewProject: string;
    conceptLabel: string;
    dragHint: string;
    prev: string;
    next: string;
    projects: Array<{
      id: string;
      title: string;
      location: string;
      type: string;
      imageAlt: string;
      mobileImageAlt: string;
      direction: string;
      ux: string[];
      designed: string[];
      cta: string;
      visitSite: string;
    }>;
  };
  experience: {
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
  };
  footer: {
    brand: string;
    statement: string;
    contact: string;
    home: string;
    work: string;
    about: string;
    barbershop: string;
    copyright: string;
  };
  projectPage: {
    back: string;
    desktopLabel: string;
    mobileLabel: string;
    directionLabel: string;
    uxLabel: string;
    designedLabel: string;
    startProject: string;
  };
};

export const salonWebsiteDesign: SalonWebsiteDesignDict = {
  meta: {
    title: "Salon Website Design | Premium Websites — Fadezy",
    description:
      "Premium beauty salon website design by Fadezy. High-end websites built around your brand, services, clients and customer experience.",
  },
  navAria: "Salon website design",
  nav: {
    work: "Work",
    about: "About",
    start: "Start a Project",
    menu: "Menu",
    close: "Close",
    home: "Fadezy",
  },
  hero: {
    label: "Fadezy / Salon Website Design",
    title: "Salon Website Design",
    statement:
      "Premium digital experiences built around the brand, atmosphere and experience of modern beauty salons.",
    ctaPrimary: "View Our Work",
    ctaSecondary: "Start a Project",
    previewAlt:
      "Premium beauty salon interior — stylist blow-drying a client in a modern salon space",
  },
  statement: {
    line1: "Your salon is an experience.",
    line2: "Your website should feel like one.",
    body: "Fadezy creates beauty salon website design around identity, services, atmosphere, clients and the booking journey — so the first visit online feels as considered as the room itself. Not a template. A digital presence made for salons.",
  },
  work: {
    label: "Salon & beauty websites",
    headline: ["Websites for beauty brands", "with something of their own."],
    support:
      "A collection of digital experiences created by Fadezy for salons, beauty studios and independent beauty professionals across different markets.",
    markets: "Beauty businesses · Different cities · One digital standard",
    viewProject: "View project ↗",
    conceptLabel: "Concept project",
    dragHint: "Drag to explore",
    prev: "Previous project",
    next: "Next project",
    projects: [
      {
        id: "beauty-n-blendz",
        title: "Beauty N Blendz",
        location: "Fort Stockton, Texas, USA",
        type: "Hair / Beauty Studio",
        imageAlt:
          "Beauty N Blendz website — beauty salon website design by Fadezy for Fort Stockton",
        mobileImageAlt:
          "Beauty N Blendz mobile website — salon web design by Fadezy",
        direction:
          "A warm, cinematic presence built around the studio's atmosphere — soft light, real texture and a clear path from discovery to booking.",
        ux: [
          "Lead with atmosphere before services, so the studio feels familiar before the menu appears.",
          "Keep services scannable on mobile without flattening the brand.",
          "Make booking the quiet, confident close — never a hard sell.",
        ],
        designed: [
          "Custom homepage art direction",
          "Services and experience storytelling",
          "Responsive layout and booking path",
        ],
        cta: "Explore the Beauty N Blendz website concept.",
        visitSite: "Open live website ↗",
      },
      {
        id: "mane-rumor",
        title: "Mane Rumor",
        location: "Austin, Texas, USA",
        type: "Luxury Hair Studio / Salon",
        imageAlt:
          "Mane Rumor website — luxury salon website design by Fadezy for Austin",
        mobileImageAlt:
          "Mane Rumor mobile website — salon website designer work by Fadezy",
        direction:
          "An editorial system for a one-chair luxury studio — restrained palette, precise typography and a digital presence that matches the craft.",
        ux: [
          "Treat the homepage as a quiet lookbook, not a catalogue.",
          "Use typography and spacing to signal exclusivity without clutter.",
          "Guide visitors from mood to appointment in a few deliberate steps.",
        ],
        designed: [
          "Editorial visual system",
          "Custom salon website structure",
          "Mobile-first booking experience",
        ],
        cta: "Explore the Mane Rumor website concept.",
        visitSite: "Open live website ↗",
      },
      {
        id: "beauty-by-kelsey",
        title: "Beauty by Kelsey",
        location: "United Kingdom",
        type: "Beauty / Makeup / Brow Specialist",
        imageAlt:
          "Beauty by Kelsey website — beauty professional web design by Fadezy for the United Kingdom",
        mobileImageAlt:
          "Beauty by Kelsey mobile website — website design for beauty specialists by Fadezy",
        direction:
          "A personal, fashion-forward site for an independent beauty professional — intimate scale, clear specialty and a soft editorial rhythm.",
        ux: [
          "Present the specialist as the brand, not a generic salon floor.",
          "Separate makeup, brows and beauty services without visual noise.",
          "Keep enquiry and booking close for clients discovering on mobile.",
        ],
        designed: [
          "Personal brand website structure",
          "Service storytelling for specialists",
          "Refined mobile composition",
        ],
        cta: "Explore the Beauty by Kelsey website concept.",
        visitSite: "Open live website ↗",
      },
      {
        id: "vegan-boujee",
        title: "Vegan & Boujee",
        location: "Upland, California, USA",
        type: "Beauty / Hair",
        imageAlt:
          "Vegan & Boujee website — beauty salon website design by Fadezy for Upland",
        mobileImageAlt:
          "Vegan & Boujee mobile website — salon web design by Fadezy",
        direction:
          "A confident beauty-and-hair presence with character — bold enough to feel distinct, refined enough to feel premium.",
        ux: [
          "Let brand personality lead, then support it with clear services.",
          "Balance expressive visuals with readable information hierarchy.",
          "Design the mobile experience for quick service discovery.",
        ],
        designed: [
          "Custom beauty brand art direction",
          "Hair and beauty service presentation",
          "Responsive website experience",
        ],
        cta: "Explore the Vegan & Boujee website concept.",
        visitSite: "Open live website ↗",
      },
      {
        id: "mokhtar-safadi",
        title: "Mokhtar Safadi Beauty Lounge",
        location: "DIFC, Dubai, UAE",
        type: "Beauty Lounge / Salon",
        imageAlt:
          "Mokhtar Safadi Beauty Lounge website — beauty salon website design by Fadezy for DIFC Dubai",
        mobileImageAlt:
          "Mokhtar Safadi Beauty Lounge mobile website — salon website design by Fadezy",
        direction:
          "A lounge-level digital presence for DIFC — calm luxury, architectural whitespace and a website that feels as composed as the space.",
        ux: [
          "Open with atmosphere that signals a beauty lounge, not a high-street salon.",
          "Present services with quiet confidence and room to breathe.",
          "Keep the booking path elegant and effortless on every device.",
        ],
        designed: [
          "Luxury beauty lounge art direction",
          "Desktop and mobile exhibition layouts",
          "Refined enquiry and booking journey",
        ],
        cta: "Explore the Mokhtar Safadi Beauty Lounge website concept.",
        visitSite: "Open live website ↗",
      },
    ],
  },
  experience: {
    label: "The salon digital experience",
    headline: "Designed around the experience your clients expect.",
    items: [
      {
        num: "01",
        title: "Identity",
        body: "Your website should feel unmistakably yours.",
      },
      {
        num: "02",
        title: "Experience",
        body: "Translate the atmosphere of your salon into the digital space.",
      },
      {
        num: "03",
        title: "Discovery",
        body: "Make your services, work and story easy to explore.",
      },
      {
        num: "04",
        title: "Booking",
        body: "Turn interest into a simple, confident next step.",
      },
    ],
  },
  process: {
    label: "Process",
    headline: "How we build websites for beauty salons.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "Understand the salon, brand and clientele.",
      },
      {
        num: "02",
        title: "Define",
        body: "Establish the visual and digital direction.",
      },
      {
        num: "03",
        title: "Design",
        body: "Create the complete experience.",
      },
      {
        num: "04",
        title: "Develop",
        body: "Build and optimize the website.",
      },
      {
        num: "05",
        title: "Launch",
        body: "Test, refine and bring it live.",
      },
    ],
  },
  faq: {
    label: "FAQ",
    headline: "Answers for salons ready to get serious online.",
    items: [
      {
        q: "What does salon website design include?",
        a: "Strategy, art direction, custom beauty salon website design, development, mobile experience and a clear booking path — built around your salon, not a theme. Website design for salons that care about atmosphere as much as conversion.",
      },
      {
        q: "Can the website be designed around my existing salon brand?",
        a: "Yes. We start from your atmosphere and identity, then extend that into a salon website that feels unmistakably yours — the same standard clients expect in the chair.",
      },
      {
        q: "Can Fadezy integrate my booking system?",
        a: "Yes. We design the experience first, then connect the booking tools you already use — or set a clean path for online booking on your beauty salon website.",
      },
      {
        q: "Why does a professional website matter for a beauty salon?",
        a: "Clients discover you online, then decide whether the salon feels right. A weak site undercuts a strong brand. Premium salon website design closes that gap between the room and the screen.",
      },
    ],
  },
  cta: {
    headline:
      "Your salon deserves a digital experience that feels as refined as the real one.",
    body: "Let's build a digital presence that turns your brand, atmosphere and work into an experience clients can discover online.",
    button: "Start a Project",
  },
  footer: {
    brand: "Fadezy",
    statement:
      "A niche digital studio for beauty salons and barbershops — premium websites, brand and growth.",
    contact: "Start a Project",
    home: "Home",
    work: "Work",
    about: "About",
    barbershop: "Barbershop Web Design",
    copyright: "© 2026 Fadezy",
  },
  projectPage: {
    back: "← Salon & beauty websites",
    desktopLabel: "Desktop",
    mobileLabel: "Mobile",
    directionLabel: "Design direction",
    uxLabel: "Key UX decisions",
    designedLabel: "What Fadezy designed",
    startProject: "Start a project ↗",
  },
};
