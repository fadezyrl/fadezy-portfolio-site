"use client";

import { useEffect, type ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

export const BwdEffects = (): ReactElement | null => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.querySelectorAll(".bwd-page .reveal").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".bwd-page .reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: EASE,
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>(".bwd-page .bwd-experience-step")
        .forEach((step, i) => {
          gsap.fromTo(
            step,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.08,
              ease: EASE,
              scrollTrigger: {
                trigger: ".bwd-experience",
                start: "top 70%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".bwd-page .bwd-spec-row")
        .forEach((row, i) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              delay: i * 0.06,
              ease: EASE,
              scrollTrigger: {
                trigger: ".bwd-spec",
                start: "top 72%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".bwd-page .bwd-journey-stage")
        .forEach((stage, i) => {
          gsap.fromTo(
            stage,
            { opacity: 0, x: 24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              delay: i * 0.07,
              ease: EASE,
              scrollTrigger: {
                trigger: ".bwd-journey-rail",
                start: "top 80%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".bwd-page .bwd-faq-item")
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.05,
              ease: EASE,
              scrollTrigger: {
                trigger: ".bwd-faq",
                start: "top 72%",
                once: true,
              },
            },
          );
        });
    });

    return () => ctx.revert();
  }, []);

  return null;
};
