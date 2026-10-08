"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswDifference = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.difference;

  return (
    <section className="ssw-diff" aria-labelledby="ssw-diff-title">
      <div className="ssw-wrap ssw-diff-frame reveal">
        <span className="ssw-meta on-dark">{copy.eyebrow}</span>
        <h2 id="ssw-diff-title" className="ssw-diff-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="ssw-diff-body">{copy.body}</p>
        <ul className="ssw-diff-pillars">
          {copy.pillars.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="ssw-diff-statement">{copy.statement}</p>
      </div>
    </section>
  );
};
