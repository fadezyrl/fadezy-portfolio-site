"use client";

import { useEffect, type ReactElement } from "react";
import { BSW_ASSETS } from "@/data/barbershop-software";
import { CONTACT } from "@/data/contact";
import { useLocale } from "@/hooks/useLocale";

export const BswHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".bsw-hero");
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
    <section className="bsw-hero" aria-labelledby="bsw-hero-title">
      <div className="bsw-hero-media" aria-hidden="true">
        <img
          src={BSW_ASSETS.hero}
          alt=""
          className="bsw-hero-img"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="bsw-hero-veil" />
      </div>

      <div className="bsw-wrap bsw-hero-copy">
        <span className="bsw-meta on-dark">{copy.label}</span>
        <h1 id="bsw-hero-title" className="bsw-hero-title">
          {copy.h1}
        </h1>
        <p className="bsw-hero-body">{copy.body}</p>
        <div className="bsw-hero-ctas">
          <a
            href={CONTACT.whatsappUrl}
            className="bsw-link-secondary on-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.ctaPrimary}
          </a>
          <a href="#capabilities" className="bsw-link-primary on-dark">
            {copy.ctaSecondary}
          </a>
        </div>
      </div>

      <span className="bsw-sr-only">{copy.imageAlt}</span>
    </section>
  );
};
