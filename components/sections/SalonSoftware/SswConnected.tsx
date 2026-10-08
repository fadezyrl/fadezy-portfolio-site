"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswConnected = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.connected;

  return (
    <section
      className="ssw-connected reveal"
      aria-labelledby="ssw-connected-title"
    >
      <div className="ssw-wrap ssw-connected-layout">
        <header className="ssw-connected-head">
          <span className="ssw-meta">{copy.label}</span>
          <h2 id="ssw-connected-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{copy.body}</p>
        </header>

        <ol className="ssw-flow" aria-label={copy.label}>
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
