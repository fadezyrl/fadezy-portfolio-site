"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswOps = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.ops;

  return (
    <section className="bsw-ops" aria-labelledby="bsw-ops-title">
      <div className="bsw-wrap bsw-ops-frame reveal">
        <div className="bsw-ops-copy">
          <span className="bsw-meta">{copy.eyebrow}</span>
          <h2 id="bsw-ops-title" className="bsw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bsw-lead">{copy.body}</p>
        </div>

        <ul className="bsw-ops-rail">
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
