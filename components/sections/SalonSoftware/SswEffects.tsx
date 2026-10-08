"use client";

import { useEffect, type ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

export const SswEffects = (): ReactElement | null => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.querySelectorAll(".ssw-page .reveal").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ssw-page .reveal").forEach((section) => {
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
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>(".ssw-page .ssw-flow > li")
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              delay: i * 0.06,
              ease: EASE,
              scrollTrigger: {
                trigger: ".ssw-flow",
                start: "top 78%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".ssw-page .ssw-cap-row")
        .forEach((row, i) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.04,
              ease: EASE,
              scrollTrigger: {
                trigger: row,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

      const heroImg = document.querySelector<HTMLElement>(".ssw-hero-img");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { scale: 1.03 },
          {
            scale: 1,
            duration: 1.45,
            ease: EASE,
            transformOrigin: "30% center",
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
};
