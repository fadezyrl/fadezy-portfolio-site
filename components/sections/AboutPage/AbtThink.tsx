"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const AbtThink = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.think;

  return (
    <section className="abt-think" aria-labelledby="abt-think-title">
      <div className="abt-wrap">
        <h2 id="abt-think-title" className="abt-display reveal">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <ol className="abt-think-flow reveal">
          {copy.steps.map((step, index) => (
            <li key={step.label}>
              <strong>{step.label}</strong>
              <p>{step.body}</p>
              {index < copy.steps.length - 1 ? (
                <span className="abt-think-arrow" aria-hidden="true">
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
