"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsBrand = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.brand;

  return (
    <section className="sms-trust" aria-labelledby="sms-brand-title">
      <div className="sms-wrap sms-trust-frame reveal">
        <span className="sms-meta">{copy.eyebrow}</span>
        <h2 id="sms-brand-title" className="sms-display">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="sms-lead">{copy.body}</p>
        <ul className="sms-trust-signals">
          {copy.signals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
