import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { BswAudience } from "@/components/sections/BarbershopSoftware/BswAudience";
import { BswBooking } from "@/components/sections/BarbershopSoftware/BswBooking";
import { BswBrandFit } from "@/components/sections/BarbershopSoftware/BswBrandFit";
import { BswChair } from "@/components/sections/BarbershopSoftware/BswChair";
import { BswClient } from "@/components/sections/BarbershopSoftware/BswClient";
import { BswCta } from "@/components/sections/BarbershopSoftware/BswCta";
import { BswCustom } from "@/components/sections/BarbershopSoftware/BswCustom";
import { BswDifference } from "@/components/sections/BarbershopSoftware/BswDifference";
import { BswEcosystem } from "@/components/sections/BarbershopSoftware/BswEcosystem";
import { BswEffects } from "@/components/sections/BarbershopSoftware/BswEffects";
import { BswHero } from "@/components/sections/BarbershopSoftware/BswHero";
import { BswIntro } from "@/components/sections/BarbershopSoftware/BswIntro";
import { BswOps } from "@/components/sections/BarbershopSoftware/BswOps";
import { BswSystem } from "@/components/sections/BarbershopSoftware/BswSystem";
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
      serviceType: "Barbershop software and digital systems",
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
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <div className="bsw-page">
        <HeaderNav />
        <main aria-label={pageCopy.navAria}>
          <BswHero />
          <BswIntro />
          <BswChair />
          <BswSystem />
          <BswBooking />
          <BswClient />
          <BswOps />
          <BswBrandFit />
          <BswCustom />
          <BswEcosystem />
          <BswAudience />
          <BswDifference />
          <BswCta />
        </main>
        <Footer />
        <BswEffects />
      </div>
    </>
  );
};

export default BarbershopSoftwarePage;
