"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { HERO_VIDEO, HERO_VIDEO_POSTER } from "@/data/hero";
import { useLocale } from "@/hooks/useLocale";

export const Hero = (): ReactElement => {
  const { t } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".hero");
    if (!root) return;

    if (reduceMotion) {
      root.classList.add("is-ready");
      videoRef.current?.pause();
      return;
    }

    const frame = requestAnimationFrame(() => {
      root.classList.add("is-ready");
    });

    const video = videoRef.current;
    if (video) {
      video.play().catch(() => undefined);
    }

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero-bg" aria-hidden="true" />

      <span className="hero-meta hero-meta-secondary" aria-hidden="true">
        {t.hero.metaSecondary}
      </span>
      <span className="hero-edge-meta" aria-hidden="true">
        {t.hero.edgeMeta}
      </span>

      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="hero-statement">
            {t.hero.statement.map((line) => (
              <span className="hero-statement-line" key={line}>
                {line}
              </span>
            ))}
            <span className="hero-statement-line is-overlap">
              {t.hero.statementOverlap}
            </span>
          </h1>

          <p className="hero-sub">{t.hero.sub}</p>

          <div className="hero-ctas">
            <a
              href={CONTACT.whatsappUrl}
              className="btn solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.ctaProject}
            </a>
          </div>
        </div>

        <div className="hero-stage">
          <figure className="hero-portrait">
            <video
              ref={videoRef}
              className="hero-portrait-img hero-portrait-video"
              src={HERO_VIDEO}
              poster={HERO_VIDEO_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={t.hero.imageAlt}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
