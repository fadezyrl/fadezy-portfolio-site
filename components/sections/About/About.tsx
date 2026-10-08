"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_IMAGE, ABOUT_PATH } from "@/data/about";
import { useLocale } from "@/hooks/useLocale";

export const About = (): ReactElement => {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      section.classList.add("is-in");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const lines = section.querySelectorAll(".about-statement-line");
      const body = section.querySelector(".about-body");
      const cta = section.querySelector(".about-cta");
      const visual = section.querySelector(".about-visual-frame");
      const meta = section.querySelector(".about-image-meta");
      const eyebrow = section.querySelector(".about-eyebrow");

      gsap.set(eyebrow, { opacity: 0, y: 8 });
      gsap.set(lines, { opacity: 0, y: 24 });
      gsap.set(body, { opacity: 0, y: 14 });
      gsap.set(cta, { opacity: 0, y: 10 });
      gsap.set(visual, { clipPath: "inset(12% 10% 12% 10%)" });
      gsap.set(meta, { opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        })
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.65 }, 0)
        .to(
          lines,
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 },
          0.15,
        )
        .to(visual, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3 }, 0.2)
        .to(meta, { opacity: 1, duration: 0.6 }, 0.7)
        .to(body, { opacity: 1, y: 0, duration: 0.8 }, 0.55)
        .to(cta, { opacity: 1, y: 0, duration: 0.65 }, 0.8);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about"
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
    >
      <div className="about-layout wrap">
        <div className="about-copy">
          <span className="about-eyebrow">{t.about.eyebrow}</span>
          <h2 id="about-heading" className="about-statement">
            {t.about.statement.map((line) => (
              <span className="about-statement-line" key={line}>
                {line}
              </span>
            ))}
          </h2>

          <div className="about-body">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <a href={ABOUT_PATH} className="about-cta">
            {t.about.cta} <span aria-hidden="true">→</span>
          </a>
        </div>

        <figure className="about-visual">
          <div className="about-visual-frame">
            <Image
              src={ABOUT_IMAGE}
              alt={t.about.imageAlt}
              fill
              sizes="(max-width: 880px) 92vw, 42vw"
              className="about-visual-img"
            />
          </div>
          <figcaption className="about-image-meta">
            {t.about.imageMeta}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
