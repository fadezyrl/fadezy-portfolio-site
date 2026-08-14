import { CONTACT } from "@/data/contact";
import {
  OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/data/site";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo/fadezy-logo.png`,
      description: SITE_DESCRIPTION,
      email: CONTACT.email,
      sameAs: [CONTACT.instagram, CONTACT.linkedin, CONTACT.facebook],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}${OG_IMAGE_PATH}`,
      areaServed: "Worldwide",
      serviceType: [
        "Website Design",
        "Web Development",
        "Brand Identity",
        "Digital Presence",
        "SEO",
      ],
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
} as const;

export const structuredDataJson = JSON.stringify(structuredData);
