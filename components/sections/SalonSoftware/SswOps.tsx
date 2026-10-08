"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswOps = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.ops;

  return (
    <section className="ssw-ops" aria-labelledby="ssw-ops-title">
      <div className="ssw-wrap ssw-ops-frame reveal">
        <div className="ssw-ops-copy">
          <span className="ssw-meta">{copy.eyebrow}</span>
          <h2 id="ssw-ops-title" className="ssw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ssw-lead">{copy.body}</p>
        </div>

        <ul className="ssw-ops-rail">
          {copy.items.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
