"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswClient = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.client;
  const ui = copy.ui;

  return (
    <section className="bsw-client" aria-labelledby="bsw-client-title">
      <div className="bsw-wrap bsw-client-grid">
        <div className="bsw-ui-panel bsw-ui-client reveal" aria-hidden="true">
          <div className="bsw-ui-client-head">
            <strong>{ui.name}</strong>
            <span>{ui.meta}</span>
          </div>
          <div className="bsw-ui-client-meta">
            <div>
              <span>Preferred</span>
              <strong>{ui.preferred}</strong>
            </div>
            <div>
              <span>Visits</span>
              <strong>{ui.visits}</strong>
            </div>
            <div>
              <span>Last visit</span>
              <strong>{ui.lastVisit}</strong>
            </div>
          </div>
          <p className="bsw-ui-notes">{ui.notes}</p>
          <ul className="bsw-ui-history">
            {ui.history.map((row) => (
              <li key={`${row.date}-${row.service}`}>
                <span>{row.date}</span>
                <strong>{row.service}</strong>
                <em>{row.barber}</em>
              </li>
            ))}
          </ul>
        </div>

        <div className="bsw-client-copy reveal">
          <span className="bsw-meta on-dark">{copy.eyebrow}</span>
          <h2 id="bsw-client-title" className="bsw-display on-dark">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bsw-lead on-dark">{copy.body}</p>
        </div>
      </div>
    </section>
  );
};
