"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsAudience = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.audience;

  return (
    <section className="sms-audience" aria-labelledby="sms-audience-title">
      <div className="sms-wrap sms-audience-frame reveal">
        <span className="sms-meta">{copy.eyebrow}</span>
        <h2 id="sms-audience-title" className="sms-display">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <ul className="sms-audience-list">
          {copy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
