"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsIntro = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.intro;

  return (
    <section className="bms-intro reveal" aria-labelledby="bms-intro-title">
      <div className="bms-wrap bms-intro-frame">
        <h2 id="bms-intro-title" className="bms-intro-statement">
          {copy.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <div className="bms-intro-side">
          <p className="bms-intro-body">{copy.body}</p>
          <ul className="bms-editorial-list">
            {copy.steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
