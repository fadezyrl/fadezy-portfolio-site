"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 24;
const HIDE_THRESHOLD = 80;
const DIRECTION_DELTA = 6;

type NavScrollState = {
  scrolled: boolean;
  hidden: boolean;
};

export const useNavScrolled = (): NavScrollState => {
  const [state, setState] = useState<NavScrollState>({
    scrolled: false,
    hidden: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const update = (): void => {
      const y = Math.max(0, window.scrollY);
      const scrolled = y > SCROLL_THRESHOLD;
      const delta = y - lastY;
      const passedDelta = Math.abs(delta) >= DIRECTION_DELTA;

      setState((prev) => {
        let hidden = prev.hidden;

        if (y <= HIDE_THRESHOLD) {
          hidden = false;
        } else if (passedDelta) {
          hidden = delta > 0;
        }

        if (!scrolled) {
          hidden = false;
        }

        if (prev.scrolled === scrolled && prev.hidden === hidden) {
          return prev;
        }

        return { scrolled, hidden };
      });

      if (passedDelta || y <= HIDE_THRESHOLD) {
        lastY = y;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return state;
};
