"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BwdProcess = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.process;

  return (
    <section className="bwd-process reveal" aria-labelledby="bwd-process-label">
      <div className="bwd-wrap">
        <header className="bwd-process-head">
          <span className="bwd-meta" id="bwd-process-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <ol className="bwd-process-rail">
          {copy.steps.map((step) => (
            <li className="bwd-process-step" key={step.num}>
              <span className="bwd-process-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
