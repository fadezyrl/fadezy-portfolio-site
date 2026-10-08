"use client";

import type { ReactElement } from "react";
import { SMS_ASSETS } from "@/data/salon-marketing-seo";
import { useLocale } from "@/hooks/useLocale";

export const SmsWebsite = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.website;

  return (
    <section className="sms-website" aria-labelledby="sms-website-title">
      <div className="sms-wrap">
        <header className="sms-website-head reveal">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-website-title" className="sms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="sms-lead">{copy.body}</p>
          <ul className="sms-website-points">
            {copy.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ol className="sms-website-flow">
            {copy.flow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </header>

        <figure className="sms-website-frame reveal">
          <span className="sms-website-label">{copy.projectLabel}</span>
          <img
            src={SMS_ASSETS.website}
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
