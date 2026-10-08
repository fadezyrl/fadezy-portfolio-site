"use client";

import Link from "next/link";
import { useEffect, type ReactElement } from "react";
import { SMS_ASSETS } from "@/data/salon-marketing-seo";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const SmsHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".sms-hero");
    if (!root) return;

    if (reduceMotion) {
      root.classList.add("is-ready");
      return;
    }

    const frame = requestAnimationFrame(() => {
      root.classList.add("is-ready");
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="sms-hero" aria-labelledby="sms-hero-title">
      <div className="sms-hero-stage">
        <div className="sms-hero-copy">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h1 id="sms-hero-title" className="sms-hero-h1">
            {copy.h1.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="sms-hero-body">{copy.body}</p>
          <div className="sms-hero-ctas">
            <Link href={START_PROJECT_PATH} className="sms-link-primary">
              {copy.ctaPrimary}
            </Link>
            <Link href="#services" className="sms-link-secondary">
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>

        <figure className="sms-hero-visual">
          <div className="sms-hero-frame">
            <img
              src={SMS_ASSETS.hero}
              alt={copy.imageAlt}
              className="sms-hero-img"
              width={1600}
              height={900}
              fetchPriority="high"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};
