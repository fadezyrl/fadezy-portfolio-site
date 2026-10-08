"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsMeasure = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.measure;

  return (
    <section className="sms-measure" aria-labelledby="sms-measure-title">
      <div className="sms-wrap sms-measure-grid">
        <div className="sms-measure-copy reveal">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-measure-title" className="sms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="sms-lead">{copy.body}</p>
          <p className="sms-measure-note">{copy.note}</p>
        </div>

        <ul className="sms-measure-list reveal">
          {copy.metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.label}</strong>
              <span>{metric.hint}</span>
              <div className="sms-measure-bar" aria-hidden="true">
                <i />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
