import type { ProjectNeedId } from "@/data/start-project";

export type StartProjectDict = {
  meta: { title: string; description: string };
  navAria: string;
  hero: {
    eyebrow: string;
    headline: string[];
    body: string;
    location: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    headline: string;
    body: string;
    sideNote: string;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    businessLabel: string;
    businessPlaceholder: string;
    needLabel: string;
    needs: Array<{ id: ProjectNeedId; label: string }>;
    linkLabel: string;
    linkPlaceholder: string;
    locationLabel: string;
    locationPlaceholder: string;
    projectLabel: string;
    projectPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    reassurance: string;
    errors: {
      name: string;
      business: string;
      need: string;
      email: string;
      project: string;
    };
  };
  success: {
    title: string;
    body: string;
    again: string;
  };
  instagram: {
    eyebrow: string;
    headline: string;
    body: string;
    cta: string;
  };
  close: {
    headline: string[];
    body: string;
    cta: string;
  };
};

export const startProject: StartProjectDict = {
  meta: {
    title: "Start a Project | Fadezy",
    description:
      "Start a project with Fadezy. Tell us about your barbershop or salon and what you need digitally — websites, branding, marketing, content or systems.",
  },
  navAria: "Start a project",
  hero: {
    eyebrow: "Start a project",
    headline: ["Have a business", "worth building around?"],
    body: "Tell us where your business is today, what you're trying to build, and where you want it to go.",
    location: "Remote / Worldwide",
    imageAlt:
      "Creative studio workspace with brand materials, website concepts and design notes",
  },
  intro: {
    eyebrow: "Project inquiry",
    headline: "Good work starts with understanding the business.",
    body: "Tell us a little about your business and what you need digitally. You don't need to have everything figured out yet.",
    sideNote:
      "Share the essentials. We'll review the project and respond with the next step.",
  },
  form: {
    nameLabel: "01 — Your name",
    namePlaceholder: "Your name",
    businessLabel: "02 — Business name",
    businessPlaceholder: "Your barbershop or salon",
    needLabel: "03 — What do you need?",
    needs: [
      { id: "website", label: "Website" },
      { id: "branding", label: "Branding" },
      { id: "marketingSeo", label: "Marketing & SEO" },
      { id: "socialContent", label: "Social / Content" },
      { id: "software", label: "Software / Digital Systems" },
      { id: "multiple", label: "Multiple services" },
      { id: "other", label: "Something else" },
    ],
    linkLabel: "04 — Website / Instagram",
    linkPlaceholder: "Website or Instagram URL",
    locationLabel: "05 — Where is your business?",
    locationPlaceholder: "City / Country",
    projectLabel: "06 — Tell us about the project",
    projectPlaceholder: "What are you looking to build, improve or change?",
    emailLabel: "07 — Email",
    emailPlaceholder: "Your email address",
    submit: "Send project inquiry ↗",
    submitting: "Sending…",
    reassurance:
      "Once we receive your inquiry, we'll review the project and get back to you with the next step.",
    errors: {
      name: "Please add your name.",
      business: "Please add your business name.",
      need: "Please select what you need.",
      email: "Please add a valid email.",
      project: "Please tell us a little about the project.",
    },
  },
  success: {
    title: "Project inquiry received.",
    body: "Thanks. We'll review the details and get back to you with the next step.",
    again: "Send another inquiry ↗",
  },
  instagram: {
    eyebrow: "Fadezy on Instagram",
    headline: "See what we're building.",
    body: "The work, ideas and digital thinking behind Fadezy — shared with the barbershop and beauty industry.",
    cta: "Follow Fadezy on Instagram ↗",
  },
  close: {
    headline: ["Your business.", "Your brand.", "Your next digital move."],
    body: "Let's build something that feels like it belongs to you.",
    cta: "Start the conversation ↗",
  },
};
