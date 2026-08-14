"use client";

import { useState, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { useLocale } from "@/hooks/useLocale";

const LOGO_SRC = "/assets/logo/fadezy-logo.png";

export const HeaderNav = (): ReactElement => {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="nav">
        <a href="#" className="mark" aria-label={t.brand}>
          <img
            src={LOGO_SRC}
            alt={t.brand}
            className="nav-logo"
            width={160}
            height={40}
          />
        </a>
        <nav className="links" aria-label="Primary">
          <a href="#work">{t.nav.work}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#about">{t.nav.about}</a>
          <a
            href={CONTACT.whatsappUrl}
            className="cta-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.startProject} <span>→</span>
          </a>
        </nav>
        <button
          type="button"
          className="nav-mobile-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen(true)}
        >
          {t.nav.menu}
        </button>
      </header>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobileMenu"
        aria-hidden={!menuOpen}
      >
        <div className="top">
          <span className="mark">
            <img
              src={LOGO_SRC}
              alt={t.brand}
              className="nav-logo nav-logo-menu"
              width={160}
              height={40}
            />
          </span>
          <button type="button" className="close" onClick={closeMenu}>
            {t.nav.close}
          </button>
        </div>
        <div className="links">
          <a href="#work" onClick={closeMenu}>
            {t.nav.work}
          </a>
          <a href="#services" onClick={closeMenu}>
            {t.nav.services}
          </a>
          <a href="#about" onClick={closeMenu}>
            {t.nav.about}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {t.nav.startProject}
          </a>
        </div>
        <div className="foot">{t.nav.worldwide}</div>
      </div>
    </>
  );
};
