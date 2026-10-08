"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsVanity = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.vanity;

  return (
    <section className="bms-vanity" aria-labelledby="bms-vanity-title">
      <div className="bms-wrap bms-vanity-frame reveal">
        <h2 id="bms-vanity-title" className="bms-vanity-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="bms-vanity-body">{copy.body}</p>
        <ul className="bms-vanity-focus">
          {copy.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
