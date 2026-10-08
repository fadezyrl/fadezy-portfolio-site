"use client";

import { useEffect, type ReactElement } from "react";
import { ABOUT_ASSETS } from "@/data/about";
import { useLocale } from "@/hooks/useLocale";

export const AbtHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".abt-hero");
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
    <section className="abt-hero" aria-labelledby="abt-hero-title">
      <div className="abt-hero-stage">
        <div className="abt-hero-copy">
          <span className="abt-meta">{copy.eyebrow}</span>
          <h1 id="abt-hero-title" className="abt-hero-title">
            {copy.statement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="abt-hero-body">{copy.body}</p>
        </div>

        <figure className="abt-hero-visual">
          <div className="abt-hero-frame">
            <img
              src={ABOUT_ASSETS.hero}
              alt={copy.imageAlt}
              className="abt-hero-img"
              width={1600}
              height={2000}
              fetchPriority="high"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};
