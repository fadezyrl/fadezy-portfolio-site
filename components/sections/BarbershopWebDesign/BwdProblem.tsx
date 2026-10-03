"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BwdProblem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.problem;

  return (
    <section className="bwd-problem reveal" aria-labelledby="bwd-problem-label">
      <div className="bwd-wrap">
        <span className="bwd-meta on-dark" id="bwd-problem-label">
          {copy.label}
        </span>

        <div className="bwd-problem-grid">
          <h2 className="bwd-problem-display">
            <span>{copy.line1}</span>
            <span>{copy.line2}</span>
            <span className="is-soft">{copy.line3}</span>
          </h2>

          <h2 className="bwd-problem-display is-right">
            <span>{copy.line4}</span>
            <span>{copy.line5}</span>
            <span className="is-em">{copy.line6}</span>
          </h2>
        </div>

        <p className="bwd-problem-body">{copy.body}</p>
      </div>
    </section>
  );
};
