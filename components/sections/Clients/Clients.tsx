"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { CLIENT_LOGOS } from "@/data/clients";
import { useLocale } from "@/hooks/useLocale";

export const Clients = (): ReactElement => {
  const { t } = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let pos = 0;
    let frame = 0;

    const loop = (): void => {
      pos -= 0.7;
      const half = track.scrollWidth / 2;
      if (half > 0 && Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translate3d(${pos}px, 0, 0)`;
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="clients" aria-label={t.clients.ariaLabel}>
      <div className="clients-track-outer">
        <div className="clients-track" ref={trackRef}>
          {items.map((logo, i) => (
            <div className="clients-track-item" key={`${logo.src}-${i}`}>
              <img
                src={logo.src}
                alt={logo.name}
                className="clients-logo"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
