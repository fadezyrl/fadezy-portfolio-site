"use client";

import type { ReactElement } from "react";
import { SMS_ASSETS } from "@/data/salon-marketing-seo";
import { useLocale } from "@/hooks/useLocale";

export const SmsContent = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.content;
  const images = [SMS_ASSETS.contentA, SMS_ASSETS.contentB, SMS_ASSETS.contentC];

  return (
    <section className="sms-content" aria-labelledby="sms-content-title">
      <div className="sms-wrap">
        <header className="sms-content-head reveal">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-content-title" className="sms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="sms-lead">{copy.body}</p>
        </header>

        <div className="sms-content-grid reveal">
          {images.map((src, index) => (
            <figure key={src} className={`sms-content-shot is-${index + 1}`}>
              <img
                src={src}
                alt={copy.imageAlts[index] ?? ""}
                width={1200}
                height={1500}
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <ul className="sms-content-themes reveal">
          {copy.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
