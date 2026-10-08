"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SswCapabilities = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonSoftware.capabilities;

  return (
    <section
      className="ssw-capabilities reveal"
      id="capabilities"
      aria-labelledby="ssw-capabilities-title"
    >
      <div className="ssw-wrap">
        <header className="ssw-capabilities-head">
          <span className="ssw-meta">{copy.label}</span>
          <h2 id="ssw-capabilities-title">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <ol className="ssw-cap-list">
          {copy.items.map((item) => (
            <li className="ssw-cap-row" key={item.num}>
              <span className="ssw-cap-num" aria-hidden="true">
                {item.num}
              </span>
              <div className="ssw-cap-copy">
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
