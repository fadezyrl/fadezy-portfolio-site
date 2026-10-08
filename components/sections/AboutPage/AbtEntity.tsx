"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const AbtEntity = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.entity;

  return (
    <section className="abt-entity" aria-labelledby="abt-entity-title">
      <div className="abt-wrap abt-entity-frame reveal">
        <h2 id="abt-entity-title" className="abt-entity-statement">
          {copy.statement}
        </h2>
        <p className="abt-entity-body">{copy.body}</p>
      </div>
    </section>
  );
};
