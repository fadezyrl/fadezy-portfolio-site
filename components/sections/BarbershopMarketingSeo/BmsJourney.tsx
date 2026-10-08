"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsJourney = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.journey;

  return (
    <section className="bms-journey" id="journey" aria-labelledby="bms-journey-title">
      <div className="bms-wrap">
        <header className="bms-journey-head reveal">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-journey-title" className="bms-display">
            {copy.headline}
          </h2>
        </header>

        <ol className="bms-journey-flow reveal">
          {copy.stages.map((stage, index) => (
            <li key={stage.label}>
              <span className="bms-journey-label">{stage.label}</span>
              <p>{stage.body}</p>
              {index < copy.stages.length - 1 ? (
                <span className="bms-journey-arrow" aria-hidden="true">
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
