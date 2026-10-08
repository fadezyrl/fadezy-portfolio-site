"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { CONTACT } from "@/data/contact";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { SSW_ASSETS } from "@/data/salon-software";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const SswCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.cta;
  const related = t.salonSoftware.related;
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
    <section className="ssw-cta" id="contact" aria-labelledby="ssw-cta-title">
      <div className="ssw-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="ssw-cta-video"
          src={CTA_BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="ssw-cta-overlay" />
      </div>

      <div className="ssw-wrap ssw-cta-inner reveal">
        <h2 id="ssw-cta-title" className="ssw-cta-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="ssw-cta-body">{copy.body}</p>
        <div className="ssw-cta-actions">
          <a href={START_PROJECT_PATH} className="ssw-cta-primary">
            {copy.primary}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            className="ssw-cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.secondary}
          </a>
        </div>

        <nav className="ssw-related" aria-label={related.label}>
          <a href={SSW_ASSETS.websitePath}>{related.website}</a>
          <a href={SSW_ASSETS.barbershopWebsitePath}>
            {related.barbershopWebsite}
          </a>
          <a href={SSW_ASSETS.barbershopSoftwarePath}>
            {related.barbershopSoftware}
          </a>
          <a href={BMS_PATH}>{t.nav.barbershopMarketingSeo}</a>
          <a href={SMS_PATH}>{t.nav.salonMarketingSeo}</a>
          <a href={SSW_ASSETS.servicesPath}>{related.services}</a>
          <a href={SSW_ASSETS.workPath}>{related.work}</a>
          <a href={SSW_ASSETS.aboutPath}>{related.about}</a>
        </nav>
      </div>
    </section>
  );
};
