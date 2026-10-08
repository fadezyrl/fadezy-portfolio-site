"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsSystem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.system;

  return (
    <section className="bms-system" aria-labelledby="bms-system-title">
      <div className="bms-wrap bms-system-frame reveal">
        <span className="bms-meta on-dark">{copy.eyebrow}</span>
        <h2 id="bms-system-title" className="bms-system-headline">
          {copy.headline}
        </h2>
        <p className="bms-system-body">{copy.body}</p>
        <ul className="bms-system-pillars">
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
