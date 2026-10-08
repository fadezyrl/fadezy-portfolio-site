"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswBooking = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.booking;
  const ui = copy.ui;

  return (
    <section className="ssw-booking" aria-labelledby="ssw-booking-title">
      <div className="ssw-wrap ssw-booking-grid">
        <div className="ssw-booking-copy reveal">
          <span className="ssw-meta">{copy.eyebrow}</span>
          <h2 id="ssw-booking-title" className="ssw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ssw-lead">{copy.body}</p>

          <ol className="ssw-journey">
            {copy.steps.map((step) => (
              <li key={step.num}>
                <span className="ssw-journey-num">{step.num}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="ssw-ui-panel ssw-ui-booking reveal" aria-hidden="true">
          <p className="ssw-ui-booking-title">{ui.title}</p>
          <div className="ssw-ui-field">
            <span>Service</span>
            <strong>{ui.service}</strong>
          </div>
          <div className="ssw-ui-field">
            <span>Stylist</span>
            <strong>{ui.stylist}</strong>
          </div>
          <div className="ssw-ui-field">
            <span>Time</span>
            <strong>{ui.time}</strong>
          </div>
          <div className="ssw-ui-times">
            <span>09:30</span>
            <span className="is-active">11:00</span>
            <span>13:30</span>
            <span>16:00</span>
          </div>
          <span className="ssw-ui-confirm">{ui.confirm}</span>
        </div>
      </div>
    </section>
  );
};
