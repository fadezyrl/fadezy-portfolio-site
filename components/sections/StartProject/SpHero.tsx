"use client";

import { useEffect, type ReactElement } from "react";
import { START_PROJECT_ASSETS } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const SpHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.startProject.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".sp-hero");
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
    <section className="sp-hero" aria-labelledby="sp-hero-title">
      <div className="sp-hero-stage">
        <div className="sp-hero-copy">
          <span className="sp-meta">{copy.eyebrow}</span>
          <h1 id="sp-hero-title" className="sp-hero-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="sp-hero-body">{copy.body}</p>
          <p className="sp-hero-location">{copy.location}</p>
        </div>

        <figure className="sp-hero-visual">
          <div className="sp-hero-frame">
            <img
              src={START_PROJECT_ASSETS.hero}
              alt={copy.imageAlt}
              className="sp-hero-img"
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
