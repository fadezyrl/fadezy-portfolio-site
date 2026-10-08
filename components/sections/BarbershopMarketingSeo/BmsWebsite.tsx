"use client";

import type { ReactElement } from "react";
import { BMS_ASSETS } from "@/data/barbershop-marketing-seo";
import { useLocale } from "@/hooks/useLocale";

export const BmsWebsite = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.website;

  return (
    <section className="bms-website" aria-labelledby="bms-website-title">
      <div className="bms-wrap">
        <header className="bms-website-head reveal">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-website-title" className="bms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bms-lead">{copy.body}</p>
          <ul className="bms-website-points">
            {copy.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ol className="bms-website-flow">
            {copy.flow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </header>

        <figure className="bms-website-frame reveal">
          <span className="bms-website-label">{copy.projectLabel}</span>
          <img
            src={BMS_ASSETS.website}
            alt={copy.imageAlt}
            width={1600}
            height={2200}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};
