"use client";

import type { ReactElement } from "react";
import { SSW_ASSETS } from "@/data/salon-software";
import { useLocale } from "@/hooks/useLocale";

export const SswClientFocus = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.clientFocus;

  return (
    <section className="ssw-chair" aria-labelledby="ssw-client-focus-title">
      <figure className="ssw-chair-media">
        <img
          src={SSW_ASSETS.client}
          alt={copy.imageAlt}
          className="ssw-chair-img"
          width={1800}
          height={1200}
          loading="lazy"
        />
        <div className="ssw-chair-veil" aria-hidden="true" />
      </figure>

      <div className="ssw-wrap ssw-chair-content reveal">
        <span className="ssw-meta on-dark">{copy.eyebrow}</span>
        <h2 id="ssw-client-focus-title" className="ssw-chair-headline">
          {copy.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="ssw-chair-body">{copy.body}</p>
        <ul className="ssw-chair-list">
          {copy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
