"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BwdStatement = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopWebDesign.statement;

  return (
    <section className="bwd-statement reveal" aria-label={copy.line1}>
      <div className="bwd-wrap bwd-statement-inner">
        <h2 className="bwd-statement-display">
          <span>{copy.line1}</span>
          <em>{copy.line2}</em>
        </h2>
      </div>
    </section>
  );
};
