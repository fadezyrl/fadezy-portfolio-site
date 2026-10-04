"use client";

import type { ReactElement } from "react";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { useLocale } from "@/hooks/useLocale";

const PROJECT_IMAGES: Record<string, string> = {
  "success-barbershop": BWD_ASSETS.successHero,
  "mane-rumor": BWD_ASSETS.maneHero,
};

export const BwdWork = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.work;

  return (
    <section className="bwd-work reveal" id="work" aria-labelledby="bwd-work-label">
      <div className="bwd-wrap">
        <header className="bwd-work-head">
          <span className="bwd-meta" id="bwd-work-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>
      </div>

      <div className="bwd-work-list">
        {copy.projects.map((project, index) => (
          <article
            className={`bwd-project${index % 2 === 1 ? " is-alt" : ""}`}
            key={project.id}
          >
            <a
              href={project.url}
              className="bwd-project-visual"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy.viewProject}: ${project.title}`}
            >
              <img
                src={PROJECT_IMAGES[project.id]}
                alt={project.imageAlt}
                loading="lazy"
              />
            </a>
            <div className="bwd-project-meta">
              <div>
                <h3>{project.title}</h3>
                <span className="bwd-project-loc">{project.location}</span>
                <p className="bwd-project-tags">{project.meta}</p>
                <p className="bwd-project-desc">{project.desc}</p>
              </div>
              <a
                href={project.url}
                className="btn-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.viewProject} <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
