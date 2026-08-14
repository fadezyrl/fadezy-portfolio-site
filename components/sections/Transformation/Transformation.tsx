"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactElement } from "react";
import { TRANSFORMATION_VISUALS } from "@/data/transformation";
import { useLocale } from "@/hooks/useLocale";

export const Transformation = (): ReactElement => {
  const { t } = useLocale();
  const sliderRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(50);
  const [position, setPosition] = useState(50);

  useEffect(() => {
    const slider = sliderRef.current;
    const afterPane = afterRef.current;
    const handle = handleRef.current;
    if (!slider || !afterPane || !handle) return;

    const setPos = (pct: number): void => {
      const clamped = Math.max(0, Math.min(100, pct));
      positionRef.current = clamped;
      afterPane.style.clipPath = `inset(0 0 0 ${clamped}%)`;
      handle.style.left = `${clamped}%`;
      setPosition(clamped);
    };

    setPos(50);
    let dragging = false;

    const move = (clientX: number): void => {
      const rect = slider.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setPos(pct);
    };

    const onPointerDown = (e: PointerEvent): void => {
      dragging = true;
      move(e.clientX);
    };
    const onPointerMove = (e: PointerEvent): void => {
      if (dragging) move(e.clientX);
    };
    const onPointerUp = (): void => {
      dragging = false;
    };

    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPos(positionRef.current - 5);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setPos(positionRef.current + 5);
      }
    };

    slider.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    slider.addEventListener("keydown", onKeyDown);

    return () => {
      slider.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      slider.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <section className="transformation">
      <div className="wrap">
        <div className="t-head">
          <span className="eyebrow">{t.transformation.eyebrow}</span>
          <h2>{t.transformation.headline}</h2>
          <p>{t.transformation.sub}</p>
        </div>
        <div
          className="slider"
          ref={sliderRef}
          role="slider"
          aria-label={t.transformation.headline}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={
            position < 50 ? t.transformation.before : t.transformation.after
          }
          tabIndex={0}
        >
          <div className="pane before">
            <Image
              src={TRANSFORMATION_VISUALS.before}
              alt={t.transformation.beforeAlt}
              fill
              sizes="(max-width: 1440px) 88vw, 1440px"
              className="slider-img"
            />
            <span
              className="tag tag-before"
              style={{ opacity: position > 6 ? 1 : 0 }}
            >
              {t.transformation.before}
            </span>
          </div>
          <div className="pane after" ref={afterRef}>
            <Image
              src={TRANSFORMATION_VISUALS.after}
              alt={t.transformation.afterAlt}
              fill
              sizes="(max-width: 1440px) 88vw, 1440px"
              className="slider-img"
            />
            <span
              className="tag tag-after"
              style={{ opacity: position < 94 ? 1 : 0 }}
            >
              {t.transformation.after}
            </span>
          </div>
          <div className="slider-handle" ref={handleRef}>
            <div className="grip">↔</div>
          </div>
        </div>
        <div className="t-labels">
          {t.transformation.labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
