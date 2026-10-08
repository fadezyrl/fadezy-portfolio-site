"use client";

import { useEffect, useRef, type ReactElement } from "react";
import {
  FADEZY_INSTAGRAM_FEED,
  START_PROJECT_ASSETS,
} from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const SpInstagram = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.startProject.instagram;
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let frame = 0;
    let last = performance.now();
    let paused = false;

    const onEnter = (): void => {
      paused = true;
    };
    const onLeave = (): void => {
      paused = false;
    };

    track.addEventListener("pointerenter", onEnter);
    track.addEventListener("pointerleave", onLeave);

    const tick = (now: number): void => {
      const delta = now - last;
      last = now;
      if (!paused && track.scrollWidth > track.clientWidth) {
        track.scrollLeft += delta * 0.028;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
          track.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("pointerenter", onEnter);
      track.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="sp-instagram" aria-labelledby="sp-ig-title">
      <div className="sp-ig-head reveal">
        <span className="sp-meta sp-meta-light">{copy.eyebrow}</span>
        <h2 id="sp-ig-title" className="sp-ig-headline">
          {copy.headline}
        </h2>
        <p className="sp-ig-body">{copy.body}</p>
      </div>

      <div className="sp-ig-gallery reveal">
        <div
          ref={trackRef}
          className="sp-ig-track"
          role="list"
          aria-label={copy.eyebrow}
        >
          {FADEZY_INSTAGRAM_FEED.map((post, index) => (
            <a
              key={post.id}
              href={post.href}
              className="sp-ig-post"
              role="listitem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={post.alt}
            >
              <img
                src={post.image}
                alt=""
                className="sp-ig-img"
                width={720}
                height={900}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
              />
            </a>
          ))}
        </div>

        <div className="sp-ig-cta-row">
          <a
            href={START_PROJECT_ASSETS.instagram}
            className="sp-ig-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
