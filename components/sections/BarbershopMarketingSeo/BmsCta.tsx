"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { BMS_ASSETS } from "@/data/barbershop-marketing-seo";
import { CONTACT } from "@/data/contact";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const BmsCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.cta;
  const related = t.barbershopMarketingSeo.related;
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
    <section className="bms-cta" id="contact" aria-labelledby="bms-cta-title">
      <div className="bms-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="bms-cta-video"
          src={CTA_BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="bms-cta-overlay" />
      </div>

      <div className="bms-wrap bms-cta-inner reveal">
        <h2 id="bms-cta-title" className="bms-cta-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="bms-cta-body">{copy.body}</p>
        <div className="bms-cta-actions">
          <a href={START_PROJECT_PATH} className="bms-cta-primary">
            {copy.primary}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            className="bms-cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.secondary}
          </a>
        </div>

        <nav className="bms-related" aria-label={related.label}>
          <a href={BMS_ASSETS.websitePath}>{related.website}</a>
          <a href={BMS_ASSETS.salonWebsitePath}>{related.salonWebsite}</a>
          <a href={BMS_ASSETS.softwarePath}>{related.software}</a>
          <a href={BMS_ASSETS.salonSoftwarePath}>{related.salonSoftware}</a>
          <a href={SMS_PATH}>{t.nav.salonMarketingSeo}</a>
          <a href={BMS_ASSETS.servicesPath}>{related.services}</a>
          <a href={BMS_ASSETS.workPath}>{related.work}</a>
          <a href={BMS_ASSETS.aboutPath}>{related.about}</a>
        </nav>
      </div>
    </section>
  );
};
