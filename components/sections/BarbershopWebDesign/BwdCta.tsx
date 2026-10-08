"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { BSW_PATH } from "@/data/barbershop-software";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
import { START_PROJECT_PATH } from "@/data/start-project";
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
    <section className="bwd-cta" id="contact" aria-labelledby="bwd-cta-title">
      <div className="bwd-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="bwd-cta-video"
          src={CTA_BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="bwd-cta-overlay" />
      </div>

      <div className="bwd-wrap bwd-cta-inner">
        <h2 id="bwd-cta-title">{copy.headline}</h2>
        <p>{copy.body}</p>
        <a href={START_PROJECT_PATH} className="btn solid">
          {copy.button}
        </a>
        <nav className="bwd-cta-links" aria-label="Related">
          <a href={BWD_ASSETS.homePath}>{t.brand}</a>
          <a href={BWD_ASSETS.workPath}>{t.nav.work}</a>
          <a href={BWD_ASSETS.aboutPath}>{t.nav.about}</a>
          <a href={BWD_ASSETS.salonPath}>{t.nav.salonWebsiteDesign}</a>
          <a href={BSW_PATH}>{t.nav.barbershopSoftware}</a>
          <a href={BMS_PATH}>{t.nav.barbershopMarketingSeo}</a>
        </nav>
      </div>
    </section>
  );
};
