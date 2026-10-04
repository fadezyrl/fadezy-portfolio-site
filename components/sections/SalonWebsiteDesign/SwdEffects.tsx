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
        .toArray<HTMLElement>(".swd-page .swd-experience-item")
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              delay: i * 0.1,
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
        .toArray<HTMLElement>(".swd-page .swd-process-step")
        .forEach((step, i) => {
          gsap.fromTo(
            step,
            { opacity: 0, x: 18 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              delay: i * 0.07,
              ease: EASE,
              scrollTrigger: {
                trigger: ".swd-process-rail",
                start: "top 78%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".swd-page .swd-project")
        .forEach((project) => {
          const img = project.querySelector("img");
          if (!img) return;
          gsap.fromTo(
            img,
            { scale: 1.05 },
            {
              scale: 1,
              duration: 1.25,
              ease: EASE,
              scrollTrigger: {
                trigger: project,
                start: "top 75%",
                once: true,
              },
            },
          );
        });

      const impression = document.querySelector(".swd-impression-media img");
      if (impression) {
        gsap.fromTo(
          impression,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".swd-impression",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      gsap.utils
        .toArray<HTMLElement>(".swd-page .swd-impression-stage")
        .forEach((stage, i) => {
          gsap.fromTo(
            stage,
            { opacity: 0.28 },
            {
              opacity: 1,
              duration: 0.5,
              delay: i * 0.08,
              ease: EASE,
              scrollTrigger: {
                trigger: ".swd-impression-stages",
                start: "top 75%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".swd-page .swd-impression-path-item")
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.1,
              ease: EASE,
              scrollTrigger: {
                trigger: ".swd-impression-path",
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
