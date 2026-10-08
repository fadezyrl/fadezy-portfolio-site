"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const AbtExists = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.exists;

  return (
    <section className="abt-exists reveal" aria-labelledby="abt-exists-title">
      <div className="abt-wrap abt-exists-frame">
        <h2 id="abt-exists-title" className="abt-display">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="abt-exists-support">{copy.support}</p>
        <p className="abt-lead">{copy.body}</p>
        <ul className="abt-traits">
          {copy.traits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="abt-exists-close">{copy.close}</p>
      </div>
    </section>
  );
};
