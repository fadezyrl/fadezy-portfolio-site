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
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: EASE,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>(".bwd-page .bwd-principle")
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.08,
              ease: EASE,
              scrollTrigger: {
                trigger: ".bwd-principles",
                start: "top 70%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".bwd-page .bwd-process-step")
        .forEach((step, i) => {
          gsap.fromTo(
            step,
            { opacity: 0, x: 20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              delay: i * 0.08,
              ease: EASE,
              scrollTrigger: {
                trigger: ".bwd-process-rail",
                start: "top 78%",
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
