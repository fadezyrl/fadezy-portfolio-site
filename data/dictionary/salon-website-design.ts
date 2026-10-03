export type SalonWebsiteDesignDict = {
  meta: {
    title: string;
    description: string;
  };
  navAria: string;
  hero: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    pull: string;
    statement: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  impression: {
    label: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
    body: string;
    imageAlt: string;
  };
  experience: {
    label: string;
    headline: string;
    sub: string;
    chapters: Array<{ title: string; body: string }>;
    imageAlt: string;
  };
  communicate: {
    label: string;
    headline: string;
    sub: string;
    items: Array<{ num: string; title: string; desc: string }>;
  };
  booking: {
    label: string;
    headline: string;
    sub: string;
    stages: Array<{ title: string; detail: string }>;
  };
  transform: {
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
    items: Array<{ qLines: string[]; a: string }>;
  };
  cta: {
    line1: string;
    line2: string;
    line3: string;
    button: string;
    secondary: string;
    servicesLine: string;
  };
};

export const salonWebsiteDesign: SalonWebsiteDesignDict = {
  meta: {
    title: "Salon Website Design — Fadezy",
    description:
      "Premium salon website design built around your brand, your clients and the experience you create. Fadezy designs modern websites for salons worldwide.",
  },
  navAria: "Salon website design",
  hero: {
    label: "Fadezy / Services / 02",
    titleLine1: "Salon",
    titleLine2: "Website",
    titleLine3: "Design",
    pull: "Your salon has a feeling.\nYour website should carry it through.",
    statement:
      "Fadezy creates premium salon websites that reflect the atmosphere, quality and personality of the studio — while making it easy for visitors to discover services and book.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
    imageAlt:
      "Luxury beauty salon interior with soft light, mirrors and refined materials",
  },
  impression: {
    label: "The digital first impression",
    line1: "The first",
    line2: "appointment",
    line3: "happens",
    line4: "before",
    line5: "the chair.",
    body: "Before they book a chair, they meet your salon online. Clients arrive from Instagram, Google or a recommendation — then decide, quietly, whether the space feels right for them. Salon website design should carry quality, atmosphere, professionalism, expertise and trust in that first scroll.",
    imageAlt: "Editorial salon detail — texture, light and craft",
  },
  experience: {
    label: "The salon experience",
    headline: "A website should translate the room — not just list the menu.",
    sub: "The digital presence becomes an extension of the visit.",
    chapters: [
      {
        title: "The space",
        body: "How the salon feels — paced, lit, and composed — before a single service is named.",
      },
      {
        title: "The work",
        body: "What the team creates, shown with the same care as the finished look in the chair.",
      },
      {
        title: "The people",
        body: "Who clients are trusting with their time, their hair, and their first impression.",
      },
      {
        title: "The details",
        body: "The small signals that separate a considered studio from a generic booking page.",
      },
      {
        title: "The booking",
        body: "How effortlessly someone can take the next step when the feeling is already right.",
      },
    ],
    imageAlt: "Beauty salon website design homepage with editorial photography",
  },
  communicate: {
    label: "What the website needs to communicate",
    headline: "A design index for salons that take their presence seriously.",
    sub: "Not a package list — the layers we build around your studio.",
    items: [
      {
        num: "01",
        title: "Positioning",
        desc: "A website built around what makes your salon different — not a template waiting for a logo.",
      },
      {
        num: "02",
        title: "Art direction",
        desc: "A visual language consistent with the salon itself: tone, photography, typography, pace.",
      },
      {
        num: "03",
        title: "Services",
        desc: "Clear, considered presentation of treatments — easy to scan, never noisy.",
      },
      {
        num: "04",
        title: "Team",
        desc: "Introduce the people behind the work and give clients a reason to trust the chair.",
      },
      {
        num: "05",
        title: "Mobile experience",
        desc: "Designed around how clients actually browse and book — thumb-first, not desktop-shrunk.",
      },
      {
        num: "06",
        title: "Booking",
        desc: "A clear path from interest to appointment, connected to how you take bookings.",
      },
      {
        num: "07",
        title: "SEO foundation",
        desc: "Structure and metadata so the right people can find the salon through search.",
      },
      {
        num: "08",
        title: "Launch",
        desc: "A polished site ready for real clients — finished the day it goes live.",
      },
    ],
  },
  booking: {
    label: "The booking journey",
    headline: "A premium website should make booking feel natural.",
    sub: "Quiet steps. No pressure. A clear next move.",
    stages: [
      { title: "Discover", detail: "They find the salon." },
      { title: "Explore", detail: "They understand atmosphere and services." },
      { title: "Trust", detail: "They see the work, team and experience." },
      { title: "Choose", detail: "They find the right service." },
      { title: "Book", detail: "They take the next step." },
    ],
  },
  transform: {
    label: "Visual transformation",
    headline: "Same salon. Different first impression.",
    sub: "The goal isn’t to make every salon look the same. It’s to make the digital experience feel unmistakably theirs.",
    before: "Before",
    after: "After",
    beforeAlt: "Typical salon website before a custom redesign",
    afterAlt: "Premium salon website after a Fadezy redesign",
    body: "We rebuild the first impression so it matches the craft — then connect that presence to real work in the portfolio.",
    workLink: "View selected work",
  },
  approach: {
    label: "The Fadezy approach",
    headline: "We don’t start with a template.",
    headlineEm: "We start with the salon.",
    body: "Every salon has a different atmosphere, clientele, positioning and standard of work. Salon website design at Fadezy is built around those details — not forced into a pre-existing layout.",
    imageAlt:
      "Fadezy art direction board with salon photography, typography and material references",
  },
  faq: {
    label: "Questions",
    headline: "Straight answers for owners building a serious digital presence.",
    items: [
      {
        qLines: ["What should", "a salon website", "include?"],
        a: "A strong first impression, clear services, the team, location, hours and a direct path to book. Everything else supports those essentials.",
      },
      {
        qLines: ["How much does", "salon website design", "cost?"],
        a: "It depends on scope — pages, booking, content and how custom the art direction needs to be. We price after understanding the salon, not from a one-size list.",
      },
      {
        qLines: ["Can you connect", "our salon booking", "system?"],
        a: "Yes. We design the experience first, then connect the booking tools you already use — or set a clean path for online booking.",
      },
      {
        qLines: ["Will the website", "work well", "on mobile?"],
        a: "Mobile is the primary surface. Layouts, type and booking are composed for the phone first, then refined for desktop.",
      },
      {
        qLines: ["Can you design", "around our existing", "salon brand?"],
        a: "Yes. We work from your atmosphere and identity — extending what already feels true, not replacing it with a generic look.",
      },
      {
        qLines: ["Can Fadezy help", "with salon", "SEO?"],
        a: "We build a solid foundation — structure, metadata, performance and local clarity — so search can work without keyword theatre.",
      },
    ],
  },
  cta: {
    line1: "Your salon already has",
    line2: "a point of view.",
    line3: "Your website should too.",
    button: "Start a project",
    secondary: "View our work",
    servicesLine: "Salon Website Design / Brand / Booking / Launch",
  },
};
