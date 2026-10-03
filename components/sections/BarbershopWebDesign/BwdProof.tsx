"use client";

import type { ReactElement } from "react";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { useLocale } from "@/hooks/useLocale";

export const BwdProof = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.proof;

  return (
    <section className="bwd-proof reveal" aria-labelledby="bwd-proof-label">
      <div className="bwd-wrap">
        <header className="bwd-section-head bwd-section-head--dark">
          <span className="bwd-meta on-dark" id="bwd-proof-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>

        <div className="bwd-proof-stage">
          <figure className="bwd-proof-before">
            <span className="bwd-proof-label">{copy.before}</span>
            <img
              src={BWD_ASSETS.beforeImage}
              alt={copy.beforeAlt}
              loading="lazy"
            />
          </figure>

          <div className="bwd-proof-rule" aria-hidden="true" />

          <figure className="bwd-proof-after">
            <span className="bwd-proof-label">{copy.after}</span>
            <img
              src={BWD_ASSETS.afterImage}
              alt={copy.afterAlt}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="bwd-proof-foot">
          <p>{copy.body}</p>
          <a href={BWD_ASSETS.workPath} className="btn-text on-dark">
            {copy.workLink} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
