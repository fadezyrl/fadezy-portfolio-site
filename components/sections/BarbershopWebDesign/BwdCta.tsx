"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { BSW_PATH } from "@/data/barbershop-software";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const BwdCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.cta;

  return (
    <section className="bwd-cta" id="contact" aria-labelledby="bwd-cta-title">
      <div className="bwd-cta-media" aria-hidden="true">
        <img
          src={BWD_ASSETS.ctaImage}
          alt=""
          className="bwd-cta-image"
          loading="lazy"
        />
        <div className="bwd-cta-overlay" />
      </div>

      <div className="bwd-wrap bwd-cta-inner">
        <h2 id="bwd-cta-title">{copy.headline}</h2>
        <p>{copy.body}</p>
        <Link href={START_PROJECT_PATH} className="bwd-link-secondary on-dark">
          {copy.button}
        </Link>
        <nav className="bwd-cta-links" aria-label="Related">
          <Link href={BWD_ASSETS.homePath}>{t.brand}</Link>
          <Link href={BWD_ASSETS.aboutPath}>{t.nav.about}</Link>
          <Link href={BWD_ASSETS.salonPath}>{t.nav.salonWebsiteDesign}</Link>
          <Link href={BSW_PATH}>{t.nav.barbershopSoftware}</Link>
          <Link href={BMS_PATH}>{t.nav.barbershopMarketingSeo}</Link>
        </nav>
      </div>
    </section>
  );
};
