"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswBrandFit = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.brandFit;

  return (
    <section className="bsw-brandfit" aria-labelledby="bsw-brandfit-title">
      <div className="bsw-wrap">
        <header className="bsw-brandfit-head reveal">
          <span className="bsw-meta">{copy.eyebrow}</span>
          <h2 id="bsw-brandfit-title" className="bsw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bsw-lead">{copy.body}</p>
        </header>

        <ul className="bsw-brandfit-qualities reveal">
          {copy.qualities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ol className="bsw-stack reveal">
          {copy.stack.map((item, index) => (
            <li key={item}>
              <span>{item}</span>
              {index < copy.stack.length - 1 ? (
                <span className="bsw-stack-arrow" aria-hidden="true">
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
