"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswIntro = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.intro;

  return (
    <section className="bsw-intro reveal" aria-labelledby="bsw-intro-title">
      <div className="bsw-wrap bsw-intro-frame">
        <h2 id="bsw-intro-title" className="bsw-intro-statement">
          {copy.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className="bsw-intro-side">
          <p className="bsw-intro-body">{copy.body}</p>
          <ul className="bsw-editorial-list">
            {copy.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
