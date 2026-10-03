"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SwdCommunicate = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.communicate;

  return (
    <section
      className="swd-communicate reveal"
      aria-labelledby="swd-communicate-label"
    >
      <div className="swd-wrap">
        <header className="swd-section-head swd-section-head--dark">
          <span className="swd-meta on-dark" id="swd-communicate-label">
            {copy.label}
          </span>
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </header>

        <div className="swd-index">
          {copy.items.map((item, index) => (
            <article
              className={`swd-index-row${index % 2 === 1 ? " is-alt" : ""}`}
              key={item.num}
            >
              <span className="swd-index-num">
                {item.num}
                <span aria-hidden="true"> /</span>
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
