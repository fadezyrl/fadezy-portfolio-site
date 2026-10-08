"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsJourney = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.journey;

  return (
    <section className="sms-journey" id="journey" aria-labelledby="sms-journey-title">
      <div className="sms-wrap">
        <header className="sms-journey-head reveal">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-journey-title" className="sms-display">
            {copy.headline}
          </h2>
        </header>

        <ol className="sms-journey-flow reveal">
          {copy.stages.map((stage, index) => (
            <li key={stage.label}>
              <span className="sms-journey-label">{stage.label}</span>
              <p>{stage.body}</p>
              {index < copy.stages.length - 1 ? (
                <span className="sms-journey-arrow" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
