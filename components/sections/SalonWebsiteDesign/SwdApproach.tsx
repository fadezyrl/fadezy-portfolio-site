"use client";

import type { ReactElement } from "react";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

export const SwdApproach = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.approach;

  return (
    <section
      className="swd-approach reveal"
      aria-labelledby="swd-approach-label"
    >
      <div className="swd-approach-copy">
        <span className="swd-meta" id="swd-approach-label">
          {copy.label}
        </span>
        <h2>
          {copy.headline}
          <em>{copy.headlineEm}</em>
        </h2>
        <p>{copy.body}</p>
      </div>

      <div className="swd-approach-media">
        <img
          src={SWD_ASSETS.approachImage}
          alt={copy.imageAlt}
          loading="lazy"
        />
      </div>
    </section>
  );
};
