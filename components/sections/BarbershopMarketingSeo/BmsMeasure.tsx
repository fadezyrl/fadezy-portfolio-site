"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsMeasure = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.measure;

  return (
    <section className="bms-measure reveal" aria-labelledby="bms-measure-title">
      <div className="bms-wrap">
        <header className="bms-section-head">
          <span className="bms-meta on-dark">{copy.eyebrow}</span>
          <h2 id="bms-measure-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <ol className="bms-measure-list">
          {copy.items.map((item, index) => (
            <li key={item.title}>
              <span className="bms-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
