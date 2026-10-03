"use client";

import type { ReactElement } from "react";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

export const SwdTransform = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.transform;

  return (
    <section
      className="swd-transform reveal"
      aria-labelledby="swd-transform-label"
    >
      <div className="swd-wrap">
        <header className="swd-section-head swd-section-head--dark">
          <span className="swd-meta on-dark" id="swd-transform-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>

        <div className="swd-transform-stack">
          <figure className="swd-transform-before">
            <span className="swd-transform-label">{copy.before}</span>
            <img
              src={SWD_ASSETS.beforeImage}
              alt={copy.beforeAlt}
              loading="lazy"
            />
          </figure>

          <figure className="swd-transform-after">
            <span className="swd-transform-label">{copy.after}</span>
            <div className="swd-transform-reveal">
              <img
                src={SWD_ASSETS.afterImage}
                alt={copy.afterAlt}
                loading="lazy"
              />
            </div>
          </figure>
        </div>

        <div className="swd-transform-foot">
          <p>{copy.body}</p>
          <a href={SWD_ASSETS.workPath} className="btn-text on-dark">
            {copy.workLink} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
