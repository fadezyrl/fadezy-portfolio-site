import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { SswAudience } from "@/components/sections/SalonSoftware/SswAudience";
import { SswBooking } from "@/components/sections/SalonSoftware/SswBooking";
import { SswBrandFit } from "@/components/sections/SalonSoftware/SswBrandFit";
import { SswClient } from "@/components/sections/SalonSoftware/SswClient";
import { SswClientFocus } from "@/components/sections/SalonSoftware/SswClientFocus";
import { SswCta } from "@/components/sections/SalonSoftware/SswCta";
import { SswCustom } from "@/components/sections/SalonSoftware/SswCustom";
import { SswDifference } from "@/components/sections/SalonSoftware/SswDifference";
import { SswEcosystem } from "@/components/sections/SalonSoftware/SswEcosystem";
import { SswEffects } from "@/components/sections/SalonSoftware/SswEffects";
import { SswHero } from "@/components/sections/SalonSoftware/SswHero";
import { SswIntro } from "@/components/sections/SalonSoftware/SswIntro";
import { SswOps } from "@/components/sections/SalonSoftware/SswOps";
import { SswServices } from "@/components/sections/SalonSoftware/SswServices";
import { SswSystem } from "@/components/sections/SalonSoftware/SswSystem";
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
      serviceType: "Salon software and digital systems",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: "Worldwide",
      url: SSW_CANONICAL,
      description: pageCopy.meta.description,
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
          <SswIntro />
          <SswClientFocus />
          <SswSystem />
          <SswBooking />
          <SswClient />
          <SswServices />
          <SswOps />
          <SswBrandFit />
          <SswEcosystem />
          <SswCustom />
          <SswAudience />
          <SswDifference />
          <SswCta />
        </main>
        <Footer />
        <SswEffects />
      </div>
    </>
  );
};

export default SalonSoftwarePage;
