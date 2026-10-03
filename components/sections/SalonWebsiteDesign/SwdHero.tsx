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
    <section className="swd-hero" aria-label={copy.titleLine1}>
      <figure className="swd-hero-media">
        <img
          src={SWD_ASSETS.heroImage}
          alt={copy.imageAlt}
          className="swd-hero-img"
        />
      </figure>

      <div className="swd-hero-copy">
        <span className="swd-meta" aria-hidden="true">
          {copy.label}
        </span>

        <h1 className="swd-hero-title">
          <span className="swd-hero-line">{copy.titleLine1}</span>
          <span className="swd-hero-line is-serif">{copy.titleLine2}</span>
          <span className="swd-hero-line">{copy.titleLine3}</span>
        </h1>

        <p className="swd-hero-pull">
          {copy.pull.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <p className="swd-hero-statement">{copy.statement}</p>

        <div className="swd-hero-ctas">
          <a
            href={CONTACT.whatsappUrl}
            className="btn solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.ctaPrimary}
          </a>
          <a href={SWD_ASSETS.workPath} className="btn-text">
            {copy.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
};
