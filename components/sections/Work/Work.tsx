"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { WORK_VISUALS } from "@/data/work";
import { useLocale } from "@/hooks/useLocale";

export const Work = (): ReactElement => {
  const { t } = useLocale();

  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="work-head">
          <span className="eyebrow">{t.work.eyebrow}</span>
          <h2>{t.work.headline}</h2>
          <p>{t.work.sub}</p>
        </div>

        {t.work.projects.map((project) => {
          const visuals = WORK_VISUALS[project.id];
          const href = project.url;

          return (
            <article className="project" key={project.id}>
              <div className="project-meta">
                <div className="pm-left">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-loc">{project.location}</span>
                </div>
                {href ? (
                  <a
                    href={href}
                    className="btn-text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.work.viewProject} <span className="arrow">→</span>
                  </a>
                ) : (
                  <span className="btn-text">
                    {t.work.viewProject} <span className="arrow">→</span>
                  </span>
                )}
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
                        sizes="(max-width: 1440px) 88vw, 1440px"
                        className="project-visual-img"
                        priority={project.id === "success-barbershop"}
                      />
                    </a>
                  ) : (
                    <Image
                      src={visuals.hero}
                      alt={project.heroAlt}
                      fill
                      sizes="(max-width: 1440px) 88vw, 1440px"
                      className="project-visual-img"
                    />
                  )
                ) : (
                  <div className="frame-label">
                    {project.frameLabel}
                    <br />
                    <span style={{ opacity: 0.6 }}>{t.work.placeholderHint}</span>
                  </div>
                )}
              </div>
              <div className="project-lower">
                <div className="project-services">
                  {project.services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </div>
                <div>
                  <p className="project-desc">{project.desc}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
