export type BarbershopWebDesignDict = {
  meta: {
    title: string;
    description: string;
  };
  navAria: string;
  hero: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    statement: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  problem: {
    label: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
    line6: string;
    body: string;
  };
  experience: {
    label: string;
    headline: string;
    sub: string;
    steps: Array<{ num: string; title: string; body: string }>;
    imageAlt: string;
  };
  spec: {
    label: string;
    headline: string;
    sub: string;
    items: Array<{ num: string; title: string; desc: string }>;
  };
  journey: {
    label: string;
    headline: string;
    sub: string;
    stages: Array<{ title: string; detail: string }>;
  };
  proof: {
    label: string;
    headline: string;
    sub: string;
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
    body: string;
    workLink: string;
  };
  approach: {
    label: string;
    headline: string;
    headlineEm: string;
    body: string;
    imageAlt: string;
  };
  faq: {
    label: string;
    headline: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    line1: string;
    line2: string;
    line3: string;
    button: string;
    servicesLine: string;
  };
};

export const barbershopWebDesign: BarbershopWebDesignDict = {
  meta: {
    title: "Barbershop Web Design — Fadezy",
    description:
      "Premium barbershop web design built around your brand, your clients and the way they book. Fadezy creates modern websites for barbershops worldwide.",
  },
  navAria: "Barbershop web design",
  hero: {
    label: "Fadezy / Services / 01",
    titleLine1: "Barbershop",
    titleLine2: "Web Design",
    statement:
      "A barbershop can have exceptional work, a strong identity and a beautiful space — but the first impression often happens online. Fadezy builds premium websites around how modern clients discover, judge and book a chair.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
    imageAlt:
      "Premium barbershop interior with chairs, mirrors and architectural detail",
  },
  problem: {
    label: "The gap",
    line1: "The shop",
    line2: "is already",
    line3: "good.",
    line4: "The website",
    line5: "should catch",
    line6: "up.",
    body: "Most barbershops don’t need more noise online. They need a digital presence that reflects the quality of the experience inside the shop — calm, considered, and ready to book.",
  },
  experience: {
    label: "The website experience",
    headline: "What a premium barbershop website needs to do.",
    sub: "Not features. A journey — from the first glance to the booked chair.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "A client finds the shop on Google, Instagram or a shared link. The site has one job: feel like the room they’ll walk into.",
      },
      {
        num: "02",
        title: "Understand",
        body: "Services, pricing, the team and the point of view — clear in seconds, without scrolling through template filler.",
      },
      {
        num: "03",
        title: "Trust",
        body: "Photography, typography and pacing communicate quality before a single word of sales copy.",
      },
      {
        num: "04",
        title: "Book",
        body: "Availability and booking sit where they should — effortless on mobile, never buried under decoration.",
      },
    ],
    imageAlt:
      "Success Barbershop website design — dark editorial homepage for a Dubai studio",
  },
  spec: {
    label: "What we design",
    headline: "A studio specification — not a package menu.",
    sub: "Every engagement is built around the shop. These are the layers we work through.",
    items: [
      {
        num: "01",
        title: "Strategy",
        desc: "Positioning, audience and what the website must accomplish for this specific chair.",
      },
      {
        num: "02",
        title: "Art direction",
        desc: "Visual language, photography direction and the atmosphere the site should hold.",
      },
      {
        num: "03",
        title: "Web design",
        desc: "Layouts, typography and interaction designed as one composition — never a theme skin.",
      },
      {
        num: "04",
        title: "Development",
        desc: "Clean, fast front-end built to last — performant on the phones your clients actually use.",
      },
      {
        num: "05",
        title: "Mobile experience",
        desc: "Designed for the thumb first. Most bookings start there.",
      },
      {
        num: "06",
        title: "SEO foundation",
        desc: "Structure, metadata and local clarity so the right people can find the shop.",
      },
      {
        num: "07",
        title: "Booking experience",
        desc: "Connected to how you take appointments — clear path from interest to reserved time.",
      },
      {
        num: "08",
        title: "Launch",
        desc: "Handoff, polish and a site that feels finished the day it goes live.",
      },
    ],
  },
  journey: {
    label: "From glance to booking",
    headline: "A beautiful site is not enough.",
    sub: "It should move someone through a quiet sequence — discovery, trust, decision, booking.",
    stages: [
      { title: "Found on Google.", detail: "Discovery" },
      { title: "Looks right.", detail: "First impression" },
      { title: "Feels trustworthy.", detail: "Proof" },
      { title: "Chooses a service.", detail: "Decision" },
      { title: "Books the chair.", detail: "Action" },
    ],
  },
  proof: {
    label: "Visual proof",
    headline: "Same shop. Different first impression.",
    sub: "The goal is not to make a barbershop look like another brand. It is to make the digital experience feel as considered as the physical one.",
    before: "Before",
    after: "After",
    beforeAlt: "Typical barbershop website before a custom redesign",
    afterAlt: "Premium barbershop website after a Fadezy redesign",
    body: "We rebuild the first click so it matches the craft — then connect that presence to real work in the portfolio.",
    workLink: "View selected work",
  },
  approach: {
    label: "The Fadezy approach",
    headline: "We don’t start with a template.",
    headlineEm: "We start with the shop.",
    body: "Every barbershop has its own atmosphere, clientele, positioning and way of working. Barbershop website design at Fadezy is built around those details — not a reusable layout waiting for a logo.",
    imageAlt:
      "Fadezy art direction board with barbershop interiors, typography and material references",
  },
  faq: {
    label: "Questions",
    headline: "Clear answers for owners ready to get serious online.",
    items: [
      {
        q: "How much does a barbershop website cost?",
        a: "It depends on scope — pages, booking, content and how custom the art direction needs to be. We price after a short conversation about the shop, not from a one-size list.",
      },
      {
        q: "What should a barbershop website include?",
        a: "A strong first impression, clear services and pricing, the team, location, hours and a direct path to book. Everything else serves those essentials.",
      },
      {
        q: "Do you design websites for independent barbershops?",
        a: "Yes. Independent shops and boutique studios are the core of our work — places where the brand and the chair are the same story.",
      },
      {
        q: "Can you connect booking systems?",
        a: "Yes. We design the experience first, then connect the booking tools you already use or recommend a clean path for online booking.",
      },
      {
        q: "Will my barbershop website be mobile-friendly?",
        a: "Mobile is the primary design surface. Layouts, type and booking are composed for the phone first, then refined for desktop.",
      },
      {
        q: "Can Fadezy help with SEO?",
        a: "We build a solid foundation — structure, metadata, performance and local clarity — so the site can earn visibility without keyword theatre.",
      },
    ],
  },
  cta: {
    line1: "Your chair is the experience.",
    line2: "Your website is the first impression.",
    line3: "Let’s make them feel like the same place.",
    button: "Start a project",
    servicesLine: "Barbershop Web Design / Brand / Booking / Launch",
  },
};
