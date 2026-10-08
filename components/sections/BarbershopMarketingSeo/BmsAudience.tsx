"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsAudience = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.audience;

  return (
    <section className="bms-audience" aria-labelledby="bms-audience-title">
      <div className="bms-wrap bms-audience-frame reveal">
        <span className="bms-meta">{copy.eyebrow}</span>
        <h2 id="bms-audience-title" className="bms-display">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <ul className="bms-audience-list">
          {copy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
