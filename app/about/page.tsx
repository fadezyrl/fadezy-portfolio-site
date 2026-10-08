import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { AbtBuilds } from "@/components/sections/AboutPage/AbtBuilds";
import { AbtEffects } from "@/components/sections/AboutPage/AbtEffects";
import { AbtEntity } from "@/components/sections/AboutPage/AbtEntity";
import { AbtExists } from "@/components/sections/AboutPage/AbtExists";
import { AbtHero } from "@/components/sections/AboutPage/AbtHero";
import { AbtManifesto } from "@/components/sections/AboutPage/AbtManifesto";
import { AbtSpecialize } from "@/components/sections/AboutPage/AbtSpecialize";
import { AbtStandard } from "@/components/sections/AboutPage/AbtStandard";
import { AbtThink } from "@/components/sections/AboutPage/AbtThink";
import { AbtWork } from "@/components/sections/AboutPage/AbtWork";
import { ABOUT_CANONICAL } from "@/data/about";
import { aboutPage } from "@/data/dictionary/about-page";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/data/site";
import "./about.css";

const pageCopy = aboutPage;

export const metadata: Metadata = {
  title: pageCopy.meta.title,
  description: pageCopy.meta.description,
  alternates: {
    canonical: ABOUT_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: ABOUT_CANONICAL,
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
      "@type": "AboutPage",
      "@id": `${ABOUT_CANONICAL}/#webpage`,
      url: ABOUT_CANONICAL,
      name: pageCopy.meta.title,
      description: pageCopy.meta.description,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description: pageCopy.entity.statement,
      },
    },
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      description: pageCopy.entity.body,
      areaServed: "Worldwide",
      knowsAbout: [
        "Barbershop website design",
        "Beauty salon website design",
        "Barbershop software",
        "Salon software",
        "Barbershop marketing and SEO",
        "Salon marketing and SEO",
      ],
    },
  ],
};

const AboutFadezyPage = (): ReactElement => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <div className="abt-page">
        <HeaderNav />
        <main aria-label={pageCopy.navAria}>
          <AbtHero />
          <AbtExists />
          <AbtSpecialize />
          <AbtBuilds />
          <AbtStandard />
          <AbtThink />
          <AbtWork />
          <AbtEntity />
          <AbtManifesto />
        </main>
        <Footer />
        <AbtEffects />
      </div>
    </>
  );
};

export default AboutFadezyPage;
