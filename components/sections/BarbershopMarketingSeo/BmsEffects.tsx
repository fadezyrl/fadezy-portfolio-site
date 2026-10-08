"use client";

import { useEffect, type ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

export const BmsEffects = (): ReactElement | null => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.querySelectorAll(".bms-page .reveal").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".bms-page .reveal").forEach((section) => {
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
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>(".bms-page .bms-journey-flow > li")
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.06,
              ease: EASE,
              scrollTrigger: {
                trigger: ".bms-journey-flow",
                start: "top 78%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".bms-page .bms-measure-bar i")
        .forEach((bar, i) => {
          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scaleX: 0.45 + (i % 3) * 0.18,
              duration: 0.9,
              ease: EASE,
              transformOrigin: "left center",
              scrollTrigger: {
                trigger: ".bms-measure-list",
                start: "top 80%",
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
