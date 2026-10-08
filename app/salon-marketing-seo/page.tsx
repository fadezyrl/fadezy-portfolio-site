import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { SmsApproach } from "@/components/sections/SalonMarketingSeo/SmsApproach";
import { SmsAudience } from "@/components/sections/SalonMarketingSeo/SmsAudience";
import { SmsBrand } from "@/components/sections/SalonMarketingSeo/SmsBrand";
import { SmsChannels } from "@/components/sections/SalonMarketingSeo/SmsChannels";
import { SmsContent } from "@/components/sections/SalonMarketingSeo/SmsContent";
import { SmsCta } from "@/components/sections/SalonMarketingSeo/SmsCta";
import { SmsDifference } from "@/components/sections/SalonMarketingSeo/SmsDifference";
import { SmsEffects } from "@/components/sections/SalonMarketingSeo/SmsEffects";
import { SmsHero } from "@/components/sections/SalonMarketingSeo/SmsHero";
import { SmsIntro } from "@/components/sections/SalonMarketingSeo/SmsIntro";
import { SmsJourney } from "@/components/sections/SalonMarketingSeo/SmsJourney";
import { SmsLocal } from "@/components/sections/SalonMarketingSeo/SmsLocal";
import { SmsMeasure } from "@/components/sections/SalonMarketingSeo/SmsMeasure";
import { SmsPresence } from "@/components/sections/SalonMarketingSeo/SmsPresence";
import { SmsReviews } from "@/components/sections/SalonMarketingSeo/SmsReviews";
import { SmsSystem } from "@/components/sections/SalonMarketingSeo/SmsSystem";
import { SmsVanity } from "@/components/sections/SalonMarketingSeo/SmsVanity";
import { SmsWebsite } from "@/components/sections/SalonMarketingSeo/SmsWebsite";
import { salonMarketingSeo } from "@/data/dictionary/salon-marketing-seo";
import { SMS_CANONICAL } from "@/data/salon-marketing-seo";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/data/site";
import "./salon-marketing-seo.css";

const pageCopy = salonMarketingSeo;

export const metadata: Metadata = {
  title: pageCopy.meta.title,
  description: pageCopy.meta.description,
  alternates: {
    canonical: SMS_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SMS_CANONICAL,
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
      "@id": `${SMS_CANONICAL}/#webpage`,
      url: SMS_CANONICAL,
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
      name: "Salon Marketing & SEO",
      serviceType: "Salon marketing and SEO",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: "Worldwide",
      url: SMS_CANONICAL,
      description: pageCopy.meta.description,
    },
  ],
};

const SalonMarketingSeoPage = (): ReactElement => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <div className="sms-page">
        <HeaderNav />
        <main aria-label={pageCopy.navAria}>
          <SmsHero />
          <SmsIntro />
          <SmsJourney />
          <SmsLocal />
          <SmsPresence />
          <SmsContent />
          <SmsChannels />
          <SmsWebsite />
          <SmsBrand />
          <SmsReviews />
          <SmsSystem />
          <SmsMeasure />
          <SmsApproach />
          <SmsVanity />
          <SmsDifference />
          <SmsAudience />
          <SmsCta />
        </main>
        <Footer />
        <SmsEffects />
      </div>
    </>
  );
};

export default SalonMarketingSeoPage;
