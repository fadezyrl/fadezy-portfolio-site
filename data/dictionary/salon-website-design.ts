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
    headline: string;
    viewProject: string;
    projects: Array<{
      id: string;
      title: string;
      location: string;
      meta: string;
      desc: string;
      imageAlt: string;
      url?: string;
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
    label: "Selected salon work",
    headline: "Proof that Fadezy understands beauty brands.",
    viewProject: "View project",
    projects: [
      {
        id: "beauty-n-blendz",
        title: "Beauty N Blendz",
        location: "Fort Stockton, Texas",
        meta: "Beauty salon website design / Content / Development",
        desc: "A cinematic salon website built around atmosphere, services and real client voices — beauty salon web design that feels like the studio, not a template.",
        imageAlt:
          "Beauty N Blendz homepage — beauty salon website design by Fadezy",
      },
      {
        id: "mane-rumor",
        title: "Mane Rumor",
        location: "Austin, Texas",
        meta: "Salon website / Design system / Development",
        desc: "A custom system for a one-chair beauty studio — locked palette, editorial typography and a website for salons that matches the craft.",
        imageAlt: "Mane Rumor homepage — salon website designer work by Fadezy",
        url: "https://mane-rumor.vercel.app/",
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
};
