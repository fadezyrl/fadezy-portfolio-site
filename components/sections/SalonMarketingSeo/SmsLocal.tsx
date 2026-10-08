"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsLocal = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.local;

  return (
    <section className="sms-local" aria-labelledby="sms-local-title">
      <div className="sms-wrap sms-local-grid">
        <div className="sms-local-copy reveal">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-local-title" className="sms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="sms-lead">{copy.body}</p>
          <p className="sms-local-purpose">{copy.purpose}</p>
          <ul className="sms-query-list">
            {copy.queries.map((query) => (
              <li key={query}>{query}</li>
            ))}
          </ul>
        </div>

        <div className="sms-search-ui reveal" aria-hidden="true">
          <div className="sms-search-bar">
            <span>barber near me</span>
          </div>
          <div className="sms-search-map" />
          <ol className="sms-search-links">
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
