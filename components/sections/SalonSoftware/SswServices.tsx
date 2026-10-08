"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswServices = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.services;

  return (
    <section className="ssw-services" aria-labelledby="ssw-services-title">
      <div className="ssw-wrap">
        <header className="ssw-services-head reveal">
          <span className="ssw-meta">{copy.eyebrow}</span>
          <h2 id="ssw-services-title" className="ssw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ssw-lead">{copy.body}</p>
        </header>

        <div className="ssw-services-rail reveal" aria-hidden="true">
          <div className="ssw-services-labels">
            <span>Service</span>
            <span>Duration</span>
            <span>From</span>
            <span>Stylists</span>
          </div>
          <ul className="ssw-services-rows">
            {copy.rows.map((row) => (
              <li key={row.service}>
                <strong>{row.service}</strong>
                <span>{row.duration}</span>
                <span>{row.price}</span>
                <em>{row.stylist}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
