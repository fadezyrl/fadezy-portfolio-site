"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BswCapabilities = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopSoftware.capabilities;

  return (
    <section
      className="bsw-capabilities reveal"
      id="capabilities"
      aria-labelledby="bsw-capabilities-title"
    >
      <div className="bsw-wrap">
        <header className="bsw-capabilities-head">
          <span className="bsw-meta">{copy.label}</span>
          <h2 id="bsw-capabilities-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <ol className="bsw-cap-list">
          {copy.items.map((item) => (
            <li className="bsw-cap-row" key={item.num}>
              <span className="bsw-cap-num" aria-hidden="true">
                {item.num}
              </span>
              <div className="bsw-cap-copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
