"use client";

import type { ReactElement } from "react";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

export const SwdExperience = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.experience;

  return (
    <section
      className="swd-experience reveal"
      aria-labelledby="swd-experience-label"
    >
      <div className="swd-wrap">
        <header className="swd-section-head">
          <span className="swd-meta" id="swd-experience-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>

        <div className="swd-experience-spread">
          <figure className="swd-experience-media">
            <img
              src={SWD_ASSETS.experienceImage}
              alt={copy.imageAlt}
              loading="lazy"
            />
          </figure>

          <div className="swd-experience-chapters">
            {copy.chapters.map((chapter, index) => (
              <article
                className={`swd-chapter${index % 2 === 1 ? " is-offset" : ""}`}
                key={chapter.title}
              >
                <h3>{chapter.title}</h3>
                <p>{chapter.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
