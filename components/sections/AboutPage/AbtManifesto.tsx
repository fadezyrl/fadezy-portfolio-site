"use client";

import type { ReactElement } from "react";
import { ABOUT_ASSETS } from "@/data/about";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

export const AbtManifesto = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.aboutPage.manifesto;
  const related = t.aboutPage.related;

  return (
    <section className="abt-manifesto" id="contact" aria-labelledby="abt-manifesto-title">
      <div className="abt-wrap abt-manifesto-frame reveal">
        <h2 id="abt-manifesto-title" className="abt-manifesto-headline">
          {copy.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="abt-manifesto-support">{copy.support}</p>
        <div className="abt-manifesto-actions">
          <a href={START_PROJECT_PATH} className="abt-cta-primary">
            {copy.primary}
          </a>
          <a href={ABOUT_ASSETS.workPath} className="abt-cta-secondary">
            {copy.secondary}
          </a>
        </div>

        <nav className="abt-related" aria-label={related.label}>
          <a href={ABOUT_ASSETS.websiteBarbershop}>
            {related.websiteBarbershop}
          </a>
          <a href={ABOUT_ASSETS.websiteSalon}>{related.websiteSalon}</a>
          <a href={ABOUT_ASSETS.softwareBarbershop}>
            {related.softwareBarbershop}
          </a>
          <a href={ABOUT_ASSETS.softwareSalon}>{related.softwareSalon}</a>
          <a href={ABOUT_ASSETS.marketingBarbershop}>
            {related.marketingBarbershop}
          </a>
          <a href={ABOUT_ASSETS.marketingSalon}>{related.marketingSalon}</a>
          <a href={ABOUT_ASSETS.workPath}>{related.work}</a>
          <a href={ABOUT_ASSETS.servicesPath}>{related.services}</a>
        </nav>
      </div>
    </section>
  );
};
