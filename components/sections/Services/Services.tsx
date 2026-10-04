"use client";

import type { ReactElement } from "react";
import { BWD_PATH } from "@/data/barbershop-web-design";
import { SWD_PATH } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

const SERVICE_HREFS: Record<string, string> = {
  "01": BWD_PATH,
  "02": SWD_PATH,
};

export const Services = (): ReactElement => {
  const { t } = useLocale();

  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="services-head">
          <h2>{t.services.headline}</h2>
          <span className="eyebrow">{t.services.count}</span>
        </div>
        {t.services.items.map((item) => {
          const href = SERVICE_HREFS[item.num];

          return (
            <div className="service-row" key={item.num}>
              <span className="service-num">{item.num}</span>
              <h3 className="service-title">
                {href ? <a href={href}>{item.title}</a> : item.title}
              </h3>
              <p className="service-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
