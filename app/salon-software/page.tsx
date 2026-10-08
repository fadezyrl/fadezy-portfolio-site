import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { SswCapabilities } from "@/components/sections/SalonSoftware/SswCapabilities";
import { SswConnected } from "@/components/sections/SalonSoftware/SswConnected";
import { SswCta } from "@/components/sections/SalonSoftware/SswCta";
import { SswEffects } from "@/components/sections/SalonSoftware/SswEffects";
import { SswFaq } from "@/components/sections/SalonSoftware/SswFaq";
import { SswHero } from "@/components/sections/SalonSoftware/SswHero";
import { SswProblem } from "@/components/sections/SalonSoftware/SswProblem";
import { SswSalons } from "@/components/sections/SalonSoftware/SswSalons";
import { SswWhy } from "@/components/sections/SalonSoftware/SswWhy";
import { salonSoftware } from "@/data/dictionary/salon-software";
import { SSW_CANONICAL } from "@/data/salon-software";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/data/site";
import "./salon-software.css";

const pageCopy = salonSoftware;

export const metadata: Metadata = {
  title: pageCopy.meta.title,
  description: pageCopy.meta.description,
  alternates: {
    canonical: SSW_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SSW_CANONICAL,
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
      "@id": `${SSW_CANONICAL}/#webpage`,
      url: SSW_CANONICAL,
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
      name: "Salon Software",
      serviceType: "Salon software, POS and digital systems",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: "Worldwide",
      url: SSW_CANONICAL,
      description: pageCopy.meta.description,
    },
    {
      "@type": "FAQPage",
      mainEntity: pageCopy.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

const SalonSoftwarePage = (): ReactElement => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <div className="ssw-page">
        <HeaderNav />
        <main aria-label={pageCopy.navAria}>
          <SswHero />
          <SswProblem />
          <SswCapabilities />
          <SswConnected />
          <SswSalons />
          <SswWhy />
          <SswFaq />
          <SswCta />
        </main>
        <Footer />
        <SswEffects />
      </div>
    </>
  );
};

export default SalonSoftwarePage;
