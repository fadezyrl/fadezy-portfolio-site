"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswSystem = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.system;
  const ui = copy.ui;

  return (
    <section className="bsw-system" id="system" aria-labelledby="bsw-system-title">
      <div className="bsw-wrap">
        <header className="bsw-system-head reveal">
          <span className="bsw-meta">{copy.eyebrow}</span>
          <h2 id="bsw-system-title" className="bsw-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bsw-lead">{copy.body}</p>
        </header>

        <div className="bsw-system-stage reveal">
          <div className="bsw-ui-panel bsw-ui-overview" aria-hidden="true">
            <div className="bsw-ui-top">
              <span>{ui.title}</span>
              <span>{ui.today}</span>
            </div>
            <div className="bsw-ui-nav">
              <span className="is-active">{ui.overview}</span>
              <span>{ui.appointments}</span>
              <span>{ui.clients}</span>
              <span>{ui.staff}</span>
            </div>
            <div className="bsw-ui-metrics">
              {ui.metrics.map((metric) => (
                <div key={metric.label} className="bsw-ui-metric">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
            <div className="bsw-ui-next">
              <p className="bsw-ui-next-label">{ui.nextUp}</p>
              <ul className="bsw-ui-slots">
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

          <ul className="bsw-system-areas">
            {copy.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
