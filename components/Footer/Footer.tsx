"use client";

import type { ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { useLocale } from "@/hooks/useLocale";

const LOGO_SRC = "/assets/logo/fadezy-logo.png";

export const Footer = (): ReactElement => {
  const { t } = useLocale();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a href="#" className="mark" aria-label={t.brand}>
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
              <a href="#work">{t.footer.work}</a>
              <a href="#services">{t.footer.services}</a>
              <a href="#about">{t.footer.about}</a>
              <a href="#contact">{t.footer.contact}</a>
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
