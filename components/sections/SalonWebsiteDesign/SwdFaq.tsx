"use client";

import { useState, type ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SwdFaq = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="swd-faq reveal" aria-labelledby="swd-faq-label">
      <div className="swd-wrap swd-faq-layout">
        <header className="swd-faq-head">
          <span className="swd-meta" id="swd-faq-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <div className="swd-faq-list">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `swd-faq-panel-${index}`;
            const buttonId = `swd-faq-button-${index}`;

            return (
              <div
                className={`swd-faq-item${isOpen ? " is-open" : ""}`}
                key={item.q}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="swd-faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span className="swd-faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="swd-faq-panel"
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
