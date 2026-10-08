"use client";

import type { ReactElement } from "react";
import { ABOUT_ASSETS } from "@/data/about";
import { useLocale } from "@/hooks/useLocale";

export const AbtWork = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.work;

  return (
    <section className="abt-work" aria-labelledby="abt-work-title">
      <div className="abt-wrap">
        <header className="abt-work-head reveal">
          <span className="abt-meta">{copy.eyebrow}</span>
          <h2 id="abt-work-title" className="abt-display">
            {copy.headline}
          </h2>
        </header>

        <div className="abt-work-rail">
          {copy.projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              className="abt-work-project reveal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.alt}
                  width={1400}
                  height={900}
                  loading="lazy"
                />
              </figure>
              <div className="abt-work-meta">
                <strong>{project.title}</strong>
                <span>{project.location}</span>
              </div>
            </a>
          ))}
        </div>

        <a href={ABOUT_ASSETS.workPath} className="abt-work-explore">
          {copy.explore}
        </a>
      </div>
    </section>
  );
};
