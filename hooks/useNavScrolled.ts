"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 24;

export const useNavScrolled = (): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = (): void => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return scrolled;
};
