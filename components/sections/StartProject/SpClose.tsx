"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const SpClose = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.startProject.close;

  return (
    <section className="sp-close" aria-labelledby="sp-close-title">
      <div className="sp-close-frame reveal">
        <h2 id="sp-close-title" className="sp-close-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="sp-close-body">{copy.body}</p>
        <Link href={`${START_PROJECT_PATH}#project-inquiry`} className="sp-close-cta">
          {copy.cta}
        </Link>
      </div>
    </section>
  );
};
