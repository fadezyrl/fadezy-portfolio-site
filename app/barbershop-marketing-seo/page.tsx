import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { BmsApproach } from "@/components/sections/BarbershopMarketingSeo/BmsApproach";
import { BmsAudience } from "@/components/sections/BarbershopMarketingSeo/BmsAudience";
import { BmsChannels } from "@/components/sections/BarbershopMarketingSeo/BmsChannels";
import { BmsContent } from "@/components/sections/BarbershopMarketingSeo/BmsContent";
import { BmsCta } from "@/components/sections/BarbershopMarketingSeo/BmsCta";
import { BmsDifference } from "@/components/sections/BarbershopMarketingSeo/BmsDifference";
import { BmsEffects } from "@/components/sections/BarbershopMarketingSeo/BmsEffects";
import { BmsHero } from "@/components/sections/BarbershopMarketingSeo/BmsHero";
import { BmsIntro } from "@/components/sections/BarbershopMarketingSeo/BmsIntro";
import { BmsJourney } from "@/components/sections/BarbershopMarketingSeo/BmsJourney";
import { BmsLocal } from "@/components/sections/BarbershopMarketingSeo/BmsLocal";
import { BmsMeasure } from "@/components/sections/BarbershopMarketingSeo/BmsMeasure";
import { BmsPresence } from "@/components/sections/BarbershopMarketingSeo/BmsPresence";
import { BmsSystem } from "@/components/sections/BarbershopMarketingSeo/BmsSystem";
import { BmsTrust } from "@/components/sections/BarbershopMarketingSeo/BmsTrust";
import { BmsVanity } from "@/components/sections/BarbershopMarketingSeo/BmsVanity";
import { BmsWebsite } from "@/components/sections/BarbershopMarketingSeo/BmsWebsite";
import { BMS_CANONICAL } from "@/data/barbershop-marketing-seo";
import { barbershopMarketingSeo } from "@/data/dictionary/barbershop-marketing-seo";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/data/site";
import "./barbershop-marketing-seo.css";

const pageCopy = barbershopMarketingSeo;

export const metadata: Metadata = {
  title: pageCopy.meta.title,
  description: pageCopy.meta.description,
  alternates: {
    canonical: BMS_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BMS_CANONICAL,
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

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BMS_CANONICAL}/#webpage`,
      url: BMS_CANONICAL,
      name: pageCopy.meta.title,
      description: pageCopy.meta.description,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      "@type": "Service",
      name: "Barbershop Marketing & SEO",
      serviceType: "Barbershop marketing and SEO",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: "Worldwide",
      url: BMS_CANONICAL,
      description: pageCopy.meta.description,
    },
  ],
};

const BarbershopMarketingSeoPage = (): ReactElement => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <div className="bms-page">
        <HeaderNav />
        <main aria-label={pageCopy.navAria}>
          <BmsHero />
          <BmsIntro />
          <BmsJourney />
          <BmsLocal />
          <BmsPresence />
          <BmsContent />
          <BmsChannels />
          <BmsWebsite />
          <BmsTrust />
          <BmsSystem />
          <BmsMeasure />
          <BmsApproach />
          <BmsVanity />
          <BmsDifference />
          <BmsAudience />
          <BmsCta />
        </main>
        <Footer />
        <BmsEffects />
      </div>
    </>
  );
};

export default BarbershopMarketingSeoPage;
