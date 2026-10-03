"use client";

import type { ReactElement } from "react";
import { BWD_PATH } from "@/data/barbershop-web-design";
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
        {t.services.items.map((item) => {
          const isBarbershop = item.num === "01";

          return (
            <div className="service-row" key={item.num}>
              <span className="service-num">{item.num}</span>
              {isBarbershop ? (
                <h3 className="service-title">
                  <a href={BWD_PATH}>{item.title}</a>
                </h3>
              ) : (
                <h3 className="service-title">{item.title}</h3>
              )}
              <p className="service-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
