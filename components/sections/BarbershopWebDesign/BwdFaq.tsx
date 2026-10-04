"use client";

import { useState, type ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BwdFaq = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bwd-faq reveal" aria-labelledby="bwd-faq-label">
      <div className="bwd-wrap bwd-faq-layout">
        <header className="bwd-faq-head">
          <span className="bwd-meta" id="bwd-faq-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <div className="bwd-faq-list">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `bwd-faq-panel-${index}`;
            const buttonId = `bwd-faq-button-${index}`;

            return (
              <div className={`bwd-faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="bwd-faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span className="bwd-faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="bwd-faq-panel"
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
