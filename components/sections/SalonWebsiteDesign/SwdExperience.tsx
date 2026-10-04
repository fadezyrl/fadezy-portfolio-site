"use client";

import type { ReactElement } from "react";
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
        <header className="swd-experience-head">
          <span className="swd-meta on-dark" id="swd-experience-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
        </header>

        <ol className="swd-experience-list">
          {copy.items.map((item) => (
            <li className="swd-experience-item" key={item.num}>
              <span className="swd-experience-num">{item.num}</span>
              <div className="swd-experience-copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
