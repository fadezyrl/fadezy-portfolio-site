"use client";

import type { ReactElement } from "react";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { BSW_PATH } from "@/data/barbershop-software";
import { BWD_PATH } from "@/data/barbershop-web-design";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { SSW_PATH } from "@/data/salon-software";
import { SWD_PATH } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

const SERVICE_HREFS: Record<string, string> = {
  "01": BWD_PATH,
  "02": SWD_PATH,
  "03": BSW_PATH,
  "04": SSW_PATH,
  "05": BMS_PATH,
  "06": SMS_PATH,
};

export const Services = (): ReactElement => {
  const { t } = useLocale();

  return (
    <section className="services" id="services">
      <div className="wrap">
        <header className="services-head">
          <span className="services-eyebrow">{t.services.eyebrow}</span>
          <h2 className="services-headline">{t.services.headline}</h2>
          <span className="services-count">{t.services.count}</span>
        </header>

        <div className="services-index">
          {t.services.items.map((item) => {
            const href = SERVICE_HREFS[item.num];

            return (
              <article className="service-entry" key={item.num}>
                <span className="service-num">{item.num}</span>
                <div className="service-body">
                  <h3 className="service-title">
                    {href ? <a href={href}>{item.title}</a> : item.title}
                  </h3>
                  <p className="service-desc">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
