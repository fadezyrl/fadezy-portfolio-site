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
    headline: string;
    body: string;
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
  remote: {
    label: string;
    body: string;
  };
  emailBlock: {
    label: string;
  };
  brand: {
    lines: string[];
  };
  close: {
    mark: string;
    line: string;
    location: string;
  };
};

export const startProject: StartProjectDict = {
  meta: {
    title: "Start a Project | Fadezy",
    description:
      "Start a project with Fadezy — the digital partner for barbershops and beauty salons. Tell us about your business and what you need digitally.",
  },
  navAria: "Start a project",
  hero: {
    eyebrow: "Start a project",
    headline: ["Have a business", "worth building around?"],
    body: "Tell us where your business is today, what you're trying to build, and where you want it to go.",
    location: "Remote / Worldwide",
    imageAlt:
      "Editorial barbershop and salon craft — materials, light and atmosphere",
  },
  intro: {
    headline: "Good work starts with understanding the business.",
    body: "Tell us a little about your business and what you need digitally. You don't need to have everything figured out yet.",
  },
  form: {
    nameLabel: "Your name",
    namePlaceholder: "Your name",
    businessLabel: "Business name",
    businessPlaceholder: "Your barbershop or salon",
    needLabel: "What do you need?",
    needs: [
      { id: "website", label: "Website" },
      { id: "branding", label: "Branding" },
      { id: "marketingSeo", label: "Marketing & SEO" },
      { id: "socialContent", label: "Social / Content" },
      { id: "software", label: "Software / Digital Systems" },
      { id: "multiple", label: "Multiple services" },
      { id: "other", label: "Something else" },
    ],
    linkLabel: "Your website / Instagram",
    linkPlaceholder: "Website or Instagram URL",
    locationLabel: "Where is your business?",
    locationPlaceholder: "City / Country",
    projectLabel: "Tell us about the project",
    projectPlaceholder: "What are you looking to build, improve or change?",
    emailLabel: "Email",
    emailPlaceholder: "Your email address",
    submit: "Send project inquiry →",
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
    again: "Send another inquiry →",
  },
  remote: {
    label: "Remote / Worldwide",
    body: "Fadezy works remotely with barbershops and beauty salons around the world.",
  },
  emailBlock: {
    label: "Email",
  },
  brand: {
    lines: [
      "For barbershops and beauty salons",
      "ready to look as good digitally",
      "as they do in the real world.",
    ],
  },
  close: {
    mark: "Fadezy",
    line: "Digital experiences for barbershops + beauty salons",
    location: "Remote / Worldwide",
  },
};
