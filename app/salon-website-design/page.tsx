import type { Metadata } from "next";
import type { ReactElement } from "react";
import { SwdCta } from "@/components/sections/SalonWebsiteDesign/SwdCta";
import { SwdEffects } from "@/components/sections/SalonWebsiteDesign/SwdEffects";
import { SwdExperience } from "@/components/sections/SalonWebsiteDesign/SwdExperience";
import { SwdFaq } from "@/components/sections/SalonWebsiteDesign/SwdFaq";
import { SwdFooter } from "@/components/sections/SalonWebsiteDesign/SwdFooter";
import { SwdHero } from "@/components/sections/SalonWebsiteDesign/SwdHero";
import { SwdImpression } from "@/components/sections/SalonWebsiteDesign/SwdImpression";
import { SwdNav } from "@/components/sections/SalonWebsiteDesign/SwdNav";
import { SwdProcess } from "@/components/sections/SalonWebsiteDesign/SwdProcess";
import { SwdStatement } from "@/components/sections/SalonWebsiteDesign/SwdStatement";
import { SwdTransform } from "@/components/sections/SalonWebsiteDesign/SwdTransform";
import { SwdWork } from "@/components/sections/SalonWebsiteDesign/SwdWork";
import { salonWebsiteDesign } from "@/data/dictionary/salon-website-design";
import { SWD_CANONICAL } from "@/data/salon-website-design";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/data/site";
import "./salon-website-design.css";

const pageCopy = salonWebsiteDesign;

export const metadata: Metadata = {
  title: pageCopy.meta.title,
  description: pageCopy.meta.description,
  alternates: {
    canonical: SWD_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SWD_CANONICAL,
    siteName: SITE_NAME,
    title: pageCopy.meta.title,
    description: pageCopy.meta.description,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageCopy.meta.title,
    description: pageCopy.meta.description,
    images: [OG_IMAGE_PATH],
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pageCopy.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Salon Website Design",
  serviceType: "Salon website design",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: "Worldwide",
  url: SWD_CANONICAL,
  description: pageCopy.meta.description,
};

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageCopy.meta.title,
  description: pageCopy.meta.description,
  url: SWD_CANONICAL,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  about: {
    "@type": "Service",
    name: "Salon Website Design",
  },
};

const toJsonLd = (data: object): string =>
  JSON.stringify(data).replace(/</g, "\\u003c");

const SalonWebsiteDesignPage = (): ReactElement => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(webPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(serviceStructuredData),
        }}
      />
      <div className="swd-page">
        <SwdNav />
        <main aria-label={pageCopy.navAria}>
          <SwdHero />
          <SwdStatement />
          <SwdWork />
          <SwdExperience />
          <SwdImpression />
          <SwdTransform />
          <SwdProcess />
          <SwdFaq />
          <SwdCta />
        </main>
        <SwdFooter />
        <SwdEffects />
      </div>
    </>
  );
};

export default SalonWebsiteDesignPage;
