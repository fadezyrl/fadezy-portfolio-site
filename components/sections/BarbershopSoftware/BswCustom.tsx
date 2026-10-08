"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswCustom = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.custom;

  return (
    <section className="bsw-custom" aria-labelledby="bsw-custom-title">
      <div className="bsw-wrap bsw-custom-frame reveal">
        <h2 id="bsw-custom-title" className="bsw-custom-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className="bsw-custom-body">
          {copy.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="bsw-custom-around">
          <p>{copy.around}</p>
          <ul>
            {copy.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
