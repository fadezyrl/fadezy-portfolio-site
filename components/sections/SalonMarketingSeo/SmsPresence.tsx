"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const SmsPresence = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonMarketingSeo.presence;
  const profile = copy.profile;

  return (
    <section className="sms-presence" aria-labelledby="sms-presence-title">
      <div className="sms-wrap sms-presence-grid">
        <div className="sms-profile-ui reveal" aria-hidden="true">
          <strong className="sms-profile-name">{profile.name}</strong>
          <span className="sms-profile-cat">{profile.category}</span>
          <div className="sms-profile-rating">
            <em>{profile.rating}</em>
            <span>{profile.reviews}</span>
          </div>
          <span className="sms-profile-hours">{profile.hours}</span>
          <span className="sms-profile-action">{profile.action}</span>
        </div>

        <div className="sms-presence-copy reveal">
          <span className="sms-meta on-dark">{copy.eyebrow}</span>
          <h2 id="sms-presence-title" className="sms-display on-dark">
            {copy.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="sms-lead on-dark">{copy.body}</p>
          <ul className="sms-presence-elements">
            {copy.elements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="sms-presence-goals">
            {copy.goals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
