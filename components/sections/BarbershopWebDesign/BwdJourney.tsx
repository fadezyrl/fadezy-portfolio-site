"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BwdJourney = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.journey;

  return (
    <section className="bwd-journey reveal" aria-labelledby="bwd-journey-label">
      <div className="bwd-wrap">
        <header className="bwd-section-head">
          <span className="bwd-meta" id="bwd-journey-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>
      </div>

      <div className="bwd-journey-rail" role="list">
        {copy.stages.map((stage, index) => (
          <div className="bwd-journey-stage" role="listitem" key={stage.title}>
            <span className="bwd-journey-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="bwd-journey-title">{stage.title}</p>
            <span className="bwd-journey-detail">{stage.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
