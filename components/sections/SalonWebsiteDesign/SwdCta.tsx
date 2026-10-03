"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
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
    <section className="swd-cta" id="contact">
      <div className="swd-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="swd-cta-video"
          src={SWD_ASSETS.ctaVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="swd-cta-overlay" />
      </div>

      <div className="swd-wrap swd-cta-content">
        <h2>
          <span>{copy.line1}</span>
          <span>{copy.line2}</span>
          <em>{copy.line3}</em>
        </h2>
        <div className="swd-cta-actions">
          <a
            href={CONTACT.whatsappUrl}
            className="btn solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.button}
          </a>
          <a href={SWD_ASSETS.workPath} className="btn-text on-dark">
            {copy.secondary}
          </a>
        </div>
        <p className="swd-cta-services">{copy.servicesLine}</p>
      </div>
    </section>
  );
};
