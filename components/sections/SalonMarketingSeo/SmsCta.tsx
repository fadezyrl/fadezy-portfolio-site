"use client";

import type { ReactElement } from "react";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { SMS_ASSETS } from "@/data/salon-marketing-seo";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const SmsCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.cta;
  const related = t.salonMarketingSeo.related;

  return (
    <section className="sms-cta" id="contact" aria-labelledby="sms-cta-title">
      <div className="sms-cta-media" aria-hidden="true">
        <img
          src={SMS_ASSETS.cta}
          alt=""
          className="sms-cta-image"
          loading="lazy"
        />
        <div className="sms-cta-overlay" />
      </div>

      <div className="sms-wrap sms-cta-inner">
        <h2 id="sms-cta-title" className="sms-cta-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p>{copy.body}</p>
        <a href={START_PROJECT_PATH} className="sms-link-primary on-dark">
          {copy.primary}
        </a>

        <nav className="sms-related" aria-label={related.label}>
          <a href={SMS_ASSETS.websitePath}>{related.website}</a>
          <a href={SMS_ASSETS.softwarePath}>{related.software}</a>
          <a href={BMS_PATH}>{related.barbershopMarketing}</a>
          <a href={SMS_ASSETS.aboutPath}>{related.about}</a>
        </nav>
      </div>
    </section>
  );
};
