"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswSalons = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.salons;

  return (
    <section className="ssw-salons reveal" aria-labelledby="ssw-salons-title">
      <div className="ssw-wrap ssw-salons-layout">
        <header className="ssw-salons-head">
          <span className="ssw-meta">{copy.label}</span>
          <h2 id="ssw-salons-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <ul className="ssw-salons-list">
          {copy.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
