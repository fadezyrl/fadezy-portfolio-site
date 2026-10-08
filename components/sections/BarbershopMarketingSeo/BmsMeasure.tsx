"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsMeasure = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.measure;

  return (
    <section className="bms-measure" aria-labelledby="bms-measure-title">
      <div className="bms-wrap bms-measure-grid">
        <div className="bms-measure-copy reveal">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-measure-title" className="bms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bms-lead">{copy.body}</p>
          <p className="bms-measure-note">{copy.note}</p>
        </div>

        <ul className="bms-measure-list reveal">
          {copy.metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.label}</strong>
              <span>{metric.hint}</span>
              <div className="bms-measure-bar" aria-hidden="true">
                <i />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
