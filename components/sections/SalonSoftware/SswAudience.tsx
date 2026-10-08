"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswAudience = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.audience;

  return (
    <section className="ssw-audience" aria-labelledby="ssw-audience-title">
      <div className="ssw-wrap ssw-audience-frame reveal">
        <span className="ssw-meta">{copy.eyebrow}</span>
        <h2 id="ssw-audience-title" className="ssw-display">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <ul className="ssw-audience-list">
          {copy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
