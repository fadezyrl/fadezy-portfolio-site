"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsServices = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.services;

  return (
    <section
      className="bms-services reveal"
      id="services"
      aria-labelledby="bms-services-title"
    >
      <div className="bms-wrap">
        <header className="bms-section-head">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-services-title">{copy.headline}</h2>
          <p>{copy.body}</p>
        </header>

        <ol className="bms-service-list">
          {copy.items.map((item) => (
            <li key={item.num} className="bms-service-item">
              <span className="bms-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
