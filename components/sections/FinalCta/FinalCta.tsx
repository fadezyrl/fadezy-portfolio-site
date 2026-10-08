"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const FinalCta = (): ReactElement => {
  const { t } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    video.play().catch(() => undefined);
  }, []);

  return (
    <section className="final-cta" id="contact">
      <div className="final-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="final-cta-video"
          src={CTA_BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="final-cta-overlay" />
      </div>

      <div className="wrap final-cta-frame">
        <p className="final-cta-meta">{t.finalCta.meta}</p>

        <h2 className="final-cta-headline">
          {t.finalCta.lines.map((line) => (
            <span className="final-cta-line" key={line}>
              {line}
            </span>
          ))}
        </h2>

        <a href={START_PROJECT_PATH} className="final-cta-action">
          {t.finalCta.ctaPrimary}
        </a>
      </div>
    </section>
  );
};
