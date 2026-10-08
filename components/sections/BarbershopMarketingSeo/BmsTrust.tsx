"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsTrust = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.trust;

  return (
    <section className="bms-trust" aria-labelledby="bms-trust-title">
      <div className="bms-wrap bms-trust-frame reveal">
        <span className="bms-meta">{copy.eyebrow}</span>
        <h2 id="bms-trust-title" className="bms-display">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="bms-lead">{copy.body}</p>
        <ul className="bms-trust-signals">
          {copy.signals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
