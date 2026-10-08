"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswWhy = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.why;

  return (
    <section className="ssw-why reveal" aria-labelledby="ssw-why-title">
      <div className="ssw-wrap">
        <h2 id="ssw-why-title">{copy.headline}</h2>
        {copy.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
};
