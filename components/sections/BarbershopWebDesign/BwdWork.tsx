"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactElement,
} from "react";
import { BWD_PROJECTS } from "@/data/barbershop-web-design";
import { useLocale } from "@/hooks/useLocale";

export const BwdWork = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.work;
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const velocityRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragScrollRef = useRef(0);
  const didDragRef = useRef(false);
  const axisRef = useRef<"pending" | "x" | "y" | "none">("none");
  const activePointerRef = useRef<number | null>(null);
  const [index, setIndex] = useState(1);
  const total = BWD_PROJECTS.length;

  const projectCopy = (id: string) =>
    copy.projects.find((project) => project.id === id);

  const updateIndex = (): void => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(
      track.querySelectorAll<HTMLElement>(".bwd-work-card"),
    ).slice(0, total);
    if (cards.length === 0) return;

    const center = track.scrollLeft + track.clientWidth * 0.35;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(best + 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = (): void => updateIndex();
    const onTouchStart = (): void => {
      pausedRef.current = true;
      velocityRef.current = 0;
    };
    const onTouchEnd = (): void => {
      window.setTimeout(() => {
        pausedRef.current = false;
      }, 1200);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    track.addEventListener("touchcancel", onTouchEnd, { passive: true });
    updateIndex();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      return () => {
        track.removeEventListener("scroll", onScroll);
        track.removeEventListener("touchstart", onTouchStart);
        track.removeEventListener("touchend", onTouchEnd);
        track.removeEventListener("touchcancel", onTouchEnd);
      };
    }

    const tick = (): void => {
      if (!track) return;

      if (!pausedRef.current && !draggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.05) {
          track.scrollLeft += velocityRef.current;
          velocityRef.current *= 0.92;
        } else {
          track.scrollLeft += 0.28;
          velocityRef.current = 0;
        }

        const half = track.scrollWidth / 2;
        if (half > 0 && track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("touchcancel", onTouchEnd);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [total]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>): void => {
    const track = trackRef.current;
    if (!track) return;

    // Touch/pen: let the browser handle vertical page scroll + native
    // horizontal overflow. Custom drag capture was blocking scroll-down.
    if (event.pointerType !== "mouse") {
      pausedRef.current = true;
      velocityRef.current = 0;
      axisRef.current = "none";
      return;
    }

    draggingRef.current = true;
    didDragRef.current = false;
    pausedRef.current = true;
    velocityRef.current = 0;
    axisRef.current = "pending";
    activePointerRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    dragScrollRef.current = track.scrollLeft;
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>): void => {
    const track = trackRef.current;
    if (!track || !draggingRef.current) return;
    if (
      activePointerRef.current !== null &&
      event.pointerId !== activePointerRef.current
    ) {
      return;
    }

    const deltaX = event.clientX - dragStartXRef.current;
    const deltaY = event.clientY - dragStartYRef.current;

    if (axisRef.current === "pending") {
      if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        axisRef.current = "y";
        draggingRef.current = false;
        activePointerRef.current = null;
        track.classList.remove("is-dragging");
        return;
      }

      axisRef.current = "x";
      track.setPointerCapture(event.pointerId);
      track.classList.add("is-dragging");
    }

    if (axisRef.current !== "x") return;

    if (Math.abs(deltaX) > 6) didDragRef.current = true;
    const next = dragScrollRef.current - deltaX;
    velocityRef.current = next - track.scrollLeft;
    track.scrollLeft = next;
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>): void => {
    const track = trackRef.current;
    if (!track) return;

    if (
      activePointerRef.current !== null &&
      track.hasPointerCapture(event.pointerId)
    ) {
      track.releasePointerCapture(event.pointerId);
    }

    draggingRef.current = false;
    axisRef.current = "none";
    activePointerRef.current = null;
    track.classList.remove("is-dragging");
    window.setTimeout(() => {
      pausedRef.current = false;
    }, 900);
  };

  const scrollByCard = (direction: -1 | 1): void => {
    const track = trackRef.current;
    if (!track) return;
    pausedRef.current = true;
    velocityRef.current = 0;
    const card = track.querySelector<HTMLElement>(".bwd-work-card");
    const amount = (card?.offsetWidth ?? track.clientWidth * 0.72) + 36;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
    window.setTimeout(() => {
      pausedRef.current = false;
    }, 1400);
  };

  const loopedProjects = [...BWD_PROJECTS, ...BWD_PROJECTS];
  const indexLabel = `${String(index).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <section className="bwd-work reveal" id="work" aria-labelledby="bwd-work-label">
      <div className="bwd-wrap">
        <header className="bwd-work-head">
          <span className="bwd-meta" id="bwd-work-label">
            {copy.label}
          </span>
          <h2 className="bwd-work-headline">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bwd-work-support">{copy.support}</p>
        </header>

        <div className="bwd-work-controls" aria-hidden="false">
          <span className="bwd-work-index">{indexLabel}</span>
          <div className="bwd-work-arrows">
            <button
              type="button"
              className="bwd-work-arrow"
              aria-label={copy.prev}
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="bwd-work-arrow"
              aria-label={copy.next}
              onClick={() => scrollByCard(1)}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        className="bwd-work-track"
        ref={trackRef}
        aria-label={copy.dragHint}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (!draggingRef.current) pausedRef.current = false;
        }}
      >
        <div className="bwd-work-rail">
          {loopedProjects.map((project, i) => {
            const meta = projectCopy(project.id);
            if (!meta) return null;

            return (
              <article
                className={`bwd-work-card is-${project.size}`}
                key={`${project.id}-${i}`}
              >
                <a
                  href={project.url}
                  className="bwd-work-visual"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${copy.viewProject}: ${meta.title}`}
                  onClick={(event) => {
                    if (didDragRef.current) {
                      event.preventDefault();
                    }
                  }}
                >
                  <img
                    src={project.image}
                    alt={meta.imageAlt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </a>

                <div className="bwd-work-meta">
                  <div className="bwd-work-meta-main">
                    <h3>{meta.title}</h3>
                    <p className="bwd-work-loc">{meta.location}</p>
                    <p className="bwd-work-type">{copy.typeLabel}</p>
                    {project.status === "concept" ? (
                      <p className="bwd-work-status">{copy.conceptLabel}</p>
                    ) : null}
                  </div>
                  <a
                    href={project.url}
                    className="bwd-work-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      if (didDragRef.current) event.preventDefault();
                    }}
                  >
                    {copy.viewProject}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
