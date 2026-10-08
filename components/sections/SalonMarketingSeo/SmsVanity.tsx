"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsVanity = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.vanity;

  return (
    <section className="sms-vanity" aria-labelledby="sms-vanity-title">
      <div className="sms-wrap sms-vanity-frame reveal">
        <h2 id="sms-vanity-title" className="sms-vanity-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="sms-vanity-body">{copy.body}</p>
        <ul className="sms-vanity-focus">
          {copy.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
