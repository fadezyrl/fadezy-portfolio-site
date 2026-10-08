"use client";

import type { ReactElement } from "react";
import { BMS_ASSETS } from "@/data/barbershop-marketing-seo";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const BmsCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.cta;
  const related = t.barbershopMarketingSeo.related;

  return (
    <section className="bms-cta" id="contact" aria-labelledby="bms-cta-title">
      <div className="bms-cta-media" aria-hidden="true">
        <img
          src={BMS_ASSETS.cta}
          alt=""
          className="bms-cta-image"
          loading="lazy"
        />
        <div className="bms-cta-overlay" />
      </div>

      <div className="bms-wrap bms-cta-inner">
        <h2 id="bms-cta-title" className="bms-cta-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p>{copy.body}</p>
        <a href={START_PROJECT_PATH} className="bms-link-primary on-dark">
          {copy.primary}
        </a>

        <nav className="bms-related" aria-label={related.label}>
          <a href={BMS_ASSETS.websitePath}>{related.website}</a>
          <a href={BMS_ASSETS.softwarePath}>{related.software}</a>
          <a href={SMS_PATH}>{related.salonMarketing}</a>
          <a href={BMS_ASSETS.aboutPath}>{related.about}</a>
        </nav>
      </div>
    </section>
  );
};
