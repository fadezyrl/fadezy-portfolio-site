"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { BSW_ASSETS } from "@/data/barbershop-software";
import { CONTACT } from "@/data/contact";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { SSW_PATH } from "@/data/salon-software";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const BswCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.cta;
  const related = t.barbershopSoftware.related;
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
    <section className="bsw-cta" id="contact" aria-labelledby="bsw-cta-title">
      <div className="bsw-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="bsw-cta-video"
          src={CTA_BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="bsw-cta-overlay" />
      </div>

      <div className="bsw-wrap bsw-cta-inner reveal">
        <h2 id="bsw-cta-title" className="bsw-cta-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="bsw-cta-body">{copy.body}</p>
        <div className="bsw-cta-actions">
          <a href={START_PROJECT_PATH} className="bsw-cta-primary">
            {copy.primary}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            className="bsw-cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.secondary}
          </a>
        </div>

        <nav className="bsw-related" aria-label={related.label}>
          <a href={BSW_ASSETS.websitePath}>{related.website}</a>
          <a href={BSW_ASSETS.salonWebsitePath}>{related.salonWebsite}</a>
          <a href={SSW_PATH}>{t.nav.salonSoftware}</a>
          <a href={BMS_PATH}>{t.nav.barbershopMarketingSeo}</a>
          <a href={SMS_PATH}>{t.nav.salonMarketingSeo}</a>
          <a href={BSW_ASSETS.servicesPath}>{related.services}</a>
          <a href={BSW_ASSETS.workPath}>{related.work}</a>
          <a href={BSW_ASSETS.aboutPath}>{related.about}</a>
        </nav>
      </div>
    </section>
  );
};
