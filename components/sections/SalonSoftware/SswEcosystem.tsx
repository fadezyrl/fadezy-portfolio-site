"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswEcosystem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.ecosystem;

  return (
    <section className="ssw-eco" aria-labelledby="ssw-eco-title">
      <div className="ssw-wrap">
        <header className="ssw-eco-head reveal">
          <span className="ssw-meta">{copy.eyebrow}</span>
          <h2 id="ssw-eco-title" className="ssw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ssw-lead">{copy.body}</p>
        </header>

        <ol className="ssw-eco-flow ssw-eco-flow-six reveal">
          {copy.layers.map((layer, index) => (
            <li key={layer.label}>
              <span className="ssw-eco-label">{layer.label}</span>
              <strong>{layer.title}</strong>
              {index < copy.layers.length - 1 ? (
                <span className="ssw-eco-rule" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
