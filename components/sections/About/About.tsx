"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_IMAGE } from "@/data/about";
import { useLocale } from "@/hooks/useLocale";

export const About = (): ReactElement => {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      section.classList.add("is-in");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const spineRule = section.querySelector(".about-spine-rule");
      const spineMeta = section.querySelector(".about-spine-meta");
      const visualFrame = section.querySelector(".about-visual-frame");
      const imageMeta = section.querySelector(".about-image-meta");
      const issue = section.querySelector(".about-issue");
      const lines = section.querySelectorAll(
        ".about-headline-line, .about-headline-em",
      );
      const body = section.querySelector(".about-body");
      const cta = section.querySelector(".about-cta");

      gsap.set(spineRule, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(spineMeta, { opacity: 0 });
      gsap.set(visualFrame, { clipPath: "inset(12% 8% 12% 8%)" });
      gsap.set(imageMeta, { opacity: 0, y: 8 });
      gsap.set(issue, { opacity: 0, y: 10 });
      gsap.set(lines, { opacity: 0, y: 28 });
      gsap.set(body, { opacity: 0, y: 16 });
      gsap.set(cta, { opacity: 0, y: 10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(issue, { opacity: 1, y: 0, duration: 0.7 }, 0)
        .to(spineRule, { scaleY: 1, duration: 1.05 }, 0.1)
        .to(spineMeta, { opacity: 1, duration: 0.7 }, 0.4)
        .to(visualFrame, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.25 }, 0.15)
        .to(imageMeta, { opacity: 1, y: 0, duration: 0.65 }, 0.7)
        .to(
          lines,
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
          0.4,
        )
        .to(body, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
        .to(cta, { opacity: 1, y: 0, duration: 0.65 }, 1);
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="about"
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
    >
      <div className="wrap about-spread">
        <header className="about-issue">
          <span className="about-issue-id">{t.about.issueId}</span>
          <span className="about-issue-rule" aria-hidden="true" />
        </header>

        <div className="about-copy">
          <h2 id="about-heading" className="about-headline">
            <span className="about-headline-line">{t.about.headlineLine1}</span>
            <span className="about-headline-line">{t.about.headlineLine2}</span>
            <span className="about-headline-em">{t.about.headlineEm}</span>
          </h2>

          <div className="about-body">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <a href="#contact" className="btn-text about-cta">
            {t.about.cta} <span className="arrow">→</span>
          </a>
        </div>

        <div className="about-spine" aria-hidden="true">
          <span className="about-spine-rule" />
          <span className="about-spine-meta">{t.about.spineMeta}</span>
        </div>

        <figure className="about-visual">
          <div className="about-visual-frame">
            <Image
              src={ABOUT_IMAGE}
              alt={t.about.imageAlt}
              fill
              sizes="(max-width: 880px) 92vw, 48vw"
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
