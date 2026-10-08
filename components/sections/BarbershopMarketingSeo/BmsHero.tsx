"use client";

import Link from "next/link";
import { useEffect, type ReactElement } from "react";
import { BMS_ASSETS } from "@/data/barbershop-marketing-seo";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const BmsHero = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.hero;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.querySelector(".bms-hero");
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
    <section className="bms-hero" aria-labelledby="bms-hero-title">
      <div className="bms-hero-stage">
        <div className="bms-hero-copy">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h1 id="bms-hero-title" className="bms-hero-h1">
            {copy.h1.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="bms-hero-body">{copy.body}</p>
          <div className="bms-hero-ctas">
            <Link href={START_PROJECT_PATH} className="bms-link-primary">
              {copy.ctaPrimary}
            </Link>
            <Link href="#services" className="bms-link-secondary">
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>

        <figure className="bms-hero-visual">
          <div className="bms-hero-frame">
            <img
              src={BMS_ASSETS.hero}
              alt={copy.imageAlt}
              className="bms-hero-img"
              width={1600}
              height={1200}
              fetchPriority="high"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};
