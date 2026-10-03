"use client";

import type { ReactElement } from "react";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { useLocale } from "@/hooks/useLocale";

export const BwdApproach = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.approach;

  return (
    <section
      className="bwd-approach reveal"
      aria-labelledby="bwd-approach-label"
    >
      <div className="bwd-approach-media" aria-hidden="false">
        <img
          src={BWD_ASSETS.approachImage}
          alt={copy.imageAlt}
          loading="lazy"
        />
      </div>

      <div className="bwd-approach-copy">
        <span className="bwd-meta" id="bwd-approach-label">
          {copy.label}
        </span>
        <h2>
          {copy.headline}
          <em>{copy.headlineEm}</em>
        </h2>
        <p>{copy.body}</p>
      </div>
    </section>
  );
};
