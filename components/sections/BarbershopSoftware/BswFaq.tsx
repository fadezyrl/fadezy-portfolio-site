"use client";

import { useState, type ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswFaq = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bsw-faq reveal" aria-labelledby="bsw-faq-label">
      <div className="bsw-wrap bsw-faq-layout">
        <header className="bsw-faq-head">
          <span className="bsw-meta" id="bsw-faq-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <div className="bsw-faq-list">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `bsw-faq-panel-${index}`;
            const buttonId = `bsw-faq-button-${index}`;

            return (
              <div
                className={`bsw-faq-item${isOpen ? " is-open" : ""}`}
                key={item.q}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="bsw-faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span className="bsw-faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="bsw-faq-panel"
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
