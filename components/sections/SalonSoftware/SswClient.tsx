"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswClient = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.client;
  const ui = copy.ui;

  return (
    <section className="ssw-client" aria-labelledby="ssw-client-title">
      <div className="ssw-wrap ssw-client-grid">
        <div className="ssw-ui-panel ssw-ui-client reveal" aria-hidden="true">
          <div className="ssw-ui-client-head">
            <strong>{ui.name}</strong>
            <span>{ui.meta}</span>
          </div>
          <div className="ssw-ui-client-meta">
            <div>
              <span>Preferred</span>
              <strong>{ui.preferred}</strong>
            </div>
            <div>
              <span>Visits</span>
              <strong>{ui.visits}</strong>
            </div>
            <div>
              <span>Next</span>
              <strong>{ui.next}</strong>
            </div>
          </div>
          <p className="ssw-ui-notes">{ui.notes}</p>
          <ul className="ssw-ui-history">
            {ui.history.map((row) => (
              <li key={`${row.date}-${row.service}`}>
                <span>{row.date}</span>
                <strong>{row.service}</strong>
                <em>{row.stylist}</em>
              </li>
            ))}
          </ul>
        </div>

        <div className="ssw-client-copy reveal">
          <span className="ssw-meta on-dark">{copy.eyebrow}</span>
          <h2 id="ssw-client-title" className="ssw-display on-dark">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ssw-lead on-dark">{copy.body}</p>
        </div>
      </div>
    </section>
  );
};
