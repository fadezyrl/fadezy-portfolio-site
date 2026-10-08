"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswSystem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.system;
  const ui = copy.ui;

  return (
    <section className="ssw-system" id="system" aria-labelledby="ssw-system-title">
      <div className="ssw-wrap">
        <header className="ssw-system-head reveal">
          <span className="ssw-meta">{copy.eyebrow}</span>
          <h2 id="ssw-system-title" className="ssw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ssw-lead">{copy.body}</p>
        </header>

        <div className="ssw-system-stage reveal">
          <div className="ssw-ui-panel ssw-ui-overview" aria-hidden="true">
            <div className="ssw-ui-top">
              <span>{ui.title}</span>
              <span>{ui.today}</span>
            </div>
            <div className="ssw-ui-nav">
              <span className="is-active">{ui.overview}</span>
              <span>{ui.appointments}</span>
              <span>{ui.clients}</span>
              <span>{ui.stylists}</span>
            </div>
            <div className="ssw-ui-metrics">
              {ui.metrics.map((metric) => (
                <div key={metric.label} className="ssw-ui-metric">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
            <div className="ssw-ui-next">
              <p className="ssw-ui-next-label">{ui.nextUp}</p>
              <ul className="ssw-ui-slots">
                {ui.slots.map((slot) => (
                  <li key={`${slot.time}-${slot.name}`}>
                    <span>{slot.time}</span>
                    <strong>{slot.name}</strong>
                    <em>{slot.service}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="ssw-system-areas">
            {copy.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
