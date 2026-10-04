"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactElement } from "react";
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
          <a href={BWD_PATH}>{t.nav.barbershopWebDesign}</a>
          <a href={SWD_PATH}>{t.nav.salonWebsiteDesign}</a>
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
        inert={menuOpen ? undefined : true}
      >
        <div className="top">
          <a href={homeHref} className="mark" aria-label={t.brand} onClick={closeMenu}>
            <img
              src={LOGO_SRC}
              alt={t.brand}
              className="nav-logo nav-logo-menu"
              width={160}
              height={40}
            />
          </a>
          <button type="button" className="close" onClick={closeMenu}>
            {t.nav.close}
          </button>
        </div>

        <nav className="mobile-menu-body" aria-label="Mobile">
          <div className="mobile-menu-primary">
            <a href={workHref} onClick={closeMenu}>
              <span className="mobile-menu-index">01</span>
              <span>{t.nav.work}</span>
            </a>
            <a href={servicesHref} onClick={closeMenu}>
              <span className="mobile-menu-index">02</span>
              <span>{t.nav.services}</span>
            </a>
            <a href={aboutHref} onClick={closeMenu}>
              <span className="mobile-menu-index">03</span>
              <span>{t.nav.about}</span>
            </a>
          </div>

          <div className="mobile-menu-services">
            <a href={BWD_PATH} onClick={closeMenu}>
              {t.nav.barbershopWebDesign}
            </a>
            <a href={SWD_PATH} onClick={closeMenu}>
              {t.nav.salonWebsiteDesign}
            </a>
          </div>

          <a
            href={CONTACT.whatsappUrl}
            className="mobile-menu-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {t.nav.startProject} <span aria-hidden="true">→</span>
          </a>
        </nav>

        <div className="foot">{t.nav.worldwide}</div>
      </div>
    </>
  );
};
