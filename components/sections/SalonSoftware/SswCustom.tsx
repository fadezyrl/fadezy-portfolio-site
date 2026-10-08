"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswCustom = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.custom;

  return (
    <section className="ssw-custom" aria-labelledby="ssw-custom-title">
      <div className="ssw-wrap ssw-custom-frame reveal">
        <h2 id="ssw-custom-title" className="ssw-custom-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className="ssw-custom-body">
          {copy.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="ssw-custom-around">
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
