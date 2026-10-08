"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const BmsPresence = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.barbershopMarketingSeo.presence;
  const profile = copy.profile;

  return (
    <section className="bms-presence" aria-labelledby="bms-presence-title">
      <div className="bms-wrap bms-presence-grid">
        <div className="bms-profile-ui reveal" aria-hidden="true">
          <strong className="bms-profile-name">{profile.name}</strong>
          <span className="bms-profile-cat">{profile.category}</span>
          <div className="bms-profile-rating">
            <em>{profile.rating}</em>
            <span>{profile.reviews}</span>
          </div>
          <span className="bms-profile-hours">{profile.hours}</span>
          <span className="bms-profile-action">{profile.action}</span>
        </div>

        <div className="bms-presence-copy reveal">
          <span className="bms-meta on-dark">{copy.eyebrow}</span>
          <h2 id="bms-presence-title" className="bms-display on-dark">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="bms-lead on-dark">{copy.body}</p>
          <ul className="bms-presence-elements">
            {copy.elements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="bms-presence-goals">
            {copy.goals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
