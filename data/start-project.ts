export const START_PROJECT_ASSETS = {
  hero: "/assets/images/about.jpeg",
  homePath: "/",
  workPath: "/#work",
  servicesPath: "/#services",
  aboutPath: "/about",
} as const;

export const START_PROJECT_PATH = "/start-a-project";
export const START_PROJECT_CANONICAL =
  "https://www.fadezyrl.com/start-a-project";

export const PROJECT_NEED_IDS = [
  "website",
  "branding",
  "marketingSeo",
  "socialContent",
  "software",
  "multiple",
  "other",
] as const;

export type ProjectNeedId = (typeof PROJECT_NEED_IDS)[number];
