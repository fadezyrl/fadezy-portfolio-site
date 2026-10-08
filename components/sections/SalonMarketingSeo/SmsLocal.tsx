"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsLocal = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.local;

  return (
    <section className="sms-local reveal" aria-labelledby="sms-local-title">
      <div className="sms-wrap sms-local-layout">
        <header className="sms-section-head">
          <span className="sms-meta on-dark">{copy.eyebrow}</span>
          <h2 id="sms-local-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="on-dark">{copy.body}</p>
        </header>

        <div className="sms-local-side">
          <ol className="sms-flow" aria-label={copy.eyebrow}>
            {copy.flow.map((step, index) => (
              <li key={step}>
                <span className="sms-flow-step">{step}</span>
                {index < copy.flow.length - 1 ? (
                  <span className="sms-flow-arrow" aria-hidden="true">
                    ↓
                  </span>
                ) : null}
              </li>
            ))}
          </ol>

          <ul className="sms-point-row">
            {copy.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
