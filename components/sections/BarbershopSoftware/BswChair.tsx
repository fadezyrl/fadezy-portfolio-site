"use client";

import type { ReactElement } from "react";
import { BSW_ASSETS } from "@/data/barbershop-software";
import { useLocale } from "@/hooks/useLocale";

export const BswChair = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.chair;

  return (
    <section className="bsw-chair" aria-labelledby="bsw-chair-title">
      <figure className="bsw-chair-media">
        <img
          src={BSW_ASSETS.chair}
          alt={copy.imageAlt}
          className="bsw-chair-img"
          width={1800}
          height={1200}
          loading="lazy"
        />
        <div className="bsw-chair-veil" aria-hidden="true" />
      </figure>

      <div className="bsw-wrap bsw-chair-content reveal">
        <span className="bsw-meta on-dark">{copy.eyebrow}</span>
        <h2 id="bsw-chair-title" className="bsw-chair-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="bsw-chair-body">{copy.body}</p>
        <ul className="bsw-chair-list">
          {copy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
