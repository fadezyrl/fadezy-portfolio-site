"use client";

import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import { BWD_PATH } from "@/data/barbershop-web-design";
import { CONTACT } from "@/data/contact";
import { SWD_PATH } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

const LOGO_SRC = "/assets/logo/fadezy-logo.png";

export const Footer = (): ReactElement => {
  const { t } = useLocale();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServicePage = pathname === BWD_PATH || pathname === SWD_PATH;

  const homeHref = isHome ? "#" : "/";
  const workHref = isHome ? "#work" : "/#work";
  const servicesHref = isHome ? "#services" : "/#services";
  const aboutHref = isHome ? "#about" : "/#about";
  const contactHref = isServicePage ? "#contact" : isHome ? "#contact" : "/#contact";

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a href={homeHref} className="mark" aria-label={t.brand}>
              <img
                src={LOGO_SRC}
                alt={t.brand}
                className="nav-logo footer-logo"
                width={160}
                height={40}
              />
            </a>
            <p className="tagline">{t.footer.tagline}</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <a href={workHref}>{t.footer.work}</a>
              <a href={servicesHref}>{t.footer.services}</a>
              <a href={BWD_PATH}>{t.footer.barbershopWebDesign}</a>
              <a href={SWD_PATH}>{t.footer.salonWebsiteDesign}</a>
              <a href={aboutHref}>{t.footer.about}</a>
              <a href={contactHref}>{t.footer.contact}</a>
            </div>
            <div className="footer-col">
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
