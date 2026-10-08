"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswAudience = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.audience;

  return (
    <section className="bsw-audience" aria-labelledby="bsw-audience-title">
      <div className="bsw-wrap bsw-audience-frame reveal">
        <span className="bsw-meta">{copy.eyebrow}</span>
        <h2 id="bsw-audience-title" className="bsw-display">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <ul className="bsw-audience-list">
          {copy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
