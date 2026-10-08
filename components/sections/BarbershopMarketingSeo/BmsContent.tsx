"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsContent = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.content;

  return (
    <section className="bms-content reveal" aria-labelledby="bms-content-title">
      <div className="bms-wrap">
        <header className="bms-section-head">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-content-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{copy.body}</p>
        </header>

        <div className="bms-pillar-grid">
          {copy.pillars.map((pillar) => (
            <article key={pillar.title} className="bms-pillar">
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
