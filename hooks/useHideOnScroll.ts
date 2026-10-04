"use client";

import { useEffect, useState } from "react";

const SCROLL_DELTA = 8;
const TOP_REVEAL = 24;

export const useHideOnScroll = (enabled = true): boolean => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setHidden(false);
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setHidden(false);
      return;
    }

    let lastY = window.scrollY;
    let ticking = false;

    const update = (): void => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (currentY <= TOP_REVEAL) {
        setHidden(false);
      } else if (delta > SCROLL_DELTA) {
        setHidden(true);
      } else if (delta < -SCROLL_DELTA) {
        setHidden(false);
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = (): void => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  return hidden;
};
