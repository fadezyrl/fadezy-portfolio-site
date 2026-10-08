"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsDifference = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.difference;

  return (
    <section className="bms-diff" aria-labelledby="bms-diff-title">
      <div className="bms-wrap bms-diff-frame reveal">
        <span className="bms-meta on-dark">{copy.eyebrow}</span>
        <h2 id="bms-diff-title" className="bms-diff-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="bms-diff-body">{copy.body}</p>
        <ul className="bms-diff-pillars">
          {copy.pillars.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="bms-diff-statement">{copy.statement}</p>
      </div>
    </section>
  );
};
