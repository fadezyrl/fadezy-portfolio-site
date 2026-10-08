"use client";

import { useEffect, type ReactElement } from "react";
import { SMS_ASSETS } from "@/data/salon-marketing-seo";
import { CONTACT } from "@/data/contact";
import { useLocale } from "@/hooks/useLocale";

export const SmsHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".sms-hero");
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
    <section className="sms-hero" aria-labelledby="sms-hero-title">
      <div className="sms-hero-stage">
        <div className="sms-hero-copy">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h1 id="sms-hero-title" className="sms-hero-h1">
            {copy.h1.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="sms-hero-statement">
            {copy.statement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="sms-hero-body">{copy.body}</p>
          <div className="sms-hero-ctas">
            <a href="#journey" className="sms-link-primary">
              {copy.ctaPrimary}
            </a>
            <a
              href={CONTACT.whatsappUrl}
              className="sms-link-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.ctaSecondary}
            </a>
          </div>
        </div>

        <figure className="sms-hero-visual">
          <div className="sms-hero-frame">
            <img
              src={SMS_ASSETS.hero}
              alt={copy.imageAlt}
              className="sms-hero-img"
              width={1600}
              height={2000}
              fetchPriority="high"
            />
            <div className="sms-hero-veil" aria-hidden="true" />
          </div>
          <aside className="sms-hero-ui" aria-hidden="true">
            <span className="sms-hero-ui-label">{copy.uiLabel}</span>
            <strong className="sms-hero-ui-query">{copy.uiQuery}</strong>
            <span className="sms-hero-ui-place">{copy.uiPlace}</span>
            <span className="sms-hero-ui-result">{copy.uiResult}</span>
          </aside>
        </figure>
      </div>
    </section>
  );
};
