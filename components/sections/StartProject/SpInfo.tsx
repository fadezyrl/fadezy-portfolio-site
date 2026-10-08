"use client";

import type { ReactElement } from "react";
import { CONTACT } from "@/data/contact";
import { useLocale } from "@/hooks/useLocale";

export const SpInfo = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.startProject;

  return (
    <section className="sp-info" aria-label={copy.remote.label}>
      <div className="sp-wrap sp-info-grid reveal">
        <div className="sp-remote">
          <p className="sp-meta">{copy.remote.label}</p>
          <p className="sp-remote-body">{copy.remote.body}</p>
        </div>

        <div className="sp-email-block">
          <p className="sp-meta">{copy.emailBlock.label}</p>
          <a href={`mailto:${CONTACT.email}`} className="sp-email-link">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
};
