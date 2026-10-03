import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { BwdApproach } from "@/components/sections/BarbershopWebDesign/BwdApproach";
import { BwdCta } from "@/components/sections/BarbershopWebDesign/BwdCta";
import { BwdEffects } from "@/components/sections/BarbershopWebDesign/BwdEffects";
import { BwdExperience } from "@/components/sections/BarbershopWebDesign/BwdExperience";
import { BwdFaq } from "@/components/sections/BarbershopWebDesign/BwdFaq";
import { BwdHero } from "@/components/sections/BarbershopWebDesign/BwdHero";
import { BwdJourney } from "@/components/sections/BarbershopWebDesign/BwdJourney";
import { BwdProblem } from "@/components/sections/BarbershopWebDesign/BwdProblem";
import { BwdProof } from "@/components/sections/BarbershopWebDesign/BwdProof";
import { BwdSpec } from "@/components/sections/BarbershopWebDesign/BwdSpec";
import { BWD_CANONICAL } from "@/data/barbershop-web-design";
import { barbershopWebDesign } from "@/data/dictionary/barbershop-web-design";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/data/site";
import "./barbershop-web-design.css";

const pageCopy = barbershopWebDesign;

export const metadata: Metadata = {
  title: pageCopy.meta.title,
  description: pageCopy.meta.description,
  alternates: {
    canonical: BWD_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BWD_CANONICAL,
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
  name: "Barbershop Web Design",
  serviceType: "Barbershop website design",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: "Worldwide",
  url: BWD_CANONICAL,
  description: pageCopy.meta.description,
};

const BarbershopWebDesignPage = (): ReactElement => {
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
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <div className="bwd-page">
        <HeaderNav />
        <main aria-label={pageCopy.navAria}>
          <BwdHero />
          <BwdProblem />
          <BwdExperience />
          <BwdSpec />
          <BwdJourney />
          <BwdProof />
          <BwdApproach />
          <BwdFaq />
          <BwdCta />
        </main>
        <Footer />
        <BwdEffects />
      </div>
    </>
  );
};

export default BarbershopWebDesignPage;
