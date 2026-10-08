"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsApproach = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.approach;

  return (
    <section className="sms-approach" aria-labelledby="sms-approach-title">
      <div className="sms-wrap">
        <header className="sms-approach-head reveal">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-approach-title" className="sms-display">
            {copy.headline}
          </h2>
        </header>

        <ol className="sms-approach-rail reveal">
          {copy.steps.map((step) => (
            <li key={step.num}>
              <span>{step.num}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
