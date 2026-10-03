"use client";

import { useEffect, type ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

export const SwdEffects = (): ReactElement | null => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.querySelectorAll(".swd-page .reveal").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".swd-page .reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 32 },
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
        .toArray<HTMLElement>(".swd-page .swd-chapter")
        .forEach((chapter, i) => {
          gsap.fromTo(
            chapter,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.07,
              ease: EASE,
              scrollTrigger: {
                trigger: ".swd-experience",
                start: "top 68%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".swd-page .swd-index-row")
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
                trigger: ".swd-communicate",
                start: "top 72%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".swd-page .swd-spine-step")
        .forEach((step, i) => {
          gsap.fromTo(
            step,
            { opacity: 0, x: -16 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              delay: i * 0.08,
              ease: EASE,
              scrollTrigger: {
                trigger: ".swd-spine",
                start: "top 78%",
                once: true,
              },
            },
          );
        });

      const reveal = document.querySelector(".swd-transform-reveal");
      if (reveal) {
        gsap.fromTo(
          reveal,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.15,
            ease: EASE,
            scrollTrigger: {
              trigger: ".swd-transform-after",
              start: "top 75%",
              once: true,
            },
          },
        );
      }

      gsap.utils
        .toArray<HTMLElement>(".swd-page .swd-faq-item")
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
                trigger: ".swd-faq",
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
