"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswDifference = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.difference;

  return (
    <section className="bsw-diff" aria-labelledby="bsw-diff-title">
      <div className="bsw-wrap bsw-diff-frame reveal">
        <span className="bsw-meta on-dark">{copy.eyebrow}</span>
        <h2 id="bsw-diff-title" className="bsw-diff-headline">
          {copy.headline}
        </h2>
        <p className="bsw-diff-body">{copy.body}</p>
        <ul className="bsw-diff-pillars">
          {copy.pillars.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="bsw-diff-statement">{copy.statement}</p>
      </div>
    </section>
  );
};
