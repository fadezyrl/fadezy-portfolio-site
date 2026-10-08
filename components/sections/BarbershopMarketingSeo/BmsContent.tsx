"use client";

import type { ReactElement } from "react";
import { BMS_ASSETS } from "@/data/barbershop-marketing-seo";
import { useLocale } from "@/hooks/useLocale";

export const BmsContent = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.content;
  const images = [BMS_ASSETS.contentA, BMS_ASSETS.contentB, BMS_ASSETS.contentC];

  return (
    <section className="bms-content" aria-labelledby="bms-content-title">
      <div className="bms-wrap">
        <header className="bms-content-head reveal">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-content-title" className="bms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bms-lead">{copy.body}</p>
        </header>

        <div className="bms-content-grid reveal">
          {images.map((src, index) => (
            <figure key={src} className={`bms-content-shot is-${index + 1}`}>
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

        <ul className="bms-content-themes reveal">
          {copy.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
