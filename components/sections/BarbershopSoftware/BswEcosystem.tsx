"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswEcosystem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.ecosystem;

  return (
    <section className="bsw-eco" aria-labelledby="bsw-eco-title">
      <div className="bsw-wrap">
        <header className="bsw-eco-head reveal">
          <span className="bsw-meta">{copy.eyebrow}</span>
          <h2 id="bsw-eco-title" className="bsw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bsw-lead">{copy.body}</p>
        </header>

        <ol className="bsw-eco-flow reveal">
          {copy.layers.map((layer, index) => (
            <li key={layer.label}>
              <span className="bsw-eco-label">{layer.label}</span>
              <strong>{layer.title}</strong>
              {index < copy.layers.length - 1 ? (
                <span className="bsw-eco-rule" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
