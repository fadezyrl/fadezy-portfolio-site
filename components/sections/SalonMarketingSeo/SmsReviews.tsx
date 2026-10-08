"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsReviews = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.reviews;

  return (
    <section className="sms-reviews" aria-labelledby="sms-reviews-title">
      <div className="sms-wrap sms-reviews-frame reveal">
        <span className="sms-meta on-dark">{copy.eyebrow}</span>
        <h2 id="sms-reviews-title" className="sms-display on-dark">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="sms-lead on-dark">{copy.body}</p>
        <ul className="sms-reviews-signals">
          {copy.signals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
