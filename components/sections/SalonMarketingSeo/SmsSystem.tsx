"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsSystem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.system;

  return (
    <section className="sms-system" aria-labelledby="sms-system-title">
      <div className="sms-wrap sms-system-frame reveal">
        <span className="sms-meta on-dark">{copy.eyebrow}</span>
        <h2 id="sms-system-title" className="sms-system-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="sms-system-body">{copy.body}</p>
        <ul className="sms-system-pillars">
          {copy.pillars.map((item, index) => (
            <li key={item}>
              <span>{item}</span>
              {index < copy.pillars.length - 1 ? (
                <em aria-hidden="true">+</em>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
