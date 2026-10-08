"use client";

import { useState, type ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswFaq = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="ssw-faq reveal" aria-labelledby="ssw-faq-label">
      <div className="ssw-wrap ssw-faq-layout">
        <header className="ssw-faq-head">
          <span className="ssw-meta" id="ssw-faq-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <div className="ssw-faq-list">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `ssw-faq-panel-${index}`;
            const buttonId = `ssw-faq-button-${index}`;

            return (
              <div
                className={`ssw-faq-item${isOpen ? " is-open" : ""}`}
                key={item.q}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="ssw-faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span className="ssw-faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="ssw-faq-panel"
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
