"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactElement,
} from "react";
import { CONTACT } from "@/data/contact";
import {
  PROJECT_NEED_IDS,
  type ProjectNeedId,
} from "@/data/start-project";
import { useLocale } from "@/hooks/useLocale";

type FormState = {
  name: string;
  business: string;
  needs: ProjectNeedId[];
  link: string;
  location: string;
  project: string;
  email: string;
};

type FormErrors = Partial<
  Record<"name" | "business" | "need" | "email" | "project", string>
>;

const initialState: FormState = {
  name: "",
  business: "",
  needs: [],
  link: "",
  location: "",
  project: "",
  email: "",
};

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const SpForm = (): ReactElement => {
  const { t } = useLocale();
  const copy = t.startProject;
  const form = copy.form;
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const updateField =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
      setErrors((prev) => {
        const next = { ...prev };
        if (key === "name") delete next.name;
        if (key === "business") delete next.business;
        if (key === "email") delete next.email;
        if (key === "project") delete next.project;
        return next;
      });
    };

  const toggleNeed = (id: ProjectNeedId): void => {
    setValues((prev) => {
      const exists = prev.needs.includes(id);
      return {
        ...prev,
        needs: exists
          ? prev.needs.filter((item) => item !== id)
          : [...prev.needs, id],
      };
    });
    setErrors((prev) => {
      const next = { ...prev };
      delete next.need;
      return next;
    });
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = form.errors.name;
    if (!values.business.trim()) next.business = form.errors.business;
    if (values.needs.length === 0) next.need = form.errors.need;
    if (!values.project.trim()) next.project = form.errors.project;
    if (!isValidEmail(values.email)) next.email = form.errors.email;
    return next;
  };

  const buildMessage = (): string => {
    const needLabels = values.needs
      .map((id) => form.needs.find((item) => item.id === id)?.label ?? id)
      .join(", ");

    return [
      "New Fadezy project inquiry",
      "",
      `Name: ${values.name.trim()}`,
      `Business: ${values.business.trim()}`,
      `Need: ${needLabels}`,
      `Website / Instagram: ${values.link.trim() || "—"}`,
      `Business location: ${values.location.trim() || "—"}`,
      `Email: ${values.email.trim()}`,
      "",
      "Project:",
      values.project.trim(),
    ].join("\n");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    const message = buildMessage();
    const whatsappHref = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappHref, "_blank", "noopener,noreferrer");

    window.setTimeout(() => {
      setStatus("success");
    }, 350);
  };

  const resetForm = (): void => {
    setValues(initialState);
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <section className="sp-form-section reveal" aria-live="polite">
        <div className="sp-wrap sp-success">
          <h2 className="sp-success-title">{copy.success.title}</h2>
          <p className="sp-success-body">{copy.success.body}</p>
          <button type="button" className="sp-submit" onClick={resetForm}>
            {copy.success.again}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="sp-form-section" aria-labelledby="sp-intro-title">
      <div className="sp-wrap">
        <header className="sp-intro reveal">
          <h2 id="sp-intro-title" className="sp-intro-headline">
            {copy.intro.headline}
          </h2>
          <p className="sp-intro-body">{copy.intro.body}</p>
        </header>

        <form className="sp-form reveal" onSubmit={onSubmit} noValidate>
          <div className={`sp-field${errors.name ? " has-error" : ""}`}>
            <label htmlFor="sp-name">{form.nameLabel}</label>
            <input
              id="sp-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={form.namePlaceholder}
              value={values.name}
              onChange={updateField("name")}
            />
            {errors.name ? <p className="sp-error">{errors.name}</p> : null}
          </div>

          <div className={`sp-field${errors.business ? " has-error" : ""}`}>
            <label htmlFor="sp-business">{form.businessLabel}</label>
            <input
              id="sp-business"
              name="business"
              type="text"
              autoComplete="organization"
              placeholder={form.businessPlaceholder}
              value={values.business}
              onChange={updateField("business")}
            />
            {errors.business ? (
              <p className="sp-error">{errors.business}</p>
            ) : null}
          </div>

          <fieldset
            className={`sp-field sp-needs${errors.need ? " has-error" : ""}`}
          >
            <legend>{form.needLabel}</legend>
            <div className="sp-need-list" role="group">
              {form.needs.map((need) => {
                const selected = values.needs.includes(need.id);
                const checked = PROJECT_NEED_IDS.includes(need.id) && selected;

                return (
                  <button
                    key={need.id}
                    type="button"
                    className={`sp-need${checked ? " is-selected" : ""}`}
                    aria-pressed={checked}
                    onClick={() => toggleNeed(need.id)}
                  >
                    {need.label}
                  </button>
                );
              })}
            </div>
            {errors.need ? <p className="sp-error">{errors.need}</p> : null}
          </fieldset>

          <div className="sp-field">
            <label htmlFor="sp-link">{form.linkLabel}</label>
            <input
              id="sp-link"
              name="link"
              type="text"
              inputMode="url"
              placeholder={form.linkPlaceholder}
              value={values.link}
              onChange={updateField("link")}
            />
          </div>

          <div className="sp-field">
            <label htmlFor="sp-location">{form.locationLabel}</label>
            <input
              id="sp-location"
              name="location"
              type="text"
              placeholder={form.locationPlaceholder}
              value={values.location}
              onChange={updateField("location")}
            />
          </div>

          <div className={`sp-field${errors.project ? " has-error" : ""}`}>
            <label htmlFor="sp-project">{form.projectLabel}</label>
            <textarea
              id="sp-project"
              name="project"
              rows={5}
              placeholder={form.projectPlaceholder}
              value={values.project}
              onChange={updateField("project")}
            />
            {errors.project ? (
              <p className="sp-error">{errors.project}</p>
            ) : null}
          </div>

          <div className={`sp-field${errors.email ? " has-error" : ""}`}>
            <label htmlFor="sp-email">{form.emailLabel}</label>
            <input
              id="sp-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={form.emailPlaceholder}
              value={values.email}
              onChange={updateField("email")}
            />
            {errors.email ? <p className="sp-error">{errors.email}</p> : null}
          </div>

          <button
            type="submit"
            className="sp-submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? form.submitting : form.submit}
          </button>

          <p className="sp-reassurance">{form.reassurance}</p>
        </form>
      </div>
    </section>
  );
};
