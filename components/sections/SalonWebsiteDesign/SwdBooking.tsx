"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SwdBooking = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.booking;

  return (
    <section className="swd-booking reveal" aria-labelledby="swd-booking-label">
      <div className="swd-wrap">
        <header className="swd-section-head">
          <span className="swd-meta" id="swd-booking-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>

        <ol className="swd-spine">
          {copy.stages.map((stage) => (
            <li className="swd-spine-step" key={stage.title}>
              <span className="swd-spine-node" aria-hidden="true" />
              <h3>{stage.title}</h3>
              <p>{stage.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
