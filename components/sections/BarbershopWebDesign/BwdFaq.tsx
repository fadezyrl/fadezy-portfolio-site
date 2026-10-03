"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BwdFaq = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.faq;

  return (
    <section className="bwd-faq reveal" aria-labelledby="bwd-faq-label">
      <div className="bwd-wrap">
        <header className="bwd-section-head">
          <span className="bwd-meta" id="bwd-faq-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <div className="bwd-faq-list">
          {copy.items.map((item, index) => (
            <article className="bwd-faq-item" key={item.q}>
              <span className="bwd-faq-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
