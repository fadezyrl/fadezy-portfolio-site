"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsChannels = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.channels;

  return (
    <section className="sms-channels" aria-labelledby="sms-channels-title">
      <div className="sms-wrap">
        <header className="sms-channels-head reveal">
          <span className="sms-meta">{copy.eyebrow}</span>
          <h2 id="sms-channels-title" className="sms-display">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="sms-lead">{copy.body}</p>
        </header>

        <ol className="sms-channel-flow reveal">
          {copy.layers.map((layer, index) => (
            <li key={layer.label}>
              <span className="sms-channel-label">{layer.label}</span>
              <strong>{layer.title}</strong>
              <p>{layer.body}</p>
              {index < copy.layers.length - 1 ? (
                <span className="sms-channel-rule" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
