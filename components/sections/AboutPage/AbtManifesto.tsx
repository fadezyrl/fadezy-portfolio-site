"use client";

import Link from "next/link";
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
          <Link href={START_PROJECT_PATH} className="abt-cta-primary">
            {copy.primary}
          </Link>
          <Link href={ABOUT_ASSETS.workPath} className="abt-cta-secondary">
            {copy.secondary}
          </Link>
        </div>

        <nav className="abt-related" aria-label={related.label}>
          <Link href={ABOUT_ASSETS.websiteBarbershop}>
            {related.websiteBarbershop}
          </Link>
          <Link href={ABOUT_ASSETS.websiteSalon}>{related.websiteSalon}</Link>
          <Link href={ABOUT_ASSETS.softwareBarbershop}>
            {related.softwareBarbershop}
          </Link>
          <Link href={ABOUT_ASSETS.softwareSalon}>{related.softwareSalon}</Link>
          <Link href={ABOUT_ASSETS.marketingBarbershop}>
            {related.marketingBarbershop}
          </Link>
          <Link href={ABOUT_ASSETS.marketingSalon}>{related.marketingSalon}</Link>
          <Link href={ABOUT_ASSETS.workPath}>{related.work}</Link>
          <Link href={ABOUT_ASSETS.servicesPath}>{related.services}</Link>
        </nav>
      </div>
    </section>
  );
};
