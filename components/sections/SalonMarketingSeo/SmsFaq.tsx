"use client";

import { useState, type ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsFaq = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="sms-faq reveal" aria-labelledby="sms-faq-title">
      <div className="sms-wrap sms-faq-layout">
        <header className="sms-section-head">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-faq-title">{copy.headline}</h2>
        </header>

        <div className="sms-faq-list">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `sms-faq-panel-${index}`;
            const buttonId = `sms-faq-button-${index}`;

            return (
              <div
                className={`sms-faq-item${isOpen ? " is-open" : ""}`}
                key={item.q}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="sms-faq-trigger"
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
                  className="sms-faq-panel"
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
