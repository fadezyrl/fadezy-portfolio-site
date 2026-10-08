import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { SmsBooking } from "@/components/sections/SalonMarketingSeo/SmsBooking";
import { SmsContent } from "@/components/sections/SalonMarketingSeo/SmsContent";
import { SmsCta } from "@/components/sections/SalonMarketingSeo/SmsCta";
import { SmsEffects } from "@/components/sections/SalonMarketingSeo/SmsEffects";
import { SmsFaq } from "@/components/sections/SalonMarketingSeo/SmsFaq";
import { SmsHero } from "@/components/sections/SalonMarketingSeo/SmsHero";
import { SmsLocal } from "@/components/sections/SalonMarketingSeo/SmsLocal";
import { SmsMeasure } from "@/components/sections/SalonMarketingSeo/SmsMeasure";
import { SmsServices } from "@/components/sections/SalonMarketingSeo/SmsServices";
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
          __html: JSON.stringify(faqStructuredData),
        }}
      />
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
          <SmsServices />
          <SmsLocal />
          <SmsContent />
          <SmsBooking />
          <SmsMeasure />
          <SmsFaq />
          <SmsCta />
        </main>
        <Footer />
        <SmsEffects />
      </div>
    </>
  );
};

export default SalonMarketingSeoPage;
