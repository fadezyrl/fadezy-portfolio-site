"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SpBrand = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.startProject.brand;

  return (
    <section className="sp-brand" aria-hidden="false">
      <div className="sp-wrap reveal">
        <p className="sp-brand-lines">
          {copy.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
    </section>
  );
};
