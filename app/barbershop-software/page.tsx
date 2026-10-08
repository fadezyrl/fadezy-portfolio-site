import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { BswCapabilities } from "@/components/sections/BarbershopSoftware/BswCapabilities";
import { BswConnected } from "@/components/sections/BarbershopSoftware/BswConnected";
import { BswCta } from "@/components/sections/BarbershopSoftware/BswCta";
import { BswEffects } from "@/components/sections/BarbershopSoftware/BswEffects";
import { BswFaq } from "@/components/sections/BarbershopSoftware/BswFaq";
import { BswHero } from "@/components/sections/BarbershopSoftware/BswHero";
import { BswProblem } from "@/components/sections/BarbershopSoftware/BswProblem";
import { BswShops } from "@/components/sections/BarbershopSoftware/BswShops";
import { BswWhy } from "@/components/sections/BarbershopSoftware/BswWhy";
import { BSW_CANONICAL } from "@/data/barbershop-software";
import { barbershopSoftware } from "@/data/dictionary/barbershop-software";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/data/site";
import "./barbershop-software.css";

const pageCopy = barbershopSoftware;

export const metadata: Metadata = {
  title: pageCopy.meta.title,
  description: pageCopy.meta.description,
  alternates: {
    canonical: BSW_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BSW_CANONICAL,
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
      "@id": `${BSW_CANONICAL}/#webpage`,
      url: BSW_CANONICAL,
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
      name: "Barbershop Software",
      serviceType: "Barbershop software, POS and digital systems",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: "Worldwide",
      url: BSW_CANONICAL,
      description: pageCopy.meta.description,
    },
  ],
};

const BarbershopSoftwarePage = (): ReactElement => {
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
      <div className="bsw-page">
        <HeaderNav />
        <main aria-label={pageCopy.navAria}>
          <BswHero />
          <BswProblem />
          <BswCapabilities />
          <BswConnected />
          <BswShops />
          <BswWhy />
          <BswFaq />
          <BswCta />
        </main>
        <Footer />
        <BswEffects />
      </div>
    </>
  );
};

export default BarbershopSoftwarePage;
