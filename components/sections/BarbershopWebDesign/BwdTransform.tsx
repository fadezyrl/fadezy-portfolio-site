"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { useLocale } from "@/hooks/useLocale";

export const BwdTransform = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.transform;
  const sliderRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(52);
  const [position, setPosition] = useState(52);

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

    setPos(52);
    let dragging = false;

    const move = (clientX: number): void => {
      const rect = slider.getBoundingClientRect();
      setPos(((clientX - rect.left) / rect.width) * 100);
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
    <section
      className="bwd-transform reveal"
      aria-labelledby="bwd-transform-label"
    >
      <div className="bwd-wrap">
        <header className="bwd-transform-head">
          <span className="bwd-meta" id="bwd-transform-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>

        <div
          className="bwd-ba"
          ref={sliderRef}
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-label={copy.dragHint}
        >
          <img
            src={BWD_ASSETS.beforeImage}
            alt={copy.beforeAlt}
            className="bwd-ba-img"
            draggable={false}
          />
          <div className="bwd-ba-after" ref={afterRef}>
            <img
              src={BWD_ASSETS.afterImage}
              alt={copy.afterAlt}
              className="bwd-ba-img"
              draggable={false}
            />
          </div>
          <div className="bwd-ba-handle" ref={handleRef}>
            <span />
          </div>
          <span className="bwd-ba-tag is-before">{copy.before}</span>
          <span className="bwd-ba-tag is-after">{copy.after}</span>
        </div>
      </div>
    </section>
  );
};
