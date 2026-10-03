"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { useLocale } from "@/hooks/useLocale";

export const BwdCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.cta;
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
    <section className="bwd-cta" id="contact">
      <div className="bwd-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="bwd-cta-video"
          src={BWD_ASSETS.ctaVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="bwd-cta-overlay" />
      </div>

      <div className="bwd-wrap bwd-cta-content">
        <h2>
          <span>{copy.line1}</span>
          <span>{copy.line2}</span>
          <em>{copy.line3}</em>
        </h2>
        <a
          href={CONTACT.whatsappUrl}
          className="btn solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.button}
        </a>
        <p className="bwd-cta-services">{copy.servicesLine}</p>
      </div>
    </section>
  );
};
