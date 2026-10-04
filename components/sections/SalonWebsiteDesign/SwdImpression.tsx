"use client";

import type { ReactElement } from "react";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

export const SwdImpression = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.impression;

  return (
    <section
      className="swd-impression reveal"
      aria-labelledby="swd-impression-label"
    >
      <div className="swd-impression-pin">
        <div className="swd-impression-media">
          <img
            src={SWD_ASSETS.impressionImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className="swd-impression-veil" aria-hidden="true" />
        </div>

        <div className="swd-wrap swd-impression-content">
          <header className="swd-impression-head">
            <span className="swd-meta on-dark" id="swd-impression-label">
              {copy.label}
            </span>
            <h2>{copy.headline}</h2>
            <p>{copy.body}</p>
          </header>

          <ol className="swd-impression-stages">
            {copy.stages.map((stage, index) => (
              <li key={stage.title} className="swd-impression-stage">
                <span className="swd-impression-stage-title">{stage.title}</span>
                <span className="swd-impression-stage-detail">{stage.detail}</span>
                {index < copy.stages.length - 1 ? (
                  <span className="swd-impression-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>

          <ol className="swd-impression-path">
            {copy.path.map((step) => (
              <li key={`${step.from}-${step.to}`} className="swd-impression-path-item">
                <span>{step.from}</span>
                <span className="swd-impression-path-line" aria-hidden="true" />
                <span>{step.to}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
