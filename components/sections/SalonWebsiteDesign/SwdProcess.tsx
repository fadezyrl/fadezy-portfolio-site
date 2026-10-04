"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SwdProcess = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.process;

  return (
    <section className="swd-process reveal" aria-labelledby="swd-process-label">
      <div className="swd-wrap">
        <header className="swd-process-head">
          <span className="swd-meta" id="swd-process-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <ol className="swd-process-rail">
          {copy.steps.map((step) => (
            <li className="swd-process-step" key={step.num}>
              <span className="swd-process-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
