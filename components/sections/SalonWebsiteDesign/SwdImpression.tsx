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
      <div className="swd-impression-copy">
        <span className="swd-meta on-dark" id="swd-impression-label">
          {copy.label}
        </span>
        <h2 className="swd-impression-display">
          <span>{copy.line1}</span>
          <span>{copy.line2}</span>
          <span>{copy.line3}</span>
          <span className="is-soft">{copy.line4}</span>
          <span className="is-em">{copy.line5}</span>
        </h2>
        <p>{copy.body}</p>
      </div>

      <figure className="swd-impression-media">
        <img
          src={SWD_ASSETS.impressionImage}
          alt={copy.imageAlt}
          loading="lazy"
        />
      </figure>
    </section>
  );
};
