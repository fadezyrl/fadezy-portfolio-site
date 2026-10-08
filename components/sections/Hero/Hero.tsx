"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactElement } from "react";
import { HERO_VIDEO, HERO_VIDEO_POSTER } from "@/data/hero";
import { START_PROJECT_PATH } from "@/data/start-project";
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

      <p className="hero-meta" aria-hidden="true">
        {t.hero.metaSecondary}
      </p>

      <span className="hero-edge-meta" aria-hidden="true">
        {t.hero.edgeMeta}
      </span>

      <figure className="hero-visual">
        <video
          ref={videoRef}
          className="hero-visual-img hero-visual-video"
          src={HERO_VIDEO}
          poster={HERO_VIDEO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={t.hero.imageAlt}
        />
        <div className="hero-visual-veil" aria-hidden="true" />
      </figure>

      <div className="hero-content">
        <h1 className="hero-statement">
          {t.hero.statement.map((line, index) => (
            <span
              className={`hero-statement-line${index >= 2 ? " is-overlap" : ""}`}
              key={line}
            >
              <span className="hero-statement-inner">{line}</span>
            </span>
          ))}
        </h1>
      </div>

      <div className="hero-support">
        <p className="hero-sub">{t.hero.sub}</p>

        <Link href={START_PROJECT_PATH} className="hero-cta">
          <span className="hero-cta-label">{t.hero.ctaProject}</span>
          <span className="hero-cta-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};
