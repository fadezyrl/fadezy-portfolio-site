"use client";

import { useEffect, type ReactElement } from "react";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { START_PROJECT_PATH } from "@/data/start-project";
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
      <div className="swd-hero-stage">
        <div className="swd-hero-copy">
          <span className="swd-meta">{copy.label}</span>
          <h1 id="swd-hero-title" className="swd-hero-title">
            {copy.title}
          </h1>
          <p className="swd-hero-statement">{copy.statement}</p>
          <div className="swd-hero-ctas">
            <a href="#work" className="btn-text">
              {copy.ctaPrimary}
            </a>
            <a href={START_PROJECT_PATH} className="btn solid">
              {copy.ctaSecondary}
            </a>
          </div>
        </div>

        <figure className="swd-hero-preview">
          <div className="swd-hero-frame">
            <img
              src={SWD_ASSETS.heroPreview}
              alt={copy.previewAlt}
              className="swd-hero-img"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};
