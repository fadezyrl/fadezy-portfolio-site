"use client";

import { useEffect, type ReactElement } from "react";
import { BMS_ASSETS } from "@/data/barbershop-marketing-seo";
import { CONTACT } from "@/data/contact";
import { useLocale } from "@/hooks/useLocale";

export const BmsHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".bms-hero");
    if (!root) return;

    if (reduceMotion) {
      root.classList.add("is-ready");
      return;
    }

    const frame = requestAnimationFrame(() => {
      root.classList.add("is-ready");
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bms-hero" aria-labelledby="bms-hero-title">
      <div className="bms-hero-stage">
        <div className="bms-hero-copy">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h1 id="bms-hero-title" className="bms-hero-h1">
            {copy.h1.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="bms-hero-statement">
            {copy.statement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="bms-hero-body">{copy.body}</p>
          <div className="bms-hero-ctas">
            <a href="#journey" className="bms-link-primary">
              {copy.ctaPrimary}
            </a>
            <a
              href={CONTACT.whatsappUrl}
              className="bms-link-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.ctaSecondary}
            </a>
          </div>
        </div>

        <figure className="bms-hero-visual">
          <div className="bms-hero-frame">
            <img
              src={BMS_ASSETS.hero}
              alt={copy.imageAlt}
              className="bms-hero-img"
              width={1600}
              height={2000}
              fetchPriority="high"
            />
            <div className="bms-hero-veil" aria-hidden="true" />
          </div>
          <aside className="bms-hero-ui" aria-hidden="true">
            <span className="bms-hero-ui-label">{copy.uiLabel}</span>
            <strong className="bms-hero-ui-query">{copy.uiQuery}</strong>
            <span className="bms-hero-ui-place">{copy.uiPlace}</span>
            <span className="bms-hero-ui-result">{copy.uiResult}</span>
          </aside>
        </figure>
      </div>
    </section>
  );
};
