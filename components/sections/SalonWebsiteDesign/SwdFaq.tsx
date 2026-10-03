"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SwdFaq = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.faq;

  return (
    <section className="swd-faq reveal" aria-labelledby="swd-faq-label">
      <div className="swd-wrap">
        <header className="swd-section-head">
          <span className="swd-meta" id="swd-faq-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <div className="swd-faq-list">
          {copy.items.map((item, index) => (
            <article className="swd-faq-item" key={item.qLines.join("-")}>
              <span className="swd-faq-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>
                {item.qLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
