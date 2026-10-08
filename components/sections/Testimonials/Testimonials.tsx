"use client";

import { useCallback, useState, type ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const Testimonials = (): ReactElement => {
  const { t } = useLocale();
  const [current, setCurrent] = useState(0);
  const count = t.testimonials.items.length;
  const item = t.testimonials.items[current];

  const goTo = useCallback(
    (i: number): void => {
      const next = ((i % count) + count) % count;
      setCurrent(next);
    },
    [count],
  );

  return (
    <section className="testimonials" id="testimonials" aria-live="polite">
      <div className="wrap testi-frame">
        <span className="testi-eyebrow">{t.testimonials.eyebrow}</span>

        <blockquote className="testi-quote" key={current}>
          {item.quote}
        </blockquote>

        <div className="testi-foot">
          <div className="testi-attrib">
            <span className="testi-name">{item.name}</span>
            <span className="testi-meta">{item.meta}</span>
          </div>

          <div className="testi-controls">
            <button
              type="button"
              className="testi-control"
              onClick={() => goTo(current - 1)}
              aria-label={t.testimonials.prev}
            >
              {t.testimonials.prev}
            </button>
            <span className="testi-count" aria-hidden="true">
              {String(current + 1).padStart(2, "0")}
              <span> / </span>
              {String(count).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="testi-control"
              onClick={() => goTo(current + 1)}
              aria-label={t.testimonials.next}
            >
              {t.testimonials.next}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
