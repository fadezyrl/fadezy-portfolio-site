"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
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

      <div className="wrap final-cta-content">
        <h2>
          {t.finalCta.headlineBefore}
          <em>{t.finalCta.headlineEm}</em>
        </h2>
        <p className="sub">{t.finalCta.sub}</p>
        <div className="ctas">
          <a
            href={CONTACT.whatsappUrl}
            className="btn solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.finalCta.ctaPrimary}
          </a>
        </div>
        <div className="services-line">{t.finalCta.servicesLine}</div>
      </div>
    </section>
  );
};
