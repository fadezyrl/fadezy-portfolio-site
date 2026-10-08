"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsContent = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.content;

  return (
    <section className="sms-content reveal" aria-labelledby="sms-content-title">
      <div className="sms-wrap">
        <header className="sms-section-head">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-content-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{copy.body}</p>
        </header>

        <ol className="sms-pillar-list">
          {copy.pillars.map((pillar) => (
            <li key={pillar.num} className="sms-pillar">
              <span className="sms-num">{pillar.num}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
