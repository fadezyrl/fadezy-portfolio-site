"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswProblem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.problem;

  return (
    <section className="ssw-problem reveal" aria-labelledby="ssw-problem-title">
      <div className="ssw-wrap">
        <h2 id="ssw-problem-title" className="ssw-problem-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="ssw-problem-body">{copy.body}</p>
      </div>
    </section>
  );
};
