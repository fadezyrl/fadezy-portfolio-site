"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const AbtBuilds = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.builds;

  return (
    <section className="abt-builds" aria-labelledby="abt-builds-title">
      <div className="abt-wrap">
        <header className="abt-builds-head reveal">
          <span className="abt-meta">{copy.eyebrow}</span>
          <h2 id="abt-builds-title" className="abt-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="abt-builds-note">{copy.note}</p>
        </header>

        <ol className="abt-builds-rail reveal">
          {copy.layers.map((layer) => (
            <li
              key={layer.label}
              className={layer.flagship ? "is-flagship" : undefined}
            >
              <strong>{layer.label}</strong>
              <span>{layer.body}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
