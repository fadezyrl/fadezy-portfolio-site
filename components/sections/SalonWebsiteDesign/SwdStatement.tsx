"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SwdStatement = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.statement;

  return (
    <section className="swd-statement reveal" aria-label={copy.line1}>
      <div className="swd-wrap swd-statement-inner">
        <h2 className="swd-statement-display">
          <span>{copy.line1}</span>
          <em>{copy.line2}</em>
        </h2>
        <p className="swd-statement-body">{copy.body}</p>
      </div>
    </section>
  );
};
