"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BwdSpec = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.spec;

  return (
    <section className="bwd-spec reveal" aria-labelledby="bwd-spec-label">
      <div className="bwd-wrap">
        <header className="bwd-section-head bwd-section-head--dark">
          <span className="bwd-meta on-dark" id="bwd-spec-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>

        <div className="bwd-spec-sheet">
          {copy.items.map((item) => (
            <article className="bwd-spec-row" key={item.num}>
              <span className="bwd-spec-num">{item.num}</span>
              <h3 className="bwd-spec-title">{item.title}</h3>
              <p className="bwd-spec-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
