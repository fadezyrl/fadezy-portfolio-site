"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswShops = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.shops;

  return (
    <section className="bsw-shops reveal" aria-labelledby="bsw-shops-title">
      <div className="bsw-wrap">
        <header className="bsw-shops-head">
          <span className="bsw-meta">{copy.label}</span>
          <h2 id="bsw-shops-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <ul className="bsw-shops-list">
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
