import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { SwdProjectDetail } from "@/components/sections/SalonWebsiteDesign/SwdProjectDetail";
import { salonWebsiteDesign } from "@/data/dictionary/salon-website-design";
import {
  getSwdProject,
  SWD_CANONICAL,
  SWD_PROJECTS,
} from "@/data/salon-website-design";
import { OG_IMAGE_PATH, SITE_NAME } from "@/data/site";
import "../../salon-website-design.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = (): Array<{ slug: string }> =>
  SWD_PROJECTS.map((project) => ({ slug: project.id }));

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getSwdProject(slug);
  const copy = salonWebsiteDesign.work.projects.find((item) => item.id === slug);

  if (!project || !copy) {
    return {};
  }

  const title = `${copy.title} | Salon Website Design — Fadezy`;
  const description = `${copy.title} — ${copy.type} in ${copy.location}. ${copy.direction}`;
  const canonical = `${SWD_CANONICAL}/work/${project.id}`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: project.image,
          width: 1440,
          height: 900,
          alt: copy.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image || OG_IMAGE_PATH],
    },
  };
};

const SalonProjectPage = async ({
  params,
}: ProjectPageProps): Promise<ReactElement> => {
  const { slug } = await params;
  const project = getSwdProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="swd-page">
      <HeaderNav />
      <main aria-label={salonWebsiteDesign.navAria}>
        <SwdProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  );
};

export default SalonProjectPage;
