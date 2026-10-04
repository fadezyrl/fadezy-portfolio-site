"use client";

import type { ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { SWD_ASSETS } from "@/data/salon-website-design";
import { useLocale } from "@/hooks/useLocale";

export const SwdFooter = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.salonWebsiteDesign.footer;

  return (
    <footer className="swd-footer">
      <div className="swd-wrap">
        <div className="swd-footer-top">
          <p className="swd-footer-brand">{copy.brand}</p>
          <p className="swd-footer-statement">{copy.statement}</p>
        </div>

        <div className="swd-footer-mid">
          <nav className="swd-footer-nav" aria-label="Footer">
            <a href={SWD_ASSETS.homePath}>{copy.home}</a>
            <a href={SWD_ASSETS.workPath}>{copy.work}</a>
            <a href={SWD_ASSETS.aboutPath}>{copy.about}</a>
            <a href={SWD_ASSETS.barbershopPath}>{copy.barbershop}</a>
          </nav>

          <a
            href={CONTACT.whatsappUrl}
            className="btn-text swd-footer-contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.contact} <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="swd-footer-bottom">
          <div className="swd-footer-social">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.instagram}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.linkedin}
            </a>
          </div>
          <span>{copy.copyright}</span>
        </div>
      </div>
    </footer>
  );
};
