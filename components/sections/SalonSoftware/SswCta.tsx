"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { CONTACT } from "@/data/contact";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { SSW_ASSETS } from "@/data/salon-software";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const SswCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.cta;
  const related = t.salonSoftware.related;

  return (
    <section className="ssw-cta" id="contact" aria-labelledby="ssw-cta-title">
      <div className="ssw-cta-media" aria-hidden="true">
        <img
          src={SSW_ASSETS.ctaImage}
          alt=""
          className="ssw-cta-image"
          loading="lazy"
        />
        <div className="ssw-cta-overlay" />
      </div>

      <div className="ssw-wrap ssw-cta-shell reveal">
        <div className="ssw-cta-inner">
          <h2 id="ssw-cta-title" className="ssw-cta-headline">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ssw-cta-body">{copy.body}</p>
          <div className="ssw-cta-actions">
            <Link href={START_PROJECT_PATH} className="ssw-link-secondary on-dark">
              {copy.primary}
            </Link>
            <a
              href={CONTACT.whatsappUrl}
              className="ssw-link-primary on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.secondary}
            </a>
          </div>
        </div>

        <nav className="ssw-related" aria-label={related.label}>
          <Link href={SSW_ASSETS.websitePath}>{related.website}</Link>
          <Link href={SSW_ASSETS.barbershopWebsitePath}>
            {related.barbershopWebsite}
          </Link>
          <Link href={SSW_ASSETS.barbershopSoftwarePath}>
            {related.barbershopSoftware}
          </Link>
          <Link href={BMS_PATH}>{t.nav.barbershopMarketingSeo}</Link>
          <Link href={SMS_PATH}>{t.nav.salonMarketingSeo}</Link>
          <Link href={SSW_ASSETS.servicesPath}>{related.services}</Link>
          <Link href={SSW_ASSETS.workPath}>{related.work}</Link>
          <Link href={SSW_ASSETS.aboutPath}>{related.about}</Link>
        </nav>
      </div>

      <span className="ssw-sr-only">{copy.imageAlt}</span>
    </section>
  );
};
