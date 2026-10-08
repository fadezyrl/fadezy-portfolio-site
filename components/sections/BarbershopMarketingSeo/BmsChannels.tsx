"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsChannels = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.channels;

  return (
    <section className="bms-channels" aria-labelledby="bms-channels-title">
      <div className="bms-wrap">
        <header className="bms-channels-head reveal">
          <span className="bms-meta">{copy.eyebrow}</span>
          <h2 id="bms-channels-title" className="bms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bms-lead">{copy.body}</p>
        </header>

        <ol className="bms-channel-flow reveal">
          {copy.layers.map((layer, index) => (
            <li key={layer.label}>
              <span className="bms-channel-label">{layer.label}</span>
              <strong>{layer.title}</strong>
              <p>{layer.body}</p>
              {index < copy.layers.length - 1 ? (
                <span className="bms-channel-rule" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
