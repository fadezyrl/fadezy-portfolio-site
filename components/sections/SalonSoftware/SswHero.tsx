"use client";

import Link from "next/link";
import { useEffect, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { SSW_ASSETS } from "@/data/salon-software";
import { useLocale } from "@/hooks/useLocale";

export const SswHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.hero;

  useEffect(() => {
    const root = document.querySelector(".ssw-hero");
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      root.classList.add("is-ready");
      return;
    }

    const frame = window.setTimeout(() => {
      root.classList.add("is-ready");
    }, 40);

    return () => window.clearTimeout(frame);
  }, []);

  return (
    <section className="ssw-hero" aria-labelledby="ssw-hero-title">
      <div className="ssw-hero-media" aria-hidden="true">
        <img
          src={SSW_ASSETS.hero}
          alt=""
          className="ssw-hero-img"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="ssw-hero-veil" />
      </div>

      <div className="ssw-wrap ssw-hero-inner">
        <div className="ssw-hero-copy">
          <span className="ssw-meta on-dark">{copy.label}</span>
          <h1 id="ssw-hero-title" className="ssw-hero-title">
            {copy.h1}
          </h1>
          <p className="ssw-hero-body">{copy.body}</p>
          <div className="ssw-hero-ctas">
            <a
              href={CONTACT.whatsappUrl}
              className="ssw-link-secondary on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.ctaPrimary}
            </a>
            <Link href="#capabilities" className="ssw-link-primary on-dark">
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      <span className="ssw-sr-only">{copy.imageAlt}</span>
    </section>
  );
};
