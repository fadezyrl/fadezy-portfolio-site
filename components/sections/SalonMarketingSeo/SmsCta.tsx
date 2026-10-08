"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
import { SMS_ASSETS } from "@/data/salon-marketing-seo";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const SmsCta = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.cta;
  const related = t.salonMarketingSeo.related;
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
    <section className="sms-cta" id="contact" aria-labelledby="sms-cta-title">
      <div className="sms-cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="sms-cta-video"
          src={CTA_BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="sms-cta-overlay" />
      </div>

      <div className="sms-wrap sms-cta-inner reveal">
        <h2 id="sms-cta-title" className="sms-cta-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="sms-cta-body">{copy.body}</p>
        <div className="sms-cta-actions">
          <a href={START_PROJECT_PATH} className="sms-cta-primary">
            {copy.primary}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            className="sms-cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.secondary}
          </a>
        </div>

        <nav className="sms-related" aria-label={related.label}>
          <a href={SMS_ASSETS.websitePath}>{related.website}</a>
          <a href={SMS_ASSETS.barbershopWebsitePath}>
            {related.barbershopWebsite}
          </a>
          <a href={SMS_ASSETS.softwarePath}>{related.software}</a>
          <a href={SMS_ASSETS.barbershopSoftwarePath}>
            {related.barbershopSoftware}
          </a>
          <a href={SMS_ASSETS.barbershopMarketingPath}>
            {related.barbershopMarketing}
          </a>
          <a href={SMS_ASSETS.servicesPath}>{related.services}</a>
          <a href={SMS_ASSETS.workPath}>{related.work}</a>
          <a href={SMS_ASSETS.aboutPath}>{related.about}</a>
        </nav>
      </div>
    </section>
  );
};
