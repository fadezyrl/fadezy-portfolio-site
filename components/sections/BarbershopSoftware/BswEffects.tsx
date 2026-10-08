"use client";

import { useEffect, type ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

export const BswEffects = (): ReactElement | null => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.querySelectorAll(".bsw-page .reveal").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".bsw-page .reveal").forEach((section) => {
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
        .toArray<HTMLElement>(".bsw-page .bsw-eco-flow > li")
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              delay: i * 0.07,
              ease: EASE,
              scrollTrigger: {
                trigger: ".bsw-eco-flow",
                start: "top 78%",
                once: true,
              },
            },
          );
        });

      const heroImg = document.querySelector(".bsw-hero-img");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { scale: 1.08 },
          {
            scale: 1,
            duration: 1.4,
            ease: EASE,
            scrollTrigger: {
              trigger: ".bsw-hero",
              start: "top top",
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
};
