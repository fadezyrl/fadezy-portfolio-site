"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { SMS_ASSETS } from "@/data/salon-marketing-seo";
import { useLocale } from "@/hooks/useLocale";

export const SmsBooking = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.booking;

  return (
    <section className="sms-booking reveal" aria-labelledby="sms-booking-title">
      <div className="sms-wrap">
        <header className="sms-section-head">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-booking-title">{copy.headline}</h2>
          <p>{copy.body}</p>
        </header>

        <ol className="sms-journey" aria-label={copy.eyebrow}>
          {copy.flow.map((step, index) => (
            <li key={step}>
              <span className="sms-journey-step">{step}</span>
              {index < copy.flow.length - 1 ? (
                <span className="sms-journey-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="sms-booking-note">{copy.note}</p>
        <Link href={SMS_ASSETS.websitePath} className="sms-link-secondary">
          {copy.websiteLink}
        </Link>
      </div>
    </section>
  );
};
