"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

export const SwdCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.cta;
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
    <section className="swd-cta" id="contact" aria-labelledby="swd-cta-title">
      <div className="swd-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="swd-cta-video"
          src={CTA_BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="swd-cta-overlay" />
      </div>

      <div className="swd-wrap swd-cta-inner">
        <h2 id="swd-cta-title">{copy.headline}</h2>
        <p>{copy.body}</p>
        <a
          href={CONTACT.whatsappUrl}
          className="btn solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.button}
        </a>
        <nav className="swd-cta-links" aria-label="Related">
          <a href={SWD_ASSETS.homePath}>{t.brand}</a>
          <a href={SWD_ASSETS.workPath}>{t.nav.work}</a>
          <a href={SWD_ASSETS.aboutPath}>{t.nav.about}</a>
          <a href={SWD_ASSETS.barbershopPath}>{t.nav.barbershopWebDesign}</a>
        </nav>
      </div>
    </section>
  );
};
