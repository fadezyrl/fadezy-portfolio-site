"use client";

import { useEffect, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
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
    <section className="bwd-hero" aria-label={copy.titleLine1}>
      <div className="bwd-hero-copy">
        <span className="bwd-meta" aria-hidden="true">
          {copy.label}
        </span>

        <h1 className="bwd-hero-title">
          <span className="bwd-hero-title-line">{copy.titleLine1}</span>
          <span className="bwd-hero-title-line is-serif">
            {copy.titleLine2}
          </span>
        </h1>

        <p className="bwd-hero-statement">{copy.statement}</p>

        <div className="bwd-hero-ctas">
          <a
            href={CONTACT.whatsappUrl}
            className="btn solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.ctaPrimary}
          </a>
          <a href={BWD_ASSETS.workPath} className="btn-text">
            {copy.ctaSecondary}
          </a>
        </div>
      </div>

      <figure className="bwd-hero-media">
        <img
          src={BWD_ASSETS.heroImage}
          alt={copy.imageAlt}
          className="bwd-hero-img"
        />
      </figure>
    </section>
  );
};
