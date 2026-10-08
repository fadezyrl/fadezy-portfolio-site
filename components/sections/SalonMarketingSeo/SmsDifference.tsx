"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsDifference = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.difference;

  return (
    <section className="sms-diff" aria-labelledby="sms-diff-title">
      <div className="sms-wrap sms-diff-frame reveal">
        <span className="sms-meta on-dark">{copy.eyebrow}</span>
        <h2 id="sms-diff-title" className="sms-diff-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="sms-diff-body">{copy.body}</p>
        <ul className="sms-diff-pillars">
          {copy.pillars.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="sms-diff-statement">{copy.statement}</p>
      </div>
    </section>
  );
};
