"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { BMS_ASSETS } from "@/data/barbershop-marketing-seo";
import { useLocale } from "@/hooks/useLocale";

export const BmsBooking = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.booking;

  return (
    <section className="bms-booking reveal" aria-labelledby="bms-booking-title">
      <div className="bms-wrap">
        <header className="bms-section-head">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-booking-title">{copy.headline}</h2>
          <p>{copy.body}</p>
        </header>

        <ol className="bms-journey" aria-label={copy.eyebrow}>
          {copy.flow.map((step, index) => (
            <li key={step}>
              <span className="bms-journey-step">{step}</span>
              {index < copy.flow.length - 1 ? (
                <span className="bms-journey-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="bms-booking-note">{copy.note}</p>
        <Link href={BMS_ASSETS.websitePath} className="bms-link-secondary">
          {copy.websiteLink}
        </Link>
      </div>
    </section>
  );
};
