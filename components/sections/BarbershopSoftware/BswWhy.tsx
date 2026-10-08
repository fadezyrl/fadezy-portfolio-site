"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswWhy = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.why;

  return (
    <section className="bsw-why reveal" aria-labelledby="bsw-why-title">
      <div className="bsw-wrap">
        <h2 id="bsw-why-title">{copy.headline}</h2>
        {copy.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
};
