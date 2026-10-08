"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SpClose = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.startProject.close;

  return (
    <section className="sp-close" aria-label={copy.mark}>
      <div className="sp-wrap sp-close-frame reveal">
        <p className="sp-close-mark">{copy.mark}</p>
        <p className="sp-close-line">{copy.line}</p>
        <p className="sp-close-location">{copy.location}</p>
      </div>
    </section>
  );
};
