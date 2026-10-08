"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswBooking = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.booking;
  const ui = copy.ui;

  return (
    <section className="bsw-booking" aria-labelledby="bsw-booking-title">
      <div className="bsw-wrap bsw-booking-grid">
        <div className="bsw-booking-copy reveal">
          <span className="bsw-meta">{copy.eyebrow}</span>
          <h2 id="bsw-booking-title" className="bsw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bsw-lead">{copy.body}</p>

          <ol className="bsw-journey">
            {copy.steps.map((step) => (
              <li key={step.num}>
                <span className="bsw-journey-num">{step.num}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="bsw-ui-panel bsw-ui-booking reveal" aria-hidden="true">
          <p className="bsw-ui-booking-title">{ui.title}</p>
          <div className="bsw-ui-field">
            <span>Service</span>
            <strong>{ui.service}</strong>
          </div>
          <div className="bsw-ui-field">
            <span>Barber</span>
            <strong>{ui.barber}</strong>
          </div>
          <div className="bsw-ui-field">
            <span>Time</span>
            <strong>{ui.time}</strong>
          </div>
          <div className="bsw-ui-times">
            <span>13:00</span>
            <span className="is-active">14:30</span>
            <span>16:00</span>
            <span>17:30</span>
          </div>
          <span className="bsw-ui-confirm">{ui.confirm}</span>
        </div>
      </div>
    </section>
  );
};
