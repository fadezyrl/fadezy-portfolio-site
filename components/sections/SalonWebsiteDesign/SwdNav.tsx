"use client";

import { useEffect, useState, type ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import { useLocale } from "@/hooks/useLocale";

const LOGO_SRC = "/assets/logo/fadezy-logo.png";

export const SwdNav = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navHidden = useHideOnScroll(!menuOpen);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`swd-nav${scrolled ? " is-scrolled" : ""}${navHidden ? " is-nav-hidden" : ""}`}
      >
        <a href={SWD_ASSETS.homePath} className="swd-nav-mark" aria-label={copy.home}>
          <img
            src={LOGO_SRC}
            alt={t.brand}
            className="swd-nav-logo"
            width={140}
            height={36}
          />
        </a>

        <nav className="swd-nav-links" aria-label="Primary">
          <a href="#work">{copy.work}</a>
          <a href={SWD_ASSETS.aboutPath}>{copy.about}</a>
          <a
            href={CONTACT.whatsappUrl}
            className="swd-nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.start} <span aria-hidden="true">→</span>
          </a>
        </nav>

        <button
          type="button"
          className="swd-nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="swd-mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          {copy.menu}
        </button>
      </header>

      <div
        className={`swd-mobile-menu${menuOpen ? " is-open" : ""}`}
        id="swd-mobile-menu"
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : true}
      >
        <div className="swd-mobile-top">
          <a
            href={SWD_ASSETS.homePath}
            className="swd-nav-mark"
            aria-label={copy.home}
            onClick={closeMenu}
          >
            <img
              src={LOGO_SRC}
              alt={t.brand}
              className="swd-nav-logo"
              width={140}
              height={36}
            />
          </a>
          <button type="button" className="swd-mobile-close" onClick={closeMenu}>
            {copy.close}
          </button>
        </div>

        <nav className="swd-mobile-body" aria-label="Mobile">
          <div className="swd-mobile-primary">
            <a href="#work" onClick={closeMenu}>
              <span className="swd-mobile-index">01</span>
              <span>{copy.work}</span>
            </a>
            <a href={SWD_ASSETS.aboutPath} onClick={closeMenu}>
              <span className="swd-mobile-index">02</span>
              <span>{copy.about}</span>
            </a>
          </div>

          <div className="swd-mobile-services">
            <a href={SWD_ASSETS.barbershopPath} onClick={closeMenu}>
              {t.nav.barbershopWebDesign}
            </a>
            <a href={SWD_ASSETS.homePath} onClick={closeMenu}>
              {copy.home}
            </a>
          </div>

          <a
            href={CONTACT.whatsappUrl}
            className="swd-mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {copy.start} <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </>
  );
};
