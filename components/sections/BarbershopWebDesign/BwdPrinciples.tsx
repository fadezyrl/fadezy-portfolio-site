"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BwdPrinciples = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.principles;

  return (
    <section
      className="bwd-principles reveal"
      aria-labelledby="bwd-principles-label"
    >
      <div className="bwd-wrap">
        <header className="bwd-principles-head">
          <span className="bwd-meta on-dark" id="bwd-principles-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <ol className="bwd-principles-list">
          {copy.items.map((item) => (
            <li className="bwd-principle" key={item.num}>
              <span className="bwd-principle-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
