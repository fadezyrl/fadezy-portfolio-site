"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactElement } from "react";
import { CTA_BACKGROUND_VIDEO } from "@/data/final-cta";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { SSW_PATH } from "@/data/salon-software";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { START_PROJECT_PATH } from "@/data/start-project";
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
        <Link href={START_PROJECT_PATH} className="btn solid">
          {copy.button}
        </Link>
        <nav className="swd-cta-links" aria-label="Related">
          <Link href={SWD_ASSETS.homePath}>{t.brand}</Link>
          <Link href={SWD_ASSETS.workPath}>{t.nav.work}</Link>
          <Link href={SWD_ASSETS.aboutPath}>{t.nav.about}</Link>
          <Link href={SWD_ASSETS.barbershopPath}>{t.nav.barbershopWebDesign}</Link>
          <Link href={SSW_PATH}>{t.nav.salonSoftware}</Link>
          <Link href={SMS_PATH}>{t.nav.salonMarketingSeo}</Link>
        </nav>
      </div>
    </section>
  );
};
