import type { ReactElement } from "react";
import type { SwdProject } from "@/data/salon-website-design";
import { SWD_PATH } from "@/data/salon-website-design";
import { salonWebsiteDesign } from "@/data/dictionary/salon-website-design";
import { START_PROJECT_PATH } from "@/data/start-project";

type SwdProjectDetailProps = {
  project: SwdProject;
};

export const SwdProjectDetail = ({
  project,
}: SwdProjectDetailProps): ReactElement => {
  const page = salonWebsiteDesign;
  const copy = page.work.projects.find((item) => item.id === project.id);
  const labels = page.projectPage;

  if (!copy) {
    return <></>;
  }

  return (
    <article className="swd-project-page" aria-labelledby="swd-project-title">
      <div className="swd-wrap">
        <header className="swd-project-page-head">
          <a href={`${SWD_PATH}#work`} className="swd-project-page-back">
            {labels.back}
          </a>
          {project.status === "concept" ? (
            <p className="swd-project-page-status">{page.work.conceptLabel}</p>
          ) : null}
          <h1 id="swd-project-title">{copy.title}</h1>
          <p className="swd-project-page-loc">{copy.location}</p>
          <p className="swd-project-page-type">{copy.type}</p>
        </header>
      </div>

      <section className="swd-project-page-visuals" aria-label={copy.title}>
        <figure className="swd-project-page-desktop">
          <img
            src={project.image}
            alt={copy.imageAlt}
            loading="eager"
            decoding="async"
          />
          <figcaption>{labels.desktopLabel}</figcaption>
        </figure>

        {project.mobileImage ? (
          <figure className="swd-project-page-mobile">
            <img
              src={project.mobileImage}
              alt={copy.mobileImageAlt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{labels.mobileLabel}</figcaption>
          </figure>
        ) : null}
      </section>

      <div className="swd-wrap">
        <div className="swd-project-page-grid">
          <section className="swd-project-page-block">
            <h2>{labels.directionLabel}</h2>
            <p>{copy.direction}</p>
          </section>

          <section className="swd-project-page-block">
            <h2>{labels.uxLabel}</h2>
            <ul>
              {copy.ux.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="swd-project-page-block">
            <h2>{labels.designedLabel}</h2>
            <ul>
              {copy.designed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="swd-project-page-cta">
          <p>{copy.cta}</p>
          <div className="swd-project-page-actions">
            <a
              href={project.url}
              className="btn-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.visitSite}
            </a>
            <a href={START_PROJECT_PATH} className="btn solid">
              {labels.startProject}
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
};
