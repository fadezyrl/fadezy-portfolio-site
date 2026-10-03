"use client";

import { usePathname } from "next/navigation";
import { useState, type ReactElement } from "react";
import { BWD_PATH } from "@/data/barbershop-web-design";
import { CONTACT } from "@/data/contact";
import { SWD_PATH } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

const LOGO_SRC = "/assets/logo/fadezy-logo.png";

export const HeaderNav = (): ReactElement => {
  const { t } = useLocale();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const homeHref = isHome ? "#" : "/";
  const workHref = isHome ? "#work" : "/#work";
  const servicesHref = isHome ? "#services" : "/#services";
  const aboutHref = isHome ? "#about" : "/#about";

  return (
    <>
      <header className="nav">
        <a href={homeHref} className="mark" aria-label={t.brand}>
          <img
            src={LOGO_SRC}
            alt={t.brand}
            className="nav-logo"
            width={160}
            height={40}
          />
        </a>
        <nav className="links" aria-label="Primary">
          <a href={workHref}>{t.nav.work}</a>
          <a href={servicesHref}>{t.nav.services}</a>
          <a href={aboutHref}>{t.nav.about}</a>
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
          <a href={workHref} onClick={closeMenu}>
            {t.nav.work}
          </a>
          <a href={servicesHref} onClick={closeMenu}>
            {t.nav.services}
          </a>
          <a href={BWD_PATH} onClick={closeMenu}>
            {t.nav.barbershopWebDesign}
          </a>
          <a href={SWD_PATH} onClick={closeMenu}>
            {t.nav.salonWebsiteDesign}
          </a>
          <a href={aboutHref} onClick={closeMenu}>
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
