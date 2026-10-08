"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswProblem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.problem;

  return (
    <section className="bsw-problem reveal" aria-labelledby="bsw-problem-title">
      <div className="bsw-wrap">
        <h2 id="bsw-problem-title" className="bsw-problem-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="bsw-problem-body">{copy.body}</p>
      </div>
    </section>
  );
};
