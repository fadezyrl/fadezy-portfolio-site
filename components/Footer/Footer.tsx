"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import { ABOUT_PATH } from "@/data/about";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { BSW_PATH } from "@/data/barbershop-software";
import { BWD_PATH } from "@/data/barbershop-web-design";
import { CONTACT } from "@/data/contact";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { SSW_PATH } from "@/data/salon-software";
import { SWD_PATH } from "@/data/salon-website-design";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

const LOGO_SRC = "/assets/logo/fadezy-logo.png";

export const Footer = (): ReactElement => {
  const { t } = useLocale();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const workHref = isHome ? "#work" : "/#work";
  const servicesHref = isHome ? "#services" : "/#services";

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="mark" aria-label={t.brand}>
              <img
                src={LOGO_SRC}
                alt={t.brand}
                className="nav-logo footer-logo"
                width={160}
                height={40}
              />
            </Link>
            <p className="tagline">{t.footer.tagline}</p>
            <p className="footer-remote">{t.footer.worldwide}</p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <Link href={workHref}>{t.footer.work}</Link>
              <Link href={servicesHref}>{t.footer.services}</Link>
              <Link href={ABOUT_PATH}>{t.footer.about}</Link>
              <Link href={START_PROJECT_PATH}>{t.footer.contact}</Link>
            </div>

            <div className="footer-col">
              <Link href={BWD_PATH}>{t.footer.barbershopWebDesign}</Link>
              <Link href={SWD_PATH}>{t.footer.salonWebsiteDesign}</Link>
              <Link href={BSW_PATH}>{t.footer.barbershopSoftware}</Link>
              <Link href={SSW_PATH}>{t.footer.salonSoftware}</Link>
              <Link href={BMS_PATH}>{t.footer.barbershopMarketingSeo}</Link>
              <Link href={SMS_PATH}>{t.footer.salonMarketingSeo}</Link>
            </div>

            <div className="footer-col footer-social">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.instagram}
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.whatsapp}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.linkedin}
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.facebook}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.worldwide}</span>
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
};
