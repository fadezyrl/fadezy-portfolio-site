"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsLocal = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.local;

  return (
    <section className="bms-local" aria-labelledby="bms-local-title">
      <div className="bms-wrap bms-local-grid">
        <div className="bms-local-copy reveal">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-local-title" className="bms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bms-lead">{copy.body}</p>
          <p className="bms-local-purpose">{copy.purpose}</p>
          <ul className="bms-query-list">
            {copy.queries.map((query) => (
              <li key={query}>{query}</li>
            ))}
          </ul>
        </div>

        <div className="bms-search-ui reveal" aria-hidden="true">
          <div className="bms-search-bar">
            <span>barber near me</span>
          </div>
          <div className="bms-search-map" />
          <ol className="bms-search-links">
            {copy.links.map((link) => (
              <li key={link.label}>
                <span>{link.label}</span>
                <strong>{link.title}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
