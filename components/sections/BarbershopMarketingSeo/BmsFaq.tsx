"use client";

import { useState, type ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsFaq = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bms-faq reveal" aria-labelledby="bms-faq-title">
      <div className="bms-wrap bms-faq-layout">
        <header className="bms-section-head">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-faq-title">{copy.headline}</h2>
        </header>

        <div className="bms-faq-list">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `bms-faq-panel-${index}`;
            const buttonId = `bms-faq-button-${index}`;

            return (
              <div
                className={`bms-faq-item${isOpen ? " is-open" : ""}`}
                key={item.q}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="bms-faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="bms-faq-panel"
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
