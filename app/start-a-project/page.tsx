import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { SpBrand } from "@/components/sections/StartProject/SpBrand";
import { SpClose } from "@/components/sections/StartProject/SpClose";
import { SpEffects } from "@/components/sections/StartProject/SpEffects";
import { SpForm } from "@/components/sections/StartProject/SpForm";
import { SpHero } from "@/components/sections/StartProject/SpHero";
import { SpInfo } from "@/components/sections/StartProject/SpInfo";
import { startProject } from "@/data/dictionary/start-project";
import { START_PROJECT_CANONICAL } from "@/data/start-project";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/data/site";
import "./start-a-project.css";

const pageCopy = startProject;

export const metadata: Metadata = {
  title: pageCopy.meta.title,
  description: pageCopy.meta.description,
  alternates: {
    canonical: START_PROJECT_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: START_PROJECT_CANONICAL,
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
  "@type": "ContactPage",
  "@id": `${START_PROJECT_CANONICAL}/#webpage`,
  url: START_PROJECT_CANONICAL,
  name: pageCopy.meta.title,
  description: pageCopy.meta.description,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const StartProjectPage = (): ReactElement => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <div className="sp-page">
        <HeaderNav />
        <main aria-label={pageCopy.navAria}>
          <SpHero />
          <SpForm />
          <SpInfo />
          <SpBrand />
          <SpClose />
        </main>
        <Footer />
        <SpEffects />
      </div>
    </>
  );
};

export default StartProjectPage;
