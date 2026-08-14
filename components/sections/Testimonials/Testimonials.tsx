"use client";

import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const Testimonials = (): ReactElement => {
  const { t } = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const count = t.testimonials.items.length;

  const goTo = useCallback(
    (i: number): void => {
      const next = Math.max(0, Math.min(count - 1, i));
      setCurrent(next);
      const track = trackRef.current;
      if (track) {
        track.scrollTo({ left: track.clientWidth * next, behavior: "smooth" });
      }
    },
    [count],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = (): void => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      setCurrent(idx);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <div className="testi-head">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2>{t.testimonials.headline}</h2>
        </div>
        <div className="testi-track" ref={trackRef}>
          {t.testimonials.items.map((item, i) => (
            <div className="testi" key={i}>
              <blockquote>{item.quote}</blockquote>
              <div className="attrib">
                <span>{item.name}</span>
                <span>{item.meta}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-nav">
          <div
            className="testi-dots"
            role="tablist"
            aria-label={t.testimonials.eyebrow}
          >
            {t.testimonials.items.map((_, i) => (
              <button
                type="button"
                key={i}
                className={i === current ? "active" : undefined}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-selected={i === current}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className="testi-arrows">
            <button type="button" onClick={() => goTo(current - 1)}>
              {t.testimonials.prev}
            </button>
            <button type="button" onClick={() => goTo(current + 1)}>
              {t.testimonials.next}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
