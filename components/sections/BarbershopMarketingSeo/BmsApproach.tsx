"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsApproach = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.approach;

  return (
    <section className="bms-approach" aria-labelledby="bms-approach-title">
      <div className="bms-wrap">
        <header className="bms-approach-head reveal">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-approach-title" className="bms-display">
            {copy.headline}
          </h2>
        </header>

        <ol className="bms-approach-rail reveal">
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
