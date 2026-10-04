"use client";

import type { ReactElement } from "react";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

const PROJECT_IMAGES: Record<string, { hero: string; full?: string }> = {
  "beauty-n-blendz": {
    hero: SWD_ASSETS.beautyHero,
    full: SWD_ASSETS.beautyFull,
  },
  "mane-rumor": {
    hero: SWD_ASSETS.maneHero,
    full: SWD_ASSETS.maneFull,
  },
};

export const SwdWork = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.work;

  return (
    <section className="swd-work reveal" id="work" aria-labelledby="swd-work-label">
      <div className="swd-wrap">
        <header className="swd-work-head">
          <span className="swd-meta" id="swd-work-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>
      </div>

      <div className="swd-work-track">
        {copy.projects.map((project, index) => {
          const images = PROJECT_IMAGES[project.id];
          const imageSrc = images?.full ?? images?.hero ?? "";

          return (
            <article
              className={`swd-project${index % 2 === 1 ? " is-alt" : ""}`}
              key={project.id}
            >
              {project.url ? (
                <a
                  href={project.url}
                  className="swd-project-visual"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${copy.viewProject}: ${project.title}`}
                >
                  <img src={imageSrc} alt={project.imageAlt} loading="lazy" />
                </a>
              ) : (
                <div className="swd-project-visual">
                  <img src={imageSrc} alt={project.imageAlt} loading="lazy" />
                </div>
              )}
              <div className="swd-project-meta">
                <div>
                  <p className="swd-project-index">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3>{project.title}</h3>
                  <span className="swd-project-loc">{project.location}</span>
                  <p className="swd-project-tags">{project.meta}</p>
                  <p className="swd-project-desc">{project.desc}</p>
                </div>
                {project.url ? (
                  <a
                    href={project.url}
                    className="btn-text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.viewProject} <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
