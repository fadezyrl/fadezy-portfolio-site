"use client";

import type { ReactElement } from "react";
import { CLIENT_LOGOS } from "@/data/clients";
import { useLocale } from "@/hooks/useLocale";

export const Clients = (): ReactElement => {
  const { t } = useLocale();
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="clients" aria-label={t.clients.ariaLabel}>
      <p className="clients-label">{t.clients.label}</p>

      <div className="clients-track-outer">
        <div className="clients-track" aria-hidden="true">
          {items.map((logo, i) => (
            <div className="clients-track-item" key={`${logo.src}-${i}`}>
              <img
                src={logo.src}
                alt=""
                className="clients-logo"
                width={160}
                height={48}
                loading={i < CLIENT_LOGOS.length ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
