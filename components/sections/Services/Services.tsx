"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/hooks/useLocale";

export const Services = (): ReactElement => {
  const { t } = useLocale();

  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="services-head">
          <h2>{t.services.headline}</h2>
          <span className="eyebrow">{t.services.count}</span>
        </div>
        {t.services.items.map((item) => (
          <div className="service-row reveal" key={item.num}>
            <span className="service-num">{item.num}</span>
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
