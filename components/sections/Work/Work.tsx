"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { WORK_VISUALS } from "@/data/work";
import { useLocale } from "@/hooks/useLocale";

export const Work = (): ReactElement => {
  const { t } = useLocale();

  return (
    <section className="work" id="work">
      <div className="work-intro wrap">
        <span className="work-eyebrow">{t.work.eyebrow}</span>
        <h2 className="work-headline">{t.work.headline}</h2>
        <p className="work-sub">{t.work.sub}</p>
      </div>

      {t.work.projects.map((project, i) => {
        const visuals = WORK_VISUALS[project.id];
        const href = project.url;
        const isAlt = i % 2 === 1;

        return (
          <article
            className={`project${isAlt ? " is-alt" : ""}`}
            key={project.id}
          >
            <div className="project-rail wrap">
              <span className="project-index">{project.index}</span>
              <div className="project-identity">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-loc">{project.location}</span>
              </div>
              {href ? (
                <a
                  href={href}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.work.viewProject} <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </div>

            <div className={`project-visual ${project.visualClass}`}>
              {visuals?.hero ? (
                href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-visual-link"
                    aria-label={`${t.work.viewProject}: ${project.title}`}
                  >
                    <Image
                      src={visuals.hero}
                      alt={project.heroAlt}
                      fill
                      sizes="100vw"
                      className="project-visual-img"
                      priority={project.id === "success-barbershop"}
                    />
                  </a>
                ) : (
                  <Image
                    src={visuals.hero}
                    alt={project.heroAlt}
                    fill
                    sizes="100vw"
                    className="project-visual-img"
                  />
                )
              ) : (
                <div className="frame-label">
                  {project.frameLabel}
                  <br />
                  <span>{t.work.placeholderHint}</span>
                </div>
              )}
            </div>

            <div className="project-note wrap">
              <p className="project-services">
                {project.services.join(" / ")}
              </p>
              <p className="project-desc">{project.desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
