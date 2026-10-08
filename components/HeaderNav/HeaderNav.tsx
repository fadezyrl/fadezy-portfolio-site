"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { ABOUT_PATH } from "@/data/about";
import { BMS_PATH } from "@/data/barbershop-marketing-seo";
import { BSW_PATH } from "@/data/barbershop-software";
import { BWD_PATH } from "@/data/barbershop-web-design";
import { SMS_PATH } from "@/data/salon-marketing-seo";
import { SSW_PATH } from "@/data/salon-software";
import { SWD_PATH } from "@/data/salon-website-design";
import { START_PROJECT_PATH } from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";
import { useNavScrolled } from "@/hooks/useNavScrolled";

const LOGO_SRC = "/assets/logo/fadezy-logo.png";

const SERVICE_PATHS = [
  BWD_PATH,
  SWD_PATH,
  BSW_PATH,
  SSW_PATH,
  BMS_PATH,
  SMS_PATH,
] as const;

export const HeaderNav = (): ReactElement => {
  const { t } = useLocale();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = useNavScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesPanelId = useId();
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const clearCloseTimer = (): void => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openServices = (): void => {
    clearCloseTimer();
    setServicesOpen(true);
  };

  const scheduleCloseServices = (): void => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 160);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!servicesOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    const onPointerDown = (event: MouseEvent): void => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const homeHref = isHome ? "#" : "/";
  const aboutHref = ABOUT_PATH;
  const projectHref = START_PROJECT_PATH;
  const isAboutPage = pathname === ABOUT_PATH;
  const isProjectPage = pathname === START_PROJECT_PATH;
  const isServicePage = SERVICE_PATHS.some((path) => pathname === path);
  const sm = t.nav.servicesMenu;

  const barbershopServices = [
    { num: "01", href: BWD_PATH, label: t.nav.barbershopWebDesign },
    { num: "02", href: BSW_PATH, label: t.nav.barbershopSoftware },
    { num: "03", href: BMS_PATH, label: t.nav.barbershopMarketingSeo },
  ] as const;

  const salonServices = [
    { num: "01", href: SWD_PATH, label: t.nav.salonWebsiteDesign },
    { num: "02", href: SSW_PATH, label: t.nav.salonSoftware },
    { num: "03", href: SMS_PATH, label: t.nav.salonMarketingSeo },
  ] as const;

  return (
    <>
      <header
        className={`nav${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}${servicesOpen ? " is-services-open" : ""}`}
      >
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
          <div
            className={`nav-services${servicesOpen ? " is-open" : ""}`}
            ref={servicesRef}
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              className={`nav-link nav-services-trigger${isServicePage ? " is-active" : ""}`}
              aria-expanded={servicesOpen}
              aria-controls={servicesPanelId}
              onClick={() => setServicesOpen((open) => !open)}
            >
              <span>{t.nav.services}</span>
              <span className="nav-services-caret" aria-hidden="true">
                ↓
              </span>
            </button>

            <div
              className="nav-services-panel"
              id={servicesPanelId}
              role="region"
              aria-label={t.nav.services}
              aria-hidden={!servicesOpen}
              inert={servicesOpen ? undefined : true}
            >
              <div className="nav-services-inner">
                <div className="nav-services-col">
                  <p className="nav-services-label">{sm.barbershops}</p>
                  <ul className="nav-services-list">
                    {barbershopServices.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className={`nav-services-link${pathname === item.href ? " is-active" : ""}`}
                          aria-current={
                            pathname === item.href ? "page" : undefined
                          }
                        >
                          <span className="nav-services-num">{item.num}</span>
                          <span className="nav-services-name">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="nav-services-col">
                  <p className="nav-services-label">{sm.salons}</p>
                  <ul className="nav-services-list">
                    {salonServices.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className={`nav-services-link${pathname === item.href ? " is-active" : ""}`}
                          aria-current={
                            pathname === item.href ? "page" : undefined
                          }
                        >
                          <span className="nav-services-num">{item.num}</span>
                          <span className="nav-services-name">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a
            href={aboutHref}
            className={`nav-link${isAboutPage ? " is-active" : ""}`}
            aria-current={isAboutPage ? "page" : undefined}
          >
            {t.nav.about}
          </a>

          <a
            href={projectHref}
            className={`nav-link nav-cta${isProjectPage ? " is-active" : ""}`}
            aria-current={isProjectPage ? "page" : undefined}
          >
            <span className="nav-cta-label">{t.nav.startProject}</span>
            <span className="nav-cta-arrow" aria-hidden="true">
              ↗
            </span>
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
        <div className="mobile-menu-top">
          <a
            href={homeHref}
            className="mark"
            aria-label={t.brand}
            onClick={closeMenu}
          >
            <img
              src={LOGO_SRC}
              alt={t.brand}
              className="nav-logo nav-logo-menu"
              width={160}
              height={40}
            />
          </a>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMenu}
          >
            {t.nav.close}
          </button>
        </div>

        <nav className="mobile-menu-body" aria-label="Mobile">
          <div className="mobile-menu-block">
            <p className="mobile-menu-eyebrow">{t.nav.services}</p>

            <div className="mobile-menu-group">
              <p className="mobile-menu-group-label">{sm.barbershops}</p>
              {barbershopServices.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-menu-service"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mobile-menu-group">
              <p className="mobile-menu-group-label">{sm.salons}</p>
              {salonServices.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-menu-service"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-menu-primary">
            <a href={aboutHref} onClick={closeMenu}>
              {t.nav.about}
            </a>
            <a
              href={projectHref}
              className="mobile-menu-cta"
              onClick={closeMenu}
            >
              <span>{t.nav.startProject}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
