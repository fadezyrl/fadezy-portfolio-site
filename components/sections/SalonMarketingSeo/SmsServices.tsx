"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsServices = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.services;

  return (
    <section
      className="sms-services reveal"
      id="services"
      aria-labelledby="sms-services-title"
    >
      <div className="sms-wrap">
        <header className="sms-section-head">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-services-title">{copy.headline}</h2>
          <p>{copy.body}</p>
        </header>

        <ol className="sms-service-list">
          {copy.items.map((item) => (
            <li key={item.num} className="sms-service-item">
              <span className="sms-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
