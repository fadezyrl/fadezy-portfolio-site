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
      <div className="bsw-hero-stage">
        <div className="bsw-hero-copy">
          <span className="bsw-meta">{copy.eyebrow}</span>
          <h1 id="bsw-hero-title" className="bsw-hero-title">
            {copy.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="bsw-hero-body">{copy.body}</p>
          <div className="bsw-hero-ctas">
            <a href="#system" className="bsw-link-primary">
              {copy.ctaPrimary}
            </a>
            <a
              href={CONTACT.whatsappUrl}
              className="bsw-link-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.ctaSecondary}
            </a>
          </div>
        </div>

        <figure className="bsw-hero-visual">
          <div className="bsw-hero-frame">
            <img
              src={BSW_ASSETS.hero}
              alt={copy.imageAlt}
              className="bsw-hero-img"
              width={1600}
              height={2000}
              fetchPriority="high"
            />
            <div className="bsw-hero-veil" aria-hidden="true" />
          </div>

          <aside className="bsw-hero-ui" aria-hidden="true">
            <span className="bsw-hero-ui-label">{copy.uiLabel}</span>
            <strong className="bsw-hero-ui-time">{copy.uiTime}</strong>
            <span className="bsw-hero-ui-service">{copy.uiService}</span>
            <span className="bsw-hero-ui-barber">{copy.uiBarber}</span>
          </aside>
        </figure>
      </div>
    </section>
  );
};
