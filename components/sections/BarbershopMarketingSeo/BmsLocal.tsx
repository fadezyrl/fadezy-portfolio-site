"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsLocal = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.local;

  return (
    <section className="bms-local reveal" aria-labelledby="bms-local-title">
      <div className="bms-wrap">
        <header className="bms-section-head">
          <span className="bms-meta on-dark">{copy.eyebrow}</span>
          <h2 id="bms-local-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="on-dark">{copy.body}</p>
        </header>

        <ol className="bms-flow" aria-label={copy.eyebrow}>
          {copy.flow.map((step, index) => (
            <li key={step}>
              <span>{step}</span>
              {index < copy.flow.length - 1 ? (
                <span className="bms-flow-arrow" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <ul className="bms-point-row">
          {copy.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
