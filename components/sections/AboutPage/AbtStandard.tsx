"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const AbtStandard = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.standard;

  return (
    <section className="abt-standard" aria-labelledby="abt-standard-title">
      <div className="abt-wrap">
        <header className="abt-standard-head reveal">
          <span className="abt-meta">{copy.eyebrow}</span>
          <h2 id="abt-standard-title" className="abt-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <ol className="abt-principles reveal">
          {copy.principles.map((item) => (
            <li key={item.num}>
              <span className="abt-principle-num">{item.num}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
