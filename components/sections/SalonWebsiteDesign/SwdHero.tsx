"use client";

import { useEffect, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

export const SwdHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".swd-hero");
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
    <section className="swd-hero" aria-labelledby="swd-hero-title">
      <div className="swd-hero-visual" aria-hidden="false">
        <img
          src={SWD_ASSETS.heroPreview}
          alt={copy.previewAlt}
          className="swd-hero-img"
        />
        <div className="swd-hero-veil" aria-hidden="true" />
      </div>

      <div className="swd-hero-content">
        <span className="swd-meta swd-hero-label">{copy.label}</span>
        <h1 id="swd-hero-title" className="swd-hero-title">
          {copy.title}
        </h1>
        <p className="swd-hero-statement">{copy.statement}</p>
        <div className="swd-hero-ctas">
          <a href="#work" className="btn-text swd-hero-link">
            {copy.ctaPrimary}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            className="btn solid swd-hero-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
};
