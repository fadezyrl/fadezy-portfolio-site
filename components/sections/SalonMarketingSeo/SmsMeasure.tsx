"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsMeasure = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.measure;

  return (
    <section className="sms-measure reveal" aria-labelledby="sms-measure-title">
      <div className="sms-wrap">
        <header className="sms-section-head">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-measure-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <ol className="sms-measure-list">
          {copy.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
