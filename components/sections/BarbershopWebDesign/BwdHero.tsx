"use client";

import { useEffect, type ReactElement } from "react";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const BwdHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".bwd-hero");
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
    <section className="bwd-hero" aria-labelledby="bwd-hero-title">
      <div className="bwd-hero-stage">
        <div className="bwd-hero-copy">
          <span className="bwd-meta">{copy.label}</span>
          <h1 id="bwd-hero-title" className="bwd-hero-title">
            {copy.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="bwd-hero-statement">{copy.statement}</p>
          <div className="bwd-hero-ctas">
            <a href="#work" className="bwd-link-primary">
              {copy.ctaPrimary}
            </a>
            <a href={START_PROJECT_PATH} className="bwd-link-secondary">
              {copy.ctaSecondary}
            </a>
          </div>
        </div>

        <figure className="bwd-hero-preview">
          <div className="bwd-hero-frame">
            <img
              src={BWD_ASSETS.heroPreview}
              alt={copy.previewAlt}
              className="bwd-hero-img"
              width={1600}
              height={1200}
              fetchPriority="high"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};
