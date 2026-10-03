"use client";

import type { ReactElement } from "react";
import { BWD_ASSETS } from "@/data/barbershop-web-design";
import { useLocale } from "@/hooks/useLocale";

export const BwdExperience = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.experience;

  return (
    <section
      className="bwd-experience reveal"
      aria-labelledby="bwd-experience-label"
    >
      <div className="bwd-wrap">
        <header className="bwd-section-head">
          <span className="bwd-meta" id="bwd-experience-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>

        <div className="bwd-experience-layout">
          <ol className="bwd-experience-steps">
            {copy.steps.map((step) => (
              <li className="bwd-experience-step" key={step.num}>
                <span className="bwd-experience-num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="bwd-experience-media">
            <img
              src={BWD_ASSETS.experienceImage}
              alt={copy.imageAlt}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
