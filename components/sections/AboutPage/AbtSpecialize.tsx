"use client";

import type { ReactElement } from "react";
import { ABOUT_ASSETS } from "@/data/about";
import { useLocale } from "@/hooks/useLocale";

export const AbtSpecialize = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.specialize;

  return (
    <section className="abt-specialize" aria-labelledby="abt-specialize-title">
      <div className="abt-specialize-media" aria-hidden="true">
        <img src={ABOUT_ASSETS.craft} alt="" className="is-a" loading="lazy" />
        <img src={ABOUT_ASSETS.salon} alt="" className="is-b" loading="lazy" />
        <div className="abt-specialize-veil" />
      </div>

      <div className="abt-wrap abt-specialize-content reveal">
        <h2 id="abt-specialize-title" className="abt-display on-dark">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="abt-lead on-dark">{copy.body}</p>
        <ul className="abt-worlds">
          {copy.worlds.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="abt-understands">
          {copy.understands.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
