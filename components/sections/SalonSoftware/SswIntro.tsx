"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswIntro = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.intro;

  return (
    <section className="ssw-intro reveal" aria-labelledby="ssw-intro-title">
      <div className="ssw-wrap ssw-intro-frame">
        <h2 id="ssw-intro-title" className="ssw-intro-statement">
          {copy.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className="ssw-intro-side">
          <p className="ssw-intro-body">{copy.body}</p>
          <ul className="ssw-editorial-list">
            {copy.journey.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
