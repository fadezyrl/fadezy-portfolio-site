"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsIntro = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.intro;

  return (
    <section className="sms-intro reveal" aria-labelledby="sms-intro-title">
      <div className="sms-wrap sms-intro-frame">
        <h2 id="sms-intro-title" className="sms-intro-statement">
          {copy.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <div className="sms-intro-side">
          <p className="sms-intro-body">{copy.body}</p>
          <ul className="sms-editorial-list">
            {copy.steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
