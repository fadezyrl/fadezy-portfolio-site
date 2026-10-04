export type BarbershopWebDesignDict = {
  meta: {
    title: string;
    description: string;
  };
  navAria: string;
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
      url: string;
    }>;
  };
  principles: {
    label: string;
    headline: string;
    items: Array<{ num: string; title: string; body: string }>;
  };
  transform: {
    label: string;
    headline: string;
    sub: string;
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
    dragHint: string;
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
};

export const barbershopWebDesign: BarbershopWebDesignDict = {
  meta: {
    title: "Barbershop Web Design | Premium Websites — Fadezy",
    description:
      "Premium barbershop web design by Fadezy. High-end websites built around your brand, services, clients and booking experience.",
  },
  navAria: "Barbershop web design",
  hero: {
    label: "Fadezy / Services / 01",
    title: "Barbershop Web Design",
    statement:
      "Premium websites for barbershops — built around your brand, your craft and the way clients discover, judge and book your chair.",
    ctaPrimary: "View Our Work",
    ctaSecondary: "Start a Project",
    previewAlt:
      "Premium barbershop interior — barber cutting a client's hair in a modern shop",
  },
  statement: {
    line1: "Your barbershop already has a personality.",
    line2: "Your website should feel like it.",
    body: "Fadezy builds barbershop website design around identity, services, work, customers and booking — so the first click feels as considered as the shop itself. Not a template. A digital presence made for this industry.",
  },
  work: {
    label: "Selected work",
    headline: "Websites we actually build for barbershops.",
    viewProject: "View project",
    projects: [
      {
        id: "success-barbershop",
        title: "Success Barbershop",
        location: "Dubai, UAE",
        meta: "Barbershop website design / Brand / Booking",
        desc: "A premium digital presence for a Latin-inspired Dubai studio — atmosphere first, booking always within reach.",
        imageAlt: "Success Barbershop homepage — barbershop web design by Fadezy",
        url: "https://www.successbarbershop.com/",
      },
      {
        id: "mane-rumor",
        title: "Mane Rumor",
        location: "Austin, Texas",
        meta: "Website design / Design system / Development",
        desc: "A custom system for a one-chair studio — locked palette, editorial typography and a site that matches the craft.",
        imageAlt: "Mane Rumor homepage — website design by Fadezy",
        url: "https://mane-rumor.vercel.app/",
      },
    ],
  },
  principles: {
    label: "The digital experience",
    headline:
      "Designed around how your clients discover, judge and book your barbershop.",
    items: [
      {
        num: "01",
        title: "Brand",
        body: "The website should feel like your barbershop, not a template.",
      },
      {
        num: "02",
        title: "Work",
        body: "Your cuts, space and craft should take center stage.",
      },
      {
        num: "03",
        title: "Booking",
        body: "Make the next step obvious and frictionless.",
      },
      {
        num: "04",
        title: "Mobile",
        body: "Exceptional on the device where most first impressions happen.",
      },
    ],
  },
  transform: {
    label: "Transformation",
    headline: "Same shop. Different first click.",
    sub: "Drag to see how barbershop web design changes perceived quality before anyone walks through the door.",
    before: "Before",
    after: "After",
    beforeAlt: "Typical barbershop website before a Fadezy redesign",
    afterAlt: "Premium barbershop website after Fadezy web design",
    dragHint: "Drag to compare",
  },
  process: {
    label: "Process",
    headline: "How we work with a barbershop.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "Understand the barbershop, brand and customers.",
      },
      {
        num: "02",
        title: "Design",
        body: "Create the visual direction and experience.",
      },
      {
        num: "03",
        title: "Develop",
        body: "Turn the design into a fast, responsive digital experience.",
      },
      {
        num: "04",
        title: "Launch",
        body: "Test, refine and bring the experience to life.",
      },
    ],
  },
  faq: {
    label: "FAQ",
    headline: "Straight answers for owners ready to get serious online.",
    items: [
      {
        q: "What does barbershop web design include?",
        a: "Strategy, art direction, custom design, development, mobile experience and a clear booking path — built around your shop, not a theme.",
      },
      {
        q: "Can the website be designed around my existing barbershop brand?",
        a: "Yes. We start from your atmosphere and identity, then extend that into a website that feels unmistakably yours.",
      },
      {
        q: "Can the website connect to my existing booking system?",
        a: "Yes. We design the experience first, then connect the booking tools you already use — or set a clean path for online booking.",
      },
      {
        q: "Why does a professional website matter for a barbershop?",
        a: "Clients discover you online, then decide whether the shop feels right. A weak site undercuts a strong chair. Premium barbershop website design closes that gap.",
      },
    ],
  },
  cta: {
    headline: "Your barbershop deserves more than a template.",
    body: "Let’s build a digital presence that feels as considered as the business behind it.",
    button: "Start a Project",
  },
};
