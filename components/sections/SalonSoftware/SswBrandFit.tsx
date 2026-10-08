"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswBrandFit = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.brandFit;

  return (
    <section className="ssw-brandfit" aria-labelledby="ssw-brandfit-title">
      <div className="ssw-wrap">
        <header className="ssw-brandfit-head reveal">
          <span className="ssw-meta">{copy.eyebrow}</span>
          <h2 id="ssw-brandfit-title" className="ssw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ssw-lead">{copy.body}</p>
        </header>

        <ul className="ssw-brandfit-qualities reveal">
          {copy.qualities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ol className="ssw-stack reveal">
          {copy.stack.map((item, index) => (
            <li key={item}>
              <span>{item}</span>
              {index < copy.stack.length - 1 ? (
                <span className="ssw-stack-arrow" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
