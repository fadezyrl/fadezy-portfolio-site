"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswConnected = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.connected;

  return (
    <section
      className="bsw-connected reveal"
      aria-labelledby="bsw-connected-title"
    >
      <div className="bsw-wrap bsw-connected-layout">
        <header className="bsw-connected-head">
          <span className="bsw-meta on-dark">{copy.label}</span>
          <h2 id="bsw-connected-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{copy.body}</p>
        </header>

        <ol className="bsw-flow" aria-label={copy.label}>
          {copy.steps.map((step) => (
            <li key={step}>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
