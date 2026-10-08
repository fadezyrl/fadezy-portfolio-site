"use client";

import { useEffect, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { SSW_ASSETS } from "@/data/salon-software";
import { useLocale } from "@/hooks/useLocale";

export const SswHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".ssw-hero");
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
    <section className="ssw-hero" aria-labelledby="ssw-hero-title">
      <div className="ssw-hero-stage">
        <div className="ssw-hero-copy">
          <span className="ssw-meta">{copy.eyebrow}</span>
          <h1 id="ssw-hero-title" className="ssw-hero-h1">
            {copy.h1}
          </h1>
          <p className="ssw-hero-title">
            {copy.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="ssw-hero-body">{copy.body}</p>
          <div className="ssw-hero-ctas">
            <a href="#system" className="ssw-link-primary">
              {copy.ctaPrimary}
            </a>
            <a
              href={CONTACT.whatsappUrl}
              className="ssw-link-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.ctaSecondary}
            </a>
          </div>
        </div>

        <figure className="ssw-hero-visual">
          <div className="ssw-hero-frame">
            <img
              src={SSW_ASSETS.hero}
              alt={copy.imageAlt}
              className="ssw-hero-img"
              width={1600}
              height={2000}
              fetchPriority="high"
            />
            <div className="ssw-hero-veil" aria-hidden="true" />
          </div>

          <aside className="ssw-hero-ui" aria-hidden="true">
            <span className="ssw-hero-ui-label">{copy.uiLabel}</span>
            <strong className="ssw-hero-ui-time">{copy.uiTime}</strong>
            <span className="ssw-hero-ui-service">{copy.uiService}</span>
            <span className="ssw-hero-ui-barber">{copy.uiStylist}</span>
          </aside>
        </figure>
      </div>
    </section>
  );
};
