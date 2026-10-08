"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { BSW_ASSETS } from "@/data/barbershop-software";
import { CONTACT } from "@/data/contact";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { SSW_PATH } from "@/data/salon-software";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const BswCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.cta;
  const related = t.barbershopSoftware.related;

  return (
    <section className="bsw-cta" id="contact" aria-labelledby="bsw-cta-title">
      <div className="bsw-cta-media" aria-hidden="true">
        <img
          src={BSW_ASSETS.ctaImage}
          alt=""
          className="bsw-cta-image"
          loading="lazy"
        />
        <div className="bsw-cta-overlay" />
      </div>

      <div className="bsw-wrap bsw-cta-inner reveal">
        <h2 id="bsw-cta-title" className="bsw-cta-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="bsw-cta-body">{copy.body}</p>
        <div className="bsw-cta-actions">
          <Link href={START_PROJECT_PATH} className="bsw-link-secondary on-dark">
            {copy.primary}
          </Link>
          <a
            href={CONTACT.whatsappUrl}
            className="bsw-link-primary on-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.secondary}
          </a>
        </div>

        <nav className="bsw-related" aria-label={related.label}>
          <Link href={BSW_ASSETS.websitePath}>{related.website}</Link>
          <Link href={BSW_ASSETS.salonWebsitePath}>{related.salonWebsite}</Link>
          <Link href={SSW_PATH}>{t.nav.salonSoftware}</Link>
          <Link href={BMS_PATH}>{t.nav.barbershopMarketingSeo}</Link>
          <Link href={SMS_PATH}>{t.nav.salonMarketingSeo}</Link>
          <Link href={BSW_ASSETS.servicesPath}>{related.services}</Link>
          <Link href={BSW_ASSETS.workPath}>{related.work}</Link>
          <Link href={BSW_ASSETS.aboutPath}>{related.about}</Link>
        </nav>
      </div>

      <span className="bsw-sr-only">{copy.imageAlt}</span>
    </section>
  );
};
